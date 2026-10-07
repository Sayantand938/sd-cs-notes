# Unit 03 01 Practice Paper (Eng)

## Section 1: Introduction to C (Questions 1 to 15)

### Q1 (mcq)

Which of the following is a valid variable identifier in C?

- A) `2_sum_total`
- B) `_sum_total_`
- C) `sum-total`
- D) `double`

**Answer:** B

### Q2 (mcq)

Which of the following statements about C keywords is correct?

- A) Keywords can be used as variable names if capitalized.
- B) Keywords are case-sensitive and must always be written in lowercase.
- C) There are exactly 64 keywords in the standard C89 specification.
- D) A programmer can redefine keywords using preprocessor directives.

**Answer:** B

### Q3 (mcq)

What is the value of the integer constant `017` in the decimal system?

- A) 17
- B) 15
- C) 23
- D) 11

**Answer:** B

### Q4 (mcq)

What will be the output of the preprocessor substitution in the following code block?

```c
#define MULTIPLY(a, b) a * b
// ...
int result = MULTIPLY(2 + 3, 4 + 5);
```

- A) 45
- B) 23
- C) 19
- D) 29

**Answer:** C

### Q5 (mcq)

What is the purpose of the `#ifndef` preprocessor directive?

- A) To define a macro if it is already declared.
- B) To check if a macro is not defined before compiling the subsequent code block.
- C) To force a compiler error if a macro exists.
- D) To undefine a previously declared macro.

**Answer:** B

### Q6 (mcq)

Which of the following header files contains the definitions of minimum and maximum limits for floating-point data types?

- A) `<limits.h>`
- B) `<float.h>`
- C) `<math.h>`
- D) `<stdlib.h>`

**Answer:** B

### Q7 (mcq)

Which phase of the C compilation process handles macro expansion and file inclusion?

- A) Compiler
- B) Assembler
- C) Linker
- D) Preprocessor

**Answer:** D

### Q8 (mcq)

If a local variable is declared with the `const` qualifier, which of the following statements is true?

- A) Its value can be modified freely at runtime.
- B) It must be initialized at the time of declaration.
- C) It is stored in the read-only hardware register of the CPU.
- D) It can only be used inside the preprocessor directives.

**Answer:** B

### Q9 (mcq)

Which of the following represents a hexadecimal character constant in C?

- A) `'\0x41'`
- B) `'\x41'`
- C) `'\h41'`
- D) `'\41'`

**Answer:** B

### Q10 (mcq)

What is the guaranteed size of the `char` data type in C according to the ANSI standard?

- A) At least 2 bytes
- B) Exactly 1 byte
- C) Depends entirely on the operating system word size
- D) At least 4 bytes

**Answer:** B

### Q11 (mcq)

Which storage class in C initializes variables to zero by default and retains their value across function calls?

- A) `auto`
- B) `register`
- C) `static`
- D) `extern`

**Answer:** C

### Q12 (mcq)

What does the expression `sizeof('A')` evaluate to in standard C?

- A) 1
- B) The size of an integer
- C) The size of a double
- D) It results in a compilation error

**Answer:** B

### Q13 (mcq)

Which of the following is the correct way to include a user-defined header file named `myheader.h` located in the current working directory?

- A) `#include <myheader.h>`
- B) `#include "myheader.h"`
- C) `#import "myheader.h"`
- D) `#include [myheader.h]`

**Answer:** B

### Q14 (mcq)

What occurs when a variable's value exceeds the maximum limit defined for its unsigned integer type?

- A) A runtime error is thrown, terminating the program.
- B) The compiler flags it as a syntax error.
- C) The value wraps around to zero.
- D) The variable is automatically converted to a `double`.

**Answer:** C

### Q15 (mcq)

In C, which character set escape sequence is used to represent a vertical tab?

- A) `\v`
- B) `\t`
- C) `\b`
- D) `\r`

**Answer:** A

## Section 2: Operators & I/O (Questions 16 to 30)

### Q16 (mcq)

What is the value of the expression `17 % -5` in standard C99?

- A) -2
- B) 2
- C) -3
- D) 3

**Answer:** B

### Q17 (mcq)

Consider the expression `x = 5; y = x++;`. What are the values of `x` and `y` after execution?

- A) `x = 5, y = 5`
- B) `x = 6, y = 5`
- C) `x = 6, y = 6`
- D) `x = 5, y = 6`

**Answer:** B

### Q18 (mcq)

What is the output of the following logical expression?

```c
int a = 5, b = 0, c = 10;
int result = (a && b) || (c && a);
```

- A) 0
- B) 1
- C) 5
- D) 10

**Answer:** B

### Q19 (mcq)

Due to short-circuit evaluation, what will be the value of `y` after executing the following code?

```c
int x = 0;
int y = 10;
if (x && (++y > 10)) {
    // block
}
```

- A) 10
- B) 11
- C) 0
- D) Undefined

**Answer:** A

### Q20 (mcq)

Which of the following operators has the lowest precedence in C?

- A) Assignment operator (`=`)
- B) Comma operator (`,`)
- C) Conditional operator (`?:`)
- D) Logical OR operator (`||`)

**Answer:** B

### Q21 (mcq)

What is the output of the following statement if `a = 3` and `b = 4`?

```c
printf("%d", a > b ? a : b);
```

- A) 3
- B) 4
- C) 0
- D) 1

**Answer:** B

### Q22 (mcq)

Which format specifier is used to read or print an unsigned octal integer using `scanf` or `printf`?

- A) `%o`
- B) `%u`
- C) `%x`
- D) `%oct`

**Answer:** A

### Q23 (mcq)

What does the function `getchar()` return when the end of a file is reached?

- A) `0`
- B) `\0`
- C) `EOF`
- D) `-1` only on Windows platforms

**Answer:** C

### Q24 (mcq)

How many characters will be printed by the statement `printf("%5.2f", 123.456);`?

- A) 5
- B) 6
- C) 7
- D) 8

**Answer:** B

### Q25 (mcq)

What is the result of the following implicit type conversion?

```c
int i = 10;
double d = 5.5;
double result = i + d;
```

- A) 15.0
- B) 15.5
- C) 15
- D) 16.0

**Answer:** B

### Q26 (mcq)

Which of the following functions is designed to write a single character to the standard output stream?

- A) `puts()`
- B) `printf()`
- C) `putchar()`
- D) `gets()`

**Answer:** C

### Q27 (mcq)

What does the following code print?

```c
int x = (1, 2, 3);
printf("%d", x);
```

- A) 1
- B) 2
- C) 3
- D) Compiler Error

**Answer:** C

### Q28 (mcq)

What does `scanf` return if it successfully reads three integer variables?

- A) 0
- B) 1
- C) 3
- D) The sum of the three integers

**Answer:** C

### Q29 (mcq)

Which of the following correctly describes the associativity of the assignment operators in C?

- A) Left-to-Right
- B) Right-to-Left
- C) No associativity exists
- D) Depends on the operands' data types

**Answer:** B

### Q30 (mcq)

What is the purpose of the escape sequence `\r` in C?

- A) Move the cursor to the next line.
- B) Move the cursor to the beginning of the current line.
- C) Backspace by one character space.
- D) Sound a system alert beep.

**Answer:** B

## Section 3: Branching and Looping (Questions 31 to 45)

### Q31 (mcq)

In a C `switch` statement, what data types are allowed for the switch expression?

- A) `float` and `double`
- B) Only `char`
- C) `int`, `char`, and `enum`
- D) Any valid C data type

**Answer:** C

### Q32 (mcq)

What is the classic "dangling else" problem in C?

- A) An `else` statement that does not have a matching condition.
- B) An ambiguous assignment of an `else` clause to nested `if` statements when braces are omitted.
- C) A runtime error caused by executing an empty `else` block.
- D) An `else` statement that executes before the `if` block.

**Answer:** B

### Q33 (mcq)

How many times will the following loop execute?

```c
int i = 0;
while (i < 10) {
    if (i == 5)
        continue;
    i++;
}
```

- A) 5 times
- B) 10 times
- C) Infinitely
- D) 6 times

**Answer:** C

### Q34 (mcq)

What is the fundamental structural difference between a `while` loop and a `do-while` loop?

- A) A `do-while` loop checks the condition at the top of the loop.
- B) A `while` loop is guaranteed to execute at least once.
- C) A `do-while` loop is guaranteed to execute at least once.
- D) A `do-while` loop cannot use the `break` statement.

**Answer:** C

### Q35 (mcq)

What is the output of the following program fragment?

```c
int x = 1;
switch(x) {
    case 1: printf("One ");
    case 2: printf("Two ");
    case 3: printf("Three ");
    default: printf("Default");
}
```

- A) `One `
- B) `One Two Three Default`
- C) `One Default`
- D) `One Two `

**Answer:** B

### Q36 (mcq)

In a `for` loop, which of the three expressions inside the parentheses is optional?

```c
for (expr1; expr2; expr3)
```

- A) Only `expr2`
- B) Only `expr1` and `expr3`
- C) None of them are optional
- D) All three are optional

**Answer:** D

### Q37 (mcq)

What happens when a `break` statement is executed inside nested loops?

- A) It terminates all loops and jumps to the end of the program.
- B) It terminates only the innermost loop in which it is placed.
- C) It terminates the outermost loop.
- D) It skips the current iteration and starts the next iteration of the inner loop.

**Answer:** B

### Q38 (mcq)

What is the output of the following loop?

```c
for (int i = 0; i < 5; ++i) {
    if (i == 3) {
        break;
    }
    printf("%d ", i);
}
```

- A) `0 1 2 3 4`
- B) `0 1 2`
- C) `0 1 2 4`
- D) `3 4`

**Answer:** B

### Q39 (mcq)

What is the value of `i` after the following loop terminates?

```c
int i;
for (i = 0; i < 5; i++) {
    // Empty body
}
```

- A) 4
- B) 5
- C) 6
- D) Undefined

**Answer:** B

### Q40 (mcq)

Which of the following conditional statements evaluates to true in C?

- A) `if (0)`
- B) `if (-1)`
- C) `if (NULL)`
- D) `if (0.0)`

**Answer:** B

### Q41 (mcq)

What is the output of the following code snippet?

```c
int x = 10, y = 20;
if (x = y) {
    printf("Equal");
} else {
    printf("Not Equal");
}
```

- A) Equal
- B) Not Equal
- C) Compiler Error
- D) Runtime Exception

**Answer:** A

### Q42 (mcq)

Which loop is best suited when the exact number of iterations is known before entering the loop?

- A) `while`
- B) `do-while`
- C) `for`
- D) None of the above

**Answer:** C

### Q43 (mcq)

What is the behavior of the following loop structure?

```c
for ( ; ; ) {
    // code
}
```

- A) It results in a syntax compilation error.
- B) It executes exactly once.
- C) It represents an infinite loop.
- D) It skips execution entirely.

**Answer:** C

### Q44 (mcq)

What does the `continue` statement do when encountered in a loop?

- A) It terminates the execution of the entire program.
- B) It transfers control to the switch statement.
- C) It skips the remaining statements in the current iteration and proceeds to the next iteration.
- D) It exits the loop entirely.

**Answer:** C

### Q45 (mcq)

Which of the following is equivalent to the statement `if (val != 0)`?

- A) `if (!val)`
- B) `if (val)`
- C) `if (val == 0)`
- D) `if (~val)`

**Answer:** B

## Section 4: Arrays and Structures (Questions 46 to 70)

### Q46 (mcq)

If an integer array is declared as `int arr[5] = {1, 2};`, what are the values of `arr[2]`, `arr[3]`, and `arr[4]`?

- A) Garbage values
- B) 0, 0, 0
- C) 1, 2, 1
- D) Undefined behavior

**Answer:** B

### Q47 (mcq)

How is a two-dimensional array stored in the computer's physical memory in C?

- A) Column-Major Order
- B) Row-Major Order
- C) In a tree structure
- D) In scattered heap segments

**Answer:** B

### Q48 (mcq)

What is the size of the array declared as `char str[] = "Hello";`?

- A) 5 bytes
- B) 6 bytes
- C) 4 bytes
- D) 10 bytes

**Answer:** B

### Q49 (mcq)

Which standard library function is used to compare two strings lexicographically?

- A) `strcpy()`
- B) `strcat()`
- C) `strcmp()`
- D) `strlen()`

**Answer:** C

### Q50 (mcq)

What does the function `strcpy(dest, src)` do?

- A) Appends the string `src` to the end of `dest`.
- B) Compares the strings `dest` and `src`.
- C) Copies the string `src` into the array `dest`, including the terminating null character.
- D) Returns the length of the string `dest`.

**Answer:** C

### Q51 (mcq)

What will happen if you attempt to assign one array directly to another using the assignment operator (e.g., `arr1 = arr2;`)?

- A) The contents of `arr2` are successfully copied into `arr1`.
- B) A compilation error occurs because array names act as constant pointers.
- C) A runtime crash occurs due to memory corruption.
- D) Only the first element is copied.

**Answer:** B

### Q52 (mcq)

Which of the following is the correct syntax to initialize a structure variable at the time of declaration?

```c
struct Point {
    int x;
    int y;
};
```

- A) `struct Point p1 = {10, 20};`
- B) `struct Point p1 = (10, 20);`
- C) `struct Point p1.x = 10; p1.y = 20;`
- D) `Point p1 = [10, 20];`

**Answer:** A

### Q53 (mcq)

How are structure members stored in physical memory?

- A) In descending order of their sizes.
- B) Contiguously, in the order of their declaration (though padding may be inserted).
- C) In randomized memory locations to optimize access.
- D) On separate stack frames.

**Answer:** B

### Q54 (mcq)

What is the output of `sizeof(struct Demo)` for the following definition, assuming a 4-byte integer and 1-byte char, without ignoring padding?

```c
struct Demo {
    char a;
    int b;
};
```

- A) 5 bytes
- B) 8 bytes
- C) 4 bytes
- D) 6 bytes

**Answer:** B

### Q55 (mcq)

Which operator is used to access members of a structure variable directly?

- A) `->`
- B) `.`
- C) `*`
- D) `&`

**Answer:** B

### Q56 (mcq)

What does an "Array of Structures" mean?

- A) A structure containing an array as one of its members.
- B) An array whose elements are individual structure variables.
- C) A structure that points to an array.
- D) A multidimensional array of integers.

**Answer:** B

### Q57 (mcq)

Which function is safest to use for reading a string containing spaces from the standard input?

- A) `scanf("%s", str)`
- B) `gets(str)`
- C) `fgets(str, sizeof(str), stdin)`
- D) `getchar(str)`

**Answer:** C

### Q58 (mcq)

If two structure variables are of the exact same type, is the assignment `structA = structB;` valid?

- A) No, members must be copied individually.
- B) Yes, it performs a member-by-member copy (shallow copy).
- C) Yes, but only if all members are of primitive numeric types.
- D) No, it requires a call to `memcpy`.

**Answer:** B

### Q59 (mcq)

What does the following structure declaration represent?

```c
struct Student {
    char name[50];
    struct Date {
        int day;
        int month;
        int year;
    } dob;
};
```

- A) Self-referential structure
- B) Nested structure (structure within structure)
- C) Structure within an array
- D) Invalid declaration

**Answer:** B

### Q60 (mcq)

If `arr` is a 2D array of size `[3][4]`, how is the element at row 2, column 1 accessed using pointers?

- A) `*(*(arr + 2) + 1)`
- B) `*(arr + 2 + 1)`
- C) `*(arr[2] + 1)`
- D) Both A and C

**Answer:** D

### Q61 (mcq)

What does the function `strncat(dest, src, n)` do?

- A) Copies exactly `n` characters from `src` to `dest`.
- B) Appends at most `n` characters from `src` to the end of `dest`, then adds a null terminator.
- C) Compares `n` characters of `dest` and `src`.
- D) Finds the position of character `n` in `src`.

**Answer:** B

### Q62 (mcq)

What is the correct way to declare an array of 10 structures of type `struct Book`?

- A) `struct Book[10] b;`
- B) `struct Book b[10];`
- C) `Book b[10];`
- D) `struct b[10] Book;`

**Answer:** B

### Q63 (mcq)

Which of the following defines a structure member that is itself an array?

- A) `struct { int arr[5]; } var;`
- B) `struct { int arr; } var[5];`
- C) `struct { int *arr; } var;`
- D) `struct arr[5] { int x; } var;`

**Answer:** A

### Q64 (mcq)

What is the result of using the standard relational operator `==` to compare two structures (e.g., `if (struct1 == struct2)`)?

- A) It compares all fields one by one.
- B) It results in a compilation error because C does not support direct structure comparison.
- C) It compares the memory addresses of the structures.
- D) It returns true if the sizes are identical.

**Answer:** B

### Q65 (mcq)

What is the purpose of the null character `\0` in C strings?

- A) To indicate the beginning of a string.
- B) To act as a placeholder for capital letters.
- C) To terminate the sequence of characters in a character array.
- D) To clear the console screen.

**Answer:** C

### Q66 (mcq)

What is the output of `strlen("Hello\0World");`?

- A) 11
- B) 5
- C) 6
- D) 10

**Answer:** B

### Q67 (mcq)

How do you initialize all elements of a 3x3 2D array to zero?

- A) `int arr[3][3] = {0};`
- B) `int arr[3][3] = {0,0,0};`
- C) `int arr[3][3] = {{0}};`
- D) All of the above

**Answer:** D

### Q68 (mcq)

What will happen if you access `arr[10]` in an array declared as `int arr[10];`?

- A) The program will trigger an out-of-bounds compiler error.
- B) The program will crash immediately.
- C) It accesses memory outside the array boundary (undefined behavior).
- D) It loops back and accesses `arr[0]`.

**Answer:** C

### Q69 (mcq)

What is the type of a structure member that is a pointer to the same structure type?

```c
struct Node {
    int data;
    struct Node *next;
};
```

- A) A nested structure
- B) A self-referential structure member
- C) An anonymous structure
- D) An invalid syntax definition

**Answer:** B

### Q70 (mcq)

What does the following structure definition allow you to do?

```c
struct Employee {
    char name[30];
    int ID;
} emp1, emp2;
```

- A) It defines the structure type and declares variables `emp1` and `emp2` simultaneously.
- B) It creates an array of two employees named `emp1` and `emp2`.
- C) It compiles with an error unless `typedef` is placed at the front.
- D) It creates a structure with nested attributes.

**Answer:** A

## Section 5: User-Defined Functions (Questions 71 to 85)

### Q71 (mcq)

What is the purpose of a function prototype (declaration) in C?

- A) It tells the compiler the memory size of the function code.
- B) It provides the compiler with the function's signature (return type, name, and parameter types) before its actual definition.
- C) It allocates stack frames for function execution.
- D) It makes the function inline automatically.

**Answer:** B

### Q72 (mcq)

Which parameter passing mechanism is simulated when we pass the address of a variable to a function?

- A) Call by value
- B) Call by reference
- C) Call by name
- D) Call by assignment

**Answer:** B

### Q73 (mcq)

In C, what type of parameter passing is used by default?

- A) Call by reference
- B) Call by value
- C) Call by pointer
- D) Call by sharing

**Answer:** B

### Q74 (mcq)

If a function is declared with a `void` return type, what does it mean?

- A) The function does not accept any parameters.
- B) The function does not return any value to the caller.
- C) The function can return any arbitrary pointer type.
- D) The function execution cannot be terminated before reaching the closing brace.

**Answer:** B

### Q75 (mcq)

What is a recursive function?

- A) A function that calls another function from within itself.
- B) A function that calls itself directly or indirectly.
- C) A function that is compiled multiple times.
- D) A function that cannot return any value.

**Answer:** B

### Q76 (mcq)

What is the consequence of a recursive function lacking a base case?

- A) A syntax error during compilation.
- B) An infinite recursion resulting in a stack overflow at runtime.
- C) The function executes once and terminates safely.
- D) The CPU shifts the execution memory to the heap dynamically.

**Answer:** B

### Q77 (mcq)

Can a C function be defined inside another function (nested definitions)?

- A) Yes, C natively supports nested function definitions.
- B) No, C does not support nested function definitions.
- C) Yes, but only if the inner function is declared as `static`.
- D) Yes, if using the `#define` preprocessor inside the function.

**Answer:** B

### Q78 (mcq)

What does the `return` statement do inside a user-defined function?

- A) It halts the entire program execution.
- B) It yields control back to the operating system immediately.
- C) It terminates the execution of the function and returns a value to the caller.
- D) It clears the local stack frame without exiting the function.

**Answer:** C

### Q79 (mcq)

What will the following recursive function return for `fun(4)`?

```c
int fun(int n) {
    if (n <= 1)
        return 1;
    return n * fun(n - 1);
}
```

- A) 4
- B) 12
- C) 24
- D) 10

**Answer:** C

### Q80 (mcq)

In call-by-value, what happens to the actual arguments when the formal arguments are modified inside the function?

- A) The actual arguments are updated instantly.
- B) The actual arguments remain unchanged.
- C) The actual arguments become undefined.
- D) A runtime pointer exception is raised.

**Answer:** B

### Q81 (mcq)

What is the scope of a variable declared inside a function block (without any storage class qualifiers)?

- A) Global scope
- B) File scope
- C) Block/Local scope
- D) External scope

**Answer:** C

### Q82 (mcq)

If a local variable and a global variable share the exact same name, what happens inside the function where the local variable is declared?

- A) The compiler generates a duplicate identifier error.
- B) The local variable shadows/hides the global variable inside that function.
- C) The global variable takes priority over the local variable.
- D) The values of both variables are merged.

**Answer:** B

### Q83 (mcq)

Which of the following is correct when passing a 2D array to a function as a parameter?

- A) You must specify both dimensions (e.g., `void func(int arr[][])`).
- B) You can omit both dimensions (e.g., `void func(int **arr)`).
- C) You must specify at least the second (column) dimension (e.g., `void func(int arr[][4])`).
- D) You must specify only the first (row) dimension (e.g., `void func(int arr[3][])`).

**Answer:** C

### Q84 (mcq)

What is the default return type of a C function if it is not explicitly declared?

- A) `void`
- B) `int`
- C) `char`
- D) `float`

**Answer:** B

### Q85 (mcq)

How many values can a standard C function return using a single `return` statement?

- A) Multiple values separated by commas
- B) Exactly one value
- C) Up to two values
- D) No limit

**Answer:** B

## Section 6: Pointers (Questions 86 to 100)

### Q86 (mcq)

What is a pointer variable in C?

- A) A variable that stores the value of another variable.
- B) A variable that stores the memory address of another variable.
- C) A keyword used to point to the main function.
- D) A special array index.

**Answer:** B

### Q87 (mcq)

Which operator is known as the "address-of" operator?

- A) `*`
- B) `&`
- C) `->`
- D) `.`

**Answer:** B

### Q88 (mcq)

What is the output of the following pointer code snippet?

```c
int x = 10;
int *ptr = &x;
*ptr = 20;
printf("%d", x);
```

- A) 10
- B) 20
- C) Address of `x`
- D) Garbage value

**Answer:** B

### Q89 (mcq)

If `ptr` is a pointer to an integer (`int *ptr`), and the address stored in `ptr` is `1000` on a system where an integer is 4 bytes, what will be the value of `ptr + 2`?

- A) 1002
- B) 1004
- C) 1008
- D) 1016

**Answer:** C

### Q90 (mcq)

What is a "null pointer" in C?

- A) A pointer that points to a garbage address.
- B) A pointer that does not point to any valid memory location and holds the value `0` or `NULL`.
- C) An uninitialized pointer variable.
- D) A pointer that points to the string termination character.

**Answer:** B

### Q91 (mcq)

What is the correct way to declare a pointer to a pointer (double pointer) of type `float`?

- A) `float *ptr;`
- B) `float **ptr;`
- C) `float *&ptr;`
- D) `float ptr**;`

**Answer:** B

### Q92 (mcq)

If `arr` is an integer array, which of the following expressions is equivalent to `arr[i]`?

- A) `*(arr + i)`
- B) `*arr + i`
- C) `&(arr + i)`
- D) `arr + i`

**Answer:** A

### Q93 (mcq)

What is a "wild pointer" in C?

- A) A pointer that points to multiple data types simultaneously.
- B) A pointer that has been declared but not initialized to a valid address or NULL.
- C) A pointer that points to the `main` function.
- D) A pointer used inside a recursive function.

**Answer:** B

### Q94 (mcq)

What does the expression `sizeof(ptr)` evaluate to, if `ptr` is a character pointer (`char *ptr`)?

- A) Always 1 byte
- B) The size of the pointer (typically 4 or 8 bytes depending on system architecture)
- C) The length of the string it points to
- D) The size of the character variable it points to

**Answer:** B

### Q95 (mcq)

How do you access a structure member when you have a pointer to that structure?

```c
struct Employee *empPtr;
```

- A) `empPtr.ID`
- B) `*empPtr.ID`
- C) `empPtr->ID`
- D) `empPtr.>ID`

**Answer:** C

### Q96 (mcq)

What is the meaning of a `void *` pointer in C?

- A) A pointer that points to a function returning void.
- B) A generic pointer that can point to any data type without explicit casting.
- C) A pointer that points to nothing and cannot be modified.
- D) An invalid pointer that causes compilation failures.

**Answer:** B

### Q97 (mcq)

Which of the following operations is invalid on pointers?

- A) Adding an integer to a pointer
- B) Subtracting an integer from a pointer
- C) Adding two pointers together
- D) Subtracting one pointer from another of the same type

**Answer:** C

### Q98 (mcq)

What is the danger of returning a pointer to a local variable from a function?

- A) The program will not compile.
- B) The local variable's memory space is deallocated when the function exits, leading to a dangling pointer.
- C) The returned pointer becomes a global constant automatically.
- D) The value is converted to NULL.

**Answer:** B

### Q99 (mcq)

If `char *s = "Hello";`, what does `printf("%s", s + 2);` print?

- A) `He`
- B) `llo`
- C) `lo`
- D) `Hello`

**Answer:** B

### Q100 (mcq)

What is the correct interpretation of the declaration `int *arr[10];`?

- A) `arr` is a pointer to an array of 10 integers.
- B) `arr` is an array of 10 pointers to integers.
- C) `arr` is a pointer to an integer with 10 dimensions.
- D) `arr` is an invalid pointer array structure.

**Answer:** B
