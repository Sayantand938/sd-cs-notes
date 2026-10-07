# Operators — Questions (EN)

## Section 1: Basic Structure (Questions 1-15)

### Q1 (mcq)

Which of the following is NOT a valid character in C character set?

- A) Letters A-Z and a-z
- B) Digits 0-9
- C) Special characters like @, #, $
- D) White spaces

**Answer:** D

### Q2 (mcq)

Which of the following is a valid identifier in C?

- A) `1st_number`
- B) `first_number`
- C) `first number`
- D) `int`

**Answer:** B

### Q3 (mcq)

How many keywords are there in standard C (ANSI C)?

- A) 32
- B) 48
- C) 64
- D) 16

**Answer:** A

### Q4 (mcq)

Which of the following is NOT a valid constant in C?

- A) `123`
- B) `3.14`
- C) `'A'`
- D) `"Hello`

**Answer:** D

### Q5 (mcq)

What is the size of `int` data type in 32-bit C compiler?

- A) 1 byte
- B) 2 bytes
- C) 4 bytes
- D) 8 bytes

**Answer:** C

### Q6 (mcq)

Which preprocessor directive is used to define a macro?

- A) `#include`
- B) `#define`
- C) `#undef`
- D) `#ifdef`

**Answer:** B

### Q7 (mcq)

What is the output of the following preprocessor code?

```c
#define PI 3.14
#define AREA(r) (PI * r * r)
printf("%.2f", AREA(3));
```

- A) 28.26
- B) 28.27
- C) 28.26
- D) Compilation Error

**Answer:** A

### Q8 (mcq)

Which of the following correctly defines a character constant?

- A) `"A"`
- B) `'A'`
- C) `A`
- D) `\A`

**Answer:** B

### Q9 (mcq)

What is the difference between `const` and `#define`?

- A) `const` is a preprocessor directive while `#define` is a keyword
- B) `#define` is processed by preprocessor, `const` by compiler
- C) Both are processed by compiler
- D) Both are processed by preprocessor

**Answer:** B

### Q10 (mcq)

Which of the following is NOT a valid data type in C?

- A) `int`
- B) `float`
- C) `char`
- D) `string`

**Answer:** D

### Q11 (mcq)

What will be the size of the variable `short int` on a 16-bit system?

- A) 1 byte
- B) 2 bytes
- C) 4 bytes
- D) 8 bytes

**Answer:** B

### Q12 (mcq)

Which of the following is TRUE about global variables?

- A) They are declared inside a function
- B) They have default value 0 if not initialized
- C) They cannot be accessed outside the file
- D) They are stored in the stack

**Answer:** B

### Q13 (mcq)

What is the range of `unsigned char` data type?

- A) -128 to 127
- B) 0 to 255
- C) -32768 to 32767
- D) 0 to 65535

**Answer:** B

### Q14 (mcq)

Which header file is required for standard input/output operations?

- A) `#include <math.h>`
- B) `#include <string.h>`
- C) `#include <stdio.h>`
- D) `#include <stdlib.h>`

**Answer:** C

### Q15 (mcq)

What is the purpose of the `#undef` directive?

- A) To define a new macro
- B) To remove a previously defined macro
- C) To include a header file
- D) To check if a macro is defined

**Answer:** B

## Section 2: Operators (Questions 16-35)

### Q16 (mcq)

What is the output of `10 % 3`?

- A) 3
- B) 1
- C) 0
- D) 2

**Answer:** B

### Q17 (mcq)

Which operator is used for logical AND?

- A) `&`
- B) `&&`
- C) `and`
- D) `||`

**Answer:** B

### Q18 (mcq)

What is the value of `x` after `int x = 5; x += 3;`?

- A) 5
- B) 8
- C) 3
- D) 15

**Answer:** B

### Q19 (mcq)

What is the output of `int x = 5; printf("%d", ++x);`?

- A) 5
- B) 6
- C) 4
- D) Error

**Answer:** B

### Q20 (mcq)

Which operator has the highest precedence?

- A) `+`
- B) `*`
- C) `()`
- D) `++`

**Answer:** D

### Q21 (mcq)

What is the output of `int x = 5; int y = x++; printf("%d %d", x, y);`?

- A) 5 5
- B) 6 5
- C) 6 6
- D) 5 6

**Answer:** B

### Q22 (mcq)

Which of the following is a Relational Operator?

- A) `=`
- B) `==`
- C) `&&`
- D) `+=`

**Answer:** B

### Q23 (mcq)

What is the value of the expression `(5 > 3) && (4 < 2)`?

- A) 0
- B) 1
- C) 5
- D) 4

**Answer:** A

### Q24 (mcq)

Which escape sequence represents a newline character?

- A) `\n`
- B) `\t`
- C) `\r`
- D) `\a`

**Answer:** A

### Q25 (mcq)

What is the output of `printf("%d", 5 & 3);` (bitwise AND)?

- A) 1
- B) 7
- C) 5
- D) 3

**Answer:** A

### Q26 (mcq)

Which format specifier is used to print a floating-point number?

- A) `%d`
- B) `%f`
- C) `%c`
- D) `%s`

**Answer:** B

### Q27 (mcq)

What is the output of `int x = 5; printf("%d", x << 1);` (left shift)?

- A) 5
- B) 10
- C) 4
- D) 3

**Answer:** B

### Q28 (mcq)

Which operator is known as the conditional operator?

- A) `? :`
- B) `::`
- C) `?:`
- D) `?`

**Answer:** A

### Q29 (mcq)

What is the output of `int x = 5; printf("%d", (x > 3) ? 10 : 20);`?

- A) 5
- B) 10
- C) 20
- D) Error

**Answer:** B

### Q30 (mcq)

What is the result of implicit type conversion in `int x = 5.7;`?

- A) 5
- B) 6
- C) 5.7
- D) Error

**Answer:** A

### Q31 (mcq)

Which of the following is NOT an assignment operator?

- A) `=`
- B) `+=`
- C) `==`
- D) `*=`

**Answer:** C

### Q32 (mcq)

What is the output of `printf("%5.2f", 3.14159);`?

- A) `3.14`
- B) `3.14159`
- C) `3.142`
- D) ` 3.14`

**Answer:** A

### Q33 (mcq)

Which of the following correctly reads a character using `scanf`?

- A) `scanf("%d", &ch);`
- B) `scanf("%c", &ch);`
- C) `scanf("%s", ch);`
- D) `scanf("%f", &ch);`

**Answer:** B

### Q34 (mcq)

What is the value of `(5, 10, 15)` using the comma operator?

- A) 5
- B) 10
- C) 15
- D) Error

**Answer:** C

### Q35 (mcq)

Which escape sequence produces a beep sound?

- A) `\n`
- B) `\t`
- C) `\a`
- D) `\r`

**Answer:** C

## Section 3: Branching and Looping (Questions 36-50)

### Q36 (mcq)

What will be the output of the following code?

```c
int x = 10;
if(x > 5)
    printf("A");
else
    printf("B");
```

- A) A
- B) B
- C) AB
- D) No output

**Answer:** A

### Q37 (mcq)

How many times will the following loop execute?

```c
int i = 0;
while(i < 5) {
    i++;
}
```

- A) 4
- B) 5
- C) 6
- D) Infinite

**Answer:** B

### Q38 (mcq)

What is the output of the following code?

```c
int x = 0;
if(x)
    printf("True");
else
    printf("False");
```

- A) True
- B) False
- C) Error
- D) No output

**Answer:** B

### Q39 (mcq)

Which loop is guaranteed to execute at least once?

- A) `for`
- B) `while`
- C) `do-while`
- D) None of the above

**Answer:** C

### Q40 (mcq)

What will be the output of the following `for` loop?

```c
for(int i=0; i<3; i++)
    printf("%d ", i);
```

- A) 0 1 2
- B) 1 2 3
- C) 0 1 2 3
- D) 1 2

**Answer:** A

### Q41 (mcq)

What is the output of the following `switch` statement?

```c
int x = 2;
switch(x) {
    case 1: printf("One");
    case 2: printf("Two");
    default: printf("Default");
}
```

- A) One
- B) Two
- C) TwoDefault
- D) Default

**Answer:** C

### Q42 (mcq)

What does the `break` statement do in a loop?

- A) Exits the loop immediately
- B) Continues to the next iteration
- C) Restarts the loop
- D) Does nothing

**Answer:** A

### Q43 (mcq)

How many times will the following loop execute?

```c
int i = 5;
do {
    i--;
} while(i > 0);
```

- A) 4
- B) 5
- C) 6
- D) Infinite

**Answer:** B

### Q44 (mcq)

What is the output of the following code?

```c
int x = 10;
if(x = 5)
    printf("Yes");
else
    printf("No");
```

- A) Yes
- B) No
- C) Error
- D) YesNo

**Answer:** A

### Q45 (mcq)

What is the use of `continue` statement?

- A) Exits the loop
- B) Skips the current iteration
- C) Restarts the loop
- D) Ends the program

**Answer:** B

### Q46 (mcq)

Which of the following is an infinite loop?

- A) `for(i=0; i<10; i++)`
- B) `for(;;)`
- C) `while(i<10)`
- D) `do-while(i<10)`

**Answer:** B

### Q47 (mcq)

What is the output of the following code?

```c
int i;
for(i=0; i<3; i++) {
    if(i==1) continue;
    printf("%d", i);
}
```

- A) 0 1 2
- B) 0 2
- C) 1 2
- D) 0 1

**Answer:** B

### Q48 (mcq)

Which statement is used for multi-way branching?

- A) `if-else`
- B) `switch-case`
- C) `while`
- D) `for`

**Answer:** B

### Q49 (mcq)

What is the output of the following nested loop?

```c
for(int i=0; i<2; i++) {
    for(int j=0; j<2; j++) {
        printf("*");
    }
}
```

- A) `**`
- B) `***`
- C) `****`
- D) `*`

**Answer:** C

### Q50 (mcq)

What is the output of the following code?

```c
int x = 1;
while(x <= 3) {
    printf("%d", x);
    x++;
}
```

- A) 1 2 3
- B) 1 2 3 4
- C) 0 1 2
- D) 2 3 4

**Answer:** A

## Section 4: Arrays and Structures (Questions 51-70)

### Q51 (mcq)

What is the index of the first element in an array?

- A) 1
- B) 0
- C) -1
- D) Depends on declaration

**Answer:** B

### Q52 (mcq)

What is the size of `int arr[5]` in a 32-bit system?

- A) 5 bytes
- B) 10 bytes
- C) 20 bytes
- D) 40 bytes

**Answer:** C

### Q53 (mcq)

What will be the output?

```c
int arr[3] = {1, 2, 3};
printf("%d", arr[2]);
```

- A) 1
- B) 2
- C) 3
- D) Error

**Answer:** C

### Q54 (mcq)

How is a 2D array stored in memory?

- A) Column-major order
- B) Row-major order
- C) Random order
- D) Diagonal order

**Answer:** B

### Q55 (mcq)

What is the output of the following code?

```c
char str[5] = "Hello";
printf("%lu", sizeof(str));
```

- A) 5
- B) 6
- C) 4
- D) 10

**Answer:** B

### Q56 (mcq)

Which function is used to find the length of a string?

- A) `strlen()`
- B) `strlength()`
- C) `length()`
- D) `sizeof()`

**Answer:** A

### Q57 (mcq)

What is the output of the following?

```c
char str[20] = "Hello";
strcat(str, " World");
printf("%s", str);
```

- A) Hello
- B) World
- C) Hello World
- D) HelloWorld

**Answer:** C

### Q58 (mcq)

Which function compares two strings?

- A) `strcmp()`
- B) `strcat()`
- C) `strcpy()`
- D) `strlen()`

**Answer:** A

### Q59 (mcq)

What is the output of the following?

```c
struct Student {
    int roll;
    char name[20];
} s1 = {1, "John"};
printf("%d", s1.roll);
```

- A) 1
- B) John
- C) Error
- D) 2

**Answer:** A

### Q60 (mcq)

What is the correct way to access structure member `name` using pointer `ptr`?

- A) `ptr.name`
- B) `ptr->name`
- C) `*ptr.name`
- D) `&ptr.name`

**Answer:** B

### Q61 (mcq)

What is the output of the following code?

```c
int arr[2][3] = {{1,2,3},{4,5,6}};
printf("%d", arr[1][2]);
```

- A) 2
- B) 3
- C) 5
- D) 6

**Answer:** D

### Q62 (mcq)

Which of the following correctly initializes a structure?

- A) `struct s1 = {10, "John"};`
- B) `struct Student s1 = {10, "John"};`
- C) `Student s1 = (10, "John");`
- D) `s1 = {10, "John"};`

**Answer:** B

### Q63 (mcq)

What does `strcpy(dest, src)` do?

- A) Compares two strings
- B) Copies src to dest
- C) Appends src to dest
- D) Returns length of src

**Answer:** B

### Q64 (mcq)

What is the output of the following?

```c
struct {
    int x;
    int y;
} p1 = {5, 10};
printf("%d", p1.y);
```

- A) 5
- B) 10
- C) Error
- D) p1.y

**Answer:** B

### Q65 (mcq)

How is an array of structures declared?

- A) `struct Student[10] s;`
- B) `struct Student s[10];`
- C) `Student s[10];`
- D) `struct s[10] Student;`

**Answer:** B

### Q66 (mcq)

What is the output of the following?

```c
char str[20] = "Hello";
printf("%lu", strlen(str));
```

- A) 4
- B) 5
- C) 6
- D) 20

**Answer:** B

### Q67 (mcq)

Which function concatenates strings in C?

- A) `strcat()`
- B) `strcpy()`
- C) `strcmp()`
- D) `strlen()`

**Answer:** A

### Q68 (mcq)

What is the size of the following structure (assuming 4-byte int)?

```c
struct Test {
    int a;
    char b;
    int c;
};
```

- A) 9 bytes
- B) 12 bytes
- C) 8 bytes
- D) 10 bytes

**Answer:** B

### Q69 (mcq)

What is a nested structure?

- A) Structure containing another structure
- B) Array of structures
- C) Structure with pointers
- D) Structure without members

**Answer:** A

### Q70 (mcq)

Which of the following is TRUE about array initialization?

- A) `int arr[5] = {0};` initializes all elements to 0
- B) `int arr[5] = {};` is valid
- C) `int arr[5] = {1,2,3};` leaves rest uninitialized
- D) All of the above

**Answer:** A

## Section 5: User-Defined Functions (Questions 71-85)

### Q71 (mcq)

What is a function prototype?

- A) Function definition
- B) Function declaration
- C) Function call
- D) Function return

**Answer:** B

### Q72 (mcq)

What is the default return type of a function in C (if not specified)?

- A) `void`
- B) `int`
- C) `char`
- D) `float`

**Answer:** B

### Q73 (mcq)

What is call by value?

- A) Passing address of variable
- B) Passing value of variable
- C) Passing reference
- D) Passing pointer

**Answer:** B

### Q74 (mcq)

In call by value, changes to formal parameters affect actual parameters?

- A) Yes, always
- B) No, never
- C) Sometimes
- D) Only for arrays

**Answer:** B

### Q75 (mcq)

How is call by reference achieved in C?

- A) By passing values
- B) By passing addresses using pointers
- C) By using global variables
- D) By using reference variables

**Answer:** B

### Q76 (mcq)

What is the output of the following?

```c
void change(int x) {
    x = 10;
}
int main() {
    int a = 5;
    change(a);
    printf("%d", a);
}
```

- A) 10
- B) 5
- C) 0
- D) Error

**Answer:** B

### Q77 (mcq)

What is a recursive function?

- A) Function that calls itself
- B) Function that calls another function
- C) Function with no parameters
- D) Function with no return

**Answer:** A

### Q78 (mcq)

What is the output of the following recursive function?

```c
int fact(int n) {
    if(n == 0) return 1;
    return n * fact(n-1);
}
// fact(4)
```

- A) 4
- B) 12
- C) 24
- D) 6

**Answer:** C

### Q79 (mcq)

What is the base case in recursion?

- A) The condition that terminates recursion
- B) The function call
- C) The return statement
- D) The parameter list

**Answer:** A

### Q80 (mcq)

What is the main advantage of recursion?

- A) Faster execution
- B) Less memory usage
- C) Simpler solution for complex problems
- D) No function calls

**Answer:** C

### Q81 (mcq)

What is nesting of functions?

- A) Calling one function inside another
- B) Defining function inside another
- C) Recursive function
- D) Function with no parameters

**Answer:** A

### Q82 (mcq)

Which of the following is TRUE about functions in C?

- A) Functions can be nested (defined inside another function)
- B) Functions cannot be nested
- C) Functions must return a value
- D) Functions cannot be called from main

**Answer:** B

### Q83 (mcq)

What happens when a function returns without specifying a return value (except main)?

- A) Compilation error
- B) Undefined behavior
- C) Returns 0
- D) Returns -1

**Answer:** B

### Q84 (mcq)

What is the output of the following?

```c
int sum(int a, int b) {
    return a + b;
}
int main() {
    int result = sum(3, 4);
    printf("%d", result);
}
```

- A) 3
- B) 4
- C) 7
- D) Error

**Answer:** C

### Q85 (mcq)

What is the main function in C?

- A) The first function to execute
- B) A user-defined function
- C) A preprocessor directive
- D) A header file

**Answer:** A

## Section 6: Pointers (Questions 86-100)

### Q86 (mcq)

What is a pointer?

- A) A variable that stores address of another variable
- B) A variable that stores value
- C) A keyword
- D) A data type

**Answer:** A

### Q87 (mcq)

Which operator is used to get the address of a variable?

- A) `*`
- B) `&`
- C) `->`
- D) `#`

**Answer:** B

### Q88 (mcq)

Which operator is used to access value at an address?

- A) `*`
- B) `&`
- C) `->`
- D) `#`

**Answer:** A

### Q89 (mcq)

What is the output of the following?

```c
int x = 5;
int *ptr = &x;
printf("%d", *ptr);
```

- A) Address of x
- B) 5
- C) 0
- D) Error

**Answer:** B

### Q90 (mcq)

What is the size of a pointer on a 64-bit system?

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** C

### Q91 (mcq)

What is `NULL` pointer?

- A) Pointer pointing to 0 address
- B) Pointer not pointing to any valid memory
- C) Uninitialized pointer
- D) Pointer to main function

**Answer:** B

### Q92 (mcq)

What is pointer arithmetic?

- A) Adding two pointers
- B) Performing arithmetic on pointer values
- C) Multiplying pointers
- D) Dividing pointers

**Answer:** B

### Q93 (mcq)

If `ptr` points to address 1000 and `int` is 4 bytes, what is `ptr + 1`?

- A) 1001
- B) 1004
- C) 1000
- D) 1008

**Answer:** B

### Q94 (mcq)

How are arrays and pointers related?

- A) Array name is a constant pointer to first element
- B) Arrays and pointers are different
- C) Arrays store addresses
- D) Pointers cannot point to arrays

**Answer:** A

### Q95 (mcq)

What is the output of the following?

```c
int arr[] = {10, 20, 30};
printf("%d", *(arr + 1));
```

- A) 10
- B) 20
- C) 30
- D) Error

**Answer:** B

### Q96 (mcq)

How to declare a pointer to a function?

- A) `int (*ptr)(int)`
- B) `int *ptr(int)`
- C) `int ptr(*int)`
- D) `ptr int(*)`

**Answer:** A

### Q97 (mcq)

What is the output of the following?

```c
char str[] = "Hello";
char *ptr = str;
printf("%c", *(ptr + 1));
```

- A) H
- B) e
- C) l
- D) o

**Answer:** B

### Q98 (mcq)

Which of the following is TRUE about void pointers?

- A) They can point to any data type
- B) They cannot be dereferenced
- C) They require typecasting for dereferencing
- D) All of the above

**Answer:** D

### Q99 (mcq)

What is the output of the following?

```c
int x = 5;
int *ptr = &x;
*ptr = 10;
printf("%d", x);
```

- A) 5
- B) 10
- C) Address of x
- D) Error

**Answer:** B

### Q100 (mcq)

What is a dangling pointer?

- A) Pointer pointing to freed/deallocated memory
- B) NULL pointer
- C) Wild pointer
- D) Pointer to constant

**Answer:** A

### Q101 (mcq)

What is an operator in programming?

- A) A variable that stores data
- B) A symbol that tells the compiler to perform specific operations on operands
- C) A function that returns a value
- D) A loop that repeats code

**Answer:** B

### Q102 (mcq)

In the expression `a + b`, what is `+` called?

- A) Operand
- B) Operator
- C) Variable
- D) Expression

**Answer:** B

### Q103 (mcq)

In the expression `a + b`, what are `a` and `b` called?

- A) Operators
- B) Operands
- C) Results
- D) Statements

**Answer:** B

### Q104 (mcq)

Based on the number of operands, operators are classified into which types?

- A) Unary, Binary, Ternary
- B) Integer, Float, Character
- C) Arithmetic, Logical, Relational
- D) Simple, Complex, Conditional

**Answer:** A

### Q105 (mcq)

A Unary operator acts on how many operands?

- A) 0
- B) 1
- C) 2
- D) 3

**Answer:** B

### Q106 (mcq)

A Binary operator acts on how many operands?

- A) 0
- B) 1
- C) 2
- D) 3

**Answer:** C

### Q107 (mcq)

A Ternary operator acts on how many operands?

- A) 0
- B) 1
- C) 2
- D) 3

**Answer:** D

### Q108 (mcq)

Which of the following is a Unary operator?

- A) `+`
- B) `-` (as unary minus)
- C) `*`
- D) `/`

**Answer:** B

### Q109 (mcq)

Which of the following is NOT an Arithmetic operator?

- A) `+`
- B) `*`
- C) `%`
- D) `&&`

**Answer:** D

### Q110 (mcq)

What is the result of `5 + 2`?

- A) 3
- B) 7
- C) 10
- D) 2.5

**Answer:** B

### Q111 (mcq)

What is the result of `5 - 2`?

- A) 3
- B) 7
- C) 10
- D) 2.5

**Answer:** A

### Q112 (mcq)

What is the result of `5 * 2`?

- A) 3
- B) 7
- C) 10
- D) 2.5

**Answer:** C

### Q113 (mcq)

What is the result of `5 / 2` when both operands are integers?

- A) 2.5
- B) 2
- C) 3
- D) 1

**Answer:** B

### Q114 (mcq)

What is the result of `5.0 / 2`?

- A) 2
- B) 2.5
- C) 3
- D) 1

**Answer:** B

### Q115 (mcq)

What is the result of `5 % 2`?

- A) 2.5
- B) 2
- C) 1
- D) 0

**Answer:** C

### Q116 (mcq)

The modulus operator `%` works only with which data types?

- A) Float and double
- B) Integers
- C) Characters
- D) Strings

**Answer:** B

### Q117 (mcq)

What happens when you attempt division by zero in C?

- A) Compilation error
- B) Runtime error
- C) No error, returns 0
- D) No error, returns infinity

**Answer:** B

### Q118 (mcq)

Relational operators return which values?

- A) 0 or 1
- B) True or False as strings
- C) Any integer
- D) Floating point values

**Answer:** A

### Q119 (mcq)

What is the output of `5 < 3`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** B

### Q120 (mcq)

What is the output of `5 > 3`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** A

### Q121 (mcq)

What is the output of `5 <= 5`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** A

### Q122 (mcq)

What is the output of `5 >= 3`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** A

### Q123 (mcq)

What is the output of `5 == 3`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** B

### Q124 (mcq)

What is the output of `5 != 3`?

- A) 1
- B) 0
- C) True
- D) False

**Answer:** A

### Q125 (mcq)

Which operator is used to check equality in C?

- A) `=`
- B) `==`
- C) `!=`
- D) `===`

**Answer:** B

### Q126 (mcq)

Which operator is used to check inequality in C?

- A) `=`
- B) `==`
- C) `!=`
- D) `<>`

**Answer:** C

### Q127 (mcq)

Logical AND (`&&`) returns true when:

- A) At least one operand is true
- B) Both operands are true
- C) Neither operand is true
- D) The first operand is true

**Answer:** B

### Q128 (mcq)

Logical OR (`||`) returns true when:

- A) At least one operand is true
- B) Both operands are true
- C) Neither operand is true
- D) The first operand is true

**Answer:** A

### Q129 (mcq)

Logical NOT (`!`) reverses:

- A) The value of a variable
- B) The truth value of an expression
- C) The sign of a number
- D) The order of operations

**Answer:** B

### Q130 (mcq)

What is the result of `1 && 0`?

- A) 0
- B) 1
- C) True
- D) False

**Answer:** A

### Q131 (mcq)

What is the result of `1 || 0`?

- A) 0
- B) 1
- C) True
- D) False

**Answer:** B

### Q132 (mcq)

What is the result of `!1`?

- A) 0
- B) 1
- C) True
- D) False

**Answer:** A

### Q133 (mcq)

What is short-circuit evaluation in logical operators?

- A) All operands are evaluated regardless of the result
- B) Evaluation stops when the overall result is determined
- C) Evaluation skips the operator
- D) Evaluation reverses the operands

**Answer:** B

### Q134 (mcq)

In `A && B`, if `A` is false, then:

- A) `B` is evaluated
- B) `B` is not evaluated
- C) The result is true
- D) An error occurs

**Answer:** B

### Q135 (mcq)

In `A || B`, if `A` is true, then:

- A) `B` is evaluated
- B) `B` is not evaluated
- C) The result is false
- D) An error occurs

**Answer:** B

### Q136 (mcq)

Which of the following is an Assignment operator?

- A) `==`
- B) `!`
- C) `=`
- D) `&&`

**Answer:** D

### Q137 (mcq)

What does `x += 3` mean?

- A) `x = x + 3`
- B) `x = 3`
- C) `x = x * 3`
- D) `x = x - 3`

**Answer:** A

### Q138 (mcq)

What does `x -= 3` mean?

- A) `x = x + 3`
- B) `x = 3`
- C) `x = x * 3`
- D) `x = x - 3`

**Answer:** D

### Q139 (mcq)

What does `x *= 3` mean?

- A) `x = x + 3`
- B) `x = 3`
- C) `x = x * 3`
- D) `x = x - 3`

**Answer:** C

### Q140 (mcq)

What does `x /= 3` mean?

- A) `x = x + 3`
- B) `x = x / 3`
- C) `x = x * 3`
- D) `x = x - 3`

**Answer:** B

### Q141 (mcq)

What does `x %= 3` mean?

- A) `x = x + 3`
- B) `x = x % 3`
- C) `x = x * 3`
- D) `x = x - 3`

**Answer:** B

### Q142 (mcq)

The increment operator `++` does what?

- A) Increases value by 0
- B) Increases value by 1
- C) Increases value by 2
- D) Decreases value by 1

**Answer:** B

### Q143 (mcq)

The decrement operator `--` does what?

- A) Increases value by 1
- B) Decreases value by 1
- C) Decreases value by 2
- D) Doubles the value

**Answer:** B

### Q144 (mcq)

What is the difference between prefix (`++a`) and postfix (`a++`)?

- A) No difference
- B) Prefix increments first, then uses; postfix uses first, then increments
- C) Prefix uses first, then increments; postfix increments first, then uses
- D) Both increment and use simultaneously

**Answer:** B

### Q145 (mcq)

If `a = 5`, what is the value of `b = ++a`?

- A) `a=5, b=5`
- B) `a=6, b=6`
- C) `a=5, b=6`
- D) `a=6, b=5`

**Answer:** B

### Q146 (mcq)

If `a = 5`, what is the value of `b = a++`?

- A) `a=5, b=5`
- B) `a=6, b=6`
- C) `a=5, b=6`
- D) `a=6, b=5`

**Answer:** D

### Q147 (mcq)

What is the syntax of the Conditional (Ternary) operator?

- A) `condition ? expression1 : expression2`
- B) `condition ? expression1 ; expression2`
- C) `condition : expression1 ? expression2`
- D) `condition expression1 : expression2`

**Answer:** A

### Q148 (mcq)

In the ternary operator, if the condition is true:

- A) expression2 is evaluated
- B) expression1 is evaluated
- C) Both expressions are evaluated
- D) Neither expression is evaluated

**Answer:** B

### Q149 (mcq)

In the ternary operator, if the condition is false:

- A) expression2 is evaluated
- B) expression1 is evaluated
- C) Both expressions are evaluated
- D) Neither expression is evaluated

**Answer:** A

### Q150 (mcq)

`int max = (a > b) ? a : b;` assigns to `max`:

- A) The value of `a`
- B) The value of `b`
- C) The larger value between `a` and `b`
- D) The smaller value between `a` and `b`

**Answer:** C

### Q151 (mcq)

The Comma operator `,` evaluates expressions:

- A) Right to left
- B) Left to right
- C) Randomly
- D) Only the last expression

**Answer:** B

### Q152 (mcq)

In `b = (a = 5, a * 2);`, what is the value of `b`?

- A) 5
- B) 10
- C) 7
- D) 2.5

**Answer:** B

### Q153 (mcq)

The Comma operator's result is the value of:

- A) The leftmost operand
- B) The rightmost operand
- C) The sum of all operands
- D) The first operand

**Answer:** B

### Q154 (mcq)

The Comma operator is often used in:

- A) While loops
- B) For loops
- C) If-else statements
- D) Switch cases

**Answer:** B

### Q155 (mcq)

Operator Precedence determines:

- A) Which operand is evaluated first
- B) Which operator is evaluated first
- C) The direction of evaluation
- D) The type of conversion

**Answer:** B

### Q156 (mcq)

Operator Associativity determines:

- A) Which operator is evaluated first
- B) The direction of evaluation when operators have same precedence
- C) The type of operands
- D) The result of the expression

**Answer:** B

### Q157 (mcq)

In `10 + 5 * 2`, which operation is performed first?

- A) Addition
- B) Multiplication
- C) Both simultaneously
- D) Depends on associativity

**Answer:** B

### Q158 (mcq)

What is the result of `10 + 5 * 2`?

- A) 20
- B) 30
- C) 15
- D) 25

**Answer:** A

### Q159 (mcq)

Which operator has the highest precedence?

- A) `+`
- B) `*`
- C) `()`
- D) `&&`

**Answer:** D

### Q160 (mcq)

Which operator has the lowest precedence?

- A) `=`
- B) `,`
- C) `+`
- D) `&&`

**Answer:** D

### Q161 (mcq)

The assignment operator `=` has which associativity?

- A) Left to Right
- B) Right to Left
- C) Both
- D) None

**Answer:** B

### Q162 (mcq)

The arithmetic operators `+` and `-` have which associativity?

- A) Left to Right
- B) Right to Left
- C) Both
- D) None

**Answer:** A

### Q163 (mcq)

Implicit Type Conversion is also called:

- A) Type Casting
- B) Usual Arithmetic Conversion (Promotion)
- C) Explicit Conversion
- D) Forced Conversion

**Answer:** B

### Q164 (mcq)

In implicit type conversion, data types are converted:

- A) Manually by the programmer
- B) Automatically by the compiler
- C) Never
- D) Only for floating point

**Answer:** B

### Q165 (mcq)

The hierarchy for implicit conversion from lowest to highest is:

- A) char → int → float → double
- B) char → int → double → float
- C) int → char → float → double
- D) double → float → int → char

**Answer:** D

### Q166 (mcq)

In `float result = 5 / 2;`, what is the value of `result`?

- A) 2.5
- B) 2.0
- C) 3.0
- D) 2.5 (as float)

**Answer:** B

### Q167 (mcq)

Why is `float result = 5 / 2;` equal to `2.0` and not `2.5`?

- A) Integer division is performed, then converted to float
- B) Float division is performed
- C) Compilation error
- D) 5/2 is rounded down

**Answer:** A

### Q168 (mcq)

How can you fix `float result = 5 / 2;` to get `2.5`?

- A) `result = 5 / 2.0;`
- B) `result = (float)5 / 2;`
- C) Both A and B
- D) Cannot be fixed

**Answer:** C

### Q169 (mcq)

Explicit Type Conversion is also called:

- A) Implicit Conversion
- B) Type Casting
- C) Automatic Conversion
- D) Promotion

**Answer:** B

### Q170 (mcq)

What is the syntax for type casting?

- A) `(data_type) expression;`
- B) `expression as data_type;`
- C) `data_type(expression);`
- D) `convert(data_type, expression);`

**Answer:** A

### Q171 (mcq)

In `float result = (float)7 / 3;`, what is the value of `result`?

- A) 2
- B) 2.33333
- C) 3
- D) 2.0

**Answer:** B

### Q172 (mcq)

`getchar()` is used for:

- A) Formatted input
- B) Unformatted single character input
- C) String input
- D) Integer input

**Answer:** B

### Q173 (mcq)

`getchar()` returns the character as:

- A) A char
- B) An int (ASCII value)
- C) A string
- D) A float

**Answer:** B

### Q174 (mcq)

`putchar()` is used for:

- A) Formatted output
- B) Unformatted single character output
- C) String output
- D) Integer output

**Answer:** B

### Q175 (mcq)

Which header file contains `getchar()` and `putchar()`?

- A) `<stdlib.h>`
- B) `<stdio.h>`
- C) `<string.h>`
- D) `<math.h>`

**Answer:** B

### Q176 (mcq)

What is the output of `putchar(65);`?

- A) 65
- B) 'A'
- C) 'a'
- D) Compilation error

**Answer:** B

### Q177 (mcq)

`char ch = getchar();` reads:

- A) A string
- B) A single character
- C) An integer
- D) A floating point number

**Answer:** B

### Q178 (mcq)

An Escape Sequence starts with:

- A) A forward slash `/`
- B) A backslash `\`
- C) A percent sign `%`
- D) An ampersand `&`

**Answer:** B

### Q179 (mcq)

Which escape sequence represents a newline?

- A) `\t`
- B) `\n`
- C) `\r`
- D) `\a`

**Answer:** B

### Q180 (mcq)

Which escape sequence inserts a tab space?

- A) `\t`
- B) `\n`
- C) `\r`
- D) `\a`

**Answer:** A

### Q181 (mcq)

Which escape sequence moves the cursor to the beginning of the current line?

- A) `\t`
- B) `\n`
- C) `\r`
- D) `\a`

**Answer:** C

### Q182 (mcq)

Which escape sequence produces a beep sound?

- A) `\t`
- B) `\n`
- C) `\r`
- D) `\a`

**Answer:** D

### Q183 (mcq)

Which escape sequence prints a literal backslash?

- A) `\`
- B) `\\`
- C) `\/`
- D) `\\\`

**Answer:** B

### Q184 (mcq)

Which escape sequence prints a double quote?

- A) `\`
- B) `\'`
- C) `\"`
- D) `\\`

**Answer:** C

### Q185 (mcq)

Which escape sequence represents the null character?

- A) `\n`
- B) `\0`
- C) `\t`
- D) `\r`

**Answer:** B

### Q186 (mcq)

The null character `\0` marks:

- A) The start of a string
- B) The end of a string
- C) A tab space
- D) A new line

**Answer:** B

### Q187 (mcq)

`printf()` is used for:

- A) Formatted output
- B) Unformatted output
- C) Formatted input
- D) Character input

**Answer:** A

### Q188 (mcq)

`printf()` returns:

- A) The number of characters printed
- B) A string
- C) An integer representing success
- D) Nothing

**Answer:** A

### Q189 (mcq)

`scanf()` is used for:

- A) Formatted output
- B) Unformatted output
- C) Formatted input
- D) Character output

**Answer:** C

### Q190 (mcq)

`scanf()` returns:

- A) The number of items successfully read
- B) The input value
- C) A string
- D) Nothing

**Answer:** A

### Q191 (mcq)

Which format specifier is used for `int`?

- A) `%f`
- B) `%c`
- C) `%d` or `%i`
- D) `%s`

**Answer:** C

### Q192 (mcq)

Which format specifier is used for `float`?

- A) `%d`
- B) `%f`
- C) `%c`
- D) `%s`

**Answer:** B

### Q193 (mcq)

Which format specifier is used for `char`?

- A) `%d`
- B) `%f`
- C) `%c`
- D) `%s`

**Answer:** C

### Q194 (mcq)

Which format specifier is used for a string?

- A) `%d`
- B) `%f`
- C) `%c`
- D) `%s`

**Answer:** D

### Q195 (mcq)

In `scanf`, why is the `&` operator used before variables?

- A) To pass the value of the variable
- B) To pass the address of the variable
- C) To increment the variable
- D) To decrement the variable

**Answer:** B

### Q196 (mcq)

In `scanf`, the `&` operator is NOT required for:

- A) Integers
- B) Floats
- C) Characters
- D) Strings (arrays)

**Answer:** D

### Q197 (mcq)

`printf("%.2f", 3.14159);` prints what?

- A) 3.1
- B) 3.14
- C) 3.141
- D) 3.14159

**Answer:** B

### Q198 (mcq)

`printf("%5d", 25);` prints what?

- A) 25
- B) `   25` (right-aligned, width 5)
- C) `25   ` (left-aligned, width 5)
- D) 00025

**Answer:** B

### Q199 (mcq)

`printf("%-5d", 25);` prints what?

- A) 25
- B) `   25`
- C) `25   ` (left-aligned, width 5)
- D) 00025

**Answer:** C

### Q200 (mcq)

`scanf("%d %f", &a, &b);` reads:

- A) One integer and one float
- B) One float and one integer
- C) Two integers
- D) Two floats

**Answer:** A
