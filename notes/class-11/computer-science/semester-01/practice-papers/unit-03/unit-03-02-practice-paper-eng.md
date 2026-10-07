## Section 1: Basic Structure (Questions 1-15)

### Character Set, Keywords, Identifiers, Constants, Variables, Type Declaration, Pre-processor

#### Q1. Which of the following is NOT a valid character in C character set?

A) Letters A-Z and a-z
B) Digits 0-9
C) Special characters like @, #, $
D) White spaces ✅

#### Q2. Which of the following is a valid identifier in C?

A) `1st_number`
B) `first_number` ✅
C) `first number`
D) `int`

#### Q3. How many keywords are there in standard C (ANSI C)?

A) 32 ✅
B) 48
C) 64
D) 16

#### Q4. Which of the following is NOT a valid constant in C?

A) `123`
B) `3.14`
C) `'A'`
D) `"Hello` ✅

#### Q5. What is the size of `int` data type in 32-bit C compiler?

A) 1 byte
B) 2 bytes
C) 4 bytes ✅
D) 8 bytes

#### Q6. Which preprocessor directive is used to define a macro?

A) `#include`
B) `#define` ✅
C) `#undef`
D) `#ifdef`

#### Q7. What is the output of the following preprocessor code?

```c
#define PI 3.14
#define AREA(r) (PI * r * r)
printf("%.2f", AREA(3));
```

A) 28.26 ✅
B) 28.27
C) 28.26
D) Compilation Error

#### Q8. Which of the following correctly defines a character constant?

A) `"A"`
B) `'A'` ✅
C) `A`
D) `\A`

#### Q9. What is the difference between `const` and `#define`?

A) `const` is a preprocessor directive while `#define` is a keyword
B) `#define` is processed by preprocessor, `const` by compiler ✅
C) Both are processed by compiler
D) Both are processed by preprocessor

#### Q10. Which of the following is NOT a valid data type in C?

A) `int`
B) `float`
C) `char`
D) `string` ✅

#### Q11. What will be the size of the variable `short int` on a 16-bit system?

A) 1 byte
B) 2 bytes ✅
C) 4 bytes
D) 8 bytes

#### Q12. Which of the following is TRUE about global variables?

A) They are declared inside a function
B) They have default value 0 if not initialized ✅
C) They cannot be accessed outside the file
D) They are stored in the stack

#### Q13. What is the range of `unsigned char` data type?

A) -128 to 127
B) 0 to 255 ✅
C) -32768 to 32767
D) 0 to 65535

#### Q14. Which header file is required for standard input/output operations?

A) `#include <math.h>`
B) `#include <string.h>`
C) `#include <stdio.h>` ✅
D) `#include <stdlib.h>`

#### Q15. What is the purpose of the `#undef` directive?

A) To define a new macro
B) To remove a previously defined macro ✅
C) To include a header file
D) To check if a macro is defined

---

## Section 2: Operators (Questions 16-35)

### Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Conditional, Comma, Precedence, Associativity, Type Conversion, I/O, Escape Sequences

#### Q16. What is the output of `10 % 3`?

A) 3
B) 1 ✅
C) 0
D) 2

#### Q17. Which operator is used for logical AND?

A) `&`
B) `&&` ✅
C) `and`
D) `||`

#### Q18. What is the value of `x` after `int x = 5; x += 3;`?

A) 5
B) 8 ✅
C) 3
D) 15

#### Q19. What is the output of `int x = 5; printf("%d", ++x);`?

A) 5
B) 6 ✅
C) 4
D) Error

#### Q20. Which operator has the highest precedence?

A) `+`
B) `*`
C) `()`
D) `++` ✅

#### Q21. What is the output of `int x = 5; int y = x++; printf("%d %d", x, y);`?

A) 5 5
B) 6 5 ✅
C) 6 6
D) 5 6

#### Q22. Which of the following is a Relational Operator?

A) `=`
B) `==` ✅
C) `&&`
D) `+=`

#### Q23. What is the value of the expression `(5 > 3) && (4 < 2)`?

A) 0 ✅
B) 1
C) 5
D) 4

#### Q24. Which escape sequence represents a newline character?

A) `\n` ✅
B) `\t`
C) `\r`
D) `\a`

#### Q25. What is the output of `printf("%d", 5 & 3);` (bitwise AND)?

A) 1 ✅
B) 7
C) 5
D) 3

#### Q26. Which format specifier is used to print a floating-point number?

A) `%d`
B) `%f` ✅
C) `%c`
D) `%s`

#### Q27. What is the output of `int x = 5; printf("%d", x << 1);` (left shift)?

A) 5
B) 10 ✅
C) 4
D) 3

#### Q28. Which operator is known as the conditional operator?

A) `? :` ✅
B) `::`
C) `?:`
D) `?`

#### Q29. What is the output of `int x = 5; printf("%d", (x > 3) ? 10 : 20);`?

A) 5
B) 10 ✅
C) 20
D) Error

#### Q30. What is the result of implicit type conversion in `int x = 5.7;`?

A) 5 ✅
B) 6
C) 5.7
D) Error

#### Q31. Which of the following is NOT an assignment operator?

A) `=`
B) `+=`
C) `==` ✅
D) `*=`

#### Q32. What is the output of `printf("%5.2f", 3.14159);`?

A) `3.14` ✅
B) `3.14159`
C) `3.142`
D) ` 3.14`

#### Q33. Which of the following correctly reads a character using `scanf`?

A) `scanf("%d", &ch);`
B) `scanf("%c", &ch);` ✅
C) `scanf("%s", ch);`
D) `scanf("%f", &ch);`

#### Q34. What is the value of `(5, 10, 15)` using the comma operator?

A) 5
B) 10
C) 15 ✅
D) Error

#### Q35. Which escape sequence produces a beep sound?

A) `\n`
B) `\t`
C) `\a` ✅
D) `\r`

---

## Section 3: Branching and Looping (Questions 36-50)

### if, if-else, while, do-while, for

#### Q36. What will be the output of the following code?

```c
int x = 10;
if(x > 5)
    printf("A");
else
    printf("B");
```

A) A ✅
B) B
C) AB
D) No output

#### Q37. How many times will the following loop execute?

```c
int i = 0;
while(i < 5) {
    i++;
}
```

A) 4
B) 5 ✅
C) 6
D) Infinite

#### Q38. What is the output of the following code?

```c
int x = 0;
if(x)
    printf("True");
else
    printf("False");
```

A) True
B) False ✅
C) Error
D) No output

#### Q39. Which loop is guaranteed to execute at least once?

A) `for`
B) `while`
C) `do-while` ✅
D) None of the above

#### Q40. What will be the output of the following `for` loop?

```c
for(int i=0; i<3; i++)
    printf("%d ", i);
```

A) 0 1 2 ✅
B) 1 2 3
C) 0 1 2 3
D) 1 2

#### Q41. What is the output of the following `switch` statement?

```c
int x = 2;
switch(x) {
    case 1: printf("One");
    case 2: printf("Two");
    default: printf("Default");
}
```

A) One
B) Two
C) TwoDefault ✅
D) Default

#### Q42. What does the `break` statement do in a loop?

A) Exits the loop immediately ✅
B) Continues to the next iteration
C) Restarts the loop
D) Does nothing

#### Q43. How many times will the following loop execute?

```c
int i = 5;
do {
    i--;
} while(i > 0);
```

A) 4
B) 5 ✅
C) 6
D) Infinite

#### Q44. What is the output of the following code?

```c
int x = 10;
if(x = 5)
    printf("Yes");
else
    printf("No");
```

A) Yes ✅
B) No
C) Error
D) YesNo

#### Q45. What is the use of `continue` statement?

A) Exits the loop
B) Skips the current iteration ✅
C) Restarts the loop
D) Ends the program

#### Q46. Which of the following is an infinite loop?

A) `for(i=0; i<10; i++)`
B) `for(;;)` ✅
C) `while(i<10)`
D) `do-while(i<10)`

#### Q47. What is the output of the following code?

```c
int i;
for(i=0; i<3; i++) {
    if(i==1) continue;
    printf("%d", i);
}
```

A) 0 1 2
B) 0 2 ✅
C) 1 2
D) 0 1

#### Q48. Which statement is used for multi-way branching?

A) `if-else`
B) `switch-case` ✅
C) `while`
D) `for`

#### Q49. What is the output of the following nested loop?

```c
for(int i=0; i<2; i++) {
    for(int j=0; j<2; j++) {
        printf("*");
    }
}
```

A) `**`
B) `***`
C) `****` ✅
D) `*`

#### Q50. What is the output of the following code?

```c
int x = 1;
while(x <= 3) {
    printf("%d", x);
    x++;
}
```

A) 1 2 3 ✅
B) 1 2 3 4
C) 0 1 2
D) 2 3 4

---

## Section 4: Arrays and Structures (Questions 51-70)

### One-dimensional, Two-dimensional Arrays, String handling, Structures

#### Q51. What is the index of the first element in an array?

A) 1
B) 0 ✅
C) -1
D) Depends on declaration

#### Q52. What is the size of `int arr[5]` in a 32-bit system?

A) 5 bytes
B) 10 bytes
C) 20 bytes ✅
D) 40 bytes

#### Q53. What will be the output?

```c
int arr[3] = {1, 2, 3};
printf("%d", arr[2]);
```

A) 1
B) 2
C) 3 ✅
D) Error

#### Q54. How is a 2D array stored in memory?

A) Column-major order
B) Row-major order ✅
C) Random order
D) Diagonal order

#### Q55. What is the output of the following code?

```c
char str[5] = "Hello";
printf("%lu", sizeof(str));
```

A) 5
B) 6 ✅
C) 4
D) 10

#### Q56. Which function is used to find the length of a string?

A) `strlen()` ✅
B) `strlength()`
C) `length()`
D) `sizeof()`

#### Q57. What is the output of the following?

```c
char str[20] = "Hello";
strcat(str, " World");
printf("%s", str);
```

A) Hello
B) World
C) Hello World ✅
D) HelloWorld

#### Q58. Which function compares two strings?

A) `strcmp()` ✅
B) `strcat()`
C) `strcpy()`
D) `strlen()`

#### Q59. What is the output of the following?

```c
struct Student {
    int roll;
    char name[20];
} s1 = {1, "John"};
printf("%d", s1.roll);
```

A) 1 ✅
B) John
C) Error
D) 2

#### Q60. What is the correct way to access structure member `name` using pointer `ptr`?

A) `ptr.name`
B) `ptr->name` ✅
C) `*ptr.name`
D) `&ptr.name`

#### Q61. What is the output of the following code?

```c
int arr[2][3] = {{1,2,3},{4,5,6}};
printf("%d", arr[1][2]);
```

A) 2
B) 3
C) 5
D) 6 ✅

#### Q62. Which of the following correctly initializes a structure?

A) `struct s1 = {10, "John"};`
B) `struct Student s1 = {10, "John"};` ✅
C) `Student s1 = (10, "John");`
D) `s1 = {10, "John"};`

#### Q63. What does `strcpy(dest, src)` do?

A) Compares two strings
B) Copies src to dest ✅
C) Appends src to dest
D) Returns length of src

#### Q64. What is the output of the following?

```c
struct {
    int x;
    int y;
} p1 = {5, 10};
printf("%d", p1.y);
```

A) 5
B) 10 ✅
C) Error
D) p1.y

#### Q65. How is an array of structures declared?

A) `struct Student[10] s;`
B) `struct Student s[10];` ✅
C) `Student s[10];`
D) `struct s[10] Student;`

#### Q66. What is the output of the following?

```c
char str[20] = "Hello";
printf("%lu", strlen(str));
```

A) 4
B) 5 ✅
C) 6
D) 20

#### Q67. Which function concatenates strings in C?

A) `strcat()` ✅
B) `strcpy()`
C) `strcmp()`
D) `strlen()`

#### Q68. What is the size of the following structure (assuming 4-byte int)?

```c
struct Test {
    int a;
    char b;
    int c;
};
```

A) 9 bytes
B) 12 bytes ✅
C) 8 bytes
D) 10 bytes

#### Q69. What is a nested structure?

A) Structure containing another structure ✅
B) Array of structures
C) Structure with pointers
D) Structure without members

#### Q70. Which of the following is TRUE about array initialization?

A) `int arr[5] = {0};` initializes all elements to 0 ✅
B) `int arr[5] = {};` is valid
C) `int arr[5] = {1,2,3};` leaves rest uninitialized
D) All of the above

---

## Section 5: User-Defined Functions (Questions 71-85)

### Need, Call by Reference, Call by Value, Return Value, Nesting, Recursion

#### Q71. What is a function prototype?

A) Function definition
B) Function declaration ✅
C) Function call
D) Function return

#### Q72. What is the default return type of a function in C (if not specified)?

A) `void`
B) `int` ✅
C) `char`
D) `float`

#### Q73. What is call by value?

A) Passing address of variable
B) Passing value of variable ✅
C) Passing reference
D) Passing pointer

#### Q74. In call by value, changes to formal parameters affect actual parameters?

A) Yes, always
B) No, never ✅
C) Sometimes
D) Only for arrays

#### Q75. How is call by reference achieved in C?

A) By passing values
B) By passing addresses using pointers ✅
C) By using global variables
D) By using reference variables

#### Q76. What is the output of the following?

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

A) 10
B) 5 ✅
C) 0
D) Error

#### Q77. What is a recursive function?

A) Function that calls itself ✅
B) Function that calls another function
C) Function with no parameters
D) Function with no return

#### Q78. What is the output of the following recursive function?

```c
int fact(int n) {
    if(n == 0) return 1;
    return n * fact(n-1);
}
// fact(4)
```

A) 4
B) 12
C) 24 ✅
D) 6

#### Q79. What is the base case in recursion?

A) The condition that terminates recursion ✅
B) The function call
C) The return statement
D) The parameter list

#### Q80. What is the main advantage of recursion?

A) Faster execution
B) Less memory usage
C) Simpler solution for complex problems ✅
D) No function calls

#### Q81. What is nesting of functions?

A) Calling one function inside another ✅
B) Defining function inside another
C) Recursive function
D) Function with no parameters

#### Q82. Which of the following is TRUE about functions in C?

A) Functions can be nested (defined inside another function)
B) Functions cannot be nested ✅
C) Functions must return a value
D) Functions cannot be called from main

#### Q83. What happens when a function returns without specifying a return value (except main)?

A) Compilation error
B) Undefined behavior ✅
C) Returns 0
D) Returns -1

#### Q84. What is the output of the following?

```c
int sum(int a, int b) {
    return a + b;
}
int main() {
    int result = sum(3, 4);
    printf("%d", result);
}
```

A) 3
B) 4
C) 7 ✅
D) Error

#### Q85. What is the main function in C?

A) The first function to execute ✅
B) A user-defined function
C) A preprocessor directive
D) A header file

---

## Section 6: Pointers (Questions 86-100)

### Declaration, Initialization, Operators, Pointer Arithmetic, Accessing Variables, Pointers with Arrays, Strings, Functions

#### Q86. What is a pointer?

A) A variable that stores address of another variable ✅
B) A variable that stores value
C) A keyword
D) A data type

#### Q87. Which operator is used to get the address of a variable?

A) `*`
B) `&` ✅
C) `->`
D) `#`

#### Q88. Which operator is used to access value at an address?

A) `*` ✅
B) `&`
C) `->`
D) `#`

#### Q89. What is the output of the following?

```c
int x = 5;
int *ptr = &x;
printf("%d", *ptr);
```

A) Address of x
B) 5 ✅
C) 0
D) Error

#### Q90. What is the size of a pointer on a 64-bit system?

A) 2 bytes
B) 4 bytes
C) 8 bytes ✅
D) 16 bytes

#### Q91. What is `NULL` pointer?

A) Pointer pointing to 0 address
B) Pointer not pointing to any valid memory ✅
C) Uninitialized pointer
D) Pointer to main function

#### Q92. What is pointer arithmetic?

A) Adding two pointers
B) Performing arithmetic on pointer values ✅
C) Multiplying pointers
D) Dividing pointers

#### Q93. If `ptr` points to address 1000 and `int` is 4 bytes, what is `ptr + 1`?

A) 1001
B) 1004 ✅
C) 1000
D) 1008

#### Q94. How are arrays and pointers related?

A) Array name is a constant pointer to first element ✅
B) Arrays and pointers are different
C) Arrays store addresses
D) Pointers cannot point to arrays

#### Q95. What is the output of the following?

```c
int arr[] = {10, 20, 30};
printf("%d", *(arr + 1));
```

A) 10
B) 20 ✅
C) 30
D) Error

#### Q96. How to declare a pointer to a function?

A) `int (*ptr)(int)` ✅
B) `int *ptr(int)`
C) `int ptr(*int)`
D) `ptr int(*)`

#### Q97. What is the output of the following?

```c
char str[] = "Hello";
char *ptr = str;
printf("%c", *(ptr + 1));
```

A) H
B) e ✅
C) l
D) o

#### Q98. Which of the following is TRUE about void pointers?

A) They can point to any data type ✅
B) They cannot be dereferenced
C) They require typecasting for dereferencing
D) All of the above

#### Q99. What is the output of the following?

```c
int x = 5;
int *ptr = &x;
*ptr = 10;
printf("%d", x);
```

A) 5
B) 10 ✅
C) Address of x
D) Error

#### Q100. What is a dangling pointer?

A) Pointer pointing to freed/deallocated memory ✅
B) NULL pointer
C) Wild pointer
D) Pointer to constant

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
| ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ |
| 1    | D      | 26   | B      | 51   | B      | 76   | B      |
| 2    | B      | 27   | B      | 52   | C      | 77   | A      |
| 3    | A      | 28   | A      | 53   | C      | 78   | C      |
| 4    | D      | 29   | B      | 54   | B      | 79   | A      |
| 5    | C      | 30   | A      | 55   | B      | 80   | C      |
| 6    | B      | 31   | C      | 56   | A      | 81   | A      |
| 7    | A      | 32   | A      | 57   | C      | 82   | B      |
| 8    | B      | 33   | B      | 58   | A      | 83   | B      |
| 9    | B      | 34   | C      | 59   | A      | 84   | C      |
| 10   | D      | 35   | C      | 60   | B      | 85   | A      |
| 11   | B      | 36   | A      | 61   | D      | 86   | A      |
| 12   | B      | 37   | B      | 62   | B      | 87   | B      |
| 13   | B      | 38   | B      | 63   | B      | 88   | A      |
| 14   | C      | 39   | C      | 64   | B      | 89   | B      |
| 15   | B      | 40   | A      | 65   | B      | 90   | C      |
| 16   | B      | 41   | C      | 66   | B      | 91   | B      |
| 17   | B      | 42   | A      | 67   | A      | 92   | B      |
| 18   | B      | 43   | B      | 68   | B      | 93   | B      |
| 19   | B      | 44   | A      | 69   | A      | 94   | A      |
| 20   | D      | 45   | B      | 70   | A      | 95   | B      |
| 21   | B      | 46   | B      | 71   | B      | 96   | A      |
| 22   | B      | 47   | B      | 72   | B      | 97   | B      |
| 23   | A      | 48   | B      | 73   | B      | 98   | D      |
| 24   | A      | 49   | C      | 74   | B      | 99   | B      |
| 25   | A      | 50   | A      | 75   | B      | 100  | A      |
