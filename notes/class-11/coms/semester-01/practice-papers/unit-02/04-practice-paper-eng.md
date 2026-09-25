## Section 1: Concept of Programming (Questions 1 to 25)

#### Q1. Which of the following is the correct order of program execution stages?

A) Edit → Compile → Link → Load → Execute ✅
B) Compile → Edit → Link → Load → Execute
C) Edit → Link → Compile → Load → Execute
D) Load → Edit → Compile → Link → Execute

#### Q2. What is the difference between a syntax error and a runtime error?

A) Syntax error occurs during compilation, runtime error during execution ✅
B) Runtime error occurs during compilation, syntax error during execution
C) Both occur during compilation
D) Both occur during execution

#### Q3. Which of the following is NOT a programming paradigm?

A) Procedural
B) Object-Oriented
C) Functional
D) Structural ✅ (Structured is a programming style, not a paradigm)

#### Q4. What is the main advantage of assembly language over machine language?

A) Faster execution
B) Easier to remember and use mnemonics ✅
C) Uses less memory
D) Machine-independent

#### Q5. What is the role of the preprocessor in C?

A) To compile the program
B) To execute the program
C) To handle directives like `#include` and `#define` ✅
D) To link object files

#### Q6. Which of the following is an example of a 4th generation language (4GL)?

A) C
B) SQL ✅
C) Java
D) Assembly

#### Q7. What is the main characteristic of a 4GL?

A) Low-level abstraction
B) High-level abstraction and often non-procedural ✅
C) Uses mnemonics
D) Uses binary code

#### Q8. What is the concept of "modularity" in programming?

A) Writing all code in one module
B) Dividing the program into independent, interchangeable modules ✅
C) Using only global variables
D) Writing code without functions

#### Q9. Which of the following is a principle of structured programming?

A) Use of goto statements
B) Single entry, single exit for each block ✅
C) Use of global variables exclusively
D) No functions allowed

#### Q10. What is the difference between class and object in OOP?

A) Class is an instance, object is a template
B) Class is a template, object is an instance ✅
C) Both are the same
D) Class is a function, object is a variable

#### Q11. What is the purpose of a constructor in OOP?

A) To destroy the object
B) To initialize the object when it is created ✅
C) To copy the object
D) To delete the object

#### Q12. What is the purpose of a destructor in OOP?

A) To create the object
B) To initialize the object
C) To destroy the object and free resources ✅
D) To copy the object

#### Q13. Which of the following is TRUE about polymorphism?

A) One function can have multiple forms ✅
B) One function can only have one form
C) Functions cannot have multiple forms
D) Only classes support polymorphism

#### Q14. What is method overloading?

A) Multiple methods with the same name but different parameters ✅
B) Multiple methods with different names
C) One method with multiple parameters
D) Methods that do not return values

#### Q15. What is method overriding?

A) Defining a method in a subclass that has the same name as a method in the superclass ✅
B) Defining multiple methods with the same name
C) Defining a method that has no return type
D) Defining a method with the same parameters

#### Q16. What is the difference between a class and a struct in C++?

A) Class members are private by default, struct members are public ✅
B) Struct members are private by default, class members are public
C) Both are the same
D) Classes cannot have functions

#### Q17. Which of the following is TRUE about functional programming?

A) It uses objects
B) It uses functions as first-class citizens ✅
C) It uses global variables
D) It uses inheritance

#### Q18. What is a pure function in functional programming?

A) A function that modifies global state
B) A function that has side effects
C) A function that always returns the same output for the same input ✅
D) A function that uses objects

#### Q19. Which of the following languages is purely functional?

A) C
B) Java
C) Haskell ✅
D) C++

#### Q20. What is the concept of "side effects" in programming?

A) The desired effect of a function
B) Any modification of state outside the function's scope ✅
C) The return value of a function
D) The parameters of a function

#### Q21. What is the difference between a compiler and a transpiler?

A) Compiler converts to machine code, transpiler converts to another high-level language ✅
B) Transpiler converts to machine code, compiler converts to another language
C) Both do the same thing
D) Transpiler is faster

#### Q22. What is the role of a debugger?

A) To compile the program
B) To execute the program
C) To help find and fix errors in the program ✅
D) To design algorithms

#### Q23. Which of the following is a feature of an IDE?

A) Code editor
B) Debugger
C) Compiler
D) All of the above ✅

#### Q24. What is the purpose of version control systems like Git?

A) To compile code
B) To track changes and manage different versions of code ✅
C) To execute code
D) To design algorithms

#### Q25. Which of the following is a characteristic of open-source software?

A) Source code is not available
B) Source code is available and can be modified ✅
C) Only compiled code is available
D) It cannot be distributed

---

## Section 2: Algorithm Fundamentals (Questions 26 to 80)

#### Q26. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j*=2) {
        for(k=1; k<=n; k/=2) {
            // O(1) work
        }
    }
}
```

A) O(n log² n) ✅ (n _ log n _ log n)
B) O(n²)
C) O(n log n)
D) O(n² log n)

#### Q27. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j*=2) {
        // O(1) work
    }
}
```

A) O(n log n) ✅
B) O(n²)
C) O(n)
D) O(log n)

#### Q28. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k*=2) {
            // O(1) work
        }
    }
}
```

A) O(n² log n) ✅
B) O(n³)
C) O(n log n)
D) O(n²)

#### Q29. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j*=i) {
        // O(1) work
    }
}
```

A) O(n)
B) O(n²)
C) O(n log n) ✅ (sum of log_i(n) for i=1..n)
D) O(n² log n)

#### Q30. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅ (sum of j = O(n³))
C) O(n log n)
D) O(n⁴)

#### Q31. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=100; k++) {
            // O(1) work
        }
    }
}
```

A) O(n)
B) O(n²) ✅ (since inner is constant)
C) O(n³)
D) O(n log n)

#### Q32. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=n; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n log n)
D) O(n⁴)

#### Q33. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=i; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅ (sum of i² = O(n³))
C) O(n log n)
D) O(n⁴)

#### Q34. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=n; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅ (n _ sum of i = n _ n² = n³)
C) O(n log n)
D) O(n⁴)

#### Q35. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³) ✅ (when i=j, it runs n times)
C) O(n)
D) O(n log n)

#### Q36. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³) ✅ (about half the cases)
C) O(n)
D) O(n log n)

#### Q37. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³) ✅ (still n³ because the if is constant)
C) O(n)
D) O(n log n)

#### Q38. What is the time complexity of the following code?

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

A) O(n)
B) O(log² n) ✅ (log n \* log n)
C) O(n log n)
D) O(n²)

#### Q39. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q40. What is the time complexity of the following code?

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

A) O(log² n) ✅ (1 + 2 + 4 + ... + log n = O(log² n))
B) O(n)
C) O(n log n)
D) O(n²)

#### Q41. What is the time complexity of the following code?

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

A) O(n log n) ✅
B) O(n²)
C) O(n)
D) O(log² n)

#### Q42. What is the time complexity of the following code?

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

A) O(n) ✅ (n + n/2 + n/4 + ... = O(n))
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q43. What is the time complexity of the following code?

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

A) O(n log n) ✅
B) O(n²)
C) O(n)
D) O(log² n)

#### Q44. What is the time complexity of the following code?

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

A) O(n log n)
B) O(log² n) ✅ (log n \* log n)
C) O(n)
D) O(n²)

#### Q45. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q46. What is the time complexity of the following code?

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

A) O(n log n) ✅ (n \* log₃ n)
B) O(n²)
C) O(n)
D) O(log n)

#### Q47. What is the time complexity of the following code?

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

A) O(n) ✅ (n + n/3 + n/9 + ... = O(n))
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q48. What is the time complexity of the following code?

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

A) O(n log n) ✅
B) O(n²)
C) O(n)
D) O(log² n)

#### Q49. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q50. What is the time complexity of the following code?

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

A) O(n) ✅ (n + n/2 + n/4 + ... = O(n))
B) O(n log n)
C) O(log² n)
D) O(n²)

#### Q51. What is the time complexity of the following code?

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

A) O(n log n)
B) O(log² n) ✅ (log n \* log n)
C) O(n)
D) O(n²)

#### Q52. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q53. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q54. What is the time complexity of the following code?

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

A) O(log² n) ✅
B) O(n)
C) O(n log n)
D) O(n²)

#### Q55. What is the time complexity of the following code?

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

A) O(log n) ✅ (log₂ n for i, and for each i, logᵢ n is O(1) for i>1)
B) O(n)
C) O(n log n)
D) O(n²)

#### Q56. What is the time complexity of the following code?

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

A) O(n log n)
B) O(n²)
C) O(n) ✅ (for each i, logᵢ n is small, sum is O(n))
D) O(n³)

#### Q57. What is the recurrence for the following algorithm?

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

A) T(n) = 2T(n/2) + O(n) ✅
B) T(n) = T(n/2) + O(n)
C) T(n) = 2T(n/2) + O(1)
D) T(n) = T(n-1) + O(n)

#### Q58. What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    for(i=1; i<=n; i++) {
        // O(1) work
    }
    func(n-1);
}
```

A) T(n) = T(n-1) + O(n) ✅
B) T(n) = T(n/2) + O(n)
C) T(n) = 2T(n/2) + O(n)
D) T(n) = T(n-1) + O(1)

#### Q59. What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/2);
    func(n/2);
    func(n/2);
}
```

A) T(n) = 3T(n/2) + O(1) ✅
B) T(n) = T(n/2) + O(n)
C) T(n) = 2T(n/2) + O(1)
D) T(n) = 3T(n/2) + O(n)

#### Q60. What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    for(i=1; i<=n; i++) {
        // O(1) work
    }
    func(n/2);
}
```

A) T(n) = T(n/2) + O(n) ✅
B) T(n) = T(n/2) + O(1)
C) T(n) = 2T(n/2) + O(n)
D) T(n) = T(n-1) + O(n)

#### Q61. What is the recurrence for the following algorithm?

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

A) T(n) = 2T(n/2) + O(n) ✅
B) T(n) = 2T(n/2) + O(1)
C) T(n) = T(n/2) + O(n)
D) T(n) = T(n-1) + O(n)

#### Q62. What is the recurrence for the following algorithm?

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

A) T(n) = 3T(n/3) + O(n) ✅
B) T(n) = 3T(n/3) + O(1)
C) T(n) = T(n/3) + O(n)
D) T(n) = 2T(n/3) + O(n)

#### Q63. What is the recurrence for the following algorithm?

```c
void func(int n) {
    if(n <= 1) return;
    func(n/3);
    func(n/3);
    func(n/3);
}
```

A) T(n) = 3T(n/3) + O(1) ✅
B) T(n) = 3T(n/3) + O(n)
C) T(n) = T(n/3) + O(1)
D) T(n) = 2T(n/3) + O(1)

#### Q64. What is the time complexity of T(n) = 3T(n/3) + O(n)?

A) O(n)
B) O(n log n) ✅ (a=3, b=3, d=1, a = b^d, so O(n log n))
C) O(n²)
D) O(n log² n)

#### Q65. What is the time complexity of T(n) = 3T(n/3) + O(1)?

A) O(n) ✅ (a=3, b=3, d=0, a > b^d, so O(n))
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q66. What is the time complexity of T(n) = 4T(n/2) + O(n)?

A) O(n)
B) O(n²) ✅ (a=4, b=2, d=1, a > b^d, so O(n²))
C) O(n log n)
D) O(n² log n)

#### Q67. What is the time complexity of T(n) = 4T(n/2) + O(n²)?

A) O(n²)
B) O(n² log n) ✅ (a=4, b=2, d=2, a = b^d, so O(n² log n))
C) O(n³)
D) O(n log n)

#### Q68. What is the time complexity of T(n) = 8T(n/2) + O(n²)?

A) O(n²)
B) O(n³) ✅ (a=8, b=2, d=2, a > b^d, so O(n³))
C) O(n² log n)
D) O(n log n)

#### Q69. What is the time complexity of T(n) = 2T(n/2) + O(n²)?

A) O(n²) ✅ (a=2, b=2, d=2, a < b^d, so O(n²))
B) O(n² log n)
C) O(n log n)
D) O(n)

#### Q70. What is the time complexity of T(n) = 2T(n/2) + O(n log n)?

A) O(n log n)
B) O(n log² n) ✅ (a=2, b=2, d=1, a = b^d, so O(n log² n))
C) O(n²)
D) O(n² log n)

#### Q71. What is the time complexity of T(n) = 2T(n/2) + O(n² log n)?

A) O(n²) ✅ (a=2, b=2, d=2, a < b^d, so O(n²))
B) O(n² log n)
C) O(n log² n)
D) O(n² log² n)

#### Q72. What is the time complexity of T(n) = 9T(n/3) + O(n² log n)?

A) O(n² log n)
B) O(n² log² n) ✅ (a=9, b=3, d=2, a = b^d, so O(n² log² n))
C) O(n³)
D) O(n log n)

#### Q73. What is the time complexity of T(n) = 9T(n/3) + O(n³)?

A) O(n³) ✅ (a=9, b=3, d=3, a < b^d, so O(n³))
B) O(n³ log n)
C) O(n²)
D) O(n⁴)

#### Q74. What is the time complexity of T(n) = 16T(n/4) + O(n³)?

A) O(n³) ✅ (a=16, b=4, d=3, a < b^d, so O(n³))
B) O(n³ log n)
C) O(n²)
D) O(n⁴)

#### Q75. What is the time complexity of T(n) = 16T(n/4) + O(n²)?

A) O(n²)
B) O(n² log n) ✅ (a=16, b=4, d=2, a = b^d, so O(n² log n))
C) O(n³)
D) O(n)

#### Q76. What is the time complexity of T(n) = T(n-2) + O(1)?

A) O(n) ✅
B) O(n²)
C) O(log n)
D) O(1)

#### Q77. What is the time complexity of T(n) = T(n-2) + O(n)?

A) O(n²) ✅
B) O(n)
C) O(log n)
D) O(n² log n)

#### Q78. What is the time complexity of T(n) = T(n/2) + T(n/2) + O(1)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q79. What is the time complexity of T(n) = T(n/2) + T(n/4) + O(1)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q80. What is the time complexity of T(n) = T(n/2) + T(n/4) + O(n)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(n log² n)

---

## Section 3: Introduction to Problem Solving (Questions 81 to 100)

#### Q81. What is the primary goal of the problem analysis phase?

A) To write code immediately
B) To understand the problem and its constraints ✅
C) To test the program
D) To debug errors

#### Q82. What is the output of the algorithm design phase?

A) A working program
B) A step-by-step solution plan ✅
C) A list of errors
D) Test cases

#### Q83. What is the most important quality of a good algorithm?

A) It should be long
B) It should be correct ✅
C) It should use complex techniques
D) It should be difficult to understand

#### Q84. What is the difference between testing and debugging?

A) Testing finds bugs, debugging fixes them ✅
B) Debugging finds bugs, testing fixes them
C) Both find bugs
D) Both fix bugs

#### Q85. What is a test case?

A) A set of conditions to test the program ✅
B) The final program
C) The algorithm
D) The pseudo-code

#### Q86. What is the purpose of boundary value analysis in testing?

A) To test normal values
B) To test values at the boundaries of input ranges ✅
C) To test random values
D) To test all possible values

#### Q87. What is equivalence partitioning in testing?

A) Dividing input data into groups that should produce similar results ✅
B) Testing all possible inputs
C) Testing only the boundary values
D) Testing random inputs

#### Q88. What is the purpose of white-box testing?

A) Testing without knowing the internal code
B) Testing with knowledge of the internal code ✅
C) Testing the user interface
D) Testing the documentation

#### Q89. What is the purpose of black-box testing?

A) Testing with knowledge of the internal code
B) Testing without knowledge of the internal code ✅
C) Testing the algorithm
D) Testing the pseudo-code

#### Q90. What is the role of a test plan?

A) To write the program
B) To outline the testing strategy and test cases ✅
C) To design the algorithm
D) To debug the program

#### Q91. What is the difference between verification and validation?

A) Verification is checking the product, validation is checking the requirements
B) Verification checks if built correctly, validation checks if correct product is built ✅
C) Both are the same
D) Validation is done before verification

#### Q92. What is the purpose of the maintenance phase in the software lifecycle?

A) To write the program
B) To modify and update the program after deployment ✅
C) To test the program
D) To design the algorithm

#### Q93. What is a software development life cycle (SDLC)?

A) A single step in programming
B) A process for developing software through multiple phases ✅
C) A type of programming language
D) A testing tool

#### Q94. Which SDLC model involves sequential phases?

A) Agile
B) Waterfall ✅
C) Spiral
D) Incremental

#### Q95. Which SDLC model involves iterative development cycles?

A) Waterfall
B) Agile ✅
C) Sequential
D) Linear

#### Q96. What is the purpose of prototyping in software development?

A) To create the final product directly
B) To create a working model to gather feedback ✅
C) To test only the algorithm
D) To write documentation

#### Q97. What is the difference between a bug and a feature request?

A) A bug is an error, a feature request is a suggestion for new functionality ✅
B) A bug is a suggestion, a feature request is an error
C) Both are the same
D) Bugs are fixed, feature requests are ignored

#### Q98. What is the purpose of code review?

A) To write new code
B) To examine code for errors and improvements ✅
C) To test the program
D) To design the algorithm

#### Q99. What is refactoring in software development?

A) Writing new features
B) Restructuring existing code without changing its behavior ✅
C) Testing the program
D) Debugging errors

#### Q100. Which of the following is the most important phase in the problem-solving process?

A) Coding (since that's what produces the program)
B) Testing (since it finds errors)
C) All phases are equally important ✅
D) Debugging (since it fixes errors)

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
| ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ |
| 1    | A      | 26   | A      | 51   | B      | 76   | A      |
| 2    | A      | 27   | A      | 52   | A      | 77   | A      |
| 3    | D      | 28   | A      | 53   | A      | 78   | A      |
| 4    | B      | 29   | C      | 54   | A      | 79   | A      |
| 5    | C      | 30   | B      | 55   | A      | 80   | A      |
| 6    | B      | 31   | B      | 56   | C      | 81   | B      |
| 7    | B      | 32   | B      | 57   | A      | 82   | B      |
| 8    | B      | 33   | B      | 58   | A      | 83   | B      |
| 9    | B      | 34   | B      | 59   | A      | 84   | A      |
| 10   | B      | 35   | B      | 60   | A      | 85   | A      |
| 11   | B      | 36   | B      | 61   | A      | 86   | B      |
| 12   | C      | 37   | B      | 62   | A      | 87   | A      |
| 13   | A      | 38   | B      | 63   | A      | 88   | B      |
| 14   | A      | 39   | A      | 64   | B      | 89   | B      |
| 15   | A      | 40   | A      | 65   | A      | 90   | B      |
| 16   | A      | 41   | A      | 66   | B      | 91   | B      |
| 17   | B      | 42   | A      | 67   | B      | 92   | B      |
| 18   | C      | 43   | A      | 68   | B      | 93   | B      |
| 19   | C      | 44   | B      | 69   | A      | 94   | B      |
| 20   | B      | 45   | A      | 70   | B      | 95   | B      |
| 21   | A      | 46   | A      | 71   | A      | 96   | B      |
| 22   | C      | 47   | A      | 72   | B      | 97   | A      |
| 23   | D      | 48   | A      | 73   | A      | 98   | B      |
| 24   | B      | 49   | A      | 74   | A      | 99   | B      |
| 25   | B      | 50   | A      | 75   | B      | 100  | C      |
