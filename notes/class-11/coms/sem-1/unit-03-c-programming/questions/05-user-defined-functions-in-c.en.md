# User Defined Functions In C — Questions (EN)

### Q1 (mcq)

Which of the following is a valid identifier in C?

- A) `float`
- B) `_Float`
- C) `2nd_var`
- D) `var_name_`

**Answer:** D

### Q2 (mcq)

What is the size of `long double` on a typical 32‑bit compiler?

- A) 4 bytes
- B) 8 bytes
- C) 12 or 16 bytes
- D) 2 bytes

**Answer:** C

### Q3 (mcq)

Which of the following is NOT a valid preprocessor directive?

- A) `#include`
- B) `#define`
- C) `#ifdef`
- D) `#elseif`

**Answer:** D

### Q4 (mcq)

What will be the output of the following code?

```c
#define CUBE(x) (x*x*x)
printf("%d", CUBE(2+1));
```

- A) 27
- B) 9
- C) 7
- D) 3

**Answer:** C

### Q5 (mcq)

Which of the following is a valid octal constant?

- A) `017`
- B) `0x17`
- C) `\017`
- D) `17`

**Answer:** A

### Q6 (mcq)

A variable declared as `register`:

- A) Cannot be used with `&` operator
- B) Must be initialized
- C) Has global scope
- D) Is stored in heap

**Answer:** A

### Q7 (mcq)

Which header file is needed for dynamic memory allocation?

- A) `stdio.h`
- B) `stdlib.h`
- C) `string.h`
- D) `math.h`

**Answer:** B

### Q8 (mcq)

What is the output of `sizeof('A')` in C (not C++)?

- A) 1
- B) 2
- C) 4
- D) Depends on system

**Answer:** C

### Q9 (mcq)

Which of the following is NOT a valid user-defined data type in C?

- A) `struct`
- B) `union`
- C) `enum`
- D) `class`

**Answer:** D

### Q10 (mcq)

The `#undef` directive is used to:

- A) Undefine a macro
- B) Define a macro
- C) Include a header
- D) Generate error

**Answer:** A

### Q11 (mcq)

What is the size of `long long int` on a 64‑bit system?

- A) 4 bytes
- B) 8 bytes
- C) 16 bytes
- D) 2 bytes

**Answer:** B

### Q12 (mcq)

Which of the following is TRUE about external variables?

- A) They are declared with `extern` keyword.
- B) They have file scope.
- C) They are initialized to zero by default.
- D) All of the above

**Answer:** D

### Q13 (mcq)

What is the purpose of the `volatile` keyword?

- A) To prevent compiler optimization on a variable
- B) To make variable constant
- C) To store variable in register
- D) To declare global variable

**Answer:** A

### Q14 (mcq)

Which escape sequence represents a form feed?

- A) `\f`
- B) `\n`
- C) `\v`
- D) `\t`

**Answer:** A

### Q15 (mcq)

What is the output of the following?

```c
int x = 10;
int * const p = &x;
*p = 20;
printf("%d", x);
```

- A) 10
- B) 20
- C) Error
- D) Garbage

**Answer:** B

### Q16 (mcq)

What is the result of `15 & 7` (bitwise AND)?

- A) 7
- B) 15
- C) 8
- D) 1

**Answer:** A

### Q17 (mcq)

Which operator is used for bitwise NOT?

- A) `!`
- B) `~`
- C) `-`
- D) `^`

**Answer:** B

### Q18 (mcq)

What is the output of `printf("%d", 6 ^ 3);` (bitwise XOR)?

- A) 5
- B) 9
- C) 6
- D) 3

**Answer:** A

### Q19 (mcq)

What is the value of `x` after `int x = 8; x = x << 1;`?

- A) 4
- B) 16
- C) 8
- D) 1

**Answer:** B

### Q20 (mcq)

Which operator has the highest precedence among the following?

- A) `+`
- B) `*`
- C) `==`
- D) `++`

**Answer:** D

### Q21 (mcq)

What is the output of the following?

```c
int a = 5, b = 5, c;
c = (a == b) ? 100 : 200;
printf("%d", c);
```

- A) 5
- B) 100
- C) 200
- D) 0

**Answer:** B

### Q22 (mcq)

Which function is used to print formatted output to standard output?

- A) `puts()`
- B) `printf()`
- C) `putchar()`
- D) `write()`

**Answer:** B

### Q23 (mcq)

What is the result of `9 / 4` in integer division?

- A) 2.25
- B) 2
- C) 3
- D) 2.0

**Answer:** B

### Q24 (mcq)

What does the `\b` escape sequence do?

- A) Backspace
- B) Newline
- C) Tab
- D) Carriage return

**Answer:** A

### Q25 (mcq)

Which format specifier is used to print a hexadecimal number in lowercase?

- A) `%d`
- B) `%x`
- C) `%X`
- D) `%o`

**Answer:** B

### Q26 (mcq)

What is the output of the following?

```c
int x = 3;
printf("%d", x >= 3 ? 5 : 10);
```

- A) 3
- B) 5
- C) 10
- D) Error

**Answer:** B

### Q27 (mcq)

Which of the following is a valid compound assignment operator?

- A) `%%`
- B) `^=`
- C) `<<=`
- D) Both B and C

**Answer:** D

### Q28 (mcq)

What is the value of `(1, 3, 5, 7, 9)` using the comma operator?

- A) 1
- B) 5
- C) 7
- D) 9

**Answer:** D

### Q29 (mcq)

Which function reads a string including whitespace and is considered unsafe?

- A) `gets()`
- B) `fgets()`
- C) `scanf()`
- D) `getchar()`

**Answer:** A

### Q30 (mcq)

What is the output of `printf("%8.3f", 123.456);`?

- A) `123.456`
- B) ` 123.456` (one leading space)
- C) `123.456  ` (two trailing spaces)
- D) `123.46`

**Answer:** B

<!-- Width 8 with precision 3 on 123.456 gives 7 characters, so the field
     is padded to 8 with one leading space. Verified by running it. -->
### Q31 (mcq)

Which operator is used to get the address of a variable?

- A) `&`
- B) `*`
- C) `->`
- D) `.`

**Answer:** A

### Q32 (mcq)

What is the result of casting `(float)5/2`?

- A) 2.5
- B) 2.0
- C) 2
- D) 3.0

**Answer:** A

### Q33 (mcq)

How do you read a character without echo in standard C?

- A) With `getch()` from `<stdio.h>`.
- B) It is not possible in standard C — echo is controlled by the
  terminal, not the language.
- C) By opening `stdin` with `fopen(..., "r")`.
- D) With `scanf("%c", &c)` and the `noecho` flag.

**Answer:** B

<!-- ISO C has no echo control. Platform facilities exist - getch() in
     <conio.h> on DOS/Windows, tcsetattr() with ECHO off in POSIX,
     noecho() in curses - but none are part of the C standard. -->
### Q34 (mcq)

What is the output of `printf("%d", 4 >> 1);` (right shift)?

- A) 2
- B) 4
- C) 8
- D) 1

**Answer:** A

### Q35 (mcq)

Which escape sequence represents a question mark?

- A) `\?`
- B) `\q`
- C) `\m`
- D) `\?` is correct but sometimes `?` can be used directly.

**Answer:** A

### Q36 (mcq)

What is the output of the following code?

```c
int x = 7;
if (x % 2 == 0)
    printf("Even");
else
    printf("Odd");
```

- A) Even
- B) Odd
- C) EvenOdd
- D) Error

**Answer:** B

### Q37 (mcq)

How many times will the following loop execute?

```c
int i = 3;
while (i > 0)
    i--;
// after loop
```

- A) 2
- B) 3
- C) 4
- D) Infinite

**Answer:** B

### Q38 (mcq)

What will be the output of the following?

```c
for(int i=0; i<4; i++) {
    if(i == 2) continue;
    printf("%d", i);
}
```

- A) 0 1 2 3
- B) 0 1 3
- C) 0 1 2
- D) 1 2 3

**Answer:** B

### Q39 (mcq)

What is the output of the following `switch`?

```c
int x = 2;
switch(x) {
    case 1: printf("A");
    case 2: printf("B");
    case 3: printf("C");
    default: printf("D");
}
```

- A) B
- B) B C D
- C) A B C D
- D) D

**Answer:** B

### Q40 (mcq)

Which loop is best when you want to execute the body at least once?

- A) `do-while`
- B) `while`
- C) `for`
- D) None

**Answer:** A

### Q41 (mcq)

What is the output of the following?

```c
int i = 0;
while (i < 5) {
    i++;
    if (i == 3) break;
    printf("%d", i);
}
```

- A) 1 2
- B) 1 2 3
- C) 1 2 3 4
- D) 2 3

**Answer:** A

### Q42 (mcq)

Can `switch` expression be of type `char`?

- A) Yes
- B) No
- C) Only if char is signed
- D) Depends on compiler

**Answer:** A

### Q43 (mcq)

How many times will the following loop execute?

```c
int i = 5;
do {
    i++;
} while(i < 5);
```

- A) 0
- B) 1
- C) 5
- D) Infinite

**Answer:** B

### Q44 (mcq)

What is the output of the following nested loop?

```c
for(int i=0; i<2; i++)
    for(int j=0; j<2; j++)
        printf("%d%d", i, j);
```

- A) 00 01 10 11
- B) 01 02 11 12
- C) 00 10 01 11
- D) 00 11

**Answer:** A

### Q45 (mcq)

What does `break` do inside a `for` loop?

- A) Exits the `for` loop
- B) Continues to next iteration
- C) Restarts the loop
- D) Terminates the program

**Answer:** A

### Q46 (mcq)

Which of the following is a valid infinite `do-while` loop?

- A) `do { } while(0);`
- B) `do { } while(1);`
- C) `do { } while(true);` (C doesn't have bool by default)
- D) `do { } while(0==0);`

**Answer:** B

### Q47 (mcq)

What is the output of the following?

```c
int x = 0;
if (x)
    printf("True");
else
    printf("False");
```

- A) True
- B) False
- C) Error
- D) TrueFalse

**Answer:** B

### Q48 (mcq)

What is the output of the following `for` loop?

```c
int i;
for(i=0; i<3; i++);
printf("%d", i);
```

- A) 3
- B) 2
- C) 0
- D) 1

**Answer:** A

### Q49 (mcq)

Which statement is used to go to a labeled statement?

- A) `break`
- B) `continue`
- C) `return`
- D) `goto`

**Answer:** D

### Q50 (mcq)

What is the output of the following?

```c
int i = 0;
while (i < 3) {
    printf("%d", i);
    i++;
    if (i == 2) continue;
}
```

- A) 0 1 2
- B) 0 1
- C) 0 1 2 3
- D) 0 2

**Answer:** A

### Q51 (mcq)

What is the output of the following?

```c
int arr[5] = {1, 2, 3};
printf("%d", arr[4]);
```

- A) 0
- B) Garbage
- C) 3
- D) Error

**Answer:** A

### Q52 (mcq)

What is the output of the following?

```c
int arr[2][3] = {{1,2,3},{4,5,6}};
printf("%d", arr[0][1]);
```

- A) 1
- B) 2
- C) 4
- D) 5

**Answer:** B

### Q53 (mcq)

What does `strlen("")` return?

- A) 0
- B) 1
- C) -1
- D) Undefined

**Answer:** A

### Q54 (mcq)

Which function returns a pointer to the last occurrence of a character in a string?

- A) `strchr()`
- B) `strrchr()`
- C) `strstr()`
- D) `strpbrk()`

**Answer:** B

### Q55 (mcq)

What is the output of the following?

```c
char s[] = "Hello";
printf("%lu", sizeof(s));
```

- A) 5
- B) 6
- C) 4
- D) 7

**Answer:** B

### Q56 (mcq)

Which function appends at most n characters from source to destination?

- A) `strncat()`
- B) `strcat()`
- C) `strncpy()`
- D) `strcpy()`

**Answer:** A

### Q57 (mcq)

What is the output of the following?

```c
char s1[20] = "Hello";
char s2[] = "123";
strcat(s1, s2);
printf("%s", s1);
```

- A) Hello
- B) 123
- C) Hello123
- D) Hello 123

**Answer:** C

### Q58 (mcq)

What is the output of the following structure code?

```c
struct Employee {
    int id;
    char name[20];
} e1 = {101, "Amit"};
e1.id = 102;
printf("%d", e1.id);
```

- A) 101
- B) 102
- C) Amit
- D) Error

**Answer:** B

### Q59 (mcq)

How do you access structure member `salary` if `ptr` is a pointer to structure?

- A) `ptr.salary`
- B) `ptr->salary`
- C) `*ptr.salary`
- D) `&ptr.salary`

**Answer:** B

### Q60 (mcq)

What is the size of the following structure (with padding, 4-byte int)?

```c
struct Record {
    int x;
    char y;
    int z;
};
```

- A) 9 bytes
- B) 12 bytes
- C) 8 bytes
- D) 10 bytes

**Answer:** B

### Q61 (mcq)

Which of the following is TRUE about arrays of structures?

- A) They are declared like `struct Student s[10];`
- B) They cannot be initialized.
- C) They are stored in heap.
- D) They can only have integer members.

**Answer:** A

### Q62 (mcq)

What is a union in C?

- A) Similar to structure but shares memory for members
- B) Same as structure
- C) A pointer type
- D) Not valid in C

**Answer:** A

### Q63 (mcq)

What is the output of the following?

```c
struct Point {
    int x;
    int y;
} p1;
p1.x = 5;
printf("%d", p1.x);
```

- A) 5
- B) 0
- C) Garbage
- D) Error

**Answer:** A

### Q64 (mcq)

Which function finds the first occurrence of a substring in a string?

- A) `strstr()`
- B) `strchr()`
- C) `strpbrk()`
- D) `strspn()`

**Answer:** A

### Q65 (mcq)

What is the output of the following?

```c
int arr[2][2] = {0};
printf("%d", arr[0][1]);
```

- A) 0
- B) Garbage
- C) 1
- D) Error

**Answer:** A

### Q66 (mcq)

What is the terminating character of a string?

- A) `\0`
- B) `\n`
- C) `\r`
- D) `\t`

**Answer:** A

### Q67 (mcq)

Which of the following correctly initializes a 2D array with two rows and three columns?

- A) `int a[2][3] = {{1,2,3},{4,5,6}};`
- B) `int a[2][3] = {1,2,3,4,5,6};`
- C) Both A and B
- D) None

**Answer:** C

### Q68 (mcq)

What is the output of the following?

```c
char s[10] = "Hello";
strcpy(s, "Hi");
printf("%s", s);
```

- A) Hello
- B) Hi
- C) HelloHi
- D) Error

**Answer:** B

### Q69 (mcq)

What is the output of the following?

```c
struct {
    int a;
    int b;
} s1 = {1,2}, s2;
s2 = s1;
printf("%d", s2.b);
```

- A) 1
- B) 2
- C) 0
- D) Error

**Answer:** B

### Q70 (mcq)

What is the index of the last element in `int a[3][4]`?

- A) 2,3
- B) 3,4
- C) 2,4
- D) 3,3

**Answer:** A

### Q71 (mcq)

What is the output of the following?

```c
void modify(int *p) {
    *p = 20;
}
int main() {
    int x = 10;
    modify(&x);
    printf("%d", x);
}
```

- A) 10
- B) 20
- C) 0
- D) Error

**Answer:** B

### Q72 (mcq)

How do you pass a pointer to a function?

- A) By passing address
- B) By passing value
- C) By using `register`
- D) By using `static`

**Answer:** A

### Q73 (mcq)

What is the output of the following function?

```c
int factorial(int n) {
    if(n == 0) return 1;
    return n * factorial(n-1);
}
printf("%d", factorial(5));
```

- A) 120
- B) 24
- C) 5
- D) 0

**Answer:** A

### Q74 (mcq)

What is the main advantage of recursion over iteration?

- A) Uses less memory
- B) Simpler code for tree/traversal problems
- C) Faster execution
- D) No risk of stack overflow

**Answer:** B

### Q75 (mcq)

What is the output of the following recursive function for `pow(2, 3)`?

```c
int pow(int x, int y) {
    if(y == 0) return 1;
    return x * pow(x, y-1);
}
```

- A) 6
- B) 8
- C) 4
- D) 2

**Answer:** B

### Q76 (mcq)

What is the base case in the above function?

- A) `y == 0`
- B) `x * pow(x, y-1)`
- C) `pow(x, y-1)`
- D) `return 1`

**Answer:** A

### Q77 (mcq)

Which storage class makes a variable accessible across multiple files?

- A) `auto`
- B) `static`
- C) `extern`
- D) `register`

**Answer:** C

### Q78 (mcq)

Can a function return a pointer to a local variable?

- A) Yes, but it's dangerous as it becomes dangling
- B) No, compiler error
- C) Yes, always safe
- D) Only if declared static

**Answer:** A

### Q79 (mcq)

What is the output of the following?

```c
int mul(int a, int b) { return a * b; }
int main() {
    int result = mul(3, 4);
    printf("%d", result);
}
```

- A) 7
- B) 12
- C) 3
- D) 4

**Answer:** B

### Q80 (mcq)

What is the default return type if no return type is specified in C89?

- A) `int`
- B) `void`
- C) `char`
- D) `float`

**Answer:** A

### Q81 (mcq)

What is the output of the following?

```c
int func() {
    static int count = 0;
    count++;
    return count;
}
printf("%d", func());
printf("%d", func());
```

- A) 1 1
- B) 1 2
- C) 0 0
- D) 2 2

**Answer:** B

### Q82 (mcq)

Which function is the entry point of a C program?

- A) `start()`
- B) `main()`
- C) `begin()`
- D) `init()`

**Answer:** B

### Q83 (mcq)

What is the output of the following?

```c
int sum(int a, int b) { return a+b; }
int main() {
    printf("%d", sum(5, 10));
}
```

- A) 5
- B) 10
- C) 15
- D) 50

**Answer:** C

### Q84 (mcq)

Which of the following is NOT a valid function declaration?

- A) `int func(int, int);`
- B) `int func(int a, int b);`
- C) `func(int a, int b);`
- D) `int func();`

**Answer:** C

### Q85 (mcq)

What is the purpose of function prototypes?

- A) To inform compiler about function signature before definition
- B) To define the function body
- C) To call the function
- D) To allocate memory for function

**Answer:** A

### Q86 (mcq)

What is the output of the following?

```c
int x = 30;
int *p = &x;
int **q = &p;
printf("%d", *q == &x ? 1 : 0);
```

- A) 1
- B) 0
- C) Error
- D) Garbage

**Answer:** A

### Q87 (mcq)

What is a function pointer?

- A) Pointer that points to a function
- B) Pointer that points to data
- C) Pointer that is a function
- D) Not valid in C

**Answer:** A

### Q88 (mcq)

What is the output of the following?

```c
int arr[] = {2, 4, 6};
int *p = arr + 2;
printf("%d", *p);
```

- A) 2
- B) 4
- C) 6
- D) Error

**Answer:** C

### Q89 (mcq)

If `int *p` and `p` stores 3000, what is `p - 2` (int size 4)?

- A) 2992
- B) 2996
- C) 3000
- D) 2998

**Answer:** A

### Q90 (mcq)

Which of the following is TRUE about `void*` pointer?

- A) Cannot be dereferenced without casting
- B) Can be dereferenced directly
- C) Cannot point to any data
- D) Only points to functions

**Answer:** A

### Q91 (mcq)

What is the output of the following?

```c
char s[] = "Apple";
char *p = s + 3;
printf("%c", *p);
```

- A) A
- B) p
- C) l
- D) e

**Answer:** D

### Q92 (mcq)

What is a double pointer used for?

- A) To store address of another pointer
- B) To store value of variable
- C) To point to function
- D) To point to array

**Answer:** A

### Q93 (mcq)

What is the output of the following?

```c
int x = 5;
int *p = &x;
int *q = &x;
*p = 10;
printf("%d", *q);
```

- A) 5
- B) 10
- C) Address
- D) Garbage

**Answer:** B

### Q94 (mcq)

Which of the following is invalid pointer arithmetic?

- A) `ptr1 - ptr2`
- B) `ptr1 + ptr2`
- C) `ptr + 1`
- D) `ptr - 1`

**Answer:** B

### Q95 (mcq)

What is the size of a pointer on a 16‑bit system?

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 1 byte

**Answer:** A

### Q96 (mcq)

What is the output of the following?

```c
int a[2][2] = {{1,2},{3,4}};
int *p = &a[0][0];
printf("%d", *(p+2));
```

- A) 1
- B) 2
- C) 3
- D) 4

**Answer:** C

### Q97 (mcq)

How to declare a pointer to a function that takes no arguments and returns int?

- A) `int (*p)();`
- B) `int *p();`
- C) `int p();`
- D) `*p int();`

**Answer:** A

### Q98 (mcq)

What is the output of the following?

```c
int *p = NULL;
printf("%p", p);
```

- A) 0x0 (or (nil))
- B) Garbage
- C) Error
- D) Segmentation fault

**Answer:** A

### Q99 (mcq)

What is a dangling pointer?

- A) Pointer to a memory that has been freed
- B) NULL pointer
- C) Uninitialized pointer
- D) Pointer to constant

**Answer:** A

### Q100 (mcq)

What is the output of the following?

```c
int a[3] = {100, 200, 300};
int *p = a;
printf("%d", p[1]);
```

- A) 100
- B) 200
- C) 300
- D) Error

**Answer:** B

### Q101 (mcq)

A function is defined as:

- A) A collection of variables
- B) A self-contained block of code that performs a specific task
- C) A data structure
- D) A type of loop

**Answer:** B

### Q102 (mcq)

Which of the following is a Library Function in C?

- A) `add()`
- B) `subtract()`
- C) `printf()`
- D) `swap()`

**Answer:** C

### Q103 (mcq)

User-Defined Functions are:

- A) Functions provided by C
- B) Functions created by the programmer
- C) Functions that cannot be called
- D) Functions without a return type

**Answer:** B

### Q104 (mcq)

Which of the following is NOT an advantage of functions?

- A) Modularity
- B) Reusability
- C) Increased code duplication
- D) Ease of debugging

**Answer:** C

### Q105 (mcq)

The DRY Principle in functions stands for:

- A) Don't Run Yourself
- B) Don't Repeat Yourself
- C) Do Repeat Yourself
- D) Don't Return Yourself

**Answer:** B

### Q106 (mcq)

Functions help in modularity by:

- A) Making the program longer
- B) Breaking a large program into smaller, manageable modules
- C) Combining all code into one block
- D) Removing all loops

**Answer:** B

### Q107 (mcq)

Which advantage of functions allows different programmers to work on different parts simultaneously?

- A) Reusability
- B) Readability
- C) Team Development
- D) Memory Efficiency

**Answer:** C

### Q108 (mcq)

Functions save memory by:

- A) Duplicating code
- B) Executing shared code without duplicating it
- C) Using more variables
- D) Creating multiple copies

**Answer:** B

### Q109 (mcq)

The three parts of a function are:

- A) Declaration, Definition, Call
- B) Declaration, Initialization, Execution
- C) Definition, Execution, Return
- D) Call, Return, Print

**Answer:** A

### Q110 (mcq)

The function prototype tells the compiler about:

- A) The function's body
- B) The function's name, return type, and parameters
- C) The function's local variables
- D) The function's memory address

**Answer:** B

### Q111 (mcq)

What is the syntax of a function definition?

- A) `return_type function_name(parameter_list) { body }`
- B) `function_name(parameter_list) return_type { body }`
- C) `{ body } function_name(parameter_list) return_type`
- D) `return_type { body } function_name(parameter_list)`

**Answer:** A

### Q112 (mcq)

In the function `int add(int a, int b)`, what is the return type?

- A) `void`
- B) `int`
- C) `float`
- D) `char`

**Answer:** B

### Q113 (mcq)

In the function `int add(int a, int b)`, what are `a` and `b` called?

- A) Return values
- B) Local variables
- C) Parameters
- D) Global variables

**Answer:** C

### Q114 (mcq)

In Call by Value, what is passed to the formal parameter?

- A) The address of the variable
- B) A copy of the actual argument's value
- C) The variable itself
- D) A pointer

**Answer:** B

### Q115 (mcq)

In Call by Value, changes made inside the function:

- A) Affect the original variable
- B) Do not affect the original variable
- C) Cause a compilation error
- D) Affect all variables

**Answer:** B

### Q116 (mcq)

What is the default parameter passing mechanism in C?

- A) Call by Reference
- B) Call by Value
- C) Call by Address
- D) Call by Pointer

**Answer:** B

### Q117 (mcq)

In the example `void changeValue(int x) { x = 20; }`, if `a = 10` and `changeValue(a)` is called, what is the output of `printf("%d", a);`?

- A) 10
- B) 20
- C) 0
- D) Garbage value

**Answer:** A

### Q118 (mcq)

Call by Reference in C is simulated using:

- A) Arrays
- B) Pointers
- C) Structures
- D) Global variables

**Answer:** B

### Q119 (mcq)

In Call by Reference, what is passed to the function?

- A) The value of the variable
- B) The address of the variable
- C) A copy of the variable
- D) The variable name

**Answer:** B

### Q120 (mcq)

To modify the original variable in a function, the parameter must be:

- A) An integer
- B) A float
- C) A pointer
- D) A character

**Answer:** C

### Q121 (mcq)

In the swap function `void swap(int *x, int *y)`, `*x` is used to:

- A) Get the address of x
- B) Dereference x to get its value
- C) Assign a new address to x
- D) Increment x

**Answer:** B

### Q122 (mcq)

In the swap function, `swap(&a, &b)` passes:

- A) The values of a and b
- B) The addresses of a and b
- C) Copies of a and b
- D) The size of a and b

**Answer:** B

### Q123 (mcq)

What is the output of the swap program if `a = 5` and `b = 10` before the swap?

- A) a=5, b=10
- B) a=10, b=5
- C) a=0, b=0
- D) a=5, b=5

**Answer:** B

### Q124 (mcq)

Which parameter passing method protects the original variable from modification?

- A) Call by Reference
- B) Call by Value
- C) Call by Address
- D) Call by Pointer

**Answer:** B

### Q125 (mcq)

Which parameter passing method is faster for large structures?

- A) Call by Value
- B) Call by Reference
- C) Both are equally fast
- D) Depends on the data type

**Answer:** B

### Q126 (mcq)

In Call by Value, memory is:

- A) Shared between actual and formal parameters
- B) Separately allocated for the formal parameter
- C) Not allocated
- D) Freed immediately

**Answer:** B

### Q127 (mcq)

In Call by Reference, the pointer variable stores:

- A) The value of the variable
- B) The address of the variable
- C) A copy of the variable
- D) The size of the variable

**Answer:** B

### Q128 (mcq)

The `return` statement in a function:

- A) Continues the function execution
- B) Exits the function immediately
- C) Restarts the function
- D) Skips the next statement

**Answer:** B

### Q129 (mcq)

A function with return type `void`:

- A) Returns an integer
- B) Returns a float
- C) Returns nothing
- D) Returns a character

**Answer:** C

### Q130 (mcq)

Which of the following is a valid function with `void` return type?

- A) `int add(int a, int b) { return a+b; }`
- B) `void printHello() { printf("Hello"); }`
- C) `float area(float r) { return 3.14*r*r; }`
- D) `char* getName() { return "John"; }`

**Answer:** B

### Q131 (mcq)

A function can return how many values directly?

- A) 0
- B) 1
- C) 2
- D) Multiple

**Answer:** B

### Q132 (mcq)

How can a function return multiple values indirectly?

- A) Using global variables
- B) Using pointers (Call by Reference)
- C) Using multiple return statements
- D) Using void functions

**Answer:** B

### Q133 (mcq)

In `void calculate(int a, int b, int *sum, int *diff)`, `sum` and `diff` are:

- A) Return values
- B) Pointers used to return multiple values
- C) Local variables
- D) Global variables

**Answer:** B

### Q134 (mcq)

C allows:

- A) Nested function definitions
- B) Nested function calls
- C) Both nested definitions and calls
- D) Neither

**Answer:** B

### Q135 (mcq)

Nested function calls means:

- A) Defining one function inside another
- B) Calling one function from inside another function
- C) A function calling itself
- D) Two functions calling each other

**Answer:** B

### Q136 (mcq)

In `calculate(3, 2)` calling `add(3, 2)` and then `multiply(5, 2)`, this is an example of:

- A) Recursion
- B) Nested function calls
- C) Infinite loop
- D) Call by Reference

**Answer:** B

### Q137 (mcq)

What is the output of the nested call example: `calculate(3, 2)` where `calculate` does `add(x, y)` then `multiply(sum, y)`?

- A) 5
- B) 6
- C) 10
- D) 12

**Answer:** C

### Q138 (mcq)

Recursion is a technique where a function:

- A) Calls another function
- B) Calls itself
- C) Is defined inside another function
- D) Has no return statement

**Answer:** B

### Q139 (mcq)

A recursive function must have:

- A) Only a recursive case
- B) Only a base case
- C) Both a base case and a recursive case
- D) No cases

**Answer:** C

### Q140 (mcq)

The base case in recursion:

- A) Calls the function again
- B) Stops the recursion and returns a direct answer
- C) Increases the recursion depth
- D) Causes infinite recursion

**Answer:** B

### Q141 (mcq)

The recursive case in recursion:

- A) Stops the recursion
- B) Calls the function with a modified input toward the base case
- C) Returns immediately
- D) Has no effect

**Answer:** B

### Q142 (mcq)

What is the base case for the factorial recursive function?

- A) `n == 1`
- B) `n == 0`
- C) `n < 0`
- D) Both A and B are correct

**Answer:** A

### Q143 (mcq)

What is the factorial of 5 using recursion?

- A) 60
- B) 120
- C) 24
- D) 720

**Answer:** B

### Q144 (mcq)

In recursive factorial, `factorial(5)` calls:

- A) `factorial(6)`
- B) `factorial(4)`
- C) `factorial(3)`
- D) `factorial(2)`

**Answer:** B

### Q145 (mcq)

The time complexity of recursive factorial is:

- A) O(1)
- B) O(n)
- C) O(n²)
- D) O(2ⁿ)

**Answer:** B

### Q146 (mcq)

Each recursive call creates a new:

- A) Variable
- B) Activation record (stack frame)
- C) Function
- D) Loop

**Answer:** B

### Q147 (mcq)

Excessive recursion can lead to:

- A) Faster execution
- B) Stack Overflow
- C) Memory optimization
- D) Infinite loop

**Answer:** B

### Q148 (mcq)

What is the Fibonacci series base case for `n == 0`?

- A) 0
- B) 1
- C) -1
- D) Undefined

**Answer:** A

### Q149 (mcq)

What is the Fibonacci series base case for `n == 1`?

- A) 0
- B) 1
- C) -1
- D) Undefined

**Answer:** B

### Q150 (mcq)

What is `fibonacci(5)`?

- A) 3
- B) 5
- C) 8
- D) 13

**Answer:** B

### Q151 (mcq)

The time complexity of recursive Fibonacci is:

- A) O(n)
- B) O(n²)
- C) O(2ⁿ)
- D) O(log n)

**Answer:** C

### Q152 (mcq)

Recursive code is generally:

- A) Longer and more verbose than iterative
- B) Shorter and cleaner than iterative
- C) The same length as iterative
- D) Not comparable

**Answer:** B

### Q153 (mcq)

Iterative code uses:

- A) High memory (stack frames)
- B) Low memory (constant memory)
- C) No memory
- D) Only recursion

**Answer:** B

### Q154 (mcq)

Recursive code has higher memory usage because:

- A) It uses more variables
- B) Each call creates a stack frame
- C) It uses global memory
- D) It uses heap memory

**Answer:** B

### Q155 (mcq)

Recursive code is generally:

- A) Faster than iterative
- B) Slower than iterative (due to function call overhead)
- C) The same speed as iterative
- D) Not comparable

**Answer:** B

### Q156 (mcq)

Recursion is best for:

- A) Simple repetitions
- B) Tree/Graph traversals and Divide-and-Conquer
- C) Mathematical computations only
- D) All problems equally

**Answer:** B

### Q157 (mcq)

Iteration is best for:

- A) Tree traversals
- B) Simple repetitions and mathematical computations
- C) Recursive problems only
- D) Graph problems

**Answer:** B

### Q158 (mcq)

What happens if the base case is missing in a recursive function?

- A) The function runs once
- B) Infinite recursion leading to stack overflow
- C) The function returns 0
- D) Compilation error

**Answer:** B

### Q159 (mcq)

In the factorial recursion, the call stack unwinds:

- A) From the base case back to the original call
- B) From the original call to the base case
- C) In a random order
- D) Only once

**Answer:** A

### Q160 (mcq)

In the mermaid diagram for factorial recursion, `factorial(5)` returns:

- A) 5 \* factorial(4)
- B) 5 + factorial(4)
- C) 5 / factorial(4)
- D) 5 - factorial(4)

**Answer:** A

### Q161 (mcq)

The function declaration is also called:

- A) Function definition
- B) Function prototype
- C) Function call
- D) Function body

**Answer:** B

### Q162 (mcq)

Which of the following is a function prototype for `add`?

- A) `int add(int a, int b) { return a+b; }`
- B) `int add(int a, int b);`
- C) `add(5, 3);`
- D) `void add(int a, int b);`

**Answer:** B

### Q163 (mcq)

If a function is defined before it is called, the prototype is:

- A) Mandatory
- B) Optional
- C) Not allowed
- D) Always required

**Answer:** B

### Q164 (mcq)

Which of the following is TRUE about the `return` statement?

- A) A function can have multiple return statements
- B) A function cannot have multiple return statements
- C) The return statement is optional for all functions
- D) The return statement must be the last line

**Answer:** A

### Q165 (mcq)

In `int* getAddress()`, the function returns:

- A) An integer
- B) A pointer to an integer
- C) A float
- D) A character

**Answer:** B

### Q166 (mcq)

Returning a pointer to a local variable is:

- A) Safe
- B) Dangerous (local variable goes out of scope)
- C) Recommended
- D) Not possible

**Answer:** B

### Q167 (mcq)

The call stack in recursion stores:

- A) Only the return values
- B) Local variables and return addresses for each call
- C) Only the function names
- D) Only the parameters

**Answer:** B

### Q168 (mcq)

What is the output of `factorial(0)` in the recursive factorial function?

- A) 0
- B) 1
- C) -1
- D) Undefined

**Answer:** B

### Q169 (mcq)

What is the output of `factorial(3)`?

- A) 3
- B) 6
- C) 9
- D) 12

**Answer:** B

### Q170 (mcq)

In the recursive factorial, the expression `n * factorial(n - 1)` is:

- A) The base case
- B) The recursive case
- C) The return statement
- D) The function call

**Answer:** B

### Q171 (mcq)

Which of the following is an advantage of recursion?

- A) Lower memory usage
- B) Faster execution
- C) Elegant solution for problems with recursive structure
- D) No risk of stack overflow

**Answer:** C

### Q172 (mcq)

Which of the following is a disadvantage of recursion?

- A) Code becomes longer
- B) Risk of stack overflow
- C) Cannot solve complex problems
- D) Not suitable for any problem

**Answer:** B

### Q173 (mcq)

In the Fibonacci recursion, `fibonacci(4)` calls:

- A) `fibonacci(3)` and `fibonacci(2)`
- B) `fibonacci(5)` and `fibonacci(3)`
- C) `fibonacci(3)` only
- D) `fibonacci(2)` only

**Answer:** A

### Q174 (mcq)

The recurrence relation for recursive factorial is:

- A) T(n) = T(n-1) + O(n)
- B) T(n) = T(n-1) + O(1)
- C) T(n) = T(n/2) + O(1)
- D) T(n) = 2T(n-1) + O(1)

**Answer:** B

### Q175 (mcq)

The recurrence relation for recursive Fibonacci is:

- A) T(n) = T(n-1) + O(1)
- B) T(n) = T(n-1) + T(n-2) + O(1)
- C) T(n) = T(n/2) + O(1)
- D) T(n) = 2T(n-1) + O(1)

**Answer:** B

### Q176 (mcq)

A function can be called from:

- A) Only main()
- B) Only other functions
- C) Any function including main() and itself
- D) Only from global scope

**Answer:** C

### Q177 (mcq)

In Call by Value, the formal parameter is:

- A) A pointer
- B) A separate memory location holding a copy
- C) The actual variable
- D) A global variable

**Answer:** B

### Q178 (mcq)

In Call by Reference, the formal parameter is:

- A) An integer
- B) A pointer
- C) A float
- D) A character

**Answer:** B

### Q179 (mcq)

The `&` operator in `swap(&a, &b)` is used to:

- A) Get the value of a
- B) Get the address of a
- C) Dereference a
- D) Increment a

**Answer:** B

### Q180 (mcq)

The `*` operator in `*x = *y` is used to:

- A) Get the address of x
- B) Dereference x to get its value
- C) Assign a new address to x
- D) Increment x

**Answer:** B

### Q181 (mcq)

Which of the following is NOT a valid return type for a function in C?

- A) `void`
- B) `int`
- C) `string`
- D) `float`

**Answer:** C

### Q182 (mcq)

In C, `char*` is used to return:

- A) A single character
- B) A string (character pointer)
- C) An integer
- D) A float

**Answer:** B

### Q183 (mcq)

A function with return type `struct Student`:

- A) Returns a pointer to a structure
- B) Returns an entire structure by value
- C) Returns an integer
- D) Returns nothing

**Answer:** B

### Q184 (mcq)

The `return` statement can appear:

- A) Only at the end of the function
- B) Anywhere in the function
- C) Only in main()
- D) Only in loops

**Answer:** B

### Q185 (mcq)

What is the purpose of the function prototype?

- A) To define the function body
- B) To inform the compiler about the function before it is called
- C) To call the function
- D) To return a value

**Answer:** B

### Q186 (mcq)

In nested calls, the call stack grows:

- A) With each function call
- B) With each return
- C) In a random order
- D) Only with recursive calls

**Answer:** A

### Q187 (mcq)

The call stack in nested calls unwinds:

- A) From the first call to the last
- B) From the last call back to the first
- C) In a random order
- D) Only with recursive calls

**Answer:** B

### Q188 (mcq)

Recursion is a type of:

- A) Iteration
- B) Function calling itself
- C) Array manipulation
- D) Structure definition

**Answer:** B

### Q189 (mcq)

Which of the following problems is best solved using recursion?

- A) Sum of array elements
- B) Factorial
- C) Finding maximum in array
- D) Simple addition

**Answer:** B

### Q190 (mcq)

Which of the following problems is best solved using iteration?

- A) Tree traversal
- B) Graph traversal
- C) Sum of first n numbers
- D) Fibonacci

**Answer:** C

### Q191 (mcq)

The term "activation record" refers to:

- A) A file on disk
- B) A stack frame created for each function call
- C) A global variable
- D) A loop iteration

**Answer:** B

### Q192 (mcq)

In the factorial recursion, the multiplication happens:

- A) Before the recursive call
- B) After the recursive call returns
- C) During the recursive call
- D) At the base case

**Answer:** B

### Q193 (mcq)

In the Fibonacci recursion, the addition happens:

- A) Before the recursive calls
- B) After the recursive calls return
- C) During the recursive calls
- D) At the base case

**Answer:** B

### Q194 (mcq)

A function with no return statement and return type `void`:

- A) Causes a compilation error
- B) Executes and returns automatically
- C) Returns garbage value
- D) Returns 0

**Answer:** B

### Q195 (mcq)

Which of the following is TRUE about function parameters in C?

- A) All parameters are passed by reference
- B) All parameters are passed by value (by default)
- C) Parameters cannot be modified
- D) Parameters are global

**Answer:** B

### Q196 (mcq)

In the swap function, after `swap(&a, &b)`, the values of a and b:

- A) Remain unchanged
- B) Are swapped
- C) Become 0
- D) Become garbage

**Answer:** B

### Q197 (mcq)

Which of the following would NOT cause infinite recursion?

- A) Missing base case
- B) Base case never reached
- C) Proper base case with decreasing input
- D) Recursive case that doesn't change the input

**Answer:** C

### Q198 (mcq)

The `fibonacci(2)` using recursion returns:

- A) 0
- B) 1
- C) 2
- D) 3

**Answer:** B

### Q199 (mcq)

The `fibonacci(3)` using recursion returns:

- A) 1
- B) 2
- C) 3
- D) 5

**Answer:** B

### Q200 (mcq)

Which of the following is a valid recursive function structure?

- A) `if (base_condition) return base_value; else return recursive_call;`
- B) `while (condition) recursive_call;`
- C) `for (i=0; i<n; i++) recursive_call;`
- D) `return recursive_call;` (without base case)

**Answer:** A
