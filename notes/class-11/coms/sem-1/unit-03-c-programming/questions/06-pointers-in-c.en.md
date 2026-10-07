# 06-pointers-in-c.en

### Q1 (mcq)

A pointer is a variable that stores:

- A) A direct value
- B) The memory address of another variable
- C) A character
- D) A floating point number

**Answer:** B

### Q2 (mcq)

Which of the following is a reason to use pointers?

- A) To make code longer
- B) To pass large data structures without copying them
- C) To avoid using arrays
- D) To slow down execution

**Answer:** B

### Q3 (mcq)

Pointers allow:

- A) Only reading values
- B) Dynamic memory allocation at runtime
- C) Only static memory allocation
- D) No memory allocation

**Answer:** B

### Q4 (mcq)

In the house analogy, a pointer is like:

- A) The house itself
- B) The address of the house
- C) The people in the house
- D) The furniture in the house

**Answer:** B

### Q5 (mcq)

The `&` operator in C is called:

- A) Dereference operator
- B) Address-of operator
- C) Indirection operator
- D) Assignment operator

**Answer:** B

### Q6 (mcq)

The `*` operator in C (when used with pointers) is called:

- A) Address-of operator
- B) Multiplication operator
- C) Indirection or Dereference operator
- D) Assignment operator

**Answer:** C

### Q7 (mcq)

What is the syntax to declare a pointer to an integer?

- A) `int ptr;`
- B) `int *ptr;`
- C) `*int ptr;`
- D) `ptr int *;`

**Answer:** B

### Q8 (mcq)

Which of the following is a valid pointer declaration?

- A) `float *fptr;`
- B) `float fptr*;`
- C) `*float fptr;`
- D) `fptr float*;`

**Answer:** A

### Q9 (mcq)

A pointer to a character is declared as:

- A) `char *cptr;`
- B) `char cptr*;`
- C) `*char cptr;`
- D) `cptr char*;`

**Answer:** A

### Q10 (mcq)

What does `int num = 10; int *ptr = &num;` do?

- A) ptr stores the value 10
- B) ptr stores the address of num
- C) ptr stores the value of num
- D) ptr stores nothing

**Answer:** B

### Q11 (mcq)

A pointer should be initialized with a valid memory address before it is:

- A) Declared
- B) Dereferenced
- C) Allocated
- D) Assigned

**Answer:** B

### Q12 (mcq)

What is the value of `ptr` in `int arr[5] = {1,2,3,4,5}; int *ptr = arr;`?

- A) The value of arr[0]
- B) The address of arr[0]
- C) The value of arr[5]
- D) The address of arr[5]

**Answer:** B

### Q13 (mcq)

`int *ptr = NULL;` sets the pointer to:

- A) A random address
- B) Zero address (null pointer)
- C) The address of variable
- D) The value 0

**Answer:** B

### Q14 (mcq)

Which header file typically defines NULL?

- A) `<string.h>`
- B) `<stdio.h>` or `<stdlib.h>`
- C) `<math.h>`
- D) `<ctype.h>`

**Answer:** B

### Q15 (mcq)

Before dereferencing a pointer, it is good practice to check:

- A) If the pointer is NULL
- B) If the pointer is negative
- C) If the pointer is positive
- D) If the pointer is zero

**Answer:** A

### Q16 (mcq)

In the example, `*ptr = 100;` does what?

- A) Changes the address stored in ptr
- B) Changes the value at the address stored in ptr
- C) Deletes the variable
- D) Creates a new variable

**Answer:** B

### Q17 (mcq)

What is the output of `printf("%d", *ptr);` if `int num = 25; int *ptr = &num;`?

- A) 25
- B) Address of num
- C) Address of ptr
- D) Garbage value

**Answer:** A

### Q18 (mcq)

The address of the pointer variable itself is obtained using:

- A) `ptr`
- B) `*ptr`
- C) `&ptr`
- D) `&*ptr`

**Answer:** C

### Q19 (mcq)

In `int a = 5; int *p = &a; int b = *p;`, what is the value of b?

- A) Address of a
- B) 5
- C) Address of p
- D) Garbage

**Answer:** B

### Q20 (mcq)

In `int a = 5; int *p = &a; *p = 20;`, what is the new value of a?

- A) 5
- B) 20
- C) 0
- D) Garbage

**Answer:** B

### Q21 (mcq)

Pointer arithmetic is performed relative to:

- A) The size of the pointer variable
- B) The size of the data type the pointer points to
- C) The size of memory
- D) A fixed byte value

**Answer:** B

### Q22 (mcq)

If `ptr` points to an `int` (4 bytes) at address 1000, what is the address of `ptr + 1`?

- A) 1001
- B) 1004
- C) 1008
- D) 1016

**Answer:** B

### Q23 (mcq)

If `ptr` points to a `char` (1 byte) at address 1000, what is the address of `ptr + 1`?

- A) 1000
- B) 1001
- C) 1004
- D) 1008

**Answer:** B

### Q24 (mcq)

If `p` points to a `double` (8 bytes) at address 2000, what is the address of `p + 2`?

- A) 2002
- B) 2008
- C) 2016
- D) 2024

**Answer:** C

### Q25 (mcq)

If `p = 1000` and `q = 1008` for an `int*` (4 bytes), what is `q - p`?

- A) 8
- B) 2
- C) 4
- D) 1

**Answer:** B

### Q26 (mcq)

Pointer subtraction returns:

- A) The number of bytes between pointers
- B) The number of elements between pointers
- C) The sum of addresses
- D) The product of addresses

**Answer:** B

### Q27 (mcq)

What is the output of `printf("%d", *(p+1));` for `int arr[3] = {10, 20, 30}; int *p = arr;`?

- A) 10
- B) 20
- C) 30
- D) Garbage

**Answer:** B

### Q28 (mcq)

In C, the name of an array acts as:

- A) A variable pointer
- B) A constant pointer to the first element
- C) A pointer to the last element
- D) A pointer to the size

**Answer:** B

### Q29 (mcq)

`arr[i]` is equivalent to:

- A) `*(arr + i)`
- B) `arr + i`
- C) `&arr[i]`
- D) `*arr + i`

**Answer:** A

### Q30 (mcq)

Which of the following is TRUE about `arr` (array name) and `ptr` (pointer)?

- A) Both are constant pointers
- B) Both are variable pointers
- C) `arr` is constant, `ptr` is variable
- D) `arr` is variable, `ptr` is constant

**Answer:** C

### Q31 (mcq)

You cannot do `arr++` because:

- A) arr is a variable pointer
- B) arr is a constant pointer
- C) arr is not a pointer
- D) arr has no address

**Answer:** B

### Q32 (mcq)

Which of the following correctly traverses an array using a pointer?

- A) `for(i=0; i<5; i++) printf("%d", *(ptr + i));`
- B) `for(i=0; i<5; i++) printf("%d", ptr + i);`
- C) `for(i=0; i<5; i++) printf("%d", *ptr + i);`
- D) `for(i=0; i<5; i++) printf("%d", ptr[i]);`

**Answer:** A

### Q33 (mcq)

An array of pointers is declared as:

- A) `int *arr[3];`
- B) `int arr*[3];`
- C) `*int arr[3];`
- D) `int arr[3]*;`

**Answer:** A

### Q34 (mcq)

In `int *arr[3] = {&a, &b, &c};`, `arr[1]` stores:

- A) The value of a
- B) The address of b
- C) The value of b
- D) The address of a

**Answer:** B

### Q35 (mcq)

To print the value pointed to by `arr[1]` in the above, you use:

- A) `printf("%d", arr[1]);`
- B) `printf("%d", *arr[1]);`
- C) `printf("%d", &arr[1]);`
- D) `printf("%d", arr);`

**Answer:** B

### Q36 (mcq)

A string in C is:

- A) A character array terminated by '\0'
- B) A character array terminated by '\n'
- C) An integer array
- D) A pointer to a double

**Answer:** A

### Q37 (mcq)

Which of the following creates a modifiable string?

- A) `char *str = "Hello";`
- B) `char str[] = "Hello";`
- C) Both A and B are equally modifiable
- D) Neither is modifiable

**Answer:** B

### Q38 (mcq)

`char *str = "World";` stores the string in:

- A) Stack memory (modifiable)
- B) Read-only memory (string literal)
- C) Heap memory
- D) Global memory

**Answer:** B

### Q39 (mcq)

`str[0] = 'A';` on `char *str = "World";` causes:

- A) No effect
- B) Undefined behavior (often crash)
- C) The string to become "Aorld"
- D) A compilation error

**Answer:** B

### Q40 (mcq)

To safely modify a string, use:

- A) `char *str = "Hello";`
- B) `char str[] = "Hello";`
- C) Both are safe
- D) Neither is safe

**Answer:** B

### Q41 (mcq)

What is the output of traversing `char str[20] = "Pointer"; char *p = str; while(*p != '\0') { printf("%c", *p); p++; }`?

- A) Pointer
- B) P
- C) r
- D) Inﬁnite loop

**Answer:** A

### Q42 (mcq)

In the string traversal, `p++` moves the pointer to:

- A) The previous character
- B) The next character
- C) The end of string
- D) The beginning of string

**Answer:** B

### Q43 (mcq)

Pointers as function arguments allow:

- A) Call by Value
- B) Call by Reference (modifying original variables)
- C) No modification of variables
- D) Only reading variables

**Answer:** B

### Q44 (mcq)

In `void addTen(int *val) { *val = *val + 10; }`, the function modifies:

- A) A local copy
- B) The original variable in the caller
- C) Nothing
- D) A global variable

**Answer:** B

### Q45 (mcq)

To call `addTen` with `num = 5`, you write:

- A) `addTen(num);`
- B) `addTen(&num);`
- C) `addTen(*num);`
- D) `addTen(num);`

**Answer:** B

### Q46 (mcq)

After calling `addTen(&num)`, the value of num becomes:

- A) 5
- B) 10
- C) 15
- D) 0

**Answer:** C

### Q47 (mcq)

A function can return a pointer to:

- A) A local variable (always safe)
- B) A static variable
- C) A local variable (never safe)
- D) A parameter

**Answer:** B

### Q48 (mcq)

Returning a pointer to a local variable causes:

- A) Correct behavior
- B) Undefined behavior (dangling pointer)
- C) Compilation error
- D) Memory leak

**Answer:** B

### Q49 (mcq)

To return a pointer that remains valid, use:

- A) A local variable
- B) A static variable or dynamically allocated memory
- C) A parameter
- D) A global variable (also valid but not ideal)

**Answer:** B

### Q50 (mcq)

In `int* invalid() { int local = 10; return &local; }`, the returned pointer:

- A) Is valid and safe
- B) Points to memory that goes out of scope
- C) Points to a static variable
- D) Points to heap memory

**Answer:** B

### Q51 (mcq)

`static int x = 100; return &x;` is safe because:

- A) x is local
- B) x persists beyond function scope
- C) x is on the heap
- D) x is a parameter

**Answer:** B

### Q52 (mcq)

Dynamically allocated memory using `malloc` persists until:

- A) The function returns
- B) It is freed using `free()`
- C) The program ends automatically
- D) It goes out of scope

**Answer:** B

### Q53 (mcq)

A function pointer stores:

- A) The address of a variable
- B) The address of a function
- C) The value of a function
- D) The size of a function

**Answer:** B

### Q54 (mcq)

What is the syntax for declaring a function pointer `funcPtr` that points to a function taking two ints and returning int?

- A) `int *funcPtr(int, int);`
- B) `int (*funcPtr)(int, int);`
- C) `int funcPtr*(int, int);`
- D) `(*int funcPtr)(int, int);`

**Answer:** B

### Q55 (mcq)

If `int add(int a, int b) { return a+b; }`, how do you store its address in `funcPtr`?

- A) `funcPtr = &add;`
- B) `funcPtr = add;`
- C) `funcPtr = *add;`
- D) Both A and B are correct

**Answer:** A

### Q56 (mcq)

To call a function using a function pointer, you write:

- A) `funcPtr(5, 3);`
- B) `*funcPtr(5, 3);`
- C) `&funcPtr(5, 3);`
- D) `funcPtr = 5, 3;`

**Answer:** A

### Q57 (mcq)

Function pointers are commonly used for:

- A) Storing data
- B) Callback functions (e.g., in `qsort`)
- C) Arithmetic operations
- D) Variable declaration

**Answer:** B

### Q58 (mcq)

Which of the following is NOT a valid use of pointers?

- A) Dynamic memory allocation
- B) Passing large structures efficiently
- C) Returning multiple values from a function
- D) Storing values directly without indirection

**Answer:** D

### Q59 (mcq)

The `NULL` pointer is:

- A) A pointer pointing to address 0
- B) A pointer pointing to garbage
- C) A pointer pointing to a variable
- D) A pointer pointing to itself

**Answer:** A

### Q60 (mcq)

Dereferencing a NULL pointer causes:

- A) No effect
- B) Segmentation fault (crash)
- C) The program to continue
- D) A warning

**Answer:** B

### Q61 (mcq)

`int *p;` (uninitialized) points to:

- A) Address 0
- B) Garbage address
- C) A valid variable
- D) The stack

**Answer:** B

### Q62 (mcq)

Which of the following is a correct way to declare a pointer to a float?

- A) `float *p;`
- B) `float p*;`
- C) `*float p;`
- D) `p float*;`

**Answer:** A

### Q63 (mcq)

If `ptr` is an `int*` at address 2000, `ptr - 2` moves the address by how many bytes (assuming int is 4 bytes)?

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** C

### Q64 (mcq)

If `ptr` is a `char*` at address 3000, `ptr + 5` gives address:

- A) 3005
- B) 3020
- C) 3004
- D) 3010

**Answer:** A

### Q65 (mcq)

In the pointer arithmetic visualization, `ptr + 1` for an int array points to:

- A) The next byte
- B) The next integer element
- C) The previous element
- D) The end of the array

**Answer:** B

### Q66 (mcq)

Which of the following correctly swaps two integers using pointers?

- A) `void swap(int *x, int *y) { int *temp = x; x = y; y = temp; }`
- B) `void swap(int *x, int *y) { int temp = *x; *x = *y; *y = temp; }`
- C) `void swap(int x, int y) { int temp = x; x = y; y = temp; }`
- D) `void swap(int *x, int *y) { *x = *y; *y = *x; }`

**Answer:** B

### Q67 (mcq)

In the correct swap function, `temp` stores:

- A) The address of x
- B) The value pointed to by x
- C) The address of y
- D) The value pointed to by y

**Answer:** B

### Q68 (mcq)

Why is `*x = *y; *y = *x;` wrong for swapping?

- A) It uses wrong syntax
- B) It loses the original value of x
- C) It swaps addresses
- D) It does nothing

**Answer:** B

### Q69 (mcq)

A pointer to an array element can be used to:

- A) Access that element only
- B) Traverse the array using pointer arithmetic
- C) Change the array size
- D) Delete the array

**Answer:** B

### Q70 (mcq)

`char *str = "Hello";` and `char str2[] = "Hello";` differ in:

- A) Only syntax
- B) Mutability (str2 is modifiable, str literal is not)
- C) Memory location (both in same place)
- D) Both are identical

**Answer:** B

### Q71 (mcq)

Which of the following is NOT a pointer operator?

- A) `&`
- B) `*`
- C) `->` (for structures, but still pointer-related)
- D) `#`

**Answer:** D

### Q72 (mcq)

The `->` operator is used with pointers to structures as a shorthand for:

- A) `(*ptr).member`
- B) `ptr.member`
- C) `&ptr.member`
- D) `ptr->*member`

**Answer:** D

### Q73 (mcq)

If `struct Student *s;`, how do you access the `roll` member?

- A) `s.roll`
- B) `s->roll`
- C) `*s.roll`
- D) `&s.roll`

**Answer:** B

### Q74 (mcq)

Pointers are essential for building:

- A) Only arrays
- B) Linked lists, trees, and graphs
- C) Only strings
- D) Only functions

**Answer:** B

### Q75 (mcq)

In a linked list, each node contains:

- A) Only data
- B) Only a pointer
- C) Data and a pointer to the next node
- D) Data and an array

**Answer:** C

### Q76 (mcq)

`malloc()` returns:

- A) An integer
- B) A pointer to the allocated memory
- C) A float
- D) A character

**Answer:** B

### Q77 (mcq)

The memory allocated by `malloc()` is in:

- A) Stack
- B) Heap
- C) Read-only section
- D) Global section

**Answer:** B

### Q78 (mcq)

To free dynamically allocated memory, use:

- A) `delete()`
- B) `free()`
- C) `release()`
- D) `clear()`

**Answer:** B

### Q79 (mcq)

Not freeing dynamically allocated memory causes:

- A) Stack overflow
- B) Memory leak
- C) No issue
- D) Compilation error

**Answer:** B

### Q80 (mcq)

In `int *arr = (int*)malloc(5 * sizeof(int));`, what does `(int*)` do?

- A) Allocates memory
- B) Type casts the pointer returned by malloc
- C) Frees memory
- D) Initializes memory

**Answer:** B

### Q81 (mcq)

Which of the following is a valid pointer declaration and initialization?

- A) `int *p = &num;`
- B) `int *p = num;`
- C) `int p = &num;`
- D) `*int p = &num;`

**Answer:** A

### Q82 (mcq)

The address of a variable can be printed using:

- A) `%d` format specifier
- B) `%p` format specifier
- C) `%s` format specifier
- D) `%c` format specifier

**Answer:** B

### Q83 (mcq)

`printf("%p", ptr);` prints:

- A) The value of ptr
- B) The address stored in ptr
- C) The value at ptr
- D) The size of ptr

**Answer:** B

### Q84 (mcq)

If `int *p;` and `int a = 10; p = &a;`, then `&*p` is equivalent to:

- A) `p`
- B) `&a`
- C) `a`
- D) Both A and B are correct

**Answer:** A

### Q85 (mcq)

`*&a` is equivalent to:

- A) `a`
- B) `&a`
- C) `*a`
- D) Address of a

**Answer:** A

### Q86 (mcq)

Which of the following operations is NOT allowed on a `void*` pointer?

- A) Assignment
- B) Dereferencing without casting
- C) Comparison with other pointers
- D) Passing to functions

**Answer:** B

### Q87 (mcq)

A `void*` pointer can store:

- A) Only integer addresses
- B) Any type of address
- C) Only character addresses
- D) Only float addresses

**Answer:** B

### Q88 (mcq)

To dereference a `void*` pointer, you must:

- A) Use the `*` operator directly
- B) Cast it to the appropriate type first
- C) Use `->` operator
- D) Use `&` operator

**Answer:** B

### Q89 (mcq)

Which of the following is a valid use of pointer arithmetic?

- A) Adding two pointers
- B) Subtracting two pointers to get element difference
- C) Multiplying two pointers
- D) Dividing two pointers

**Answer:** B

### Q90 (mcq)

Adding two pointers is:

- A) Allowed and useful
- B) Not allowed in C
- C) Allowed but meaningless
- D) Used for pointer arithmetic

**Answer:** B

### Q91 (mcq)

In C, the size of a pointer depends on:

- A) The data type it points to
- B) The architecture (e.g., 32-bit or 64-bit)
- C) The value it stores
- D) The operating system

**Answer:** B

### Q92 (mcq)

On a 32-bit system, the size of a pointer is typically:

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** B

### Q93 (mcq)

On a 64-bit system, the size of a pointer is typically:

- A) 2 bytes
- B) 4 bytes
- C) 8 bytes
- D) 16 bytes

**Answer:** C

### Q94 (mcq)

All pointers on a given system occupy:

- A) Different sizes depending on type
- B) The same size
- C) No size
- D) Variable size

**Answer:** B

### Q95 (mcq)

Which of the following is TRUE about the `&` operator?

- A) It can be applied to any expression
- B) It can be applied to variables only
- C) It can be applied to constants
- D) It can be applied to literals

**Answer:** B

### Q96 (mcq)

Which of the following is TRUE about the `*` operator in declarations vs expressions?

- A) Same meaning in both
- B) In declarations, it creates a pointer; in expressions, it dereferences
- C) In declarations, it dereferences; in expressions, it creates a pointer
- D) It is only used in declarations

**Answer:** B

### Q97 (mcq)

In `int *p = &a;`, the `*` is:

- A) Dereference operator
- B) Part of the declaration indicating p is a pointer
- C) Multiplication operator
- D) Address operator

**Answer:** B

### Q98 (mcq)

In `printf("%d", *p);`, the `*` is:

- A) Part of declaration
- B) Dereference operator
- C) Multiplication operator
- D) Address operator

**Answer:** B

### Q99 (mcq)

A pointer to a constant is declared as:

- A) `int *const ptr;`
- B) `const int *ptr;`
- C) `int const *ptr;`
- D) Both B and C are valid

**Answer:** B

### Q100 (mcq)

A constant pointer is declared as:

- A) `const int *ptr;`
- B) `int *const ptr;`
- C) `int const *ptr;`
- D) `const *int ptr;`

**Answer:** B
