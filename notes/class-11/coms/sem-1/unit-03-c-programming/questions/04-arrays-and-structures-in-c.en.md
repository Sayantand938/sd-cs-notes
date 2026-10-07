# Arrays And Structures In C — Questions (EN)

## Section 1: Basic Structure (Questions 1 to 15)

### Q1 (mcq)

Which of the following is NOT a valid identifier in C?

- A) `_abc123`
- B) `abc_123`
- C) `123_abc`
- D) `Abc123`

**Answer:** C

### Q2 (mcq)

What is the size of `double` data type on a 32‑bit compiler?

- A) 4 bytes
- B) 8 bytes
- C) 16 bytes
- D) 2 bytes

**Answer:** B

### Q3 (mcq)

The `#include` directive is used to:

- A) Define a macro
- B) Include a header file
- C) Undefine a macro
- D) Generate an error

**Answer:** B

### Q4 (mcq)

What is the output of the following code?

```c
#define MAX(a,b) (a > b ? a : b)
printf("%d", MAX(5, 10));
```

- A) 5
- B) 10
- C) 15
- D) 0

**Answer:** B

### Q5 (mcq)

Which of the following is a valid floating-point constant?

- A) `5.0`
- B) `5`
- C) `'5'`
- D) `"5.0"`

**Answer:** A

### Q6 (mcq)

What is the default value of a local variable if not initialized?

- A) 0
- B) Garbage value
- C) NULL
- D) Undefined

**Answer:** B

### Q7 (mcq)

Which header file contains the `malloc()` and `free()` functions?

- A) `stdio.h`
- B) `stdlib.h`
- C) `math.h`
- D) `string.h`

**Answer:** B

### Q8 (mcq)

What is the range of `char` on a system where char is signed?

- A) 0 to 255
- B) -128 to 127
- C) -32768 to 32767
- D) 0 to 65535

**Answer:** B

### Q9 (mcq)

Which of the following is a valid string constant?

- A) `'Hello'`
- B) `"Hello"`
- C) `Hello`
- D) `\Hello\`

**Answer:** B

### Q10 (mcq)

The `#error` directive is used to:

- A) Generate a compilation error
- B) Define a macro
- C) Include a file
- D) Check for errors

**Answer:** A

### Q11 (mcq)

What is the size of `short int` on a 32‑bit system?

- A) 1 byte
- B) 2 bytes
- C) 4 bytes
- D) 8 bytes

**Answer:** B

### Q12 (mcq)

Which of the following is TRUE about `const` variables?

- A) They must be initialized at declaration.
- B) They can be modified later.
- C) They are stored in stack.
- D) They are processed by preprocessor.

**Answer:** A

### Q13 (mcq)

What is the purpose of the `register` keyword?

- A) To store variable in CPU register for faster access
- B) To store variable in memory
- C) To make variable global
- D) To declare a constant

**Answer:** A

### Q14 (mcq)

Which escape sequence represents a single quote?

- A) `\'`
- B) `\"`
- C) `\q`
- D) `\\`

**Answer:** A

### Q15 (mcq)

What is the output of the following?

```c
int x = 5;
const int *p = &x;
x = 10;
printf("%d", *p);
```

- A) 5
- B) 10
- C) Error
- D) Garbage

**Answer:** B

## Section 2: Operators & I/O (Questions 16 to 35)

### Q16 (mcq)

What is the result of `12 & 10` (bitwise AND)?

- A) 8
- B) 12
- C) 10
- D) 2

**Answer:** A

### Q17 (mcq)

Which operator is used for bitwise OR?

- A) `||`
- B) `|`
- C) `&`
- D) `^`

**Answer:** B

### Q18 (mcq)

What is the output of `printf("%d", 5 ^ 7);` (bitwise XOR)?

- A) 2
- B) 12
- C) 5
- D) 7

**Answer:** A

### Q19 (mcq)

What is the value of `x` after `int x = 16; x = x >> 2;`?

- A) 8
- B) 4
- C) 16
- D) 2

**Answer:** B

### Q20 (mcq)

Which operator has the lowest precedence?

- A) `=`
- B) `,`
- C) `||`
- D) `&&`

**Answer:** B

### Q21 (mcq)

What is the output of the following?

```c
int a = 10, b = 20, c;
c = (a > b) ? a : b;
printf("%d", c);
```

- A) 10
- B) 20
- C) 30
- D) 0

**Answer:** B

### Q22 (mcq)

Which function is used to write a character to standard output?

- A) `putchar()`
- B) `puts()`
- C) `printf()`
- D) `write()`

**Answer:** A

### Q23 (mcq)

What is the result of `10 / 3` in integer division?

- A) 3.33
- B) 3
- C) 4
- D) 3.0

**Answer:** B

### Q24 (mcq)

What does the `\r` escape sequence do?

- A) Newline
- B) Carriage return
- C) Tab
- D) Backspace

**Answer:** B

### Q25 (mcq)

Which format specifier is used to print an octal number?

- A) `%d`
- B) `%o`
- C) `%x`
- D) `%u`

**Answer:** B

### Q26 (mcq)

What is the output of the following?

```c
int x = 7;
printf("%d", x == 7 ? 100 : 200);
```

- A) 7
- B) 100
- C) 200
- D) Error

**Answer:** B

### Q27 (mcq)

Which of the following is NOT a valid operator in C?

- A) `++`
- B) `--`
- C) `**`
- D) `+=`

**Answer:** C

### Q28 (mcq)

What is the value of `(2, 4, 6, 8, 10)` using the comma operator?

- A) 2
- B) 4
- C) 8
- D) 10

**Answer:** D

### Q29 (mcq)

Which function is used to read formatted input?

- A) `scanf()`
- B) `gets()`
- C) `fgets()`
- D) `getchar()`

**Answer:** A

### Q30 (mcq)

What is the output of `printf("%6.2f", 12.345);`?

- A) ` 12.35`
- B) `12.35`
- C) `12.345`
- D) `12.34`

**Answer:** A

### Q31 (mcq)

Which operator is used to access structure member through pointer?

- A) `.`
- B) `->`
- C) `*`
- D) `&`

**Answer:** B

### Q32 (mcq)

What is the result of explicit conversion in `int x = (int)3.9;`?

- A) 4
- B) 3
- C) 3.9
- D) Error

**Answer:** B

### Q33 (mcq)

How do you read a string with spaces using `scanf`?

- A) `scanf("%s", str);`
- B) `scanf("%[^\n]", str);`
- C) `scanf("%c", str);`
- D) Cannot be done

**Answer:** B

### Q34 (mcq)

What is the output of `printf("%d", 5 << 3);` (left shift)?

- A) 15
- B) 40
- C) 8
- D) 5

**Answer:** B

### Q35 (mcq)

Which escape sequence represents a double quote?

- A) `\'`
- B) `\"`
- C) `\q`
- D) `\\`

**Answer:** B

## Section 3: Branching and Looping (Questions 36 to 50)

### Q36 (mcq)

What is the output of the following code?

```c
int x = 15;
if (x > 20)
    printf("A");
else if (x > 10)
    printf("B");
else
    printf("C");
```

- A) A
- B) B
- C) C
- D) AC

**Answer:** B

### Q37 (mcq)

How many times will the following loop execute?

```c
int i = 0;
do {
    printf("%d", i);
    i++;
} while(i < 0);
```

- A) 0 times
- B) 1 time
- C) Infinite
- D) Compilation error

**Answer:** B

### Q38 (mcq)

What will be the output of the following?

```c
for(int i=1; i<=5; i+=2)
    printf("%d", i);
```

- A) 1 2 3 4 5
- B) 1 3 5
- C) 2 4
- D) 1 3 5 7

**Answer:** B

### Q39 (mcq)

What is the output of the following `switch`?

```c
int x = 3;
switch(x) {
    case 1: printf("A");
    case 2: printf("B");
            break;
    case 3: printf("C");
    default: printf("D");
}
```

- A) C
- B) C D
- C) A B C
- D) B

**Answer:** B

### Q40 (mcq)

Which loop checks the condition at the end?

- A) `while`
- B) `for`
- C) `do-while`
- D) None

**Answer:** C

### Q41 (mcq)

What is the output of the following?

```c
int i=0;
while(i < 3) {
    i++;
    if(i == 2) continue;
    printf("%d", i);
}
```

- A) 1 2 3
- B) 1 3
- C) 2 3
- D) 1 2

**Answer:** B

### Q42 (mcq)

Can `switch` expression be of type `float`?

- A) Yes
- B) No
- C) Only if casted
- D) Depends on compiler

**Answer:** B

### Q43 (mcq)

How many times will the following loop execute?

```c
int i = 10;
while(i > 0) {
    i -= 2;
}
```

- A) 4
- B) 5
- C) 6
- D) Infinite

**Answer:** B

### Q44 (mcq)

What is the output of the following nested loop?

```c
for(int i=1; i<=2; i++) {
    for(int j=1; j<=2; j++) {
        if(i == j) break;
        printf("%d%d", i, j);
    }
}
```

- A) 11 12 21 22
- B) 12 21
- C) 11 22
- D) 21

**Answer:** B

### Q45 (mcq)

What does `break` do inside a nested loop?

- A) Exits all loops
- B) Exits only the innermost loop
- C) Continues to next iteration
- D) Restarts the program

**Answer:** B

### Q46 (mcq)

Which of the following is a valid infinite `while` loop?

- A) `while(1)`
- B) `while(0)`
- C) `while(true)`
- D) `while(1==2)`

**Answer:** A

### Q47 (mcq)

What is the output of the following?

```c
int x = 5;
if(x = 10)
    printf("Ten");
else
    printf("Not Ten");
```

- A) Ten
- B) Not Ten
- C) Error
- D) TenNot Ten

**Answer:** A

### Q48 (mcq)

What is the output of the following `for` loop?

```c
for(int i=0; i<3; ++i)
    printf("%d", i);
```

- A) 0 1 2
- B) 1 2 3
- C) 0 1 2 3
- D) 1 2

**Answer:** A

### Q49 (mcq)

Which statement is used to exit a function early?

- A) `break`
- B) `continue`
- C) `return`
- D) `exit`

**Answer:** C

### Q50 (mcq)

What is the output of the following?

```c
int i;
for(i=5; i>0; i--);
    printf("%d", i);
```

- A) 5 4 3 2 1
- B) 0
- C) 1
- D) 5

**Answer:** B

## Section 4: Arrays and Structures (Questions 51 to 70)

### Q51 (mcq)

What is the output of the following?

```c
int arr[4] = {10, 20};
printf("%d %d", arr[1], arr[3]);
```

- A) 20 0
- B) 10 0
- C) 20 garbage
- D) 10 20

**Answer:** A

### Q52 (mcq)

What is the output of the following?

```c
int arr[2][2] = {{1,2},{3,4}};
printf("%d", arr[1][0]);
```

- A) 1
- B) 2
- C) 3
- D) 4

**Answer:** C

### Q53 (mcq)

What does `strlen("Hello")` return?

- A) 4
- B) 5
- C) 6
- D) 0

**Answer:** B

### Q54 (mcq)

Which function compares two strings up to n characters?

- A) `strcmp()`
- B) `strncmp()`
- C) `strcpy()`
- D) `strcat()`

**Answer:** B

### Q55 (mcq)

What is the output of the following?

```c
char str[20] = "C Programming";
printf("%d", strlen(str));
```

- A) 13
- B) 14
- C) 12
- D) 15

**Answer:** A

### Q56 (mcq)

Which function copies at most n characters from source to destination?

- A) `strcpy()`
- B) `strncpy()`
- C) `strcat()`
- D) `strncat()`

**Answer:** B

### Q57 (mcq)

What is the output of the following?

```c
char s1[20] = "Hello";
char s2[] = " World";
strcat(s1, s2);
printf("%s", s1);
```

- A) Hello
- B) World
- C) Hello World
- D) HelloWorld

**Answer:** C

### Q58 (mcq)

What is the output of the following structure code?

```c
struct Point {
    int x;
    int y;
} p = {5, 10};
printf("%d", p.x + p.y);
```

- A) 5
- B) 10
- C) 15
- D) Error

**Answer:** C

### Q59 (mcq)

How do you access structure member `age` using pointer `ptr`?

```c
struct Student *ptr;
```

- A) `ptr.age`
- B) `ptr->age`
- C) `*ptr.age`
- D) `&ptr.age`

**Answer:** B

### Q60 (mcq)

What is the size of the following structure (with padding, 4-byte int)?

```c
struct Test {
    char a;
    int b;
    char c;
};
```

- A) 6 bytes
- B) 8 bytes
- C) 12 bytes
- D) 10 bytes

**Answer:** C

### Q61 (mcq)

Which of the following is TRUE about structure assignment?

- A) `s1 = s2;` is invalid
- B) `s1 = s2;` copies all members
- C) Only primitive members can be copied
- D) Requires `memcpy()`

**Answer:** B

### Q62 (mcq)

What is a self-referential structure?

- A) Structure containing pointer to itself
- B) Structure containing another structure
- C) Structure with array
- D) Structure with no members

**Answer:** A

### Q63 (mcq)

What is the output of the following?

```c
struct Student {
    int roll;
    char name[10];
} s1 = {101, "Rahul"};
printf("%s", s1.name);
```

- A) 101
- B) Rahul
- C) Error
- D) name

**Answer:** B

### Q64 (mcq)

Which function returns the first occurrence of a character in a string?

- A) `strstr()`
- B) `strchr()`
- C) `strrchr()`
- D) `strspn()`

**Answer:** B

### Q65 (mcq)

What is the output of the following?

```c
int arr[3][3] = {0};
printf("%d", arr[1][1]);
```

- A) 0
- B) Garbage
- C) 1
- D) Error

**Answer:** A

### Q66 (mcq)

How is a string terminated in C?

- A) By `\0`
- B) By `\n`
- C) By `\t`
- D) By `\r`

**Answer:** A

### Q67 (mcq)

Which of the following correctly declares a 2D array?

- A) `int a[3][4];`
- B) `int a[3,4];`
- C) `int a(3)(4);`
- D) `int a[3,4];`

**Answer:** A

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
    int x;
    int y;
} p1 = {1,2}, p2;
p2 = p1;
printf("%d", p2.x);
```

- A) 1
- B) 2
- C) 0
- D) Error

**Answer:** A

### Q70 (mcq)

What is the maximum index of `int a[5][5]`?

- A) 4 4
- B) 5 5
- C) 4 5
- D) 5 4

**Answer:** A

## Section 5: User-Defined Functions (Questions 71 to 85)

### Q71 (mcq)

What is the output of the following?

```c
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}
int main() {
    int x=5, y=10;
    swap(x, y);
    printf("%d %d", x, y);
}
```

- A) 10 5
- B) 5 10
- C) 0 0
- D) Error

**Answer:** B

### Q72 (mcq)

How do you pass an array to a function?

- A) By value (entire array copied)
- B) By reference (address passed)
- C) By using pointers
- D) Both B and C

**Answer:** D

### Q73 (mcq)

What is the output of the following function call?

```c
int power(int x, int y) {
    int result = 1;
    for(int i=0; i<y; i++)
        result *= x;
    return result;
}
printf("%d", power(2, 3));
```

- A) 6
- B) 8
- C) 9
- D) 10

**Answer:** B

### Q74 (mcq)

What is a recursive function?

- A) Function that calls itself
- B) Function that calls another function
- C) Function with no return
- D) Function with infinite loop

**Answer:** A

### Q75 (mcq)

What is the output of the following recursive function?

```c
int sum(int n) {
    if(n == 0) return 0;
    return n + sum(n-1);
}
printf("%d", sum(3));
```

- A) 3
- B) 5
- C) 6
- D) 4

**Answer:** C

### Q76 (mcq)

What is the base case in the above function (Q75)?

- A) `n == 0`
- B) `n + sum(n-1)`
- C) `sum(n-1)`
- D) `return 0`

**Answer:** A

### Q77 (mcq)

Which storage class makes a variable retain its value between function calls?

- A) `auto`
- B) `static`
- C) `register`
- D) `extern`

**Answer:** B

### Q78 (mcq)

Can a function be called before its definition in C?

- A) Yes, if prototype is declared
- B) No, it must be defined first
- C) Only if it returns void
- D) Depends on compiler

**Answer:** A

### Q79 (mcq)

What is the output of the following?

```c
int add(int x, int y) {
    return x + y;
}
int main() {
    int a = add(5, 10);
    printf("%d", a);
}
```

- A) 5
- B) 10
- C) 15
- D) 50

**Answer:** C

### Q80 (mcq)

What is the difference between `void` and `int` return type?

- A) `void` returns no value, `int` returns an integer
- B) `void` returns integer, `int` returns nothing
- C) Both return nothing
- D) Both return integers

**Answer:** A

### Q81 (mcq)

What is the output of the following?

```c
int func() {
    return 10;
    return 20;
}
printf("%d", func());
```

- A) 10
- B) 20
- C) 1020
- D) Error

**Answer:** A

### Q82 (mcq)

Which function is automatically called when a program ends?

- A) `main()`
- B) `exit()`
- C) No automatic function
- D) `end()`

**Answer:** C

### Q83 (mcq)

What is the purpose of function overloading in C?

- A) Not supported in C
- B) Supported using `extern`
- C) Supported using `static`
- D) Supported using `inline`

**Answer:** A

### Q84 (mcq)

What is the output of the following?

```c
int count = 0;
void increment() {
    static int count = 0;
    count++;
    printf("%d", count);
}
int main() {
    increment();
    increment();
}
```

- A) 1 1
- B) 1 2
- C) 0 0
- D) 2 2

**Answer:** B

### Q85 (mcq)

Which of the following is a valid way to call a function?

- A) `function_name();`
- B) `call function_name();`
- C) `function_name;`
- D) `CALL function_name();`

**Answer:** A

## Section 6: Pointers (Questions 86 to 100)

### Q86 (mcq)

What is the output of the following?

```c
int x = 10;
int *p = &x;
int **q = &p;
printf("%d", **q);
```

- A) 10
- B) Address of x
- C) Address of p
- D) Garbage

**Answer:** A

### Q87 (mcq)

What is a NULL pointer?

- A) Pointer to address 0
- B) Pointer that does not point to valid memory
- C) Uninitialized pointer
- D) Pointer to string

**Answer:** B

### Q88 (mcq)

What is the output of the following?

```c
int arr[] = {5, 10, 15};
int *p = arr;
printf("%d", *(p + 1));
```

- A) 5
- B) 10
- C) 15
- D) Error

**Answer:** B

### Q89 (mcq)

If `int *p` and `p` contains address 2000, what is `p + 2` (int size 4)?

- A) 2008
- B) 2002
- C) 2004
- D) 2016

**Answer:** A

### Q90 (mcq)

Which of the following is TRUE about void pointer?

- A) It can be dereferenced without casting
- B) It cannot be dereferenced without casting
- C) It cannot point to any data type
- D) It is invalid in C

**Answer:** B

### Q91 (mcq)

What is the output of the following?

```c
char s[] = "Hello";
char *p = s + 2;
printf("%c", *p);
```

- A) H
- B) e
- C) l
- D) o

**Answer:** C

### Q92 (mcq)

What is a pointer to pointer used for?

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
int *q = p;
*q = 10;
printf("%d", x);
```

- A) 5
- B) 10
- C) Address
- D) Garbage

**Answer:** B

### Q94 (mcq)

Which of the following is invalid?

- A) `ptr = ptr + 1`
- B) `ptr = ptr + 2`
- C) `ptr = ptr + ptr`
- D) `ptr = ptr - 1`

**Answer:** C

### Q95 (mcq)

What is the size of pointer on a 32‑bit system?

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** B

### Q96 (mcq)

What is the output of the following?

```c
int a[2][3] = {{1,2,3},{4,5,6}};
int *p = &a[0][0];
printf("%d", *(p + 4));
```

- A) 4
- B) 5
- C) 6
- D) 3

**Answer:** B

### Q97 (mcq)

How to declare a pointer to a function that returns int and takes int?

- A) `int (*p)(int);`
- B) `int *p(int);`
- C) `int p(int)*;`
- D) `p int (*)(int);`

**Answer:** A

### Q98 (mcq)

What is the output of the following?

```c
int *p = NULL;
if(p)
    printf("Valid");
else
    printf("Invalid");
```

- A) Valid
- B) Invalid
- C) Error
- D) NULL

**Answer:** B

### Q99 (mcq)

Which of the following is a dangling pointer?

- A) Pointer to freed memory
- B) NULL pointer
- C) Uninitialized pointer
- D) Pointer to constant

**Answer:** A

### Q100 (mcq)

What is the output of the following?

```c
int a[3] = {10, 20, 30};
int *p = a;
printf("%d", p[2]);
```

- A) 10
- B) 20
- C) 30
- D) Error

**Answer:** C

### Q101 (mcq)

An array is a collection of:

- A) Different data elements stored randomly
- B) Similar data elements stored in contiguous memory locations under a single variable name
- C) Different data elements stored in contiguous memory locations
- D) Similar data elements stored in non-contiguous memory locations

**Answer:** B

### Q102 (mcq)

Why are arrays used?

- A) To create separate variables for each element
- B) To store and manipulate a fixed number of elements efficiently under one name
- C) To store only characters
- D) To avoid using loops

**Answer:** B

### Q103 (mcq)

All elements in an array must be of:

- A) Different data types
- B) The same data type (homogeneous)
- C) Character data type only
- D) Integer data type only

**Answer:** B

### Q104 (mcq)

In C, array indexing starts from:

- A) 1
- B) 0
- C) -1
- D) Depends on the compiler

**Answer:** B

### Q105 (mcq)

Elements of an array are stored in:

- A) Random memory locations
- B) Contiguous (adjacent) memory locations
- C) Only in cache memory
- D) Non-contiguous memory locations

**Answer:** B

### Q106 (mcq)

What is the correct syntax to declare an array of 5 integers?

- A) `int marks(5);`
- B) `int marks[5];`
- C) `int 5marks;`
- D) `array int marks[5];`

**Answer:** B

### Q107 (mcq)

What is the valid declaration for an array of 10 floats?

- A) `float prices(10);`
- B) `float[10] prices;`
- C) `float prices[10];`
- D) `prices float[10];`

**Answer:** C

### Q108 (mcq)

How many elements can the array `char name[50]` hold excluding the null terminator?

- A) 50
- B) 49
- C) 51
- D) 48

**Answer:** B

### Q109 (mcq)

What is the output of `int arr1[5] = {10, 20, 30, 40, 50}; arr1[2]`?

- A) 10
- B) 20
- C) 30
- D) 40

**Answer:** C

### Q110 (mcq)

If `int arr2[5] = {1, 2, 3};`, what is the value of `arr2[3]`?

- A) 0
- B) 3
- C) Garbage value
- D) 4

**Answer:** A

### Q111 (mcq)

If `int arr3[] = {1, 2, 3};`, what is the size of the array?

- A) 2
- B) 3
- C) 4
- D) 5

**Answer:** B

### Q112 (mcq)

How do you set all elements of `int arr4[5]` to 0?

- A) `int arr4[5] = {};`
- B) `int arr4[5] = {0};`
- C) `int arr4[5] = {0, 0, 0, 0, 0};`
- D) Both B and C are correct

**Answer:** B

### Q113 (mcq)

Which loop is commonly used to read and print array elements?

- A) `do-while` loop
- B) `for` loop
- C) `if-else` statement
- D) `switch` statement

**Answer:** B

### Q114 (mcq)

In `scanf("%d", &arr[i]);`, why is `&` used?

- A) To print the value
- B) To pass the address of the array element
- C) To increment the value
- D) To decrement the value

**Answer:** B

### Q115 (mcq)

Which of the following is a use of 1D arrays?

- A) Storing a list of values
- B) Storing chessboards
- C) Representing images
- D) Matrix multiplication

**Answer:** A

### Q116 (mcq)

A 2D array is like a:

- A) Single row of values
- B) Table (matrix) with rows and columns
- C) List of characters
- D) Stack

**Answer:** B

### Q117 (mcq)

What is the syntax to declare a 2D array with 3 rows and 4 columns?

- A) `int matrix[4][3];`
- B) `int matrix[3][4];`
- C) `int matrix(3,4);`
- D) `int matrix[3,4];`

**Answer:** B

### Q118 (mcq)

How many total elements are in `int matrix[3][4]`?

- A) 7
- B) 12
- C) 24
- D) 10

**Answer:** B

### Q119 (mcq)

What is the correct initialization for a 2D array with 2 rows and 3 columns?

- A) `int arr[2][3] = { {1, 2, 3}, {4, 5, 6} };`
- B) `int arr[2][3] = {1, 2, 3, 4, 5, 6};`
- C) `int arr[2][3] = {1, 2, 3, 4, 5};`
- D) Both A and B are correct

**Answer:** A

### Q120 (mcq)

In C, for a 2D array, which dimension is mandatory to specify?

- A) Row size
- B) Column size
- C) Both row and column size
- D) Neither

**Answer:** B

### Q121 (mcq)

What is the correct declaration if row size is omitted in a 2D array?

- A) `int arr[][3] = { {1,2}, {4,5} };`
- B) `int arr[2][] = { {1,2}, {4,5} };`
- C) `int arr[][] = { {1,2}, {4,5} };`
- D) `int arr[][ ] = { {1,2}, {4,5} };`

**Answer:** A

### Q122 (mcq)

C stores 2D arrays in which memory order?

- A) Column-Major Order
- B) Row-Major Order
- C) Diagonal-Major Order
- D) Random Order

**Answer:** B

### Q123 (mcq)

In Row-Major Order for `arr[2][3]`, which element comes first in memory?

- A) `arr[1][0]`
- B) `arr[0][0]`
- C) `arr[0][1]`
- D) `arr[1][2]`

**Answer:** B

### Q124 (mcq)

In Row-Major Order for `arr[2][3]`, which element comes last in memory?

- A) `arr[0][2]`
- B) `arr[1][0]`
- C) `arr[1][2]`
- D) `arr[1][1]`

**Answer:** C

### Q125 (mcq)

Which type of loop is used to access elements of a 2D array?

- A) Single loop
- B) Nested loops
- C) Infinite loop
- D) do-while loop

**Answer:** B

### Q126 (mcq)

In nested loops for a 2D array, the outer loop iterates over:

- A) Columns
- B) Rows
- C) Elements
- D) Memory addresses

**Answer:** B

### Q127 (mcq)

In nested loops for a 2D array, the inner loop iterates over:

- A) Rows
- B) Columns
- C) Elements
- D) Memory addresses

**Answer:** B

### Q128 (mcq)

A string in C is a sequence of characters stored in a `char` array terminated by:

- A) A semicolon (;)
- B) A null character ('\0')
- C) A newline character
- D) A space

**Answer:** B

### Q129 (mcq)

The null character `'\0'` marks:

- A) The start of the string
- B) The end of the string
- C) The middle of the string
- D) A tab space

**Answer:** B

### Q130 (mcq)

If `char name[5] = "John";`, how is it stored in memory?

- A) J, o, h, n
- B) J, o, h, n, \0
- C) J, o, h, n, space
- D) J, o, h, n, \n

**Answer:** B

### Q131 (mcq)

How many characters can `char str[20]` hold including the null terminator?

- A) 20
- B) 19
- C) 21
- D) 18

**Answer:** B

### Q132 (mcq)

Which function safely reads a line including spaces in C?

- A) `scanf("%s", str)`
- B) `gets(str)`
- C) `fgets(str, size, stdin)`
- D) `read(str)`

**Answer:** C

### Q133 (mcq)

Which function is deprecated and unsafe due to buffer overflow?

- A) `fgets`
- B) `gets`
- C) `scanf`
- D) `printf`

**Answer:** B

### Q134 (mcq)

Which function prints a string and adds a newline?

- A) `printf("%s", str)`
- B) `puts(str)`
- C) `fputs(str)`
- D) `scanf`

**Answer:** B

### Q135 (mcq)

`scanf("%s", str)` cannot read:

- A) Single characters
- B) Multi-word strings with spaces
- C) Integers
- D) Floating point numbers

**Answer:** B

### Q136 (mcq)

The header file for string functions is:

- A) `<stdio.h>`
- B) `<string.h>`
- C) `<stdlib.h>`
- D) `<math.h>`

**Answer:** B

### Q137 (mcq)

`strlen("Hello")` returns:

- A) 6
- B) 5
- C) 4
- D) 7

**Answer:** B

### Q138 (mcq)

`strlen` returns the length of the string excluding:

- A) The first character
- B) The null character '\0'
- C) The last character
- D) All vowels

**Answer:** B

### Q139 (mcq)

`strcat(dest, src)` does what?

- A) Copies src into dest
- B) Compares dest and src
- C) Concatenates src at the end of dest
- D) Returns the length of dest

**Answer:** C

### Q140 (mcq)

`strcmp(str1, str2)` returns 0 when:

- A) str1 is greater than str2
- B) str1 is less than str2
- C) str1 and str2 are equal
- D) str2 is greater than str1

**Answer:** C

### Q141 (mcq)

`strcmp(str1, str2)` returns a negative value when:

- A) str1 is greater than str2
- B) str1 is less than str2
- C) str1 and str2 are equal
- D) Both are empty

**Answer:** B

### Q142 (mcq)

`strcpy(dest, src)` does what?

- A) Copies src into dest
- B) Concatenates src at end of dest
- C) Compares dest and src
- D) Returns the length of src

**Answer:** A

### Q143 (mcq)

Which function converts a string to lowercase?

- A) `strupr`
- B) `strlwr`
- C) `strcmp`
- D) `strcat`

**Answer:** B

### Q144 (mcq)

Which function converts a string to uppercase?

- A) `strupr`
- B) `strlwr`
- C) `strcmp`
- D) `strcat`

**Answer:** A

### Q145 (mcq)

In manual string concatenation, the first step is to:

- A) Copy s2 into s1
- B) Find the end of s1
- C) Compare s1 and s2
- D) Find the length of s2

**Answer:** B

### Q146 (mcq)

In manual string concatenation, after copying s2 to s1, the result must be:

- A) Printed immediately
- B) Null terminated with '\0'
- C) Converted to lowercase
- D) Compared with s2

**Answer:** B

### Q147 (mcq)

A structure is a user-defined data type that allows grouping of:

- A) Variables of the same data type
- B) Variables of different data types under a single name
- C) Only integer variables
- D) Only character variables

**Answer:** B

### Q148 (mcq)

What is the correct syntax to define a structure?

- A) `struct Student { int roll; char name[50]; float marks; };`
- B) `struct Student { int roll, char name[50], float marks; }`
- C) `struct { int roll; char name[50]; float marks; } Student;`
- D) `Student struct { int roll; char name[50]; float marks; };`

**Answer:** A

### Q149 (mcq)

Which operator is used to access structure members?

- A) `->` (arrow)
- B) `.` (dot)
- C) `::` (scope resolution)
- D) `*` (asterisk)

**Answer:** B

### Q150 (mcq)

How do you set the roll number of structure variable `s1` to 102?

- A) `s1.roll_no = 102;`
- B) `s1->roll_no = 102;`
- C) `roll_no.s1 = 102;`
- D) `s1(roll_no) = 102;`

**Answer:** A

### Q151 (mcq)

How do you copy a name to a structure member using string functions?

- A) `s1.name = "Bob";`
- B) `s1.name = 'Bob';`
- C) `strcpy(s1.name, "Bob");`
- D) `s1->name = "Bob";`

**Answer:** C

### Q152 (mcq)

What is the purpose of `typedef` in structures?

- A) To create multiple structures
- B) To avoid writing the keyword 'struct' repeatedly
- C) To delete a structure
- D) To copy a structure

**Answer:** B

### Q153 (mcq)

With `typedef struct { int roll; char name[50]; } Student;`, how do you declare a variable?

- A) `struct Student s1;`
- B) `Student s1;`
- C) `typedef Student s1;`
- D) `s1 Student;`

**Answer:** B

### Q154 (mcq)

An array of structures is used to store:

- A) A single entity's data
- B) Data of multiple entities of the same structure type
- C) Data of different structure types
- D) Only integer data

**Answer:** B

### Q155 (mcq)

What is the declaration for an array of 50 Student structures?

- A) `struct Student class[50];`
- B) `struct Student[50] class;`
- C) `Student class(50);`
- D) `struct class[50] Student;`

**Answer:** A

### Q156 (mcq)

How do you access the name of the second student in an array of structures `s`?

- A) `s[1].name`
- B) `s.name[1]`
- C) `s[2].name`
- D) `s.name(2)`

**Answer:** A

### Q157 (mcq)

How do you access the marks of the third student in an array of structures `s`?

- A) `s.marks[3]`
- B) `s[2].marks`
- C) `s[3].marks`
- D) `s.marks(3)`

**Answer:** B

### Q158 (mcq)

An array within a structure means:

- A) The structure is inside an array
- B) The structure contains an array as one of its members
- C) Both structure and array are same
- D) The array contains structures

**Answer:** B

### Q159 (mcq)

In `struct Student { int roll; char name[50]; int marks[5]; };`, `marks` is:

- A) A structure member that is an array
- B) A separate array
- C) A pointer
- D) A nested structure

**Answer:** A

### Q160 (mcq)

How do you access the second subject marks of `s1` in `struct Student` with `marks[5]`?

- A) `s1.marks[1]`
- B) `s1.marks(1)`
- C) `s1[1].marks`
- D) `marks[1].s1`

**Answer:** A

### Q161 (mcq)

A nested structure means:

- A) A structure inside a function
- B) A structure containing another structure as a member
- C) An array inside a structure
- D) A pointer to a structure

**Answer:** B

### Q162 (mcq)

In the nested structure example, `struct Employee` contains:

- A) Only basic data types
- B) A nested `struct Address`
- C) An array of addresses
- D) Another Employee structure

**Answer:** B

### Q163 (mcq)

How do you access the city of an employee `emp1` in nested structures?

- A) `emp1.addr.city`
- B) `emp1.city`
- C) `addr.emp1.city`
- D) `city.emp1.addr`

**Answer:** A

### Q164 (mcq)

How do you access the pin code of an employee `emp1` in nested structures?

- A) `emp1.addr.pin_code`
- B) `emp1.pin_code`
- C) `addr.emp1.pin_code`
- D) `pin_code.emp1.addr`

**Answer:** A

### Q165 (mcq)

In the manual string comparison logic, the loop condition is:

- A) `s1[i] != '\0' || s2[i] != '\0'`
- B) `s1[i] == '\0' && s2[i] == '\0'`
- C) `s1[i] != '\0' && s2[i] != '\0'`
- D) `s1[i] == '\0' || s2[i] == '\0'`

**Answer:** A

### Q166 (mcq)

What is the output of `strcmp("apple", "banana")`?

- A) 0
- B) Negative
- C) Positive
- D) Undefined

**Answer:** B

### Q167 (mcq)

What is the output of `strcmp("banana", "apple")`?

- A) 0
- B) Negative
- C) Positive
- D) Undefined

**Answer:** C

### Q168 (mcq)

Which of the following is TRUE about structures?

- A) They store homogeneous data
- B) They store heterogeneous data
- C) They cannot contain arrays
- D) They cannot contain other structures

**Answer:** B

### Q169 (mcq)

The dot operator `.` is used to access structure members for:

- A) Structure variables
- B) Structure pointers
- C) Both structure variables and pointers
- D) Neither

**Answer:** A

### Q170 (mcq)

In `scanf("%d %s %f", &s[i].roll, s[i].name, &s[i].marks);`, why is `&` not used for `s[i].name`?

- A) Because name is a string (array), already an address
- B) Because name is an integer
- C) Because name is a structure
- D) Because name is a float

**Answer:** A

### Q171 (mcq)

What is the output of the following? `char str[] = "Hello"; printf("%lu", sizeof(str));`

- A) 5
- B) 6
- C) 4
- D) 7

**Answer:** B

### Q172 (mcq)

What is the output of `strlen("")`?

- A) 0
- B) 1
- C) -1
- D) Undefined

**Answer:** A

### Q173 (mcq)

Which function can read multi-word strings safely?

- A) `scanf("%s", str)`
- B) `fgets(str, size, stdin)`
- C) `gets(str)`
- D) `getchar()`

**Answer:** B

### Q174 (mcq)

In manual string concatenation, `s1[i] = '\0';` is used to:

- A) Start the string
- B) Null terminate the result
- C) End the program
- D) Clear the string

**Answer:** B

### Q175 (mcq)

A 2D array can be used to represent:

- A) A list of numbers
- B) A matrix (table) with rows and columns
- C) A single character
- D) A string

**Answer:** B

### Q176 (mcq)

In `int arr[2][3] = { {1,2,3}, {4,5,6} };`, `arr[1][2]` is:

- A) 3
- B) 4
- C) 5
- D) 6

**Answer:** D

### Q177 (mcq)

In `int arr[2][3] = {1, 2, 3, 4, 5, 6};`, `arr[0][2]` is:

- A) 1
- B) 2
- C) 3
- D) 4

**Answer:** C

### Q178 (mcq)

For `int arr[2][3]`, what is the size of the array in bytes (assuming int is 4 bytes)?

- A) 6 bytes
- B) 12 bytes
- C) 24 bytes
- D) 48 bytes

**Answer:** C

### Q179 (mcq)

Strings in C are terminated by:

- A) Newline
- B) Null character
- C) Space
- D) Tab

**Answer:** B

### Q180 (mcq)

The `strcat` function requires the destination to have:

- A) Less space
- B) Enough space to hold the concatenated result
- C) Same size as source
- D) Null character at start

**Answer:** B

### Q181 (mcq)

In the memory representation of Row-Major Order, the address of `arr[1][0]` comes after:

- A) `arr[0][2]`
- B) `arr[1][1]`
- C) `arr[2][0]`
- D) `arr[0][0]`

**Answer:** A

### Q182 (mcq)

What is the use of `fgets` over `scanf("%s")`?

- A) `fgets` is faster
- B) `fgets` can read strings with spaces
- C) `fgets` only reads integers
- D) `fgets` is deprecated

**Answer:** B

### Q183 (mcq)

The `strcmp` function returns 0 when:

- A) Strings are equal
- B) Strings are different
- C) First string is larger
- D) Second string is larger

**Answer:** A

### Q184 (mcq)

A structure can contain:

- A) Only basic data types
- B) Arrays and other structures as members
- C) Only arrays
- D) Only other structures

**Answer:** B

### Q185 (mcq)

The `strupr` and `strlwr` functions are:

- A) Part of standard C library
- B) Non-standard but common
- C) Not available in any compiler
- D) Only for Windows

**Answer:** B

### Q186 (mcq)

Which of the following correctly initializes a string?

- A) `char str[] = "Hello";`
- B) `char str[5] = "Hello";`
- C) `char str = "Hello";`
- D) `char str(6) = "Hello";`

**Answer:** A

### Q187 (mcq)

`char str[5] = "Hello";` causes:

- A) No error, stores "Hello"
- B) Error because no space for '\0'
- C) Stores "Hell"
- D) Stores "Hello\0"

**Answer:** B

### Q188 (mcq)

In a 2D array declaration `int arr[][3] = { {1,2}, {4,5} };`, what is the value of `arr[1][2]`?

- A) 0
- B) 5
- C) Garbage value
- D) 4

**Answer:** A

### Q189 (mcq)

In a 2D array declaration `int arr[2][3] = { {1,2}, {4,5} };`, what is the value of `arr[0][2]`?

- A) 0
- B) 3
- C) Garbage value
- D) 2

**Answer:** A

### Q190 (mcq)

The `strcpy` function copies the string including:

- A) Only the characters
- B) The null character '\0'
- C) Only the first character
- D) A newline

**Answer:** B

### Q191 (mcq)

Which of the following is NOT a use of 2D arrays?

- A) Matrix operations
- B) Storing tabular data
- C) Representing images
- D) Storing a list of names

**Answer:** D

### Q192 (mcq)

In nested structures, the outer structure is accessed first, then:

- A) The inner structure name, then its members
- B) Only the inner structure members directly
- C) The outer structure members only
- D) Both structures are accessed simultaneously

**Answer:** A

### Q193 (mcq)

An array of structures is useful for:

- A) Storing a single student's data
- B) Storing multiple students' data
- C) Storing only integer data
- D) Storing only string data

**Answer:** B

### Q194 (mcq)

Which of the following correctly creates a structure variable and initializes it?

- A) `struct Student s1 = {101, "Alice", 85.5};`
- B) `struct Student s1 = 101, "Alice", 85.5;`
- C) `struct Student s1(101, "Alice", 85.5);`
- D) `Student s1 = (101, "Alice", 85.5);`

**Answer:** A

### Q195 (mcq)

How do you access the state in nested structures for `emp1`?

- A) `emp1.state`
- B) `emp1.addr.state`
- C) `addr.emp1.state`
- D) `state.emp1.addr`

**Answer:** B

### Q196 (mcq)

The `fgets` function reads the newline character as well, which means:

- A) It must be removed manually if not wanted
- B) It is automatically removed
- C) It causes an error
- D) It is ignored

**Answer:** A

### Q197 (mcq)

In the manual string comparison logic, `flag` is used to:

- A) Store the result of comparison
- B) Store the length of strings
- C) Store the index
- D) Store the address

**Answer:** A

### Q198 (mcq)

If `flag = 1` after string comparison, it means:

- A) Strings are equal
- B) Strings are different
- C) Strings are empty
- D) Strings are same length

**Answer:** A

### Q199 (mcq)

In the row-major order memory layout diagram, consecutive memory addresses contain:

- A) Alternate rows
- B) Elements of the same row consecutively
- C) Elements of the same column consecutively
- D) Random elements

**Answer:** B

### Q200 (mcq)

Which of the following is TRUE about structures and arrays?

- A) Arrays store homogeneous data; structures store heterogeneous data
- B) Arrays store heterogeneous data; structures store homogeneous data
- C) Both store only homogeneous data
- D) Both store only heterogeneous data

**Answer:** A
