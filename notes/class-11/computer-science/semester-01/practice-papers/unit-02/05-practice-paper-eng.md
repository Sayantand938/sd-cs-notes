# Unit 02 05 Practice Paper (Eng)

## Section 1: Concept of Programming (Questions 1 to 25)

### Q1 (mcq)

Which of the following is a characteristic of machine language?

- A) It uses mnemonics
- B) It is machine-independent
- C) It is directly understood by the computer
- D) It is easy to read

**Answer:** C

### Q2 (mcq)

What is the role of an assembler?

- A) Converts high-level code to machine code
- B) Converts assembly language to machine code
- C) Converts machine code to assembly
- D) Executes the program

**Answer:** B

### Q3 (mcq)

Which of the following is TRUE about high-level languages?

- A) They are machine-dependent
- B) They are easier to debug than low-level languages
- C) They execute faster than machine language
- D) They cannot be compiled

**Answer:** B

### Q4 (mcq)

What is the difference between a program and a process?

- A) Program is static code, process is program in execution
- B) Process is static code, program is program in execution
- C) Both are the same
- D) Program is stored in RAM, process is stored in hard disk

**Answer:** A

### Q5 (mcq)

What is the concept of "portability" in programming?

- A) The ability to move a program from one hardware to another
- B) The ability to execute a program faster
- C) The ability to use less memory
- D) The ability to have no errors

**Answer:** A

### Q6 (mcq)

Which of the following languages is NOT a procedural language?

- A) C
- B) Pascal
- C) FORTRAN
- D) SQL

**Answer:** D

### Q7 (mcq)

What is the purpose of a function in procedural programming?

- A) To store data
- B) To perform a specific task and return a value
- C) To define a class
- D) To create objects

**Answer:** B

### Q8 (mcq)

What is the difference between a method and a function?

- A) Method is associated with an object, function is not
- B) Function is associated with an object, method is not
- C) Both are the same
- D) Methods are used in C, functions in Java

**Answer:** A

### Q9 (mcq)

Which of the following is a feature of OOP that promotes code reuse?

- A) Encapsulation
- B) Inheritance
- C) Polymorphism
- D) Abstraction

**Answer:** B

### Q10 (mcq)

What is the concept of "dynamic binding" in OOP?

- A) Binding at compile time
- B) Binding at runtime
- C) No binding
- D) Static binding

**Answer:** B

### Q11 (mcq)

What is the purpose of an interface in programming?

- A) To define a class
- B) To define a contract that classes can implement
- C) To store data
- D) To execute code

**Answer:** B

### Q12 (mcq)

Which of the following is a characteristic of interpreted languages?

- A) They are faster than compiled languages
- B) They are platform-dependent
- C) They execute code line by line
- D) They generate object code

**Answer:** C

### Q13 (mcq)

What is Just-In-Time (JIT) compilation?

- A) Compilation before execution
- B) Compilation during execution
- C) No compilation
- D) Compilation after execution

**Answer:** B

### Q14 (mcq)

Which of the following languages uses JIT compilation?

- A) C
- B) C++
- C) Java
- D) Assembly

**Answer:** C

### Q15 (mcq)

What is the purpose of a garbage collector?

- A) To compile the program
- B) To automatically free unused memory
- C) To execute the program
- D) To design algorithms

**Answer:** B

### Q16 (mcq)

Which of the following is NOT a programming language generation?

- A) 1GL
- B) 2GL
- C) 3GL
- D) 5GL
- E) Machine Language (1GL)
- F) Assembly Language (2GL)
- G) Procedural Language (3GL)
- H) Natural Language (4GL)

**Answer:** D

### Q17 (mcq)

What is the role of a software development kit (SDK)?

- A) To execute programs
- B) To provide tools for developing software for a specific platform
- C) To compile programs
- D) To test programs

**Answer:** B

### Q18 (mcq)

What is the concept of "API" in programming?

- A) A programming language
- B) A set of functions and protocols for building software
- C) A type of compiler
- D) A debugging tool

**Answer:** B

### Q19 (mcq)

Which of the following is a characteristic of procedural languages?

- A) They use objects
- B) They use inheritance
- C) They use functions and procedures
- D) They use polymorphism

**Answer:** C

### Q20 (mcq)

What is the purpose of the `main()` function in C?

- A) To define a class
- B) To serve as the entry point of the program
- C) To print output
- D) To allocate memory

**Answer:** B

### Q21 (mcq)

What is the concept of "scope" in programming?

- A) The region where a variable is accessible
- B) The size of a variable
- C) The type of a variable
- D) The value of a variable

**Answer:** A

### Q22 (mcq)

Which of the following has the largest scope?

- A) Local variable
- B) Global variable
- C) Block variable
- D) Function parameter

**Answer:** B

### Q23 (mcq)

What is the purpose of a library in programming?

- A) To store data
- B) To provide reusable code and functions
- C) To compile programs
- D) To execute programs

**Answer:** B

### Q24 (mcq)

Which of the following is an example of a static library?

- A) .dll
- B) .so
- C) .lib
- D) .jar

**Answer:** C

### Q25 (mcq)

What is the difference between static and dynamic linking?

- A) Static linking occurs at compile time, dynamic at runtime
- B) Dynamic linking occurs at compile time, static at runtime
- C) Both occur at compile time
- D) Both occur at runtime

**Answer:** A

## Section 2: Algorithm Fundamentals (Questions 26 to 80)

### Q26 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
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

### Q27 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
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

### Q28 (mcq)

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

### Q29 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
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

### Q30 (mcq)

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

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** A

### Q31 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=100; j++) {
        for(k=1; k<=i; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** A

### Q32 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=100; j++) {
        for(k=1; k<=100; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n)
- B) O(n²)
- C) O(n³)
- D) O(1)

**Answer:** A

### Q33 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        // O(1) work
    }
}
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        // O(1) work
    }
}
```

- A) O(n²)
- B) O(n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q34 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        // O(1) work
    }
}
for(i=1; i<=n; i++) {
    // O(1) work
}
```

- A) O(n²)
- B) O(n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q35 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        // O(1) work
    }
}
for(i=1; i<=n; i++) {
    // O(1) work
}
```

- A) O(n²)
- B) O(n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q36 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        // O(1) work
    }
}
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        // O(1) work
    }
}
```

- A) O(n²)
- B) O(n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q37 (mcq)

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
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q38 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=i; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q39 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=i; k<=j; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q40 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=j; k<=n; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q41 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q42 (mcq)

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
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q43 (mcq)

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
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q44 (mcq)

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
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q45 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q46 (mcq)

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

### Q47 (mcq)

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

### Q48 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        if(i + j == n) {
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

### Q49 (mcq)

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

### Q50 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            for(l=1; l<=k; l++) {
                // O(1) work
            }
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n⁴)
- D) O(n log n)

**Answer:** C

### Q51 (mcq)

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
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q52 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=i; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q53 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=i; k<=n; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q54 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q55 (mcq)

What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            for(l=1; l<=k; l++) {
                // O(1) work
            }
        }
    }
}
```

- A) O(n²)
- B) O(n³)
- C) O(n⁴)
- D) O(n log n)

**Answer:** C

### Q56 (mcq)

What is the time complexity of the recurrence T(n) = 2T(n/2) + O(n log n)?

- A) O(n log n)
- B) O(n log² n)
- C) O(n²)
- D) O(n log n)

**Answer:** B

### Q57 (mcq)

What is the time complexity of the recurrence T(n) = 2T(n/2) + O(n²)?

- A) O(n²)
- B) O(n² log n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q58 (mcq)

What is the time complexity of the recurrence T(n) = 4T(n/2) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n²)
- D) O(n⁴)

**Answer:** A

### Q59 (mcq)

What is the time complexity of the recurrence T(n) = 4T(n/2) + O(n² log n)?

- A) O(n² log n)
- B) O(n² log² n)
- C) O(n³)
- D) O(n²)

**Answer:** B

### Q60 (mcq)

What is the time complexity of the recurrence T(n) = 8T(n/2) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n⁴)
- D) O(n²)

**Answer:** B

### Q61 (mcq)

What is the time complexity of the recurrence T(n) = 8T(n/2) + O(n²)?

- A) O(n²)
- B) O(n³)
- C) O(n² log n)
- D) O(n log n)

**Answer:** B

### Q62 (mcq)

What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n² log n)?

- A) O(n² log n)
- B) O(n² log² n)
- C) O(n³)
- D) O(n²)

**Answer:** B

### Q63 (mcq)

What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n²)
- D) O(n⁴)

**Answer:** A

### Q64 (mcq)

What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n log n)?

- A) O(n²)
- B) O(n² log n)
- C) O(n log n)
- D) O(n³)

**Answer:** A

### Q65 (mcq)

What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n)?

- A) O(n²)
- B) O(n² log n)
- C) O(n)
- D) O(n³)

**Answer:** A

### Q66 (mcq)

What is the time complexity of the recurrence T(n) = 16T(n/4) + O(n²)?

- A) O(n²)
- B) O(n² log n)
- C) O(n³)
- D) O(n)

**Answer:** B

### Q67 (mcq)

What is the time complexity of the recurrence T(n) = 16T(n/4) + O(n³)?

- A) O(n³)
- B) O(n³ log n)
- C) O(n²)
- D) O(n⁴)

**Answer:** A

### Q68 (mcq)

What is the time complexity of the recurrence T(n) = T(n-2) + O(n)?

- A) O(n²)
- B) O(n)
- C) O(log n)
- D) O(n log n)

**Answer:** A

### Q69 (mcq)

What is the time complexity of the recurrence T(n) = T(n-2) + O(log n)?

- A) O(n log n)
- B) O(n)
- C) O(log² n)
- D) O(n²)

**Answer:** A

### Q70 (mcq)

What is the time complexity of the recurrence T(n) = T(n/2) + T(n/3) + O(1)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q71 (mcq)

What is the time complexity of the recurrence T(n) = T(n/2) + T(n/3) + O(n)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(n log² n)

**Answer:** A

### Q72 (mcq)

What is the time complexity of the recurrence T(n) = T(n/3) + T(n/4) + O(1)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

**Answer:** A

### Q73 (mcq)

What is the time complexity of the recurrence T(n) = T(n/3) + T(n/4) + O(n)?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(n log² n)

**Answer:** A

### Q74 (mcq)

What is the time complexity of the recurrence T(n) = T(n-1) + T(n-2) + O(1)?

- A) O(n)
- B) O(2ⁿ)
- C) O(n²)
- D) O(log n)

**Answer:** B

### Q75 (mcq)

What is the time complexity of the recurrence T(n) = T(n-1) + T(n-2) + O(n)?

- A) O(n²)
- B) O(2ⁿ)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q76 (mcq)

What is the time complexity of the recurrence T(n) = 2T(n-1) + O(1)?

- A) O(n)
- B) O(2ⁿ)
- C) O(n²)
- D) O(log n)

**Answer:** B

### Q77 (mcq)

What is the time complexity of the recurrence T(n) = 3T(n-1) + O(1)?

- A) O(n)
- B) O(3ⁿ)
- C) O(n²)
- D) O(log n)

**Answer:** B

### Q78 (mcq)

What is the time complexity of the recurrence T(n) = T(n-1) + O(n²)?

- A) O(n²)
- B) O(n³)
- C) O(n)
- D) O(n log n)

**Answer:** B

### Q79 (mcq)

What is the time complexity of the recurrence T(n) = T(n-1) + O(n log n)?

- A) O(n log n)
- B) O(n² log n)
- C) O(n²)
- D) O(n log² n)

**Answer:** B

### Q80 (mcq)

What is the time complexity of the recurrence T(n) = T(n-1) + O(2ⁿ)?

- A) O(2ⁿ)
- B) O(n²ⁿ)

**Answer:** A

## Section 3: Introduction to Problem Solving (Questions 81 to 100)

### Q81 (mcq)

What is the first step in solving a problem using a computer?

- A) Coding
- B) Problem analysis
- C) Testing
- D) Debugging

**Answer:** B

### Q82 (mcq)

What is the output of the algorithm phase?

- A) Machine code
- B) A step-by-step procedure
- C) A compiled program
- D) Test cases

**Answer:** B

### Q83 (mcq)

What is the purpose of coding?

- A) To design the algorithm
- B) To convert the algorithm into a programming language
- C) To test the program
- D) To debug errors

**Answer:** B

### Q84 (mcq)

What is the purpose of testing in problem solving?

- A) To write the program
- B) To find errors and verify correctness
- C) To design the algorithm
- D) To analyze the problem

**Answer:** B

### Q85 (mcq)

What is debugging?

- A) Writing the program
- B) Finding and fixing errors
- C) Testing the program
- D) Designing the algorithm

**Answer:** B

### Q86 (mcq)

What is the correct order of problem-solving steps?

- A) Coding → Testing → Debugging → Analysis
- B) Analysis → Algorithm → Coding → Testing → Debugging
- C) Testing → Coding → Analysis → Debugging
- D) Algorithm → Analysis → Coding → Testing

**Answer:** B

### Q87 (mcq)

What is the difference between a syntax error and a semantic error?

- A) Syntax error violates language rules, semantic error is logical error
- B) Semantic error violates language rules, syntax error is logical error
- C) Both are the same
- D) Both occur at runtime

**Answer:** A

### Q88 (mcq)

What is the purpose of pseudo-code?

- A) To write the final program
- B) To describe the algorithm in a human-readable format
- C) To execute the program
- D) To test the program

**Answer:** B

### Q89 (mcq)

What is a flowchart used for?

- A) To write code
- B) To visually represent the algorithm
- C) To execute the program
- D) To compile the program

**Answer:** B

### Q90 (mcq)

What is the role of an algorithm in problem solving?

- A) To provide a solution plan
- B) To execute the program
- C) To test the program
- D) To debug the program

**Answer:** A

### Q91 (mcq)

What is the purpose of test data?

- A) To write the program
- B) To test the program with different inputs
- C) To design the algorithm
- D) To analyze the problem

**Answer:** B

### Q92 (mcq)

What is the difference between verification and validation?

- A) Verification checks if the product is built correctly, validation checks if the correct product is built
- B) Validation checks if the product is built correctly, verification checks if the correct product is built
- C) Both are the same
- D) Neither is important

**Answer:** A

### Q93 (mcq)

What is the purpose of the maintenance phase?

- A) To write the program
- B) To modify and update the program after delivery
- C) To test the program
- D) To design the algorithm

**Answer:** B

### Q94 (mcq)

What is the purpose of code reviews?

- A) To write new code
- B) To examine code for errors and improvements
- C) To test the program
- D) To design algorithms

**Answer:** B

### Q95 (mcq)

What is refactoring?

- A) Writing new code
- B) Restructuring existing code without changing functionality
- C) Testing the program
- D) Debugging errors

**Answer:** B

### Q96 (mcq)

What is the purpose of documentation in software development?

- A) To make the code longer
- B) To explain the program and its usage
- C) To test the program
- D) To debug errors

**Answer:** B

### Q97 (mcq)

What is the difference between internal and external documentation?

- A) Internal is within the code, external is outside
- B) External is within the code, internal is outside
- C) Both are the same
- D) Internal is for users, external is for developers

**Answer:** A

### Q98 (mcq)

What is the purpose of comments in code?

- A) To make the code run faster
- B) To explain the code for other programmers
- C) To test the program
- D) To debug errors

**Answer:** B

### Q99 (mcq)

What is the role of a software engineer in problem solving?

- A) To write code only
- B) To analyze, design, implement, test, and maintain solutions
- C) To test only
- D) To debug only

**Answer:** B

### Q100 (mcq)

Which of the following is the most important step in problem solving?

- A) Coding
- B) Testing
- C) All steps are equally important
- D) Debugging

**Answer:** C
