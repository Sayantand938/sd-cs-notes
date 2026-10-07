## Section 1: Basic Structure (Questions 1 to 15)

#### Q1. Which of the following is a valid identifier in C?
A) `_variable` ✅  
B) `2variable`  
C) `var-iable`  
D) `int`

#### Q2. What is the size of `float` data type on a 32‑bit compiler?
A) 2 bytes  
B) 4 bytes ✅  
C) 8 bytes  
D) 16 bytes

#### Q3. Which preprocessor directive is used to check if a macro is defined?
A) `#ifdef` ✅  
B) `#define`  
C) `#undef`  
D) `#include`

#### Q4. What is the output of the following code?
```c
#define SQUARE(x) x*x
printf("%d", SQUARE(3+2));
```
A) 25  
B) 13  
C) 11 ✅  
D) 9

#### Q5. Which of the following is NOT a valid data type modifier in C?
A) `signed`  
B) `unsigned`  
C) `long`  
D) `string` ✅

#### Q6. What is the default value of a global variable if not initialized?
A) 0 ✅  
B) Garbage value  
C) NULL  
D) Undefined

#### Q7. Which header file contains functions like `sqrt()` and `pow()`?
A) `stdio.h`  
B) `stdlib.h`  
C) `math.h` ✅  
D) `string.h`

#### Q8. How many bytes does the `long int` occupy on a 64‑bit Linux system?
A) 4  
B) 8 ✅  
C) 2  
D) 16

#### Q9. Which of the following is a valid character constant in C?
A) `'ab'`  
B) `"a"`  
C) `'\n'` ✅  
D) `\a`

#### Q10. The `#ifndef` directive is used to:
A) Define a macro if not defined ✅  
B) Undefine a macro  
C) Include a file  
D) Generate an error

#### Q11. What is the range of `signed int` on a 16‑bit system?
A) –32768 to 32767 ✅  
B) –2147483648 to 2147483647  
C) 0 to 65535  
D) –128 to 127

#### Q12. Which of the following statements about variable declaration is correct?
A) Variables must be declared at the beginning of the function.  
B) Variables can be declared anywhere before they are used (C99 onwards). ✅  
C) Variables cannot be declared inside loops.  
D) Variables must be initialized at declaration.

#### Q13. What is the purpose of the `typedef` keyword?
A) To define a new data type alias ✅  
B) To define a macro  
C) To declare a variable  
D) To include a header

#### Q14. Which of the following is NOT a valid escape sequence in C?
A) `\n`  
B) `\t`  
C) `\b`  
D) `\s` ✅

#### Q15. What is the output of the following code?
```c
int x = 10;
const int y = 20;
x = y;
printf("%d", x);
```
A) 10  
B) 20 ✅  
C) Error  
D) Garbage

---

## Section 2: Operators & I/O (Questions 16 to 35)

#### Q16. What is the result of `7 & 3` (bitwise AND)?
A) 1  
B) 3 ✅  
C) 7  
D) 4

#### Q17. Which operator is used to perform logical NOT?
A) `!` ✅  
B) `~`  
C) `-`  
D) `not`

#### Q18. What is the output of `printf("%d", 10 ^ 6);` (bitwise XOR)?
A) 12 ✅  
B) 16  
C) 10  
D) 6

#### Q19. What is the value of `x` after `int x = 5; x = x << 2;`?
A) 20 ✅  
B) 10  
C) 5  
D) 2

#### Q20. Which of the following has the highest precedence?
A) `*`  
B) `+`  
C) `!` ✅  
D) `&&`

#### Q21. What is the output of the following?
```c
int a = 5, b = 10, c;
c = (a > b) ? a : b;
printf("%d", c);
```
A) 5  
B) 10 ✅  
C) 15  
D) 0

#### Q22. Which function is used to print a string with a newline automatically?
A) `printf()`  
B) `puts()` ✅  
C) `putchar()`  
D) `write()`

#### Q23. What is the result of `5 / 2` in integer division?
A) 2.5  
B) 2 ✅  
C) 3  
D) 2.0

#### Q24. What does the `\t` escape sequence do?
A) Horizontal tab ✅  
B) Vertical tab  
C) Backspace  
D) Carriage return

#### Q25. Which format specifier is used to print an unsigned integer?
A) `%d`  
B) `%u` ✅  
C) `%o`  
D) `%x`

#### Q26. What is the output of the following?
```c
int x = 5;
printf("%d", x == 5 ? 10 : 20);
```
A) 5  
B) 10 ✅  
C) 20  
D) Error

#### Q27. Which of the following is NOT a valid assignment operator?
A) `=`  
B) `+=`  
C) `<=` ✅  
D) `*=` 

#### Q28. What is the value of `(3, 5, 7, 9)` using the comma operator?
A) 3  
B) 5  
C) 7  
D) 9 ✅

#### Q29. Which function is used to read a line of text including spaces?
A) `scanf()`  
B) `gets()`  
C) `fgets()` ✅  
D) `getchar()`

#### Q30. What is the output of `printf("%.2f", 3.14159);`?
A) `3.14` ✅  
B) `3.14159`  
C) `3.142`  
D) `3.14`

#### Q31. Which operator is used to access the value at a pointer?
A) `&`  
B) `*` ✅  
C) `->`  
D) `.`

#### Q32. What is the result of implicit conversion in `double d = 5 / 2;`?
A) 2.5  
B) 2.0 ✅  
C) 2  
D) 3.0

#### Q33. How do you read a single character from standard input?
A) `scanf("%c", &ch);` ✅  
B) `getchar(ch);`  
C) `scanf("%s", &ch);`  
D) `read(ch);`

#### Q34. What is the output of `printf("%d", 8 >> 2);` (right shift)?
A) 2 ✅  
B) 4  
C) 8  
D) 1

#### Q35. Which escape sequence produces a backslash?
A) `\\` ✅  
B) `\b`  
C) `\/`  
D) `\`

---

## Section 3: Branching and Looping (Questions 36 to 50)

#### Q36. What is the output of the following code?
```c
int x = 10;
if (x > 20)
    printf("A");
else if (x > 5)
    printf("B");
else
    printf("C");
```
A) A  
B) B ✅  
C) C  
D) AB

#### Q37. How many times will the following loop execute?
```c
int i = 0;
do {
    i++;
} while(i < 3);
```
A) 2  
B) 3 ✅  
C) 4  
D) Infinite

#### Q38. What will be the output of the following?
```c
for(int i=0; i<5; i+=2)
    printf("%d", i);
```
A) 0 1 2 3 4  
B) 0 2 4 ✅  
C) 1 3 5  
D) 0 2 4 6

#### Q39. What is the output of the following `switch`?
```c
int x = 1;
switch(x) {
    case 1: printf("A");
    case 2: printf("B");
            break;
    default: printf("C");
}
```
A) A  
B) B  
C) AB ✅  
D) AC

#### Q40. Which loop is guaranteed to execute its body at least once?
A) `while`  
B) `for`  
C) `do-while` ✅  
D) None

#### Q41. What is the output of the following?
```c
int i=1;
while(i <= 3) {
    if(i == 2) break;
    printf("%d", i);
    i++;
}
```
A) 1 2 3  
B) 1 ✅  
C) 1 2  
D) 2 3

#### Q42. What is the purpose of the `default` case in a `switch`?
A) It is mandatory.  
B) It executes when no case matches. ✅  
C) It is executed first.  
D) It terminates the switch.

#### Q43. How many times will the following loop execute?
```c
int i = 5;
while(i > 0) {
    i--;
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
        if(i == j) continue;
        printf("%d%d", i, j);
    }
}
```
A) 1112 2122  
B) 12 21 ✅  
C) 11 22  
D) 1221

#### Q45. What does `break` do inside a `switch`?
A) Exits the `switch` ✅  
B) Exits the program  
C) Continues to next case  
D) Restarts the switch

#### Q46. Which of the following is a valid infinite `for` loop?
A) `for(int i=0; i<10; i--)`  
B) `for( ; ; )` ✅  
C) `for(int i=0; ; i++)`  
D) Both B and C ✅

#### Q47. What is the output of the following?
```c
int x = 0;
if(x = 0)
    printf("Zero");
else
    printf("Non-zero");
```
A) Zero  
B) Non-zero ✅  
C) Error  
D) ZeroNon-zero

#### Q48. What is the output of the following `while` loop?
```c
int i = 0;
while(i++ < 3)
    printf("%d", i);
```
A) 0 1 2  
B) 1 2 3 ✅  
C) 1 2  
D) 0 1 2 3

#### Q49. Which statement is used to skip the remaining code in a loop iteration?
A) `break`  
B) `continue` ✅  
C) `return`  
D) `goto`

#### Q50. What is the output of the following?
```c
int i;
for(i=0; i<3; i++);
    printf("%d", i);
```
A) 0 1 2  
B) 3 ✅  
C) 2  
D) 0

---

## Section 4: Arrays and Structures (Questions 51 to 70)

#### Q51. What is the index of the last element in an array of size 10?
A) 10  
B) 9 ✅  
C) 0  
D) 11

#### Q52. What is the output of the following?
```c
int arr[5] = {1,2,3};
printf("%d", arr[3]);
```
A) 0 ✅  
B) Garbage  
C) 3  
D) Error

#### Q53. How is a two-dimensional array of size `[3][4]` stored?
A) Column-major  
B) Row-major ✅  
C) Diagonal  
D) Sparse

#### Q54. Which function copies one string to another?
A) `strcpy()` ✅  
B) `strcat()`  
C) `strcmp()`  
D) `strlen()`

#### Q55. What is the output of the following?
```c
char str[] = "C Programming";
printf("%lu", sizeof(str));
```
A) 13  
B) 14 ✅  
C) 12  
D) 15

#### Q56. Which function returns the length of a string excluding the null character?
A) `strlen()` ✅  
B) `sizeof()`  
C) `strlength()`  
D) `strlen()` returns including null

#### Q57. What is the output of the following?
```c
char s1[10] = "Hello";
char s2[10] = "World";
strcat(s1, s2);
printf("%s", s1);
```
A) Hello  
B) World  
C) HelloWorld ✅  
D) Hello World

#### Q58. How do you initialize a structure variable?
A) `struct Student s1 = {10, "John"};` ✅  
B) `Student s1 = {10, "John"};`  
C) `s1 = (struct Student){10, "John"};`  
D) All of the above are valid. ✅

#### Q59. What is the output of the following?
```c
struct {
    int a;
    int b;
} p = {5, 10};
printf("%d", p.b);
```
A) 5  
B) 10 ✅  
C) Error  
D) p.b

#### Q60. How do you access structure member `x` via pointer `ptr`?
A) `ptr.x`  
B) `ptr->x` ✅  
C) `*ptr.x`  
D) `&ptr.x`

#### Q61. What is the output of the following?
```c
int arr[2][3] = {{1,2,3},{4,5,6}};
printf("%d", arr[0][2]);
```
A) 1  
B) 2  
C) 3 ✅  
D) 4

#### Q62. Which of the following correctly declares an array of 5 structures of type `Student`?
A) `struct Student[5] s;`  
B) `struct Student s[5];` ✅  
C) `Student s[5];`  
D) `struct s[5] Student;`

#### Q63. What does `strcmp(str1, str2)` return if strings are equal?
A) 0 ✅  
B) 1  
C) -1  
D) Positive value

#### Q64. What is a nested structure?
A) A structure that contains another structure as a member ✅  
B) An array of structures  
C) A structure with pointers  
D) A recursive structure

#### Q65. What is the output of the following?
```c
struct Employee {
    int id;
    char name[20];
} e = {101, "Rahul"};
printf("%d", e.id);
```
A) 101 ✅  
B) Rahul  
C) Error  
D) 0

#### Q66. What is the size of the following structure on a 32‑bit system (ignore padding)?
```c
struct Sample {
    int x;
    char y;
};
```
A) 5 bytes  
B) 8 bytes (with padding) ✅  
C) 4 bytes  
D) 6 bytes

#### Q67. Which function concatenates at most `n` characters?
A) `strncat()` ✅  
B) `strcat()`  
C) `strcpy()`  
D) `strncpy()`

#### Q68. What is the output of the following?
```c
char s[20] = "Hello";
strcpy(s, "Hi");
printf("%s", s);
```
A) Hello  
B) Hi ✅  
C) HelloHi  
D) Error

#### Q69. In C, array name represents:
A) The address of the first element ✅  
B) The value of the first element  
C) The size of the array  
D) The last element

#### Q70. Which of the following initializes a 2D array completely?
A) `int a[2][3] = {0};`  
B) `int a[2][3] = {{0,0,0},{0,0,0}};`  
C) `int a[2][3] = {0,0,0,0,0,0};`  
D) All of the above ✅

---

## Section 5: User-Defined Functions (Questions 71 to 85)

#### Q71. What is a function declaration called?
A) Prototype ✅  
B) Definition  
C) Call  
D) Return

#### Q72. In call by value, the formal parameters receive:
A) The address of actual arguments  
B) A copy of actual arguments ✅  
C) The original arguments  
D) Nothing

#### Q73. How can we achieve call by reference in C?
A) By passing pointers ✅  
B) By passing values  
C) By using global variables  
D) By using `register` variables

#### Q74. What is the output of the following?
```c
void inc(int x) {
    x++;
}
int main() {
    int a = 5;
    inc(a);
    printf("%d", a);
}
```
A) 6  
B) 5 ✅  
C) 0  
D) Error

#### Q75. What is the base case in recursion?
A) The simplest case that can be solved directly ✅  
B) The recursive call  
C) The return statement  
D) The function definition

#### Q76. What is the output of the following recursive function for `fib(3)`?
```c
int fib(int n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```
A) 2 ✅  
B) 3  
C) 1  
D) 0

#### Q77. Which of the following is a valid function prototype?
A) `int sum(int a, int b);` ✅  
B) `sum(int a, int b);`  
C) `int sum(a, b);`  
D) `sum(a, b) int;`

#### Q78. What is the output of the following?
```c
int func(int x) {
    if(x == 0) return 1;
    return x * func(x-1);
}
printf("%d", func(3));
```
A) 6 ✅  
B) 3  
C) 1  
D) 0

#### Q79. Which keyword makes a variable retain its value between function calls?
A) `static` ✅  
B) `auto`  
C) `register`  
D) `extern`

#### Q80. Can a function in C return multiple values directly?
A) Yes, using a comma.  
B) No, only one value can be returned. ✅  
C) Yes, by using arrays.  
D) Yes, by using structures (by returning a structure). ✅

#### Q81. What is the default return type of a function if omitted?
A) `void`  
B) `int` ✅  
C) `char`  
D) `float`

#### Q82. Which function is called automatically when a program starts?
A) `start()`  
B) `main()` ✅  
C) `init()`  
D) `begin()`

#### Q83. What is the output of the following?
```c
int square(int x) { return x*x; }
int main() {
    int a = square(5);
    printf("%d", a);
}
```
A) 25 ✅  
B) 10  
C) 5  
D) Error

#### Q84. Which storage class makes a variable global accessible across files?
A) `extern` ✅  
B) `static`  
C) `auto`  
D) `register`

#### Q85. What is the maximum depth of recursion in C?
A) Limited by stack size ✅  
B) Unlimited  
C) 1000  
D) 255

---

## Section 6: Pointers (Questions 86 to 100)

#### Q86. Which operator gives the address of a variable?
A) `*`  
B) `&` ✅  
C) `->`  
D) `.`

#### Q87. What is the output of the following?
```c
int x = 20;
int *p = &x;
printf("%d", *p);
```
A) Address of x  
B) 20 ✅  
C) 0  
D) Garbage

#### Q88. What is a wild pointer?
A) Pointer that points to a freed memory  
B) Uninitialized pointer ✅  
C) NULL pointer  
D) Pointer to constant

#### Q89. What is the output of the following?
```c
int arr[3] = {10,20,30};
int *p = arr;
printf("%d", *(p+2));
```
A) 10  
B) 20  
C) 30 ✅  
D) Error

#### Q90. If `int *p;` and `sizeof(int)` is 4, what is `p+1`?
A) Address incremented by 1 byte  
B) Address incremented by 4 bytes ✅  
C) Address incremented by 2 bytes  
D) Compilation error

#### Q91. What is the output of the following?
```c
char s[] = "Good";
char *p = s;
printf("%c", *(p+1));
```
A) G  
B) o ✅  
C) o  
D) d

#### Q92. Which pointer type can point to any data type without casting?
A) `void *` ✅  
B) `char *`  
C) `int *`  
D) `NULL *`

#### Q93. What is the output of the following?
```c
int x = 5;
int *p = &x;
*p = 15;
printf("%d", x);
```
A) 5  
B) 15 ✅  
C) Address  
D) 0

#### Q94. A dangling pointer refers to:
A) Memory that has been freed ✅  
B) NULL  
C) Uninitialized  
D) Constant address

#### Q95. Which of the following is invalid pointer arithmetic?
A) `ptr + 1`  
B) `ptr - 1`  
C) `ptr1 + ptr2` ✅  
D) `ptr1 - ptr2`

#### Q96. What is the size of a pointer on a typical 64‑bit system?
A) 4 bytes  
B) 8 bytes ✅  
C) 2 bytes  
D) 16 bytes

#### Q97. What is the output of the following?
```c
int a[2][2] = {{1,2},{3,4}};
int *p = &a[0][0];
printf("%d", *(p+3));
```
A) 1  
B) 2  
C) 3  
D) 4 ✅

#### Q98. How to declare a pointer to a function that takes two ints and returns int?
A) `int (*func)(int, int);` ✅  
B) `int *func(int, int);`  
C) `int func(int, int)*;`  
D) `func *int(int, int);`

#### Q99. What is the output of the following?
```c
int *p;
printf("%p", p);
```
A) Garbage address ✅  
B) NULL  
C) 0  
D) Error

#### Q100. Which of the following is TRUE about array name as pointer?
A) It is a constant pointer ✅  
B) It can be incremented  
C) It can be assigned to another array  
D) It stores the size of the array

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
|------|--------|------|--------|------|--------|------|--------|
| 1 | A | 26 | B | 51 | B | 76 | A |
| 2 | B | 27 | C | 52 | A | 77 | A |
| 3 | A | 28 | D | 53 | B | 78 | A |
| 4 | C | 29 | C | 54 | A | 79 | A |
| 5 | D | 30 | A | 55 | B | 80 | B (and D also correct) |
| 6 | A | 31 | B | 56 | A | 81 | B |
| 7 | C | 32 | B | 57 | C | 82 | B |
| 8 | B | 33 | A | 58 | D | 83 | A |
| 9 | C | 34 | A | 59 | B | 84 | A |
| 10 | A | 35 | A | 60 | B | 85 | A |
| 11 | A | 36 | B | 61 | C | 86 | B |
| 12 | B | 37 | B | 62 | B | 87 | B |
| 13 | A | 38 | B | 63 | A | 88 | B |
| 14 | D | 39 | C | 64 | A | 89 | C |
| 15 | B | 40 | C | 65 | A | 90 | B |
| 16 | B | 41 | B | 66 | B | 91 | B |
| 17 | A | 42 | B | 67 | A | 92 | A |
| 18 | A | 43 | B | 68 | B | 93 | B |
| 19 | A | 44 | B | 69 | A | 94 | A |
| 20 | C | 45 | A | 70 | D | 95 | C |
| 21 | B | 46 | D | 71 | A | 96 | B |
| 22 | B | 47 | B | 72 | B | 97 | D |
| 23 | B | 48 | B | 73 | A | 98 | A |
| 24 | A | 49 | B | 74 | B | 99 | A |
| 25 | B | 50 | B | 75 | A | 100 | A |
