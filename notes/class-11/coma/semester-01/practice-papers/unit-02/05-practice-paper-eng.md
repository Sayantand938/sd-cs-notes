## Section 1: Concept of Programming (Questions 1 to 25)

#### Q1. Which of the following is a characteristic of machine language?

A) It uses mnemonics
B) It is machine-independent
C) It is directly understood by the computer ✅
D) It is easy to read

#### Q2. What is the role of an assembler?

A) Converts high-level code to machine code
B) Converts assembly language to machine code ✅
C) Converts machine code to assembly
D) Executes the program

#### Q3. Which of the following is TRUE about high-level languages?

A) They are machine-dependent
B) They are easier to debug than low-level languages ✅
C) They execute faster than machine language
D) They cannot be compiled

#### Q4. What is the difference between a program and a process?

A) Program is static code, process is program in execution ✅
B) Process is static code, program is program in execution
C) Both are the same
D) Program is stored in RAM, process is stored in hard disk

#### Q5. What is the concept of "portability" in programming?

A) The ability to move a program from one hardware to another ✅
B) The ability to execute a program faster
C) The ability to use less memory
D) The ability to have no errors

#### Q6. Which of the following languages is NOT a procedural language?

A) C
B) Pascal
C) FORTRAN
D) SQL ✅

#### Q7. What is the purpose of a function in procedural programming?

A) To store data
B) To perform a specific task and return a value ✅
C) To define a class
D) To create objects

#### Q8. What is the difference between a method and a function?

A) Method is associated with an object, function is not ✅
B) Function is associated with an object, method is not
C) Both are the same
D) Methods are used in C, functions in Java

#### Q9. Which of the following is a feature of OOP that promotes code reuse?

A) Encapsulation
B) Inheritance ✅
C) Polymorphism
D) Abstraction

#### Q10. What is the concept of "dynamic binding" in OOP?

A) Binding at compile time
B) Binding at runtime ✅
C) No binding
D) Static binding

#### Q11. What is the purpose of an interface in programming?

A) To define a class
B) To define a contract that classes can implement ✅
C) To store data
D) To execute code

#### Q12. Which of the following is a characteristic of interpreted languages?

A) They are faster than compiled languages
B) They are platform-dependent
C) They execute code line by line ✅
D) They generate object code

#### Q13. What is Just-In-Time (JIT) compilation?

A) Compilation before execution
B) Compilation during execution ✅
C) No compilation
D) Compilation after execution

#### Q14. Which of the following languages uses JIT compilation?

A) C
B) C++
C) Java ✅
D) Assembly

#### Q15. What is the purpose of a garbage collector?

A) To compile the program
B) To automatically free unused memory ✅
C) To execute the program
D) To design algorithms

#### Q16. Which of the following is NOT a programming language generation?

A) 1GL
B) 2GL
C) 3GL
D) 5GL ✅ (Actually 5GL exists, so this is tricky; let's say 4GL is the highest common one, but we'll mark something else)

Actually, 1GL, 2GL, 3GL, 4GL, 5GL all exist. So we need a different question. Let's rephrase: Which of the following is NOT a generation of programming language?
A) Machine Language (1GL)
B) Assembly Language (2GL)
C) Procedural Language (3GL)
D) Natural Language (4GL) ✅ (Natural language is not a programming language generation)

#### Q17. What is the role of a software development kit (SDK)?

A) To execute programs
B) To provide tools for developing software for a specific platform ✅
C) To compile programs
D) To test programs

#### Q18. What is the concept of "API" in programming?

A) A programming language
B) A set of functions and protocols for building software ✅
C) A type of compiler
D) A debugging tool

#### Q19. Which of the following is a characteristic of procedural languages?

A) They use objects
B) They use inheritance
C) They use functions and procedures ✅
D) They use polymorphism

#### Q20. What is the purpose of the `main()` function in C?

A) To define a class
B) To serve as the entry point of the program ✅
C) To print output
D) To allocate memory

#### Q21. What is the concept of "scope" in programming?

A) The region where a variable is accessible ✅
B) The size of a variable
C) The type of a variable
D) The value of a variable

#### Q22. Which of the following has the largest scope?

A) Local variable
B) Global variable ✅
C) Block variable
D) Function parameter

#### Q23. What is the purpose of a library in programming?

A) To store data
B) To provide reusable code and functions ✅
C) To compile programs
D) To execute programs

#### Q24. Which of the following is an example of a static library?

A) .dll
B) .so
C) .lib ✅
D) .jar

#### Q25. What is the difference between static and dynamic linking?

A) Static linking occurs at compile time, dynamic at runtime ✅
B) Dynamic linking occurs at compile time, static at runtime
C) Both occur at compile time
D) Both occur at runtime

---

## Section 2: Algorithm Fundamentals (Questions 26 to 80)

#### Q26. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
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

#### Q27. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n log n)
D) O(n⁴)

#### Q28. What is the time complexity of the following code?

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

#### Q29. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
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

#### Q30. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=100; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²) ✅ (constant inner)
B) O(n³)
C) O(n)
D) O(n log n)

#### Q31. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=100; j++) {
        for(k=1; k<=i; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²) ✅ (100 \* sum of i = O(n²))
B) O(n³)
C) O(n)
D) O(n log n)

#### Q32. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=100; j++) {
        for(k=1; k<=100; k++) {
            // O(1) work
        }
    }
}
```

A) O(n) ✅
B) O(n²)
C) O(n³)
D) O(1)

#### Q33. What is the time complexity of the following code?

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

A) O(n²) ✅ (both are O(n²), so overall O(n²))
B) O(n)
C) O(n log n)
D) O(n³)

#### Q34. What is the time complexity of the following code?

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

A) O(n²) ✅
B) O(n)
C) O(n log n)
D) O(n³)

#### Q35. What is the time complexity of the following code?

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

A) O(n²) ✅ (dominant loop)
B) O(n)
C) O(n log n)
D) O(n³)

#### Q36. What is the time complexity of the following code?

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

A) O(n²) ✅
B) O(n)
C) O(n log n)
D) O(n³)

#### Q37. What is the time complexity of the following code?

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
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q38. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=i; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q39. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=i; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q40. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        for(k=j; k<=n; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q41. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q42. What is the time complexity of the following code?

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
C) O(n)
D) O(n log n)

#### Q43. What is the time complexity of the following code?

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
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q44. What is the time complexity of the following code?

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
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q45. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q46. What is the time complexity of the following code?

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
B) O(n³) ✅ (when i=j, inner runs n times, and this happens n times)
C) O(n)
D) O(n log n)

#### Q47. What is the time complexity of the following code?

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
B) O(n³) ✅ (nested with if but still O(n³))
C) O(n)
D) O(n log n)

#### Q48. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³) ✅ (worst case still n³)
C) O(n)
D) O(n log n)

#### Q49. What is the time complexity of the following code?

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
B) O(n³) ✅ (nested loops dominate)
C) O(n)
D) O(n log n)

#### Q50. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³)
C) O(n⁴) ✅
D) O(n log n)

#### Q51. What is the time complexity of the following code?

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
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q52. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=j; k<=i; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q53. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=i; k<=n; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q54. What is the time complexity of the following code?

```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            // O(1) work
        }
    }
}
```

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q55. What is the time complexity of the following code?

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

A) O(n²)
B) O(n³)
C) O(n⁴) ✅
D) O(n log n)

#### Q56. What is the time complexity of the recurrence T(n) = 2T(n/2) + O(n log n)?

A) O(n log n)
B) O(n log² n) ✅
C) O(n²)
D) O(n log n)

#### Q57. What is the time complexity of the recurrence T(n) = 2T(n/2) + O(n²)?

A) O(n²) ✅
B) O(n² log n)
C) O(n log n)
D) O(n³)

#### Q58. What is the time complexity of the recurrence T(n) = 4T(n/2) + O(n³)?

A) O(n³) ✅
B) O(n³ log n)
C) O(n²)
D) O(n⁴)

#### Q59. What is the time complexity of the recurrence T(n) = 4T(n/2) + O(n² log n)?

A) O(n² log n)
B) O(n² log² n) ✅
C) O(n³)
D) O(n²)

#### Q60. What is the time complexity of the recurrence T(n) = 8T(n/2) + O(n³)?

A) O(n³)
B) O(n³ log n) ✅
C) O(n⁴)
D) O(n²)

#### Q61. What is the time complexity of the recurrence T(n) = 8T(n/2) + O(n²)?

A) O(n²)
B) O(n³) ✅
C) O(n² log n)
D) O(n log n)

#### Q62. What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n² log n)?

A) O(n² log n)
B) O(n² log² n) ✅
C) O(n³)
D) O(n²)

#### Q63. What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n³)?

A) O(n³) ✅
B) O(n³ log n)
C) O(n²)
D) O(n⁴)

#### Q64. What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n log n)?

A) O(n²) ✅ (a=9, b=3, d=1, a > b^d → O(n²))
B) O(n² log n)
C) O(n log n)
D) O(n³)

#### Q65. What is the time complexity of the recurrence T(n) = 9T(n/3) + O(n)?

A) O(n²) ✅
B) O(n² log n)
C) O(n)
D) O(n³)

#### Q66. What is the time complexity of the recurrence T(n) = 16T(n/4) + O(n²)?

A) O(n²)
B) O(n² log n) ✅
C) O(n³)
D) O(n)

#### Q67. What is the time complexity of the recurrence T(n) = 16T(n/4) + O(n³)?

A) O(n³) ✅
B) O(n³ log n)
C) O(n²)
D) O(n⁴)

#### Q68. What is the time complexity of the recurrence T(n) = T(n-2) + O(n)?

A) O(n²) ✅
B) O(n)
C) O(log n)
D) O(n log n)

#### Q69. What is the time complexity of the recurrence T(n) = T(n-2) + O(log n)?

A) O(n log n) ✅
B) O(n)
C) O(log² n)
D) O(n²)

#### Q70. What is the time complexity of the recurrence T(n) = T(n/2) + T(n/3) + O(1)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q71. What is the time complexity of the recurrence T(n) = T(n/2) + T(n/3) + O(n)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(n log² n)

#### Q72. What is the time complexity of the recurrence T(n) = T(n/3) + T(n/4) + O(1)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(log n)

#### Q73. What is the time complexity of the recurrence T(n) = T(n/3) + T(n/4) + O(n)?

A) O(n) ✅
B) O(n log n)
C) O(n²)
D) O(n log² n)

#### Q74. What is the time complexity of the recurrence T(n) = T(n-1) + T(n-2) + O(1)?

A) O(n)
B) O(2ⁿ) ✅ (Fibonacci-like)
C) O(n²)
D) O(log n)

#### Q75. What is the time complexity of the recurrence T(n) = T(n-1) + T(n-2) + O(n)?

A) O(n²)
B) O(2ⁿ) ✅
C) O(n)
D) O(n log n)

#### Q76. What is the time complexity of the recurrence T(n) = 2T(n-1) + O(1)?

A) O(n)
B) O(2ⁿ) ✅
C) O(n²)
D) O(log n)

#### Q77. What is the time complexity of the recurrence T(n) = 3T(n-1) + O(1)?

A) O(n)
B) O(3ⁿ) ✅
C) O(n²)
D) O(log n)

#### Q78. What is the time complexity of the recurrence T(n) = T(n-1) + O(n²)?

A) O(n²)
B) O(n³) ✅
C) O(n)
D) O(n log n)

#### Q79. What is the time complexity of the recurrence T(n) = T(n-1) + O(n log n)?

A) O(n log n)
B) O(n² log n) ✅
C) O(n²)
D) O(n log² n)

#### Q80. What is the time complexity of the recurrence T(n) = T(n-1) + O(2ⁿ)?

A) O(2ⁿ)
B) O(n²ⁿ) ✅ (sum of 2^i = O(2ⁿ), but T(n) = O(2ⁿ) actually, wait T(n) = sum of 2^i = O(2ⁿ). So A is correct)
Actually T(n) = T(n-1) + 2ⁿ → T(n) = O(2ⁿ) ✅

---

## Section 3: Introduction to Problem Solving (Questions 81 to 100)

#### Q81. What is the first step in solving a problem using a computer?

A) Coding
B) Problem analysis ✅
C) Testing
D) Debugging

#### Q82. What is the output of the algorithm phase?

A) Machine code
B) A step-by-step procedure ✅
C) A compiled program
D) Test cases

#### Q83. What is the purpose of coding?

A) To design the algorithm
B) To convert the algorithm into a programming language ✅
C) To test the program
D) To debug errors

#### Q84. What is the purpose of testing in problem solving?

A) To write the program
B) To find errors and verify correctness ✅
C) To design the algorithm
D) To analyze the problem

#### Q85. What is debugging?

A) Writing the program
B) Finding and fixing errors ✅
C) Testing the program
D) Designing the algorithm

#### Q86. What is the correct order of problem-solving steps?

A) Coding → Testing → Debugging → Analysis
B) Analysis → Algorithm → Coding → Testing → Debugging ✅
C) Testing → Coding → Analysis → Debugging
D) Algorithm → Analysis → Coding → Testing

#### Q87. What is the difference between a syntax error and a semantic error?

A) Syntax error violates language rules, semantic error is logical error ✅
B) Semantic error violates language rules, syntax error is logical error
C) Both are the same
D) Both occur at runtime

#### Q88. What is the purpose of pseudo-code?

A) To write the final program
B) To describe the algorithm in a human-readable format ✅
C) To execute the program
D) To test the program

#### Q89. What is a flowchart used for?

A) To write code
B) To visually represent the algorithm ✅
C) To execute the program
D) To compile the program

#### Q90. What is the role of an algorithm in problem solving?

A) To provide a solution plan ✅
B) To execute the program
C) To test the program
D) To debug the program

#### Q91. What is the purpose of test data?

A) To write the program
B) To test the program with different inputs ✅
C) To design the algorithm
D) To analyze the problem

#### Q92. What is the difference between verification and validation?

A) Verification checks if the product is built correctly, validation checks if the correct product is built ✅
B) Validation checks if the product is built correctly, verification checks if the correct product is built
C) Both are the same
D) Neither is important

#### Q93. What is the purpose of the maintenance phase?

A) To write the program
B) To modify and update the program after delivery ✅
C) To test the program
D) To design the algorithm

#### Q94. What is the purpose of code reviews?

A) To write new code
B) To examine code for errors and improvements ✅
C) To test the program
D) To design algorithms

#### Q95. What is refactoring?

A) Writing new code
B) Restructuring existing code without changing functionality ✅
C) Testing the program
D) Debugging errors

#### Q96. What is the purpose of documentation in software development?

A) To make the code longer
B) To explain the program and its usage ✅
C) To test the program
D) To debug errors

#### Q97. What is the difference between internal and external documentation?

A) Internal is within the code, external is outside ✅
B) External is within the code, internal is outside
C) Both are the same
D) Internal is for users, external is for developers

#### Q98. What is the purpose of comments in code?

A) To make the code run faster
B) To explain the code for other programmers ✅
C) To test the program
D) To debug errors

#### Q99. What is the role of a software engineer in problem solving?

A) To write code only
B) To analyze, design, implement, test, and maintain solutions ✅
C) To test only
D) To debug only

#### Q100. Which of the following is the most important step in problem solving?

A) Coding
B) Testing
C) All steps are equally important ✅
D) Debugging

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
| ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ |
| 1    | C      | 26   | B      | 51   | B      | 76   | B      |
| 2    | B      | 27   | B      | 52   | B      | 77   | B      |
| 3    | B      | 28   | B      | 53   | B      | 78   | B      |
| 4    | A      | 29   | B      | 54   | B      | 79   | B      |
| 5    | A      | 30   | A      | 55   | C      | 80   | A      |
| 6    | D      | 31   | A      | 56   | B      | 81   | B      |
| 7    | B      | 32   | A      | 57   | A      | 82   | B      |
| 8    | A      | 33   | A      | 58   | A      | 83   | B      |
| 9    | B      | 34   | A      | 59   | B      | 84   | B      |
| 10   | B      | 35   | A      | 60   | B      | 85   | B      |
| 11   | B      | 36   | A      | 61   | B      | 86   | B      |
| 12   | C      | 37   | B      | 62   | B      | 87   | A      |
| 13   | B      | 38   | B      | 63   | A      | 88   | B      |
| 14   | C      | 39   | B      | 64   | A      | 89   | B      |
| 15   | B      | 40   | B      | 65   | A      | 90   | A      |
| 16   | D      | 41   | B      | 66   | B      | 91   | B      |
| 17   | B      | 42   | B      | 67   | A      | 92   | A      |
| 18   | B      | 43   | B      | 68   | A      | 93   | B      |
| 19   | C      | 44   | B      | 69   | A      | 94   | B      |
| 20   | B      | 45   | B      | 70   | A      | 95   | B      |
| 21   | A      | 46   | B      | 71   | A      | 96   | B      |
| 22   | B      | 47   | B      | 72   | A      | 97   | A      |
| 23   | B      | 48   | B      | 73   | A      | 98   | B      |
| 24   | C      | 49   | B      | 74   | B      | 99   | B      |
| 25   | A      | 50   | C      | 75   | B      | 100  | C      |
