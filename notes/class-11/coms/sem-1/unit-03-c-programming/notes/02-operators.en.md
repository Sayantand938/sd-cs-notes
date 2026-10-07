# Operators (EN)

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
