## Section 1: Basic Structure (Questions 1 to 15)

#### Q1. Which of the following is NOT a valid identifier in C?

A) `_abc123`
B) `abc_123`
C) `123_abc` ✅
D) `Abc123`

#### Q2. What is the size of `double` data type on a 32‑bit compiler?

A) 4 bytes
B) 8 bytes ✅
C) 16 bytes
D) 2 bytes

#### Q3. The `#include` directive is used to:

A) Define a macro
B) Include a header file ✅
C) Undefine a macro
D) Generate an error

#### Q4. What is the output of the following code?

```c
#define MAX(a,b) (a > b ? a : b)
printf("%d", MAX(5, 10));
```

A) 5
B) 10 ✅
C) 15
D) 0

#### Q5. Which of the following is a valid floating-point constant?

A) `5.0` ✅
B) `5`
C) `'5'`
D) `"5.0"`

#### Q6. What is the default value of a local variable if not initialized?

A) 0
B) Garbage value ✅
C) NULL
D) Undefined

#### Q7. Which header file contains the `malloc()` and `free()` functions?

A) `stdio.h`
B) `stdlib.h` ✅
C) `math.h`
D) `string.h`

#### Q8. What is the range of `char` on a system where char is signed?

A) 0 to 255
B) -128 to 127 ✅
C) -32768 to 32767
D) 0 to 65535

#### Q9. Which of the following is a valid string constant?

A) `'Hello'`
B) `"Hello"` ✅
C) `Hello`
D) `\Hello\`

#### Q10. The `#error` directive is used to:

A) Generate a compilation error ✅
B) Define a macro
C) Include a file
D) Check for errors

#### Q11. What is the size of `short int` on a 32‑bit system?

A) 1 byte
B) 2 bytes ✅
C) 4 bytes
D) 8 bytes

#### Q12. Which of the following is TRUE about `const` variables?

A) They must be initialized at declaration. ✅
B) They can be modified later.
C) They are stored in stack.
D) They are processed by preprocessor.

#### Q13. What is the purpose of the `register` keyword?

A) To store variable in CPU register for faster access ✅
B) To store variable in memory
C) To make variable global
D) To declare a constant

#### Q14. Which escape sequence represents a single quote?

A) `\'` ✅
B) `\"`
C) `\q`
D) `\\`

#### Q15. What is the output of the following?

```c
int x = 5;
const int *p = &x;
x = 10;
printf("%d", *p);
```

A) 5
B) 10 ✅
C) Error
D) Garbage

---

## Section 2: Operators & I/O (Questions 16 to 35)

#### Q16. What is the result of `12 & 10` (bitwise AND)?

A) 8 ✅
B) 12
C) 10
D) 2

#### Q17. Which operator is used for bitwise OR?

A) `||`
B) `|` ✅
C) `&`
D) `^`

#### Q18. What is the output of `printf("%d", 5 ^ 7);` (bitwise XOR)?

A) 2 ✅
B) 12
C) 5
D) 7

#### Q19. What is the value of `x` after `int x = 16; x = x >> 2;`?

A) 8
B) 4 ✅
C) 16
D) 2

#### Q20. Which operator has the lowest precedence?

A) `=`
B) `,` ✅
C) `||`
D) `&&`

#### Q21. What is the output of the following?

```c
int a = 10, b = 20, c;
c = (a > b) ? a : b;
printf("%d", c);
```

A) 10
B) 20 ✅
C) 30
D) 0

#### Q22. Which function is used to write a character to standard output?

A) `putchar()` ✅
B) `puts()`
C) `printf()`
D) `write()`

#### Q23. What is the result of `10 / 3` in integer division?

A) 3.33
B) 3 ✅
C) 4
D) 3.0

#### Q24. What does the `\r` escape sequence do?

A) Newline
B) Carriage return ✅
C) Tab
D) Backspace

#### Q25. Which format specifier is used to print an octal number?

A) `%d`
B) `%o` ✅
C) `%x`
D) `%u`

#### Q26. What is the output of the following?

```c
int x = 7;
printf("%d", x == 7 ? 100 : 200);
```

A) 7
B) 100 ✅
C) 200
D) Error

#### Q27. Which of the following is NOT a valid operator in C?

A) `++`
B) `--`
C) `**` ✅
D) `+=`

#### Q28. What is the value of `(2, 4, 6, 8, 10)` using the comma operator?

A) 2
B) 4
C) 8
D) 10 ✅

#### Q29. Which function is used to read formatted input?

A) `scanf()` ✅
B) `gets()`
C) `fgets()`
D) `getchar()`

#### Q30. What is the output of `printf("%6.2f", 12.345);`?

A) ` 12.35` ✅
B) `12.35`
C) `12.345`
D) `12.34`

#### Q31. Which operator is used to access structure member through pointer?

A) `.`
B) `->` ✅
C) `*`
D) `&`

#### Q32. What is the result of explicit conversion in `int x = (int)3.9;`?

A) 4
B) 3 ✅
C) 3.9
D) Error

#### Q33. How do you read a string with spaces using `scanf`?

A) `scanf("%s", str);`
B) `scanf("%[^\n]", str);` ✅
C) `scanf("%c", str);`
D) Cannot be done

#### Q34. What is the output of `printf("%d", 5 << 3);` (left shift)?

A) 15
B) 40 ✅
C) 8
D) 5

#### Q35. Which escape sequence represents a double quote?

A) `\'`
B) `\"` ✅
C) `\q`
D) `\\`

---

## Section 3: Branching and Looping (Questions 36 to 50)

#### Q36. What is the output of the following code?

```c
int x = 15;
if (x > 20)
    printf("A");
else if (x > 10)
    printf("B");
else
    printf("C");
```

A) A
B) B ✅
C) C
D) AC

#### Q37. How many times will the following loop execute?

```c
int i = 0;
do {
    printf("%d", i);
    i++;
} while(i < 0);
```

A) 0 times
B) 1 time ✅
C) Infinite
D) Compilation error

#### Q38. What will be the output of the following?

```c
for(int i=1; i<=5; i+=2)
    printf("%d", i);
```

A) 1 2 3 4 5
B) 1 3 5 ✅
C) 2 4
D) 1 3 5 7

#### Q39. What is the output of the following `switch`?

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

A) C
B) C D ✅
C) A B C
D) B

#### Q40. Which loop checks the condition at the end?

A) `while`
B) `for`
C) `do-while` ✅
D) None

#### Q41. What is the output of the following?

```c
int i=0;
while(i < 3) {
    i++;
    if(i == 2) continue;
    printf("%d", i);
}
```

A) 1 2 3
B) 1 3 ✅
C) 2 3
D) 1 2

#### Q42. Can `switch` expression be of type `float`?

A) Yes
B) No ✅
C) Only if casted
D) Depends on compiler

#### Q43. How many times will the following loop execute?

```c
int i = 10;
while(i > 0) {
    i -= 2;
}
```

A) 4
B) 5 ✅
C) 6
D) Infinite

#### Q44. What is the output of the following nested loop?

```c
for(int i=1; i<=2; i++) {
    for(int j=1; j<=2; j++) {
        if(i == j) break;
        printf("%d%d", i, j);
    }
}
```

A) 11 12 21 22
B) 12 21 ✅
C) 11 22
D) 21

#### Q45. What does `break` do inside a nested loop?

A) Exits all loops
B) Exits only the innermost loop ✅
C) Continues to next iteration
D) Restarts the program

#### Q46. Which of the following is a valid infinite `while` loop?

A) `while(1)` ✅
B) `while(0)`
C) `while(true)`
D) `while(1==2)`

#### Q47. What is the output of the following?

```c
int x = 5;
if(x = 10)
    printf("Ten");
else
    printf("Not Ten");
```

A) Ten ✅
B) Not Ten
C) Error
D) TenNot Ten

#### Q48. What is the output of the following `for` loop?

```c
for(int i=0; i<3; ++i)
    printf("%d", i);
```

A) 0 1 2 ✅
B) 1 2 3
C) 0 1 2 3
D) 1 2

#### Q49. Which statement is used to exit a function early?

A) `break`
B) `continue`
C) `return` ✅
D) `exit`

#### Q50. What is the output of the following?

```c
int i;
for(i=5; i>0; i--);
    printf("%d", i);
```

A) 5 4 3 2 1
B) 0 ✅
C) 1
D) 5

---

## Section 4: Arrays and Structures (Questions 51 to 70)

#### Q51. What is the output of the following?

```c
int arr[4] = {10, 20};
printf("%d %d", arr[1], arr[3]);
```

A) 20 0 ✅
B) 10 0
C) 20 garbage
D) 10 20

#### Q52. What is the output of the following?

```c
int arr[2][2] = {{1,2},{3,4}};
printf("%d", arr[1][0]);
```

A) 1
B) 2
C) 3 ✅
D) 4

#### Q53. What does `strlen("Hello")` return?

A) 4
B) 5 ✅
C) 6
D) 0

#### Q54. Which function compares two strings up to n characters?

A) `strcmp()`
B) `strncmp()` ✅
C) `strcpy()`
D) `strcat()`

#### Q55. What is the output of the following?

```c
char str[20] = "C Programming";
printf("%d", strlen(str));
```

A) 13 ✅
B) 14
C) 12
D) 15

#### Q56. Which function copies at most n characters from source to destination?

A) `strcpy()`
B) `strncpy()` ✅
C) `strcat()`
D) `strncat()`

#### Q57. What is the output of the following?

```c
char s1[20] = "Hello";
char s2[] = " World";
strcat(s1, s2);
printf("%s", s1);
```

A) Hello
B) World
C) Hello World ✅
D) HelloWorld

#### Q58. What is the output of the following structure code?

```c
struct Point {
    int x;
    int y;
} p = {5, 10};
printf("%d", p.x + p.y);
```

A) 5
B) 10
C) 15 ✅
D) Error

#### Q59. How do you access structure member `age` using pointer `ptr`?

```c
struct Student *ptr;
```

A) `ptr.age`
B) `ptr->age` ✅
C) `*ptr.age`
D) `&ptr.age`

#### Q60. What is the size of the following structure (with padding, 4-byte int)?

```c
struct Test {
    char a;
    int b;
    char c;
};
```

A) 6 bytes
B) 8 bytes
C) 12 bytes ✅
D) 10 bytes

#### Q61. Which of the following is TRUE about structure assignment?

A) `s1 = s2;` is invalid
B) `s1 = s2;` copies all members ✅
C) Only primitive members can be copied
D) Requires `memcpy()`

#### Q62. What is a self-referential structure?

A) Structure containing pointer to itself ✅
B) Structure containing another structure
C) Structure with array
D) Structure with no members

#### Q63. What is the output of the following?

```c
struct Student {
    int roll;
    char name[10];
} s1 = {101, "Rahul"};
printf("%s", s1.name);
```

A) 101
B) Rahul ✅
C) Error
D) name

#### Q64. Which function returns the first occurrence of a character in a string?

A) `strstr()`
B) `strchr()` ✅
C) `strrchr()`
D) `strspn()`

#### Q65. What is the output of the following?

```c
int arr[3][3] = {0};
printf("%d", arr[1][1]);
```

A) 0 ✅
B) Garbage
C) 1
D) Error

#### Q66. How is a string terminated in C?

A) By `\0` ✅
B) By `\n`
C) By `\t`
D) By `\r`

#### Q67. Which of the following correctly declares a 2D array?

A) `int a[3][4];` ✅
B) `int a[3,4];`
C) `int a(3)(4);`
D) `int a[3,4];`

#### Q68. What is the output of the following?

```c
char s[10] = "Hello";
strcpy(s, "Hi");
printf("%s", s);
```

A) Hello
B) Hi ✅
C) HelloHi
D) Error

#### Q69. What is the output of the following?

```c
struct {
    int x;
    int y;
} p1 = {1,2}, p2;
p2 = p1;
printf("%d", p2.x);
```

A) 1 ✅
B) 2
C) 0
D) Error

#### Q70. What is the maximum index of `int a[5][5]`?

A) 4 4 ✅
B) 5 5
C) 4 5
D) 5 4

---

## Section 5: User-Defined Functions (Questions 71 to 85)

#### Q71. What is the output of the following?

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

A) 10 5
B) 5 10 ✅
C) 0 0
D) Error

#### Q72. How do you pass an array to a function?

A) By value (entire array copied)
B) By reference (address passed) ✅
C) By using pointers
D) Both B and C

#### Q73. What is the output of the following function call?

```c
int power(int x, int y) {
    int result = 1;
    for(int i=0; i<y; i++)
        result *= x;
    return result;
}
printf("%d", power(2, 3));
```

A) 6
B) 8 ✅
C) 9
D) 10

#### Q74. What is a recursive function?

A) Function that calls itself ✅
B) Function that calls another function
C) Function with no return
D) Function with infinite loop

#### Q75. What is the output of the following recursive function?

```c
int sum(int n) {
    if(n == 0) return 0;
    return n + sum(n-1);
}
printf("%d", sum(3));
```

A) 3
B) 5
C) 6 ✅
D) 4

#### Q76. What is the base case in the above function (Q75)?

A) `n == 0` ✅
B) `n + sum(n-1)`
C) `sum(n-1)`
D) `return 0`

#### Q77. Which storage class makes a variable retain its value between function calls?

A) `auto`
B) `static` ✅
C) `register`
D) `extern`

#### Q78. Can a function be called before its definition in C?

A) Yes, if prototype is declared ✅
B) No, it must be defined first
C) Only if it returns void
D) Depends on compiler

#### Q79. What is the output of the following?

```c
int add(int x, int y) {
    return x + y;
}
int main() {
    int a = add(5, 10);
    printf("%d", a);
}
```

A) 5
B) 10
C) 15 ✅
D) 50

#### Q80. What is the difference between `void` and `int` return type?

A) `void` returns no value, `int` returns an integer ✅
B) `void` returns integer, `int` returns nothing
C) Both return nothing
D) Both return integers

#### Q81. What is the output of the following?

```c
int func() {
    return 10;
    return 20;
}
printf("%d", func());
```

A) 10 ✅
B) 20
C) 1020
D) Error

#### Q82. Which function is automatically called when a program ends?

A) `main()`
B) `exit()`
C) No automatic function ✅
D) `end()`

#### Q83. What is the purpose of function overloading in C?

A) Not supported in C ✅
B) Supported using `extern`
C) Supported using `static`
D) Supported using `inline`

#### Q84. What is the output of the following?

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

A) 1 1
B) 1 2 ✅
C) 0 0
D) 2 2

#### Q85. Which of the following is a valid way to call a function?

A) `function_name();` ✅
B) `call function_name();`
C) `function_name;`
D) `CALL function_name();`

---

## Section 6: Pointers (Questions 86 to 100)

#### Q86. What is the output of the following?

```c
int x = 10;
int *p = &x;
int **q = &p;
printf("%d", **q);
```

A) 10 ✅
B) Address of x
C) Address of p
D) Garbage

#### Q87. What is a NULL pointer?

A) Pointer to address 0
B) Pointer that does not point to valid memory ✅
C) Uninitialized pointer
D) Pointer to string

#### Q88. What is the output of the following?

```c
int arr[] = {5, 10, 15};
int *p = arr;
printf("%d", *(p + 1));
```

A) 5
B) 10 ✅
C) 15
D) Error

#### Q89. If `int *p` and `p` contains address 2000, what is `p + 2` (int size 4)?

A) 2008 ✅
B) 2002
C) 2004
D) 2016

#### Q90. Which of the following is TRUE about void pointer?

A) It can be dereferenced without casting
B) It cannot be dereferenced without casting ✅
C) It cannot point to any data type
D) It is invalid in C

#### Q91. What is the output of the following?

```c
char s[] = "Hello";
char *p = s + 2;
printf("%c", *p);
```

A) H
B) e
C) l ✅
D) o

#### Q92. What is a pointer to pointer used for?

A) To store address of another pointer ✅
B) To store value of variable
C) To point to function
D) To point to array

#### Q93. What is the output of the following?

```c
int x = 5;
int *p = &x;
int *q = p;
*q = 10;
printf("%d", x);
```

A) 5
B) 10 ✅
C) Address
D) Garbage

#### Q94. Which of the following is invalid?

A) `ptr = ptr + 1`
B) `ptr = ptr + 2`
C) `ptr = ptr + ptr` ✅
D) `ptr = ptr - 1`

#### Q95. What is the size of pointer on a 32‑bit system?

A) 2 bytes
B) 4 bytes ✅
C) 8 bytes
D) 16 bytes

#### Q96. What is the output of the following?

```c
int a[2][3] = {{1,2,3},{4,5,6}};
int *p = &a[0][0];
printf("%d", *(p + 4));
```

A) 4
B) 5 ✅
C) 6
D) 3

#### Q97. How to declare a pointer to a function that returns int and takes int?

A) `int (*p)(int);` ✅
B) `int *p(int);`
C) `int p(int)*;`
D) `p int (*)(int);`

#### Q98. What is the output of the following?

```c
int *p = NULL;
if(p)
    printf("Valid");
else
    printf("Invalid");
```

A) Valid
B) Invalid ✅
C) Error
D) NULL

#### Q99. Which of the following is a dangling pointer?

A) Pointer to freed memory ✅
B) NULL pointer
C) Uninitialized pointer
D) Pointer to constant

#### Q100. What is the output of the following?

```c
int a[3] = {10, 20, 30};
int *p = a;
printf("%d", p[2]);
```

A) 10
B) 20
C) 30 ✅
D) Error

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
| ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ |
| 1    | C      | 26   | B      | 51   | A      | 76   | A      |
| 2    | B      | 27   | C      | 52   | C      | 77   | B      |
| 3    | B      | 28   | D      | 53   | B      | 78   | A      |
| 4    | B      | 29   | A      | 54   | B      | 79   | C      |
| 5    | A      | 30   | A      | 55   | A      | 80   | A      |
| 6    | B      | 31   | B      | 56   | B      | 81   | A      |
| 7    | B      | 32   | B      | 57   | C      | 82   | C      |
| 8    | B      | 33   | B      | 58   | C      | 83   | A      |
| 9    | B      | 34   | B      | 59   | B      | 84   | B      |
| 10   | A      | 35   | B      | 60   | C      | 85   | A      |
| 11   | B      | 36   | B      | 61   | B      | 86   | A      |
| 12   | A      | 37   | B      | 62   | A      | 87   | B      |
| 13   | A      | 38   | B      | 63   | B      | 88   | B      |
| 14   | A      | 39   | B      | 64   | B      | 89   | A      |
| 15   | B      | 40   | C      | 65   | A      | 90   | B      |
| 16   | A      | 41   | B      | 66   | A      | 91   | C      |
| 17   | B      | 42   | B      | 67   | A      | 92   | A      |
| 18   | A      | 43   | B      | 68   | B      | 93   | B      |
| 19   | B      | 44   | B      | 69   | A      | 94   | C      |
| 20   | B      | 45   | B      | 70   | A      | 95   | B      |
| 21   | B      | 46   | A      | 71   | B      | 96   | B      |
| 22   | A      | 47   | A      | 72   | D      | 97   | A      |
| 23   | B      | 48   | A      | 73   | B      | 98   | B      |
| 24   | B      | 49   | C      | 74   | A      | 99   | A      |
| 25   | B      | 50   | B      | 75   | C      | 100  | C      |
