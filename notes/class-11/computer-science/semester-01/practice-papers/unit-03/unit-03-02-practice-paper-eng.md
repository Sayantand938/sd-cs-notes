# Unit 03 02 Practice Paper (Eng)

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
