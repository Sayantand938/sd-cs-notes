# Unit 02 04 Practice Paper (Eng)

## Section 1: Concept of Programming (Questions 1 to 25)

### Q1 (mcq)

Which of the following is the correct order of program execution stages?

- A) Edit → Compile → Link → Load → Execute
- B) Compile → Edit → Link → Load → Execute
- C) Edit → Link → Compile → Load → Execute
- D) Load → Edit → Compile → Link → Execute

**Answer:** A

### Q2 (mcq)

What is the difference between a syntax error and a runtime error?

- A) Syntax error occurs during compilation, runtime error during execution
- B) Runtime error occurs during compilation, syntax error during execution
- C) Both occur during compilation
- D) Both occur during execution

**Answer:** A

### Q3 (mcq)

Which of the following is NOT a programming paradigm?

- A) Procedural
- B) Object-Oriented
- C) Functional
- D) Structural

**Answer:** D

### Q4 (mcq)

What is the main advantage of assembly language over machine language?

- A) Faster execution
- B) Easier to remember and use mnemonics
- C) Uses less memory
- D) Machine-independent

**Answer:** B

### Q5 (mcq)

What is the role of the preprocessor in C?

- A) To compile the program
- B) To execute the program
- C) To handle directives like `#include` and `#define`
- D) To link object files

**Answer:** C

### Q6 (mcq)

Which of the following is an example of a 4th generation language (4GL)?

- A) C
- B) SQL
- C) Java
- D) Assembly

**Answer:** B

### Q7 (mcq)

What is the main characteristic of a 4GL?

- A) Low-level abstraction
- B) High-level abstraction and often non-procedural
- C) Uses mnemonics
- D) Uses binary code

**Answer:** B

### Q8 (mcq)

What is the concept of "modularity" in programming?

- A) Writing all code in one module
- B) Dividing the program into independent, interchangeable modules
- C) Using only global variables
- D) Writing code without functions

**Answer:** B

### Q9 (mcq)

Which of the following is a principle of structured programming?

- A) Use of goto statements
- B) Single entry, single exit for each block
- C) Use of global variables exclusively
- D) No functions allowed

**Answer:** B

### Q10 (mcq)

What is the difference between class and object in OOP?

- A) Class is an instance, object is a template
- B) Class is a template, object is an instance
- C) Both are the same
- D) Class is a function, object is a variable

**Answer:** B

### Q11 (mcq)

What is the purpose of a constructor in OOP?

- A) To destroy the object
- B) To initialize the object when it is created
- C) To copy the object
- D) To delete the object

**Answer:** B

### Q12 (mcq)

What is the purpose of a destructor in OOP?

- A) To create the object
- B) To initialize the object
- C) To destroy the object and free resources
- D) To copy the object

**Answer:** C

### Q13 (mcq)

Which of the following is TRUE about polymorphism?

- A) One function can have multiple forms
- B) One function can only have one form
- C) Functions cannot have multiple forms
- D) Only classes support polymorphism

**Answer:** A

### Q14 (mcq)

What is method overloading?

- A) Multiple methods with the same name but different parameters
- B) Multiple methods with different names
- C) One method with multiple parameters
- D) Methods that do not return values

**Answer:** A

### Q15 (mcq)

What is method overriding?

- A) Defining a method in a subclass that has the same name as a method in the superclass
- B) Defining multiple methods with the same name
- C) Defining a method that has no return type
- D) Defining a method with the same parameters

**Answer:** A

### Q16 (mcq)

What is the difference between a class and a struct in C++?

- A) Class members are private by default, struct members are public
- B) Struct members are private by default, class members are public
- C) Both are the same
- D) Classes cannot have functions

**Answer:** A

### Q17 (mcq)

Which of the following is TRUE about functional programming?

- A) It uses objects
- B) It uses functions as first-class citizens
- C) It uses global variables
- D) It uses inheritance

**Answer:** B

### Q18 (mcq)

What is a pure function in functional programming?

- A) A function that modifies global state
- B) A function that has side effects
- C) A function that always returns the same output for the same input
- D) A function that uses objects

**Answer:** C

### Q19 (mcq)

Which of the following languages is purely functional?

- A) C
- B) Java
- C) Haskell
- D) C++

**Answer:** C

### Q20 (mcq)

What is the concept of "side effects" in programming?

- A) The desired effect of a function
- B) Any modification of state outside the function's scope
- C) The return value of a function
- D) The parameters of a function

**Answer:** B

### Q21 (mcq)

What is the difference between a compiler and a transpiler?

- A) Compiler converts to machine code, transpiler converts to another high-level language
- B) Transpiler converts to machine code, compiler converts to another language
- C) Both do the same thing
- D) Transpiler is faster

**Answer:** A

### Q22 (mcq)

What is the role of a debugger?

- A) To compile the program
- B) To execute the program
- C) To help find and fix errors in the program
- D) To design algorithms

**Answer:** C

### Q23 (mcq)

Which of the following is a feature of an IDE?

- A) Code editor
- B) Debugger
- C) Compiler
- D) All of the above

**Answer:** D

### Q24 (mcq)

What is the purpose of version control systems like Git?

- A) To compile code
- B) To track changes and manage different versions of code
- C) To execute code
- D) To design algorithms

**Answer:** B

### Q25 (mcq)

Which of the following is a characteristic of open-source software?

- A) Source code is not available
- B) Source code is available and can be modified
- C) Only compiled code is available
- D) It cannot be distributed

**Answer:** B

## Section 2: Algorithm Fundamentals (Questions 26 to 80)

### Q26 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j*=2) {
        for(k=1; k<=n; k/=2) {
            // O(1) work
        }
    }
}
```

- A) O(n log² n)
- B) O(n²)
- C) O(n log n)
- D) O(n² log n)

**Answer:** A

### Q27 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j*=2) {
        // O(1) work
    }
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(log n)

**Answer:** A

### Q28 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k*=2) {
            // O(1) work
        }
    }
}
```

- A) O(n² log n)
- B) O(n³)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q29 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j*=i) {
        // O(1) work
    }
}
```

- A) O(n)
- B) O(n²)
- C) O(n log n)
- D) O(n² log n)

**Answer:** C

### Q30 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n log n)
- D) O(n⁴)

**Answer:** B

### Q31 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=100; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n)
- B) O(n²)
- C) O(n³)
- D) O(n log n)

**Answer:** B

### Q32 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=n; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n log n)
- D) O(n⁴)

**Answer:** B

### Q33 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=i; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n log n)
- D) O(n⁴)

**Answer:** B

### Q34 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=n; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n log n)
- D) O(n⁴)

**Answer:** B

### Q35 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        if(i == j) {
            for(k=1; k<=n; k++) {
                // O(1) work
            }
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q36 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        if(i <= j) {
            for(k=1; k<=n; k++) {
                // O(1) work
            }
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q37 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        for(k=1; k<=n; k++) {
            if(i + j + k == n) {
                // O(1) work
            }
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q38 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= n) {
        // O(1) work
        j = j * 2;
    }
    i = i * 2;
}
```

- A) O(n)
- B) O(log² n)
- C) O(n log n)
- D) O(n²)

**Answer:** B

### Q39 (mcq)

What is the time complexity of the following code?

```c
i = n;
while(i >= 1) {
    j = i;
    while(j <= n) {
        // O(1) work
        j = j * 2;
    }
    i = i / 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q40 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 2;
    }
    i = i * 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q41 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = i;
    while(j <= n) {
        // O(1) work
        j = j * 2;
    }
    i = i + 1;
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(log² n)

**Answer:** A

### Q42 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j + 1;
    }
    i = i * 2;
}
```

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q43 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 2;
    }
    i = i + 1;
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(log² n)

**Answer:** A

### Q44 (mcq)

What is the time complexity of the following code?

```c
i = n;
while(i >= 1) {
    j = 1;
    while(j <= n) {
        // O(1) work
        j = j * 2;
    }
    i = i / 2;
}
```

- A) O(n log n)
- B) O(log² n)
- C) O(n)
- D) O(n²)

**Answer:** B

### Q45 (mcq)

What is the time complexity of the following code?

```c
i = n;
while(i >= 1) {
    j = i;
    while(j >= 1) {
        // O(1) work
        j = j / 2;
    }
    i = i / 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q46 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= n) {
        // O(1) work
        j = j + 1;
    }
    i = i * 3;
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(log n)

**Answer:** A

### Q47 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j + 1;
    }
    i = i * 3;
}
```

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q48 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 3;
    }
    i = i + 1;
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(log² n)

**Answer:** A

### Q49 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 3;
    }
    i = i * 3;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q50 (mcq)

What is the time complexity of the following code?

```c
i = n;
while(i >= 1) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 2;
    }
    i = i / 2;
}
```

- A) O(n)
- B) O(n log n)
- C) O(log² n)
- D) O(n²)

**Answer:** A

### Q51 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = n;
    while(j >= 1) {
        // O(1) work
        j = j / 2;
    }
    i = i * 2;
}
```

- A) O(n log n)
- B) O(log² n)
- C) O(n)
- D) O(n²)

**Answer:** B

### Q52 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = n;
    while(j >= i) {
        // O(1) work
        j = j / 2;
    }
    i = i * 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q53 (mcq)

What is the time complexity of the following code?

```c
i = n;
while(i >= 1) {
    j = n;
    while(j >= i) {
        // O(1) work
        j = j / 2;
    }
    i = i / 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q54 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= i) {
        // O(1) work
        j = j * 2;
    }
    i = i * 2;
}
```

- A) O(log² n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q55 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = 1;
    while(j <= n) {
        // O(1) work
        j = j * i;
    }
    i = i * 2;
}
```

- A) O(log n)
- B) O(n)
- C) O(n log n)
- D) O(n²)

**Answer:** A

### Q56 (mcq)

What is the time complexity of the following code?

```c
i = 1;
while(i <= n) {
    j = i;
    while(j <= n) {
        // O(1) work
        j = j * i;
    }
    i = i + 1;
}
```

- A) O(n log n)
- B) O(n²)
- C) O(n)
- D) O(n³)

**Answer:** C

### Q57 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    for(i=1; i<=n; i++) {
        // O(1) work
    }
    func(n/2);
    func(n/2);
}
```

- A) T(n) = 2T(n/2) + O(n)
- B) T(n) = T(n/2) + O(n)
- C) T(n) = 2T(n/2) + O(1)
- D) T(n) = T(n-1) + O(n)

**Answer:** A

### Q58 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    for(i=1; i<=n; i++) {
        // O(1) work
    }
    func(n-1);
}
```

- A) T(n) = T(n-1) + O(n)
- B) T(n) = T(n/2) + O(n)
- C) T(n) = 2T(n/2) + O(n)
- D) T(n) = T(n-1) + O(1)

**Answer:** A

### Q59 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/2);
    func(n/2);
    func(n/2);
}
```

- A) T(n) = 3T(n/2) + O(1)
- B) T(n) = T(n/2) + O(n)
- C) T(n) = 2T(n/2) + O(1)
- D) T(n) = 3T(n/2) + O(n)

**Answer:** A

### Q60 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    for(i=1; i<=n; i++) {
        // O(1) work
    }
    func(n/2);
}
```

- A) T(n) = T(n/2) + O(n)
- B) T(n) = T(n/2) + O(1)
- C) T(n) = 2T(n/2) + O(n)
- D) T(n) = T(n-1) + O(n)

**Answer:** A

### Q61 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/2);
    func(n/2);
    for(i=1; i<=n; i++) {
        // O(1) work
    }
}
```

- A) T(n) = 2T(n/2) + O(n)
- B) T(n) = 2T(n/2) + O(1)
- C) T(n) = T(n/2) + O(n)
- D) T(n) = T(n-1) + O(n)

**Answer:** A

### Q62 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/3);
    func(n/3);
    func(n/3);
    for(i=1; i<=n; i++) {
        // O(1) work
    }
}
```

- A) T(n) = 3T(n/3) + O(n)
- B) T(n) = 3T(n/3) + O(1)
- C) T(n) = T(n/3) + O(n)
- D) T(n) = 2T(n/3) + O(n)

**Answer:** A

### Q63 (mcq)

What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/3);
    func(n/3);
    func(n/3);
}
```

- A) T(n) = 3T(n/3) + O(1)
- B) T(n) = 3T(n/3) + O(n)
- C) T(n) = T(n/3) + O(1)
- D) T(n) = 2T(n/3) + O(1)

**Answer:** A

### Q64 (mcq)

What is the time complexity of T(n) = 3T(n/3) + O(n)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(n log² n)

**Answer:** B

### Q65 (mcq)

What is the time complexity of T(n) = 3T(n/3) + O(1)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q66 (mcq)

What is the time complexity of T(n) = 4T(n/2) + O(n)?

- A) O(n)
- B) O(n²)
- C) O(n log n)
- D) O(n² log n)

**Answer:** B

### Q67 (mcq)

What is the time complexity of T(n) = 4T(n/2) + O(n²)?

- A) O(n²)
- B) O(n² log n)
- C) O(n³)
- D) O(n log n)

**Answer:** B

### Q68 (mcq)

What is the time complexity of T(n) = 8T(n/2) + O(n²)?

- A) O(n²)
- B) O(n³)
- C) O(n² log n)
- D) O(n log n)

**Answer:** B

### Q69 (mcq)

What is the time complexity of T(n) = 2T(n/2) + O(n²)?

- A) O(n²)
- B) O(n² log n)
- C) O(n log n)
- D) O(n)

**Answer:** A

### Q70 (mcq)

What is the time complexity of T(n) = 2T(n/2) + O(n log n)?

- A) O(n log n)
- B) O(n log² n)
- C) O(n²)
- D) O(n² log n)

**Answer:** B

### Q71 (mcq)

What is the time complexity of T(n) = 2T(n/2) + O(n² log n)?

- A) O(n²)
- B) O(n² log n)
- C) O(n log² n)
- D) O(n² log² n)

**Answer:** A

### Q72 (mcq)

What is the time complexity of T(n) = 9T(n/3) + O(n² log n)?

- A) O(n² log n)
- B) O(n² log² n)
- C) O(n³)
- D) O(n log n)

**Answer:** B

### Q73 (mcq)

What is the time complexity of T(n) = 9T(n/3) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n²)
- D) O(n⁴)

**Answer:** A

### Q74 (mcq)

What is the time complexity of T(n) = 16T(n/4) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n²)
- D) O(n⁴)

**Answer:** A

### Q75 (mcq)

What is the time complexity of T(n) = 16T(n/4) + O(n²)?

- A) O(n²)
- B) O(n² log n)
- C) O(n³)
- D) O(n)

**Answer:** B

### Q76 (mcq)

What is the time complexity of T(n) = T(n-2) + O(1)?

- A) O(n)
- B) O(n²)
- C) O(log n)
- D) O(1)

**Answer:** A

### Q77 (mcq)

What is the time complexity of T(n) = T(n-2) + O(n)?

- A) O(n²)
- B) O(n)
- C) O(log n)
- D) O(n² log n)

**Answer:** A

### Q78 (mcq)

What is the time complexity of T(n) = T(n/2) + T(n/2) + O(1)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q79 (mcq)

What is the time complexity of T(n) = T(n/2) + T(n/4) + O(1)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q80 (mcq)

What is the time complexity of T(n) = T(n/2) + T(n/4) + O(n)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(n log² n)

**Answer:** A

## Section 3: Introduction to Problem Solving (Questions 81 to 100)

### Q81 (mcq)

What is the primary goal of the problem analysis phase?

- A) To write code immediately
- B) To understand the problem and its constraints
- C) To test the program
- D) To debug errors

**Answer:** B

### Q82 (mcq)

What is the output of the algorithm design phase?

- A) A working program
- B) A step-by-step solution plan
- C) A list of errors
- D) Test cases

**Answer:** B

### Q83 (mcq)

What is the most important quality of a good algorithm?

- A) It should be long
- B) It should be correct
- C) It should use complex techniques
- D) It should be difficult to understand

**Answer:** B

### Q84 (mcq)

What is the difference between testing and debugging?

- A) Testing finds bugs, debugging fixes them
- B) Debugging finds bugs, testing fixes them
- C) Both find bugs
- D) Both fix bugs

**Answer:** A

### Q85 (mcq)

What is a test case?

- A) A set of conditions to test the program
- B) The final program
- C) The algorithm
- D) The pseudo-code

**Answer:** A

### Q86 (mcq)

What is the purpose of boundary value analysis in testing?

- A) To test normal values
- B) To test values at the boundaries of input ranges
- C) To test random values
- D) To test all possible values

**Answer:** B

### Q87 (mcq)

What is equivalence partitioning in testing?

- A) Dividing input data into groups that should produce similar results
- B) Testing all possible inputs
- C) Testing only the boundary values
- D) Testing random inputs

**Answer:** A

### Q88 (mcq)

What is the purpose of white-box testing?

- A) Testing without knowing the internal code
- B) Testing with knowledge of the internal code
- C) Testing the user interface
- D) Testing the documentation

**Answer:** B

### Q89 (mcq)

What is the purpose of black-box testing?

- A) Testing with knowledge of the internal code
- B) Testing without knowledge of the internal code
- C) Testing the algorithm
- D) Testing the pseudo-code

**Answer:** B

### Q90 (mcq)

What is the role of a test plan?

- A) To write the program
- B) To outline the testing strategy and test cases
- C) To design the algorithm
- D) To debug the program

**Answer:** B

### Q91 (mcq)

What is the difference between verification and validation?

- A) Verification is checking the product, validation is checking the requirements
- B) Verification checks if built correctly, validation checks if correct product is built
- C) Both are the same
- D) Validation is done before verification

**Answer:** B

### Q92 (mcq)

What is the purpose of the maintenance phase in the software lifecycle?

- A) To write the program
- B) To modify and update the program after deployment
- C) To test the program
- D) To design the algorithm

**Answer:** B

### Q93 (mcq)

What is a software development life cycle (SDLC)?

- A) A single step in programming
- B) A process for developing software through multiple phases
- C) A type of programming language
- D) A testing tool

**Answer:** B

### Q94 (mcq)

Which SDLC model involves sequential phases?

- A) Agile
- B) Waterfall
- C) Spiral
- D) Incremental

**Answer:** B

### Q95 (mcq)

Which SDLC model involves iterative development cycles?

- A) Waterfall
- B) Agile
- C) Sequential
- D) Linear

**Answer:** B

### Q96 (mcq)

What is the purpose of prototyping in software development?

- A) To create the final product directly
- B) To create a working model to gather feedback
- C) To test only the algorithm
- D) To write documentation

**Answer:** B

### Q97 (mcq)

What is the difference between a bug and a feature request?

- A) A bug is an error, a feature request is a suggestion for new functionality
- B) A bug is a suggestion, a feature request is an error
- C) Both are the same
- D) Bugs are fixed, feature requests are ignored

**Answer:** A

### Q98 (mcq)

What is the purpose of code review?

- A) To write new code
- B) To examine code for errors and improvements
- C) To test the program
- D) To design the algorithm

**Answer:** B

### Q99 (mcq)

What is refactoring in software development?

- A) Writing new features
- B) Restructuring existing code without changing its behavior
- C) Testing the program
- D) Debugging errors

**Answer:** B

### Q100 (mcq)

Which of the following is the most important phase in the problem-solving process?

- A) Coding (since that's what produces the program)
- B) Testing (since it finds errors)
- C) All phases are equally important
- D) Debugging (since it fixes errors)

**Answer:** C
