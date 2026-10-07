# Unit 03 05 practice paper eng

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

- A) ` 123.456`
- B) ` 123.456` (with spaces) Actually `printf("%8.3f", 123.456);` prints ` 123.456` (total width 8, 3 decimals).

<!-- TODO: answer not recorded - the source had no tick, or more than one -->

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

- A) Not possible in standard C

<!-- TODO: answer not recorded - the source had no tick, or more than one -->

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
