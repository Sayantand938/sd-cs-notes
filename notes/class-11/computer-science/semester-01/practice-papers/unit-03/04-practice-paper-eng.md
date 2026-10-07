# Unit 03 04 Practice Paper (Eng)

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
