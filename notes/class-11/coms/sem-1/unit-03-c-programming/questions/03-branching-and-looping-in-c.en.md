# Branching And Looping In C — Questions (EN)

### Q1 (mcq)

Which of the following is a valid identifier in C?

- A) `_variable`
- B) `2variable`
- C) `var-iable`
- D) `int`

**Answer:** A

### Q2 (mcq)

What is the size of `float` data type on a 32‑bit compiler?

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** B

### Q3 (mcq)

Which preprocessor directive is used to check if a macro is defined?

- A) `#ifdef`
- B) `#define`
- C) `#undef`
- D) `#include`

**Answer:** A

### Q4 (mcq)

What is the output of the following code?

```c
#define SQUARE(x) x*x
printf("%d", SQUARE(3+2));
```

- A) 25
- B) 13
- C) 11
- D) 9

**Answer:** C

### Q5 (mcq)

Which of the following is NOT a valid data type modifier in C?

- A) `signed`
- B) `unsigned`
- C) `long`
- D) `string`

**Answer:** D

### Q6 (mcq)

What is the default value of a global variable if not initialized?

- A) 0
- B) Garbage value
- C) NULL
- D) Undefined

**Answer:** A

### Q7 (mcq)

Which header file contains functions like `sqrt()` and `pow()`?

- A) `stdio.h`
- B) `stdlib.h`
- C) `math.h`
- D) `string.h`

**Answer:** C

### Q8 (mcq)

How many bytes does the `long int` occupy on a 64‑bit Linux system?

- A) 4
- B) 8
- C) 2
- D) 16

**Answer:** B

### Q9 (mcq)

Which of the following is a valid character constant in C?

- A) `'ab'`
- B) `"a"`
- C) `'\n'`
- D) `\a`

**Answer:** C

### Q10 (mcq)

The `#ifndef` directive is used to:

- A) Define a macro if not defined
- B) Undefine a macro
- C) Include a file
- D) Generate an error

**Answer:** A

### Q11 (mcq)

What is the range of `signed int` on a 16‑bit system?

- A) –32768 to 32767
- B) –2147483648 to 2147483647
- C) 0 to 65535
- D) –128 to 127

**Answer:** A

### Q12 (mcq)

Which of the following statements about variable declaration is correct?

- A) Variables must be declared at the beginning of the function.
- B) Variables can be declared anywhere before they are used (C99 onwards).
- C) Variables cannot be declared inside loops.
- D) Variables must be initialized at declaration.

**Answer:** B

### Q13 (mcq)

What is the purpose of the `typedef` keyword?

- A) To define a new data type alias
- B) To define a macro
- C) To declare a variable
- D) To include a header

**Answer:** A

### Q14 (mcq)

Which of the following is NOT a valid escape sequence in C?

- A) `\n`
- B) `\t`
- C) `\b`
- D) `\s`

**Answer:** D

### Q15 (mcq)

What is the output of the following code?

```c
int x = 10;
const int y = 20;
x = y;
printf("%d", x);
```

- A) 10
- B) 20
- C) Error
- D) Garbage

**Answer:** B

### Q16 (mcq)

What is the result of `7 & 3` (bitwise AND)?

- A) 1
- B) 3
- C) 7
- D) 4

**Answer:** B

### Q17 (mcq)

Which operator is used to perform logical NOT?

- A) `!`
- B) `~`
- C) `-`
- D) `not`

**Answer:** A

### Q18 (mcq)

What is the output of `printf("%d", 10 ^ 6);` (bitwise XOR)?

- A) 12
- B) 16
- C) 10
- D) 6

**Answer:** A

### Q19 (mcq)

What is the value of `x` after `int x = 5; x = x << 2;`?

- A) 20
- B) 10
- C) 5
- D) 2

**Answer:** A

### Q20 (mcq)

Which of the following has the highest precedence?

- A) `*`
- B) `+`
- C) `!`
- D) `&&`

**Answer:** C

### Q21 (mcq)

What is the output of the following?

```c
int a = 5, b = 10, c;
c = (a > b) ? a : b;
printf("%d", c);
```

- A) 5
- B) 10
- C) 15
- D) 0

**Answer:** B

### Q22 (mcq)

Which function is used to print a string with a newline automatically?

- A) `printf()`
- B) `puts()`
- C) `putchar()`
- D) `write()`

**Answer:** B

### Q23 (mcq)

What is the result of `5 / 2` in integer division?

- A) 2.5
- B) 2
- C) 3
- D) 2.0

**Answer:** B

### Q24 (mcq)

What does the `\t` escape sequence do?

- A) Horizontal tab
- B) Vertical tab
- C) Backspace
- D) Carriage return

**Answer:** A

### Q25 (mcq)

Which format specifier is used to print an unsigned integer?

- A) `%d`
- B) `%u`
- C) `%o`
- D) `%x`

**Answer:** B

### Q26 (mcq)

What is the output of the following?

```c
int x = 5;
printf("%d", x == 5 ? 10 : 20);
```

- A) 5
- B) 10
- C) 20
- D) Error

**Answer:** B

### Q27 (mcq)

Which of the following is NOT a valid assignment operator?

- A) `=`
- B) `+=`
- C) `<=`
- D) `*=`

**Answer:** C

### Q28 (mcq)

What is the value of `(3, 5, 7, 9)` using the comma operator?

- A) 3
- B) 5
- C) 7
- D) 9

**Answer:** D

### Q29 (mcq)

Which function is used to read a line of text including spaces?

- A) `scanf()`
- B) `gets()`
- C) `fgets()`
- D) `getchar()`

**Answer:** C

### Q30 (mcq)

What is the output of `printf("%.2f", 3.14159);`?

- A) `3.14`
- B) `3.14159`
- C) `3.142`
- D) `3.14`

**Answer:** A

### Q31 (mcq)

Which operator is used to access the value at a pointer?

- A) `&`
- B) `*`
- C) `->`
- D) `.`

**Answer:** B

### Q32 (mcq)

What is the result of implicit conversion in `double d = 5 / 2;`?

- A) 2.5
- B) 2.0
- C) 2
- D) 3.0

**Answer:** B

### Q33 (mcq)

How do you read a single character from standard input?

- A) `scanf("%c", &ch);`
- B) `getchar(ch);`
- C) `scanf("%s", &ch);`
- D) `read(ch);`

**Answer:** A

### Q34 (mcq)

What is the output of `printf("%d", 8 >> 2);` (right shift)?

- A) 2
- B) 4
- C) 8
- D) 1

**Answer:** A

### Q35 (mcq)

Which escape sequence produces a backslash?

- A) `\\`
- B) `\b`
- C) `\/`
- D) `\`

**Answer:** A

### Q36 (mcq)

What is the output of the following code?

```c
int x = 10;
if (x > 20)
    printf("A");
else if (x > 5)
    printf("B");
else
    printf("C");
```

- A) A
- B) B
- C) C
- D) AB

**Answer:** B

### Q37 (mcq)

How many times will the following loop execute?

```c
int i = 0;
do {
    i++;
} while(i < 3);
```

- A) 2
- B) 3
- C) 4
- D) Infinite

**Answer:** B

### Q38 (mcq)

What will be the output of the following?

```c
for(int i=0; i<5; i+=2)
    printf("%d", i);
```

- A) 0 1 2 3 4
- B) 0 2 4
- C) 1 3 5
- D) 0 2 4 6

**Answer:** B

### Q39 (mcq)

What is the output of the following `switch`?

```c
int x = 1;
switch(x) {
    case 1: printf("A");
    case 2: printf("B");
            break;
    default: printf("C");
}
```

- A) A
- B) B
- C) AB
- D) AC

**Answer:** C

### Q40 (mcq)

Which loop is guaranteed to execute its body at least once?

- A) `while`
- B) `for`
- C) `do-while`
- D) None

**Answer:** C

### Q41 (mcq)

What is the output of the following?

```c
int i=1;
while(i <= 3) {
    if(i == 2) break;
    printf("%d", i);
    i++;
}
```

- A) 1 2 3
- B) 1
- C) 1 2
- D) 2 3

**Answer:** B

### Q42 (mcq)

What is the purpose of the `default` case in a `switch`?

- A) It is mandatory.
- B) It executes when no case matches.
- C) It is executed first.
- D) It terminates the switch.

**Answer:** B

### Q43 (mcq)

How many times will the following loop execute?

```c
int i = 5;
while(i > 0) {
    i--;
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
        if(i == j) continue;
        printf("%d%d", i, j);
    }
}
```

- A) 1112 2122
- B) 12 21
- C) 11 22
- D) 1221

**Answer:** B

### Q45 (mcq)

What does `break` do inside a `switch`?

- A) Exits the `switch`
- B) Exits the program
- C) Continues to next case
- D) Restarts the switch

**Answer:** A

### Q46 (mcq)

Which of the following is a valid infinite `for` loop?

- A) `for(int i=0; i<10; i--)`
- B) `for( ; ; )`
- C) `for(int i=0; ; i++)`
- D) Both B and C

**Answer:** D

### Q47 (mcq)

What is the output of the following?

```c
int x = 0;
if(x = 0)
    printf("Zero");
else
    printf("Non-zero");
```

- A) Zero
- B) Non-zero
- C) Error
- D) ZeroNon-zero

**Answer:** B

### Q48 (mcq)

What is the output of the following `while` loop?

```c
int i = 0;
while(i++ < 3)
    printf("%d", i);
```

- A) 0 1 2
- B) 1 2 3
- C) 1 2
- D) 0 1 2 3

**Answer:** B

### Q49 (mcq)

Which statement is used to skip the remaining code in a loop iteration?

- A) `break`
- B) `continue`
- C) `return`
- D) `goto`

**Answer:** B

### Q50 (mcq)

What is the output of the following?

```c
int i;
for(i=0; i<3; i++);
    printf("%d", i);
```

- A) 0 1 2
- B) 3
- C) 2
- D) 0

**Answer:** B

### Q51 (mcq)

What is the index of the last element in an array of size 10?

- A) 10
- B) 9
- C) 0
- D) 11

**Answer:** B

### Q52 (mcq)

What is the output of the following?

```c
int arr[5] = {1,2,3};
printf("%d", arr[3]);
```

- A) 0
- B) Garbage
- C) 3
- D) Error

**Answer:** A

### Q53 (mcq)

How is a two-dimensional array of size `[3][4]` stored?

- A) Column-major
- B) Row-major
- C) Diagonal
- D) Sparse

**Answer:** B

### Q54 (mcq)

Which function copies one string to another?

- A) `strcpy()`
- B) `strcat()`
- C) `strcmp()`
- D) `strlen()`

**Answer:** A

### Q55 (mcq)

What is the output of the following?

```c
char str[] = "C Programming";
printf("%lu", sizeof(str));
```

- A) 13
- B) 14
- C) 12
- D) 15

**Answer:** B

### Q56 (mcq)

Which function returns the length of a string excluding the null character?

- A) `strlen()`
- B) `sizeof()`
- C) `strlength()`
- D) `strlen()` returns including null

**Answer:** A

### Q57 (mcq)

What is the output of the following?

```c
char s1[10] = "Hello";
char s2[10] = "World";
strcat(s1, s2);
printf("%s", s1);
```

- A) Hello
- B) World
- C) HelloWorld
- D) Hello World

**Answer:** C

### Q58 (mcq)

How do you initialize a structure variable?

- A) `struct Student s1 = {10, "John"};`
- B) `Student s1 = {10, "John"};`
- C) `s1 = (struct Student){10, "John"};`
- D) All of the above are valid.

**Answer:** D

### Q59 (mcq)

What is the output of the following?

```c
struct {
    int a;
    int b;
} p = {5, 10};
printf("%d", p.b);
```

- A) 5
- B) 10
- C) Error
- D) p.b

**Answer:** B

### Q60 (mcq)

How do you access structure member `x` via pointer `ptr`?

- A) `ptr.x`
- B) `ptr->x`
- C) `*ptr.x`
- D) `&ptr.x`

**Answer:** B

### Q61 (mcq)

What is the output of the following?

```c
int arr[2][3] = {{1,2,3},{4,5,6}};
printf("%d", arr[0][2]);
```

- A) 1
- B) 2
- C) 3
- D) 4

**Answer:** C

### Q62 (mcq)

Which of the following correctly declares an array of 5 structures of type `Student`?

- A) `struct Student[5] s;`
- B) `struct Student s[5];`
- C) `Student s[5];`
- D) `struct s[5] Student;`

**Answer:** B

### Q63 (mcq)

What does `strcmp(str1, str2)` return if strings are equal?

- A) 0
- B) 1
- C) -1
- D) Positive value

**Answer:** A

### Q64 (mcq)

What is a nested structure?

- A) A structure that contains another structure as a member
- B) An array of structures
- C) A structure with pointers
- D) A recursive structure

**Answer:** A

### Q65 (mcq)

What is the output of the following?

```c
struct Employee {
    int id;
    char name[20];
} e = {101, "Rahul"};
printf("%d", e.id);
```

- A) 101
- B) Rahul
- C) Error
- D) 0

**Answer:** A

### Q66 (mcq)

What is the size of the following structure on a 32‑bit system (ignore padding)?

```c
struct Sample {
    int x;
    char y;
};
```

- A) 5 bytes
- B) 8 bytes (with padding)
- C) 4 bytes
- D) 6 bytes

**Answer:** B

### Q67 (mcq)

Which function concatenates at most `n` characters?

- A) `strncat()`
- B) `strcat()`
- C) `strcpy()`
- D) `strncpy()`

**Answer:** A

### Q68 (mcq)

What is the output of the following?

```c
char s[20] = "Hello";
strcpy(s, "Hi");
printf("%s", s);
```

- A) Hello
- B) Hi
- C) HelloHi
- D) Error

**Answer:** B

### Q69 (mcq)

In C, array name represents:

- A) The address of the first element
- B) The value of the first element
- C) The size of the array
- D) The last element

**Answer:** A

### Q70 (mcq)

Which of the following initializes a 2D array completely?

- A) `int a[2][3] = {0};`
- B) `int a[2][3] = {{0,0,0},{0,0,0}};`
- C) `int a[2][3] = {0,0,0,0,0,0};`
- D) All of the above

**Answer:** D

### Q71 (mcq)

What is a function declaration called?

- A) Prototype
- B) Definition
- C) Call
- D) Return

**Answer:** A

### Q72 (mcq)

In call by value, the formal parameters receive:

- A) The address of actual arguments
- B) A copy of actual arguments
- C) The original arguments
- D) Nothing

**Answer:** B

### Q73 (mcq)

How can we achieve call by reference in C?

- A) By passing pointers
- B) By passing values
- C) By using global variables
- D) By using `register` variables

**Answer:** A

### Q74 (mcq)

What is the output of the following?

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

- A) 6
- B) 5
- C) 0
- D) Error

**Answer:** B

### Q75 (mcq)

What is the base case in recursion?

- A) The simplest case that can be solved directly
- B) The recursive call
- C) The return statement
- D) The function definition

**Answer:** A

### Q76 (mcq)

What is the output of the following recursive function for `fib(3)`?

```c
int fib(int n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

- A) 2
- B) 3
- C) 1
- D) 0

**Answer:** A

### Q77 (mcq)

Which of the following is a valid function prototype?

- A) `int sum(int a, int b);`
- B) `sum(int a, int b);`
- C) `int sum(a, b);`
- D) `sum(a, b) int;`

**Answer:** A

### Q78 (mcq)

What is the output of the following?

```c
int func(int x) {
    if(x == 0) return 1;
    return x * func(x-1);
}
printf("%d", func(3));
```

- A) 6
- B) 3
- C) 1
- D) 0

**Answer:** A

### Q79 (mcq)

Which keyword makes a variable retain its value between function calls?

- A) `static`
- B) `auto`
- C) `register`
- D) `extern`

**Answer:** A

### Q80 (mcq)

Can a function in C return multiple values directly?

- A) Yes, using a comma.
- B) No — the `return` statement yields exactly one value.
- C) Yes, by returning an array.
- D) Yes, by returning a `struct`.

**Answer:** B

<!-- A struct return is still one value of struct type; the caller reads
     several members from it. C also has no array return type. -->
### Q81 (mcq)

What is the default return type of a function if omitted?

- A) `void`
- B) `int`
- C) `char`
- D) `float`

**Answer:** B

### Q82 (mcq)

Which function is called automatically when a program starts?

- A) `start()`
- B) `main()`
- C) `init()`
- D) `begin()`

**Answer:** B

### Q83 (mcq)

What is the output of the following?

```c
int square(int x) { return x*x; }
int main() {
    int a = square(5);
    printf("%d", a);
}
```

- A) 25
- B) 10
- C) 5
- D) Error

**Answer:** A

### Q84 (mcq)

Which storage class makes a variable global accessible across files?

- A) `extern`
- B) `static`
- C) `auto`
- D) `register`

**Answer:** A

### Q85 (mcq)

What is the maximum depth of recursion in C?

- A) Limited by stack size
- B) Unlimited
- C) 1000
- D) 255

**Answer:** A

### Q86 (mcq)

Which operator gives the address of a variable?

- A) `*`
- B) `&`
- C) `->`
- D) `.`

**Answer:** B

### Q87 (mcq)

What is the output of the following?

```c
int x = 20;
int *p = &x;
printf("%d", *p);
```

- A) Address of x
- B) 20
- C) 0
- D) Garbage

**Answer:** B

### Q88 (mcq)

What is a wild pointer?

- A) Pointer that points to a freed memory
- B) Uninitialized pointer
- C) NULL pointer
- D) Pointer to constant

**Answer:** B

### Q89 (mcq)

What is the output of the following?

```c
int arr[3] = {10,20,30};
int *p = arr;
printf("%d", *(p+2));
```

- A) 10
- B) 20
- C) 30
- D) Error

**Answer:** C

### Q90 (mcq)

If `int *p;` and `sizeof(int)` is 4, what is `p+1`?

- A) Address incremented by 1 byte
- B) Address incremented by 4 bytes
- C) Address incremented by 2 bytes
- D) Compilation error

**Answer:** B

### Q91 (mcq)

What is the output of the following?

```c
char s[] = "Good";
char *p = s;
printf("%c", *(p+1));
```

- A) G
- B) o
- C) o
- D) d

**Answer:** B

### Q92 (mcq)

Which pointer type can point to any data type without casting?

- A) `void *`
- B) `char *`
- C) `int *`
- D) `NULL *`

**Answer:** A

### Q93 (mcq)

What is the output of the following?

```c
int x = 5;
int *p = &x;
*p = 15;
printf("%d", x);
```

- A) 5
- B) 15
- C) Address
- D) 0

**Answer:** B

### Q94 (mcq)

A dangling pointer refers to:

- A) Memory that has been freed
- B) NULL
- C) Uninitialized
- D) Constant address

**Answer:** A

### Q95 (mcq)

Which of the following is invalid pointer arithmetic?

- A) `ptr + 1`
- B) `ptr - 1`
- C) `ptr1 + ptr2`
- D) `ptr1 - ptr2`

**Answer:** C

### Q96 (mcq)

What is the size of a pointer on a typical 64‑bit system?

- A) 4 bytes
- B) 8 bytes
- C) 2 bytes
- D) 16 bytes

**Answer:** B

### Q97 (mcq)

What is the output of the following?

```c
int a[2][2] = {{1,2},{3,4}};
int *p = &a[0][0];
printf("%d", *(p+3));
```

- A) 1
- B) 2
- C) 3
- D) 4

**Answer:** D

### Q98 (mcq)

How to declare a pointer to a function that takes two ints and returns int?

- A) `int (*func)(int, int);`
- B) `int *func(int, int);`
- C) `int func(int, int)*;`
- D) `func *int(int, int);`

**Answer:** A

### Q99 (mcq)

What is the output of the following?

```c
int *p;
printf("%p", p);
```

- A) Garbage address
- B) NULL
- C) 0
- D) Error

**Answer:** A

### Q100 (mcq)

Which of the following is TRUE about array name as pointer?

- A) It is a constant pointer
- B) It can be incremented
- C) It can be assigned to another array
- D) It stores the size of the array

**Answer:** A

### Q101 (mcq)

By default, a C program executes statements in which order?

- A) Random order
- B) Sequential (line by line)
- C) Reverse order
- D) Only the first statement

**Answer:** B

### Q102 (mcq)

In C, a condition evaluates to:

- A) 0 for True, 1 for False
- B) 0 for False, non-zero for True
- C) 1 for True, 0 for False
- D) Only 0 or 1

**Answer:** B

### Q103 (mcq)

Which statement executes a block of code only if the given condition is true?

- A) `if`
- B) `while`
- C) `for`
- D) `do-while`

**Answer:** A

### Q104 (mcq)

What is the syntax of the `if` statement in C?

- A) `if condition { }`
- B) `if (condition) { }`
- C) `if [condition] { }`
- D) `if condition then { }`

**Answer:** B

### Q105 (mcq)

In the `if` statement, the block executes when the condition is:

- A) Zero
- B) Non-zero
- C) Negative only
- D) Positive only

**Answer:** B

### Q106 (mcq)

In the example `if (age >= 18)`, what is printed if age = 18?

- A) Nothing
- B) "Eligible to vote."
- C) "Not eligible"
- D) Error

**Answer:** B

### Q107 (mcq)

Which statement executes one block if condition is true and another if condition is false?

- A) `if`
- B) `if-else`
- C) `else if`
- D) `while`

**Answer:** B

### Q108 (mcq)

What is the output of `int num = 7; if (num % 2 == 0) { printf("Even"); } else { printf("Odd"); }`?

- A) Even
- B) Odd
- C) Error
- D) Nothing

**Answer:** B

### Q109 (mcq)

The `else if` ladder is used when:

- A) Only one condition needs checking
- B) There are multiple mutually exclusive conditions
- C) No conditions need checking
- D) Only false conditions exist

**Answer:** B

### Q110 (mcq)

In the grading example, if marks = 85, what is the output?

- A) Grade A
- B) Grade B
- C) Grade C
- D) Fail

**Answer:** B

### Q111 (mcq)

In the grading example, if marks = 92, what is the output?

- A) Grade A
- B) Grade B
- C) Grade C
- D) Fail

**Answer:** A

### Q112 (mcq)

In the grading example, if marks = 65, what is the output?

- A) Grade A
- B) Grade B
- C) Grade C
- D) Fail

**Answer:** C

### Q113 (mcq)

A Nested `if-else` is:

- A) An `if` statement inside a loop
- B) An `if` or `if-else` inside another `if` or `if-else`
- C) An `if` statement with multiple conditions
- D) An `if` statement without braces

**Answer:** B

### Q114 (mcq)

In the nested `if-else` example, if age = 25 and citizen = 1, what is the output?

- A) Too young
- B) Not a citizen
- C) Eligible to vote
- D) Nothing

**Answer:** C

### Q115 (mcq)

In the nested `if-else` example, if age = 16 and citizen = 1, what is the output?

- A) Too young
- B) Not a citizen
- C) Eligible to vote
- D) Nothing

**Answer:** A

### Q116 (mcq)

In the nested `if-else` example, if age = 25 and citizen = 0, what is the output?

- A) Too young
- B) Not a citizen
- C) Eligible to vote
- D) Nothing

**Answer:** B

### Q117 (mcq)

Which loop checks the condition first before executing the body?

- A) `do-while`
- B) `while`
- C) Both `while` and `do-while`
- D) Neither

**Answer:** B

### Q118 (mcq)

A `while` loop is called:

- A) Exit-Controlled
- B) Entry-Controlled
- C) Condition-Controlled
- D) Counter-Controlled

**Answer:** B

### Q119 (mcq)

If the condition in a `while` loop is initially false, how many times does the body execute?

- A) 0
- B) 1
- C) Infinite
- D) Depends on the update

**Answer:** A

### Q120 (mcq)

In a `while` loop, the update statement is:

- A) In the header
- B) Inside the body
- C) Not required
- D) Before the condition

**Answer:** B

### Q121 (mcq)

What is the output of `int i = 1; while (i <= 5) { printf("%d ", i); i++; }`?

- A) 1 2 3 4 5
- B) 0 1 2 3 4
- C) 1 2 3 4 5 6
- D) Infinite loop

**Answer:** A

### Q122 (mcq)

Which loop guarantees execution of the body at least once?

- A) `while`
- B) `for`
- C) `do-while`
- D) Both `while` and `for`

**Answer:** C

### Q123 (mcq)

A `do-while` loop is called:

- A) Entry-Controlled
- B) Exit-Controlled
- C) Condition-Controlled
- D) Counter-Controlled

**Answer:** B

### Q124 (mcq)

In a `do-while` loop, the condition is checked:

- A) Before the body executes
- B) After the body executes
- C) Only once
- D) Never

**Answer:** B

### Q125 (mcq)

The `do-while` loop syntax ends with:

- A) No semicolon
- B) A semicolon after while (condition);
- C) A semicolon after do
- D) A comma

**Answer:** B

### Q126 (mcq)

The `do-while` loop is best used for:

- A) Fixed number of iterations
- B) Menu-driven programs that must execute once
- C) Infinite loops
- D) Array traversal

**Answer:** B

### Q127 (mcq)

Which loop combines initialization, condition, and increment in a single line?

- A) `while`
- B) `do-while`
- C) `for`
- D) None of the above

**Answer:** C

### Q128 (mcq)

The `for` loop is:

- A) Exit-Controlled
- B) Entry-Controlled
- C) Both Entry and Exit Controlled
- D) Neither

**Answer:** B

### Q129 (mcq)

In a `for` loop, the initialization executes:

- A) Every iteration
- B) Once at the start
- C) After the body
- D) Only if condition is true

**Answer:** B

### Q130 (mcq)

In a `for` loop, the increment executes:

- A) Before the body
- B) After the body
- C) Before the condition
- D) Only if condition is true

**Answer:** B

### Q131 (mcq)

What is the output of `for (i = 1; i <= 10; i++) { sum += i; }` for sum starting from 0?

- A) 45
- B) 50
- C) 55
- D) 60

**Answer:** C

### Q132 (mcq)

Which loop is preferred when the number of iterations is known beforehand?

- A) `while`
- B) `do-while`
- C) `for`
- D) Any loop is equally preferred

**Answer:** C

### Q133 (mcq)

All three loops (`for`, `while`, `do-while`) are:

- A) Not interchangeable
- B) Interchangeable
- C) Only used for different data types
- D) Only `for` and `while` are interchangeable

**Answer:** B

### Q134 (mcq)

A Nested Loop is:

- A) A loop inside another loop
- B) Two loops running parallel
- C) A loop with no body
- D) A loop with multiple conditions

**Answer:** A

### Q135 (mcq)

In nested loops, for each iteration of the outer loop:

- A) The inner loop runs once
- B) The inner loop runs completely
- C) Both loops run simultaneously
- D) Only the outer loop runs

**Answer:** B

### Q136 (mcq)

In the multiplication table example with `i` from 1 to 2 and `j` from 1 to 5, how many total iterations?

- A) 5
- B) 7
- C) 10
- D) 2

**Answer:** C

### Q137 (mcq)

The time complexity of nested loops is:

- A) O(n + m)
- B) O(n × m)
- C) O(n/m)
- D) O(n - m)

**Answer:** B

### Q138 (mcq)

An `if` statement can execute how many times maximum?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** B

### Q139 (mcq)

An `if-else` statement can execute how many times maximum?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** B

### Q140 (mcq)

A `while` loop can execute how many times minimum?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** A

### Q141 (mcq)

A `do-while` loop can execute how many times minimum?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** B

### Q142 (mcq)

A `for` loop can execute how many times minimum?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** A

### Q143 (mcq)

Which of the following creates an infinite loop?

- A) `while (i <= 5)`
- B) `while (1)`
- C) `for (i=0; i<10; i++)`
- D) `do { } while (i < 5);`

**Answer:** B

### Q144 (mcq)

`for (;;)` in C creates:

- A) A loop that never executes
- B) An infinite loop
- C) A syntax error
- D) A loop that executes once

**Answer:** B

### Q145 (mcq)

What is the common mistake in `for(i=0; i<10; i--);`?

- A) Syntax error
- B) Infinite loop due to decrement instead of increment
- C) Logical error only
- D) No error

**Answer:** B

### Q146 (mcq)

Without braces `{}`, how many statements belong to the `if` condition?

- A) All statements
- B) Only the immediate next statement
- C) None
- D) The statement before the condition

**Answer:** B

### Q147 (mcq)

What does the following code print? `if (a > b) printf("A is bigger"); printf("This is always printed!");`

- A) Only "A is bigger"
- B) Only "This is always printed!"
- C) Both statements (conditionally)
- D) Error

**Answer:** C

### Q148 (mcq)

What is the issue with `while (i <= 5); { printf("%d", i); i++; }`?

- A) Syntax error
- B) The semicolon creates an empty infinite loop
- C) Logical error only
- D) No issue

**Answer:** B

### Q149 (mcq)

What is the issue with `if (x = 5) { ... }`?

- A) Syntax error
- B) Assignment instead of equality; condition always true
- C) Logical error only
- D) No issue

**Answer:** B

### Q150 (mcq)

Which operator should be used for equality comparison in C?

- A) `=`
- B) `==`
- C) `!=`
- D) `===`

**Answer:** B

### Q151 (mcq)

The `if` statement is used for:

- A) Looping
- B) Decision / Branching
- C) Function definition
- D) Variable declaration

**Answer:** B

### Q152 (mcq)

The `while` loop is used for:

- A) Decision / Branching
- B) Iteration / Repetition
- C) Function definition
- D) Variable declaration

**Answer:** B

### Q153 (mcq)

The `do-while` loop is used for:

- A) Decision / Branching
- B) Iteration / Repetition
- C) Function definition
- D) Variable declaration

**Answer:** B

### Q154 (mcq)

The `for` loop is used for:

- A) Decision / Branching
- B) Iteration / Repetition
- C) Function definition
- D) Variable declaration

**Answer:** B

### Q155 (mcq)

Which loop type is Entry-Controlled?

- A) `do-while` only
- B) `while` and `for`
- C) `do-while` and `while`
- D) Only `for`

**Answer:** B

### Q156 (mcq)

Which loop type is Exit-Controlled?

- A) `while`
- B) `for`
- C) `do-while`
- D) All of the above

**Answer:** C

### Q157 (mcq)

What is the factorial of 5 from the factorial program?

- A) 60
- B) 120
- C) 24
- D) 720

**Answer:** B

### Q158 (mcq)

In the factorial program, `fact *= i` is equivalent to:

- A) `fact = fact * i`
- B) `fact = fact + i`
- C) `fact = i`
- D) `fact = fact / i`

**Answer:** A

### Q159 (mcq)

In the prime checking program, the loop runs until:

- A) `i <= n`
- B) `i <= n/2`
- C) `i < n`
- D) `i <= sqrt(n)`

**Answer:** B

### Q160 (mcq)

In the prime checking program, `flag = 0` indicates:

- A) Number is prime
- B) Number is not prime
- C) Number is even
- D) Number is odd

**Answer:** B

### Q161 (mcq)

In the prime checking program, `break` is used to:

- A) Continue the loop
- B) Exit the loop early
- C) Restart the loop
- D) Skip the iteration

**Answer:** B

### Q162 (mcq)

If the input to the prime program is 7, what is the output?

- A) Prime
- B) Not Prime
- C) Error
- D) Nothing

**Answer:** A

### Q163 (mcq)

If the input to the prime program is 9, what is the output?

- A) Prime
- B) Not Prime
- C) Error
- D) Nothing

**Answer:** B

### Q164 (mcq)

What is the minimum number of times a `while` loop body can execute?

- A) 0
- B) 1
- C) Infinite
- D) Depends on initialization

**Answer:** A

### Q165 (mcq)

What is the minimum number of times a `do-while` loop body can execute?

- A) 0
- B) 1
- C) Infinite
- D) Depends on condition

**Answer:** B

### Q166 (mcq)

In the flowchart for `if` statement, the condition leads to:

- A) Only True path
- B) True path and False path (but False goes to End)
- C) Only False path
- D) Both paths execute

**Answer:** B

### Q167 (mcq)

In the flowchart for `if-else`, the condition leads to:

- A) Only one path
- B) True path and False path
- C) No paths
- D) Both paths merge immediately

**Answer:** B

### Q168 (mcq)

In the flowchart for `while` loop, after executing the body, the flow goes to:

- A) End
- B) Update, then Condition
- C) Directly to Condition
- D) Directly to End

**Answer:** B

### Q169 (mcq)

In the flowchart for `do-while` loop, after executing the body, the flow goes to:

- A) Condition
- B) End
- C) Start
- D) Update only

**Answer:** A

### Q170 (mcq)

In the flowchart for `for` loop, after executing the body, the flow goes to:

- A) End
- B) Increment/Update, then Condition
- C) Directly to Condition
- D) Initialization

**Answer:** B

### Q171 (mcq)

Which loop body will execute at least once regardless of condition?

- A) `while`
- B) `for`
- C) `do-while`
- D) All of the above

**Answer:** C

### Q172 (mcq)

The `if` statement can be used without `else`:

- A) True
- B) False
- C) Only in C
- D) Never

**Answer:** A

### Q173 (mcq)

The `else` clause is optional in `if-else`:

- A) True, but `else` requires `if`
- B) False
- C) Only in loops
- D) Never

**Answer:** A

### Q174 (mcq)

The condition `(age >= 18)` evaluates to:

- A) 0 if true
- B) Non-zero if true
- C) Only 1 if true
- D) Only 0 if false

**Answer:** B

### Q175 (mcq)

In C, the value 0 represents:

- A) True
- B) False
- C) Both True and False
- D) Neither

**Answer:** B

### Q176 (mcq)

In C, any non-zero value represents:

- A) True
- B) False
- C) Both True and False
- D) Neither

**Answer:** A

### Q177 (mcq)

The `else if` ladder is also called:

- A) Nested if
- B) Multi-way if
- C) Switch statement
- D) Ternary operator

**Answer:** B

### Q178 (mcq)

In the grading example, what is printed for marks = 58?

- A) Grade A
- B) Grade B
- C) Grade C
- D) Fail

**Answer:** D

### Q179 (mcq)

In the grading example, what is printed for marks = 75?

- A) Grade A
- B) Grade B
- C) Grade C
- D) Fail

**Answer:** B

### Q180 (mcq)

Which loop is most suitable when the number of iterations is unknown but a condition must be checked before each iteration?

- A) `for`
- B) `while`
- C) `do-while`
- D) All are equally suitable

**Answer:** B

### Q181 (mcq)

Which loop is most suitable when the number of iterations is known and counting is involved?

- A) `for`
- B) `while`
- C) `do-while`
- D) All are equally suitable

**Answer:** A

### Q182 (mcq)

Which loop is most suitable for menu-driven programs?

- A) `for`
- B) `while`
- C) `do-while`
- D) None

**Answer:** C

### Q183 (mcq)

The statement `break` in a loop causes:

- A) The loop to continue
- B) The loop to exit immediately
- C) The program to crash
- D) The condition to be rechecked

**Answer:** B

### Q184 (mcq)

In the prime program, if `n = 2`, what is the output?

- A) Prime
- B) Not Prime
- C) Error
- D) Nothing

**Answer:** A

### Q185 (mcq)

In the prime program, if `n = 1`, what is the output?

- A) Prime
- B) Not Prime
- C) Error
- D) Nothing

**Answer:** A

### Q186 (mcq)

In the prime program, if `n = 4`, what is the output?

- A) Prime
- B) Not Prime
- C) Error
- D) Nothing

**Answer:** B

### Q187 (mcq)

The `for` loop initialization can include multiple variables using:

- A) Semicolon
- B) Comma operator
- C) And operator
- D) Or operator

**Answer:** B

### Q188 (mcq)

The `for (i = 0, j = 10; i < 5; i++, j--)` is an example of:

- A) Syntax error
- B) Multiple initializations and updates
- C) Nested loop
- D) Infinite loop

**Answer:** B

### Q189 (mcq)

In the `do-while` loop, the condition is evaluated:

- A) Before each iteration
- B) After each iteration
- C) Only at the start
- D) Only at the end of the program

**Answer:** B

### Q190 (mcq)

In the `while` loop, the condition is evaluated:

- A) Before each iteration
- B) After each iteration
- C) Only at the start
- D) Only at the end

**Answer:** A

### Q191 (mcq)

In the `for` loop, the condition is evaluated:

- A) Before each iteration
- B) After each iteration
- C) Only at the start
- D) Only at the end

**Answer:** A

### Q192 (mcq)

What happens if the update statement is missing in a `while` loop?

- A) The loop executes once
- B) Infinite loop
- C) Syntax error
- D) The loop never executes

**Answer:** B

### Q193 (mcq)

What happens if the condition is missing in a `for` loop?

- A) Syntax error
- B) Infinite loop (assumed true)
- C) The loop never executes
- D) The loop executes once

**Answer:** B

### Q194 (mcq)

The `if` statement can be nested inside another `if`:

- A) True
- B) False
- C) Only in C++
- D) Never

**Answer:** A

### Q195 (mcq)

The `else` clause in an `if-else` is:

- A) Mandatory
- B) Optional
- C) Only for loops
- D) Only for functions

**Answer:** B

### Q196 (mcq)

In the factorial program, if n = 0, what is the output?

- A) 0
- B) 1
- C) -1
- D) Error

**Answer:** B

### Q197 (mcq)

In the factorial program, if n = 3, what is the output?

- A) 3
- B) 6
- C) 9
- D) 12

**Answer:** B

### Q198 (mcq)

Which of the following is a valid `for` loop syntax?

- A) `for (i = 0; i < 10; i++)`
- B) `for i = 0 to 10`
- C) `for (i < 10; i++)`
- D) `for (i = 0; i < 10)`

**Answer:** A

### Q199 (mcq)

Which of the following is a valid `while` loop syntax?

- A) `while i < 10 { }`
- B) `while (i < 10) { }`
- C) `while [i < 10] { }`
- D) `while (i < 10); { }`

**Answer:** B

### Q200 (mcq)

Which of the following is a valid `do-while` loop syntax?

- A) `do { } while (i < 10);`
- B) `do { } while (i < 10)`
- C) `do { } while i < 10;`
- D) `do (i < 10) { }`

**Answer:** A
