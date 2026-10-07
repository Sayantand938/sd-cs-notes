'use strict';

/**
 * Parse question blocks written in Markdown.
 *
 * A paper keeps its questions in the same `.md` file as its prose, using this
 * shape:
 *
 *     ### Q1 (mcq)
 *     What does CPU stand for?
 *
 *     - A) Central Processing Unit
 *     - B) Computer Personal Unit
 *     - C) Central Program Unit
 *     - D) Central Processing Utility
 *
 *     **Answer:** A
 *
 *     ### Q2 (saq)
 *     Why is serial preferred over long distances?
 *
 *     **Answer:**
 *     Because parallel suffers **skew**. Bits sent together along separate
 *     wires arrive at slightly different times.
 *
 * Design notes:
 *   - Options are Markdown list items, so a paragraph that happens to contain
 *     "A)" can never be mistaken for an option.
 *   - The answer is an explicit field, so there is exactly one answer per
 *     question and it can be validated. (The old `✅` convention drifted: it
 *     produced duplicate and self-corrected answers.)
 *   - MCQ and SAQ live in the same file and are distinguished by the heading's
 *     type marker, defaulting to mcq when omitted.
 */

/**
 * Heading that starts a question.
 *
 * A heading is only a question when it is unambiguous:
 *
 *   "### Q12 (mcq)"   explicit Q prefix, optionally typed
 *   "### 12. Text"    period after the number
 *   "### 12) Text"    bracket after the number
 *
 * A section heading such as "## 1. Introduction to Boolean Algebra" also has a
 * number and a period, so the `Q` prefix or the type marker is what keeps the
 * two apart. Requiring an explicit marker after the number is what stops a
 * study note's own numbered headings being parsed as questions — a note with
 * 117 sections would otherwise become 117 unanswered questions.
 */
const QUESTION_HEADING = /^(#{2,6})\s*(?:Q\s*(\d+)\s*(?:[.):])?|(\d+)\s*(?:[.):]))\s*(.*)$/;

/** Optional type marker on the heading: "(mcq)" or "(saq)". */
const TYPE_MARKER = /^\((mcq|saq|short-answer)\)\s*/i;

/**
 * True when a heading line should be treated as a question.
 *
 * @param {string} line
 * @returns {{indent: number, sl: number, rest: string}|null}
 */
function matchQuestionHeading(line) {
  const match = line.match(QUESTION_HEADING);
  if (!match) return null;

  // Group 1 is the explicit "Q<number>" form; group 3 is a bare number.
  const sl = match[2] !== undefined ? Number(match[2]) : Number(match[3]);
  if (!Number.isInteger(sl)) return null;

  const rest = match[4] || '';

  // A bare "## 1. Text" with no type marker is a section heading, not a
  // question. Requiring the marker keeps study notes out of the question path.
  if (match[2] === undefined && !TYPE_MARKER.test(rest)) return null;

  // A study note's own H1 title ("# Boolean Algebra") must never be a question.
  if (match[1].length === 1) return null;

  return { indent: match[1].length, sl, rest };
}

/** An option list item: "- A) text", "* B. text", "- (C) text". */
const OPTION_ITEM = /^\s*[-*+]\s+[(\[]?([A-Za-z])[)\].:]\s+(.*)$/;

/** The answer field, alone on a line: "**Answer:** A" or "**Answer:**". */
const ANSWER_INLINE = /^\s*\*\*Answer:?\*\*:?\s*(.*)$/i;

/** An HTML comment line, used for authoring notes. Ignored entirely. */
const HTML_COMMENT_LINE = /^\s*<!--/;

/** Heading that ends a run of questions (e.g. "## Answer Key", "## Notes"). */
const NON_QUESTION_HEADING = /^#{1,6}\s+(?!\s*(?:Q)?\d)(.*)$/;

/**
 * Parse every question block in a Markdown document.
 *
 * @param {string} markdown Normalised Markdown (LF line endings).
 * @returns {{questions: object[], errors: object[]}}
 */
function parseQuestions(markdown) {
  const lines = markdown.split('\n');
  const questions = [];
  const errors = [];

  let current = null;
  let mode = 'idle'; // idle | preamble | options | answer | done

  const finish = () => {
    if (!current) return;

    const q = {
      sl: current.sl,
      type: current.type,
      question: current.question.trim(),
      prefix: current.prefixLines.join('\n').trim() || undefined,
      answerLetter: null,
      answerText: null,
    };

    if (q.type === 'mcq') {
      q.options = current.options;
      if (current.answerLines.length) {
        q.answerLetter = current.answerLines.join(' ').trim().toUpperCase();
      }
      if (!q.question) errors.push({ sl: q.sl, kind: 'empty-question' });
      if (q.options.length < 2) {
        errors.push({ sl: q.sl, kind: 'too-few-options', detail: q.options.length });
      }
      if (!q.answerLetter) {
        errors.push({ sl: q.sl, kind: 'missing-answer' });
      } else if (!/^[A-Z]$/.test(q.answerLetter)) {
        errors.push({ sl: q.sl, kind: 'answer-not-a-letter', detail: q.answerLetter });
      } else if (q.answerLetter.charCodeAt(0) - 65 >= q.options.length) {
        errors.push({
          sl: q.sl,
          kind: 'answer-out-of-range',
          detail: `${q.answerLetter} but only ${q.options.length} options`,
        });
      }
    } else {
      q.answerText = current.answerLines.join('\n').trim() || null;
      if (!q.question) errors.push({ sl: q.sl, kind: 'empty-question' });
      if (!q.answerText) errors.push({ sl: q.sl, kind: 'missing-answer' });
    }

    questions.push(q);
    current = null;
  };

  for (const line of lines) {
    const heading = matchQuestionHeading(line);

    // A question heading starts a new question.
    if (heading) {
      finish();

      const typeMatch = heading.rest.match(TYPE_MARKER);
      const type = typeMatch ? typeMatch[1].toLowerCase() : 'mcq';
      const text = typeMatch ? heading.rest.slice(typeMatch[0].length) : heading.rest;

      current = {
        sl: heading.sl,
        type: type === 'short-answer' ? 'saq' : type,
        question: text,
        prefixLines: [],
        options: [],
        answerLines: [],
        indent: heading.indent,
      };
      mode = 'preamble';
      continue;
    }

    if (!current) continue;

    // Any other heading ends the current question block.
    if (/^#{1,6}\s/.test(line)) {
      finish();
      mode = 'idle';
      continue;
    }

    if (mode === 'done') continue;

    // Authoring notes in HTML comments are ignored wherever they appear, so a
    // comment after an answer cannot be absorbed into it.
    if (HTML_COMMENT_LINE.test(line)) {
      if (mode === 'answer') mode = 'done';
      continue;
    }

    const optionMatch = line.match(OPTION_ITEM);
    if (optionMatch && current.type === 'mcq') {
      current.options.push(optionMatch[2].trim());
      mode = 'options';
      continue;
    }

    const answerMatch = line.match(ANSWER_INLINE);
    if (answerMatch) {
      mode = 'answer';
      const inline = answerMatch[1].trim();
      if (inline) current.answerLines.push(inline);
      continue;
    }

    if (mode === 'answer') {
      current.answerLines.push(line);
      continue;
    }

    if (mode === 'options') {
      // Prose after the options but before the answer: ignore, it is a note
      // to self rather than part of the question. A bare "A) text" line here
      // is still accepted, so older papers keep working.
      const bare = line.match(/^\s*[(\[]?([A-Za-z])[)\].:]\s+(.*)$/);
      if (bare) current.options.push(bare[2].trim());
      continue;
    }

    // Before the options: the question text comes first, then anything the
    // question refers to (usually a code block).
    if (mode === 'preamble') {
      if (current.question === '' && line.trim() === '') {
        continue; // blank line between the heading and the question text
      }
      if (current.question === '') {
        current.question = line.trim();
        continue;
      }

      // A bare "A) text" line starts the option run. Accepting this keeps
      // papers written in the older style working.
      const bare = line.match(/^\s*[(\[]?([A-Za-z])[)\].:]\s+(.*)$/);
      if (bare && current.type === 'mcq') {
        current.options.push(bare[2].trim());
        mode = 'options';
        continue;
      }

      if (line.trim() === '' && current.prefixLines.length === 0) {
        continue; // blank line between question and its code block
      }
      current.prefixLines.push(line);
      continue;
    }
  }

  finish();

  return { questions, errors };
}

/**
 * True when a document contains at least one question block.
 * @param {string} markdown
 */
function hasQuestions(markdown) {
  return /^#{2,6}\s*(?:Q)?\d+\s*(?:[.):]|\s*\(mcq\)|\s*\(saq\)|\s|$)/m.test(markdown);
}

module.exports = {
  parseQuestions,
  hasQuestions,
  matchQuestionHeading,
  QUESTION_HEADING,
  TYPE_MARKER,
  OPTION_ITEM,
  ANSWER_INLINE,
};
