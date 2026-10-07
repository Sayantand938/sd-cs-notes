## 1. Introduction to Operators

An **operator** is a symbol that tells the compiler to perform specific mathematical, relational, or logical operations on given values (called **operands**). For example, in `a + b`, `+` is the operator and `a` and `b` are operands.

Based on the number of operands, operators are classified as:

- **Unary**: Acts on one operand (e.g., `-5`, `++a`).
- **Binary**: Acts on two operands (e.g., `a + b`, `x > y`).
- **Ternary**: Acts on three operands (e.g., `a ? b : c`).

---

## 2. Types of Operators in C

### 2.1 Arithmetic Operators

Used for basic mathematical calculations.

| Operator | Meaning             | Example                                    | Result                                 |
| :------- | :------------------ | :----------------------------------------- | :------------------------------------- |
| `+`      | Addition            | `5 + 2`                                    | `7`                                    |
| `-`      | Subtraction         | `5 - 2`                                    | `3`                                    |
| `*`      | Multiplication      | `5 * 2`                                    | `10`                                   |
| `/`      | Division (Quotient) | `5 / 2` (int) → `2` <br> `5.0 / 2` → `2.5` | Integer if both ints; float otherwise. |
| `%`      | Modulus (Remainder) | `5 % 2`                                    | `1` (Works only with integers)         |

**Important**: Division by zero is a **runtime error**.

---

### 2.2 Relational (Comparison) Operators

Used to compare two values. They return `1` (true) or `0` (false).

| Operator | Meaning                  | Example  | Output |
| :------- | :----------------------- | :------- | :----- |
| `<`      | Less than                | `5 < 3`  | `0`    |
| `>`      | Greater than             | `5 > 3`  | `1`    |
| `<=`     | Less than or equal to    | `5 <= 5` | `1`    |
| `>=`     | Greater than or equal to | `5 >= 3` | `1`    |
| `==`     | Equal to                 | `5 == 3` | `0`    |
| `!=`     | Not equal to             | `5 != 3` | `1`    |

---

### 2.3 Logical Operators

| Operator | Meaning | Example  |    |    |   |    |
| -------- | ------- | -------- | -- | -- | - | -- |
| `&&`     | AND     | `A && B` |    |    |   |    |
| `        |         | `        | OR | `A |   | B` |
| `!`      | NOT     | `!A`     |    |    |   |    |



> **Short-Circuit Evaluation**: In `A && B`, if `A` is false, `B` is **not evaluated**. In `A || B`, if `A` is true, `B` is **not evaluated**.

---

### 2.4 Assignment Operators

Used to assign values to variables.

| Operator | Meaning             | Example  | Equivalent To       |
| :------- | :------------------ | :------- | :------------------ |
| `=`      | Simple assignment   | `x = 5`  | Assigns `5` to `x`. |
| `+=`     | Add and assign      | `x += 3` | `x = x + 3`         |
| `-=`     | Subtract and assign | `x -= 3` | `x = x - 3`         |
| `*=`     | Multiply and assign | `x *= 3` | `x = x * 3`         |
| `/=`     | Divide and assign   | `x /= 3` | `x = x / 3`         |
| `%=`     | Modulus and assign  | `x %= 3` | `x = x % 3`         |

---

### 2.5 Increment and Decrement Operators

- `++` (Increment): Increases value by `1`.
- `--` (Decrement): Decreases value by `1`.

**Prefix vs Postfix**:

| Mode        | Syntax         | Meaning                                                    |
| :---------- | :------------- | :--------------------------------------------------------- |
| **Prefix**  | `++a` or `--a` | Increment/Decrement **first**, then use the value.         |
| **Postfix** | `a++` or `a--` | Use the current value **first**, then increment/decrement. |

**Example**: If `a = 5`:

```c
int b = ++a;  // a becomes 6, then b = 6
int c = a--;  // c = 6 (current value), then a becomes 5
```

---

### 2.6 Conditional (Ternary) Operator

A shorthand for `if-else`. Syntax:

```c
condition ? expression1 : expression2;
```

- If `condition` is true (non-zero), `expression1` is evaluated.
- If `condition` is false (zero), `expression2` is evaluated.

**Example**:

```c
int max = (a > b) ? a : b;  // Assigns the larger value to max.
```

---

### 2.7 Comma Operator

The comma `,` operator is used to separate multiple expressions. It evaluates **left to right**, but the result of the whole expression is the **rightmost operand**.

**Example**:

```c
int a, b;
b = (a = 5, a * 2);  // a = 5 (evaluated first), then a*2 = 10 (assigned to b)
// b = 10
```

**Usage**: Often used in `for` loops (`for(i=0, j=10; i<5; i++, j--)`).

---

## 3. Operator Precedence and Associativity

**Precedence** determines which operator is evaluated first in an expression.  
**Associativity** determines the direction (left-to-right or right-to-left) when operators have the same precedence.

| Priority | Operator                | Associativity |   |               |
| -------- | ----------------------- | ------------- | - | ------------- |
| 1        | `()`                    | Left to Right |   |               |
| 2        | `!`                     | Right to Left |   |               |
| 3        | `*` `/` `%`             | Left to Right |   |               |
| 4        | `+` `-`                 | Left to Right |   |               |
| 5        | `<` `<=` `>` `>=`       | Left to Right |   |               |
| 6        | `==` `!=`               | Left to Right |   |               |
| 7        | `&&`                    | Left to Right |   |               |
| 8        | `                       |               | ` | Left to Right |
| 9        | `=` `+=` `-=` `*=` `/=` | Right to Left |   |               |



**Example Evaluation**:

```c
int x = 10 + 5 * 2;  // '*' (higher precedence) evaluated first: 5*2=10, then 10+10=20.
// x = 20
```

---

## 4. Arithmetic Expression Evaluation & Type Conversion

### 4.1 Implicit Type Conversion (Automatic)

When operands of different data types are mixed, C automatically converts them to a **common higher-rank type** to prevent data loss. This is called **Usual Arithmetic Conversion** (Promotion).

**Hierarchy (Lowest to Highest)**:
`char` → `short` → `int` → `unsigned int` → `long` → `unsigned long` → `float` → `double` → `long double`

**Examples**:

```c
int a = 5;
float b = 2.5;
float result = a + b;  // 'a' is promoted to float (5.0), result = 7.5 (float)

int x = 5, y = 2;
float z = x / y;       // x/y = 2 (integer division), z = 2.0 (NOT 2.5)
float w = (float)x / y; // Explicit conversion fixes this → 2.5
```

### 4.2 Explicit Type Conversion (Type Casting)

The programmer manually forces conversion using the cast operator `(type)`.

**Syntax**: `(data_type) expression;`

**Example**:

```c
int a = 7, b = 3;
float result = (float)a / b; // result = 2.33333
```

---

## 5. Character I/O (Unformatted I/O)

These functions are defined in `<stdio.h>` and handle single-character input/output without using format specifiers.

| Function        | Prototype             | Description                                                                                             | Return Type               |
| :-------------- | :-------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------ |
| **`getchar()`** | `int getchar(void);`  | Reads a single character from the standard input (keyboard) and returns it as an integer (ASCII value). | `int` (ASCII value)       |
| **`putchar()`** | `int putchar(int c);` | Writes a single character (given as integer ASCII value) to the standard output (screen).               | `int` (character written) |

**Example**:

```c
#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    ch = getchar();           // Reads the character (e.g., 'A')
    printf("You entered: ");
    putchar(ch);              // Prints 'A'
    return 0;
}
```

---

## 6. Escape Sequences

An **Escape Sequence** is a combination of a backslash (`\`) followed by a character, used to represent non-printable characters or special formatting in string/character constants.

| Escape Sequence | Name            | Description                                                         |
| :-------------- | :-------------- | :------------------------------------------------------------------ |
| `\n`            | Newline         | Moves the cursor to the beginning of the next line.                 |
| `\t`            | Horizontal Tab  | Inserts a tab space.                                                |
| `\r`            | Carriage Return | Moves the cursor to the beginning of the current line (overwrites). |
| `\a`            | Alert / Bell    | Produces a beep sound.                                              |
| `\\`            | Backslash       | Prints a literal backslash (`\`).                                   |
| `\'`            | Single Quote    | Prints a single quote (`'`).                                        |
| `\"`            | Double Quote    | Prints a double quote (`"`).                                        |
| `\0`            | Null            | Null character (marks the end of a string).                         |
| `\b`            | Backspace       | Moves the cursor one position backward.                             |

**Example**:

```c
printf("Hello\nWorld");  // Prints Hello on Line 1, World on Line 2.
printf("Tab\tHere");     // Prints "Tab    Here"
printf("She said \"Hi\""); // Prints She said "Hi"
```

---

## 7. Formatted I/O

Formatted I/O allows reading/writing data in a specified format using `scanf` and `printf`.

### 7.1 `printf()` (Formatted Output)

- **Prototype**: `int printf(const char *format, ...);`
- **Purpose**: Prints output to the console as per format specifiers.

**Format Specifiers**:

| Specifier    | Data Type          | Description                                                     |
| :----------- | :----------------- | :-------------------------------------------------------------- |
| `%d` or `%i` | `int`              | Signed decimal integer.                                         |
| `%u`         | `unsigned int`     | Unsigned decimal integer.                                       |
| `%f`         | `float` / `double` | Floating-point number (decimal notation).                       |
| `%lf`        | `double`           | Used for reading `double` in `scanf` (output can use `%f` too). |
| `%c`         | `char`             | Single character.                                               |
| `%s`         | `char[]` (string)  | String of characters.                                           |
| `%x` / `%X`  | `int`              | Hexadecimal (lowercase/uppercase).                              |
| `%o`         | `int`              | Octal.                                                          |
| `%p`         | Pointer            | Memory address.                                                 |

**Modifiers (Formatting)**:

- **Width**: `%5d` → prints integer in a field of width 5 (right-aligned). `%-5d` → left-aligned.
- **Precision**: `%.2f` → prints float with 2 decimal places.
- **Combined**: `%8.2f` → width 8, with 2 decimals.

**Example**:

```c
int age = 25;
float cgpa = 8.567;
printf("Age: %d, CGPA: %.2f\n", age, cgpa); // Output: Age: 25, CGPA: 8.57
```

---

### 7.2 `scanf()` (Formatted Input)

- **Prototype**: `int scanf(const char *format, ...);`
- **Purpose**: Reads formatted data from the standard input (keyboard).
- **Important**: **Always use the address-of operator `&`** before variables (except for strings).

**Example**:

```c
int num;
float price;
char letter;
char name[50];

printf("Enter int, float, char, and string: ");
scanf("%d %f %c %s", &num, &price, &letter, name);
// Input: 10 99.99 A John
// Note: name is already an array (address), so no & is needed.
```

**Common Issues with `scanf`**:

- `%c` reads whitespace characters (space, newline). To skip whitespace, use a space before `%c`: `scanf(" %c", &ch);`.
- Always match the format string exactly with the input data type.

**Return Value of `scanf`**: Returns the number of items successfully read.

## 8. MCQ

#### Q1. What is an operator in programming?

A) A variable that stores data
B) A symbol that tells the compiler to perform specific operations on operands ✅
C) A function that returns a value
D) A loop that repeats code

#### Q2. In the expression `a + b`, what is `+` called?

A) Operand
B) Operator ✅
C) Variable
D) Expression

#### Q3. In the expression `a + b`, what are `a` and `b` called?

A) Operators
B) Operands ✅
C) Results
D) Statements

#### Q4. Based on the number of operands, operators are classified into which types?

A) Unary, Binary, Ternary ✅
B) Integer, Float, Character
C) Arithmetic, Logical, Relational
D) Simple, Complex, Conditional

#### Q5. A Unary operator acts on how many operands?

A) 0
B) 1 ✅
C) 2
D) 3

#### Q6. A Binary operator acts on how many operands?

A) 0
B) 1
C) 2 ✅
D) 3

#### Q7. A Ternary operator acts on how many operands?

A) 0
B) 1
C) 2
D) 3 ✅

#### Q8. Which of the following is a Unary operator?

A) `+`
B) `-` (as unary minus) ✅
C) `*`
D) `/`

#### Q9. Which of the following is NOT an Arithmetic operator?

A) `+`
B) `*`
C) `%`
D) `&&` ✅

#### Q10. What is the result of `5 + 2`?

A) 3
B) 7 ✅
C) 10
D) 2.5

#### Q11. What is the result of `5 - 2`?

A) 3 ✅
B) 7
C) 10
D) 2.5

#### Q12. What is the result of `5 * 2`?

A) 3
B) 7
C) 10 ✅
D) 2.5

#### Q13. What is the result of `5 / 2` when both operands are integers?

A) 2.5
B) 2 ✅
C) 3
D) 1

#### Q14. What is the result of `5.0 / 2`?

A) 2
B) 2.5 ✅
C) 3
D) 1

#### Q15. What is the result of `5 % 2`?

A) 2.5
B) 2
C) 1 ✅
D) 0

#### Q16. The modulus operator `%` works only with which data types?

A) Float and double
B) Integers ✅
C) Characters
D) Strings

#### Q17. What happens when you attempt division by zero in C?

A) Compilation error
B) Runtime error ✅
C) No error, returns 0
D) No error, returns infinity

#### Q18. Relational operators return which values?

A) 0 or 1 ✅
B) True or False as strings
C) Any integer
D) Floating point values

#### Q19. What is the output of `5 < 3`?

A) 1
B) 0 ✅
C) True
D) False

#### Q20. What is the output of `5 > 3`?

A) 1 ✅
B) 0
C) True
D) False

#### Q21. What is the output of `5 <= 5`?

A) 1 ✅
B) 0
C) True
D) False

#### Q22. What is the output of `5 >= 3`?

A) 1 ✅
B) 0
C) True
D) False

#### Q23. What is the output of `5 == 3`?

A) 1
B) 0 ✅
C) True
D) False

#### Q24. What is the output of `5 != 3`?

A) 1 ✅
B) 0
C) True
D) False

#### Q25. Which operator is used to check equality in C?

A) `=`
B) `==` ✅
C) `!=`
D) `===`

#### Q26. Which operator is used to check inequality in C?

A) `=`
B) `==`
C) `!=` ✅
D) `<>`

#### Q27. Logical AND (`&&`) returns true when:

A) At least one operand is true
B) Both operands are true ✅
C) Neither operand is true
D) The first operand is true

#### Q28. Logical OR (`||`) returns true when:

A) At least one operand is true ✅
B) Both operands are true
C) Neither operand is true
D) The first operand is true

#### Q29. Logical NOT (`!`) reverses:

A) The value of a variable
B) The truth value of an expression ✅
C) The sign of a number
D) The order of operations

#### Q30. What is the result of `1 && 0`?

A) 0 ✅
B) 1
C) True
D) False

#### Q31. What is the result of `1 || 0`?

A) 0
B) 1 ✅
C) True
D) False

#### Q32. What is the result of `!1`?

A) 0 ✅
B) 1
C) True
D) False

#### Q33. What is short-circuit evaluation in logical operators?

A) All operands are evaluated regardless of the result
B) Evaluation stops when the overall result is determined ✅
C) Evaluation skips the operator
D) Evaluation reverses the operands

#### Q34. In `A && B`, if `A` is false, then:

A) `B` is evaluated
B) `B` is not evaluated ✅
C) The result is true
D) An error occurs

#### Q35. In `A || B`, if `A` is true, then:

A) `B` is evaluated
B) `B` is not evaluated ✅
C) The result is false
D) An error occurs

#### Q36. Which of the following is an Assignment operator?

A) `==`
B) `!`
C) `=`
D) `&&` ✅

#### Q37. What does `x += 3` mean?

A) `x = x + 3` ✅
B) `x = 3`
C) `x = x * 3`
D) `x = x - 3`

#### Q38. What does `x -= 3` mean?

A) `x = x + 3`
B) `x = 3`
C) `x = x * 3`
D) `x = x - 3` ✅

#### Q39. What does `x *= 3` mean?

A) `x = x + 3`
B) `x = 3`
C) `x = x * 3` ✅
D) `x = x - 3`

#### Q40. What does `x /= 3` mean?

A) `x = x + 3`
B) `x = x / 3` ✅
C) `x = x * 3`
D) `x = x - 3`

#### Q41. What does `x %= 3` mean?

A) `x = x + 3`
B) `x = x % 3` ✅
C) `x = x * 3`
D) `x = x - 3`

#### Q42. The increment operator `++` does what?

A) Increases value by 0
B) Increases value by 1 ✅
C) Increases value by 2
D) Decreases value by 1

#### Q43. The decrement operator `--` does what?

A) Increases value by 1
B) Decreases value by 1 ✅
C) Decreases value by 2
D) Doubles the value

#### Q44. What is the difference between prefix (`++a`) and postfix (`a++`)?

A) No difference
B) Prefix increments first, then uses; postfix uses first, then increments ✅
C) Prefix uses first, then increments; postfix increments first, then uses
D) Both increment and use simultaneously

#### Q45. If `a = 5`, what is the value of `b = ++a`?

A) `a=5, b=5`
B) `a=6, b=6` ✅
C) `a=5, b=6`
D) `a=6, b=5`

#### Q46. If `a = 5`, what is the value of `b = a++`?

A) `a=5, b=5`
B) `a=6, b=6`
C) `a=5, b=6`
D) `a=6, b=5` ✅

#### Q47. What is the syntax of the Conditional (Ternary) operator?

A) `condition ? expression1 : expression2` ✅
B) `condition ? expression1 ; expression2`
C) `condition : expression1 ? expression2`
D) `condition expression1 : expression2`

#### Q48. In the ternary operator, if the condition is true:

A) expression2 is evaluated
B) expression1 is evaluated ✅
C) Both expressions are evaluated
D) Neither expression is evaluated

#### Q49. In the ternary operator, if the condition is false:

A) expression2 is evaluated ✅
B) expression1 is evaluated
C) Both expressions are evaluated
D) Neither expression is evaluated

#### Q50. `int max = (a > b) ? a : b;` assigns to `max`:

A) The value of `a`
B) The value of `b`
C) The larger value between `a` and `b` ✅
D) The smaller value between `a` and `b`

#### Q51. The Comma operator `,` evaluates expressions:

A) Right to left
B) Left to right ✅
C) Randomly
D) Only the last expression

#### Q52. In `b = (a = 5, a * 2);`, what is the value of `b`?

A) 5
B) 10 ✅
C) 7
D) 2.5

#### Q53. The Comma operator's result is the value of:

A) The leftmost operand
B) The rightmost operand ✅
C) The sum of all operands
D) The first operand

#### Q54. The Comma operator is often used in:

A) While loops
B) For loops ✅
C) If-else statements
D) Switch cases

#### Q55. Operator Precedence determines:

A) Which operand is evaluated first
B) Which operator is evaluated first ✅
C) The direction of evaluation
D) The type of conversion

#### Q56. Operator Associativity determines:

A) Which operator is evaluated first
B) The direction of evaluation when operators have same precedence ✅
C) The type of operands
D) The result of the expression

#### Q57. In `10 + 5 * 2`, which operation is performed first?

A) Addition
B) Multiplication ✅
C) Both simultaneously
D) Depends on associativity

#### Q58. What is the result of `10 + 5 * 2`?

A) 20 ✅
B) 30
C) 15
D) 25

#### Q59. Which operator has the highest precedence?

A) `+`
B) `*`
C) `()`
D) `&&` ✅

#### Q60. Which operator has the lowest precedence?

A) `=`
B) `,`
C) `+`
D) `&&` ✅

#### Q61. The assignment operator `=` has which associativity?

A) Left to Right
B) Right to Left ✅
C) Both
D) None

#### Q62. The arithmetic operators `+` and `-` have which associativity?

A) Left to Right ✅
B) Right to Left
C) Both
D) None

#### Q63. Implicit Type Conversion is also called:

A) Type Casting
B) Usual Arithmetic Conversion (Promotion) ✅
C) Explicit Conversion
D) Forced Conversion

#### Q64. In implicit type conversion, data types are converted:

A) Manually by the programmer
B) Automatically by the compiler ✅
C) Never
D) Only for floating point

#### Q65. The hierarchy for implicit conversion from lowest to highest is:

A) char → int → float → double
B) char → int → double → float
C) int → char → float → double
D) double → float → int → char ✅

#### Q66. In `float result = 5 / 2;`, what is the value of `result`?

A) 2.5
B) 2.0 ✅
C) 3.0
D) 2.5 (as float)

#### Q67. Why is `float result = 5 / 2;` equal to `2.0` and not `2.5`?

A) Integer division is performed, then converted to float ✅
B) Float division is performed
C) Compilation error
D) 5/2 is rounded down

#### Q68. How can you fix `float result = 5 / 2;` to get `2.5`?

A) `result = 5 / 2.0;`
B) `result = (float)5 / 2;`
C) Both A and B ✅
D) Cannot be fixed

#### Q69. Explicit Type Conversion is also called:

A) Implicit Conversion
B) Type Casting ✅
C) Automatic Conversion
D) Promotion

#### Q70. What is the syntax for type casting?

A) `(data_type) expression;` ✅
B) `expression as data_type;`
C) `data_type(expression);`
D) `convert(data_type, expression);`

#### Q71. In `float result = (float)7 / 3;`, what is the value of `result`?

A) 2
B) 2.33333 ✅
C) 3
D) 2.0

#### Q72. `getchar()` is used for:

A) Formatted input
B) Unformatted single character input ✅
C) String input
D) Integer input

#### Q73. `getchar()` returns the character as:

A) A char
B) An int (ASCII value) ✅
C) A string
D) A float

#### Q74. `putchar()` is used for:

A) Formatted output
B) Unformatted single character output ✅
C) String output
D) Integer output

#### Q75. Which header file contains `getchar()` and `putchar()`?

A) `<stdlib.h>`
B) `<stdio.h>` ✅
C) `<string.h>`
D) `<math.h>`

#### Q76. What is the output of `putchar(65);`?

A) 65
B) 'A' ✅
C) 'a'
D) Compilation error

#### Q77. `char ch = getchar();` reads:

A) A string
B) A single character ✅
C) An integer
D) A floating point number

#### Q78. An Escape Sequence starts with:

A) A forward slash `/`
B) A backslash `\` ✅
C) A percent sign `%`
D) An ampersand `&`

#### Q79. Which escape sequence represents a newline?

A) `\t`
B) `\n` ✅
C) `\r`
D) `\a`

#### Q80. Which escape sequence inserts a tab space?

A) `\t` ✅
B) `\n`
C) `\r`
D) `\a`

#### Q81. Which escape sequence moves the cursor to the beginning of the current line?

A) `\t`
B) `\n`
C) `\r` ✅
D) `\a`

#### Q82. Which escape sequence produces a beep sound?

A) `\t`
B) `\n`
C) `\r`
D) `\a` ✅

#### Q83. Which escape sequence prints a literal backslash?

A) `\`
B) `\\` ✅
C) `\/`
D) `\\\`

#### Q84. Which escape sequence prints a double quote?

A) `\`
B) `\'`
C) `\"` ✅
D) `\\`

#### Q85. Which escape sequence represents the null character?

A) `\n`
B) `\0` ✅
C) `\t`
D) `\r`

#### Q86. The null character `\0` marks:

A) The start of a string
B) The end of a string ✅
C) A tab space
D) A new line

#### Q87. `printf()` is used for:

A) Formatted output ✅
B) Unformatted output
C) Formatted input
D) Character input

#### Q88. `printf()` returns:

A) The number of characters printed ✅
B) A string
C) An integer representing success
D) Nothing

#### Q89. `scanf()` is used for:

A) Formatted output
B) Unformatted output
C) Formatted input ✅
D) Character output

#### Q90. `scanf()` returns:

A) The number of items successfully read ✅
B) The input value
C) A string
D) Nothing

#### Q91. Which format specifier is used for `int`?

A) `%f`
B) `%c`
C) `%d` or `%i` ✅
D) `%s`

#### Q92. Which format specifier is used for `float`?

A) `%d`
B) `%f` ✅
C) `%c`
D) `%s`

#### Q93. Which format specifier is used for `char`?

A) `%d`
B) `%f`
C) `%c` ✅
D) `%s`

#### Q94. Which format specifier is used for a string?

A) `%d`
B) `%f`
C) `%c`
D) `%s` ✅

#### Q95. In `scanf`, why is the `&` operator used before variables?

A) To pass the value of the variable
B) To pass the address of the variable ✅
C) To increment the variable
D) To decrement the variable

#### Q96. In `scanf`, the `&` operator is NOT required for:

A) Integers
B) Floats
C) Characters
D) Strings (arrays) ✅

#### Q97. `printf("%.2f", 3.14159);` prints what?

A) 3.1
B) 3.14 ✅
C) 3.141
D) 3.14159

#### Q98. `printf("%5d", 25);` prints what?

A) 25
B) `   25` (right-aligned, width 5) ✅
C) `25   ` (left-aligned, width 5)
D) 00025

#### Q99. `printf("%-5d", 25);` prints what?

A) 25
B) `   25`
C) `25   ` (left-aligned, width 5) ✅
D) 00025

#### Q100. `scanf("%d %f", &a, &b);` reads:

A) One integer and one float ✅
B) One float and one integer
C) Two integers
D) Two floats
