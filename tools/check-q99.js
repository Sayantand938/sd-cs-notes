'use strict';

// Cross-check Q99 and Q100 from unit-01-05 by truth table.

const cases = [
  { q: 99, expr: "F = A'B' + A'B + AB", f: (a, b) => (!a && !b) || (!a && b) || (a && b) },
  { q: 100, expr: "F = AB + AB' + A'B", f: (a, b) => (a && b) || (a && !b) || (!a && b) },
];

const options = {
  A: (a, b) => a || b,
  B: (a, b) => a || !b,
  C: (a, b) => !a || b,
  D: (a, b) => !a || !b,
};

const labels = { A: 'A + B', B: "A + B'", C: "A' + B", D: "A' + B'" };

function equals(f, g) {
  for (const a of [0, 1]) for (const b of [0, 1]) if (!!f(a, b) !== !!g(a, b)) return false;
  return true;
}

for (const { q, expr, f } of cases) {
  const correct = Object.entries(options).filter(([, g]) => equals(f, g)).map(([k]) => k);
  console.log(`Q${q}  ${expr}`);
  console.log(`   simplifies to : ${correct.map((k) => `${k} (${labels[k]})`).join(', ') || 'none of A-D'}`);
  console.log(`   correct letters: ${correct.join(',') || '(none)'}`);
  console.log('');
}
