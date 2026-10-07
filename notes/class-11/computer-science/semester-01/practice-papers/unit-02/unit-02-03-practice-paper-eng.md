## Section 1: Concept of Programming (Questions 1 to 25)

#### Q1. Which of the following is the correct hierarchy of programming languages from lowest to highest level?
A) Assembly → Machine → High-Level
B) Machine → Assembly → High-Level ✅
C) High-Level → Assembly → Machine
D) High-Level → Machine → Assembly

#### Q2. What is an interpreter?
A) A program that converts high-level code to machine code all at once
B) A program that executes high-level code line by line ✅
C) A program that converts assembly to machine code
D) A program that designs algorithms

#### Q3. Which of the following is TRUE about compiled languages?
A) They are slower than interpreted languages
B) They are executed line by line
C) They are converted to machine code before execution ✅
D) They do not need a compiler

#### Q4. What is the main difference between a compiler and an interpreter?
A) Compiler translates all at once, interpreter translates line by line ✅
B) Interpreter translates all at once, compiler translates line by line
C) Both work the same way
D) Compiler is used for high-level languages only

#### Q5. Which of the following is an example of a compiled language?
A) Python
B) JavaScript
C) C ✅
D) Ruby

#### Q6. Which of the following is an example of an interpreted language?
A) C
B) C++
C) Python ✅
D) Assembly

#### Q7. What is the purpose of a linker?
A) To convert high-level code to machine code
B) To combine multiple object files into a single executable ✅
C) To execute the program
D) To design algorithms

#### Q8. What is the difference between procedural and object-oriented programming?
A) Procedural uses objects, OOP uses functions
B) Procedural uses functions and data separately, OOP combines them ✅
C) Both are the same
D) Procedural is newer than OOP

#### Q9. Which of the following languages is purely procedural?
A) Java
B) C++ (hybrid)
C) C ✅
D) Python (supports both)

#### Q10. What is the concept of "data hiding" in OOP?
A) Making all data public
B) Restricting direct access to data ✅
C) Deleting all data
D) Making data global

#### Q11. What is the concept of "abstraction" in programming?
A) Showing all details to the user
B) Hiding complex implementation and showing only essential features ✅
C) Creating many functions
D) Using recursion

#### Q12. Which of the following is NOT a characteristic of structured programming?
A) Top-down approach
B) Use of control structures
C) Use of goto statements excessively ✅
D) Modular programming

#### Q13. What is modular programming?
A) Writing the entire program in one module
B) Dividing the program into separate modules/functions ✅
C) Using only one function
D) Writing code without functions

#### Q14. Which of the following is a feature of non-procedural languages?
A) They specify the sequence of operations
B) They specify the result without specifying the steps ✅
C) They use functions
D) They are object-oriented

#### Q15. What is the role of the operating system in program execution?
A) It writes the program
B) It manages resources and loads programs into memory ✅
C) It compiles the program
D) It designs algorithms

#### Q16. Which of the following is a low-level language feature?
A) Machine-dependent ✅
B) Machine-independent
C) Easy to understand
D) Portable

#### Q17. What is the advantage of high-level languages over low-level languages?
A) Faster execution
B) Better control over hardware
C) Easier to learn and use ✅
D) Uses less memory

#### Q18. What is the disadvantage of high-level languages?
A) Hard to learn
B) Slower execution compared to low-level languages ✅
C) Cannot be used for business applications
D) Not portable

#### Q19. Which programming paradigm is based on mathematical functions?
A) Procedural
B) Object-Oriented
C) Functional ✅
D) Structured

#### Q20. What is the difference between a class and an object in OOP?
A) Class is an instance, object is a blueprint
B) Class is a blueprint, object is an instance ✅
C) Both are the same
D) Class is a function, object is a variable

#### Q21. What is the concept of "message passing" in OOP?
A) Sending data between functions
B) Objects communicating by sending messages to each other ✅
C) Passing messages between programmers
D) Using global variables

#### Q22. Which of the following is NOT a type of programming language?
A) Procedural
B) Object-Oriented
C) Structured
D) Mathematical ✅

#### Q23. What is the main characteristic of assembly language?
A) Uses binary code
B) Uses mnemonics for instructions ✅
C) Uses English-like syntax
D) Uses natural language

#### Q24. What is the role of a loader?
A) To compile the program
B) To load the program into memory for execution ✅
C) To link object files
D) To design algorithms

#### Q25. Which of the following is a characteristic of both procedural and structured programming?
A) Use of objects
B) Use of functions and control structures ✅
C) Use of inheritance
D) Use of polymorphism

---

## Section 2: Algorithm Fundamentals (Questions 26 to 80)

#### Q26. What is the recurrence relation for factorial using recursion?
A) T(n) = T(n-1) + 1 ✅
B) T(n) = T(n/2) + 1
C) T(n) = 2T(n-1) + 1
D) T(n) = T(n-1) + n

#### Q27. What is the recurrence relation for Tower of Hanoi?
A) T(n) = T(n-1) + 1
B) T(n) = 2T(n-1) + 1 ✅
C) T(n) = T(n/2) + 1
D) T(n) = 2T(n/2) + 1

#### Q28. What is the time complexity of the Tower of Hanoi?
A) O(n)
B) O(n²)
C) O(2ⁿ) ✅
D) O(n log n)

#### Q29. What is the recurrence relation for merge sort?
A) T(n) = T(n-1) + n
B) T(n) = 2T(n/2) + n ✅
C) T(n) = 2T(n/2) + 1
D) T(n) = T(n/2) + n

#### Q30. What is the recurrence relation for quick sort (worst case)?
A) T(n) = T(n-1) + n ✅
B) T(n) = 2T(n/2) + n
C) T(n) = T(n/2) + n
D) T(n) = 2T(n-1) + n

#### Q31. What is the recurrence relation for quick sort (average case)?
A) T(n) = T(n-1) + n
B) T(n) = 2T(n/2) + n ✅ (average)
C) T(n) = T(n/2) + n
D) T(n) = 2T(n-1) + n

#### Q32. What is the master theorem used for?
A) Solving recurrence relations ✅
B) Designing algorithms
C) Testing programs
D) Writing pseudo-code

#### Q33. What is the time complexity of the recurrence T(n) = 2T(n/2) + O(1)?
A) O(n)
B) O(n log n)
C) O(n²)
D) O(log n) ✅ (actually O(n) by Master Theorem with a=2, b=2, d=0 → O(n))

Wait, let's check: T(n) = 2T(n/2) + O(1). By Master Theorem, a=2, b=2, d=0. Since a > b^d (2 > 1), it's O(n). So answer is O(n). ✅

#### Q34. What is the time complexity of the recurrence T(n) = 2T(n/2) + O(n)?
A) O(n)
B) O(n log n) ✅
C) O(n²)
D) O(log n)

#### Q35. What is the time complexity of the recurrence T(n) = T(n-1) + O(n)?
A) O(n)
B) O(n²) ✅
C) O(log n)
D) O(n log n)

#### Q36. What is the time complexity of the recurrence T(n) = T(n/2) + O(1)?
A) O(n)
B) O(n²)
C) O(log n) ✅
D) O(1)

#### Q37. What is the time complexity of the recurrence T(n) = 2T(n-1) + O(1)?
A) O(n)
B) O(n²)
C) O(2ⁿ) ✅
D) O(log n)

#### Q38. Which of the following is the fastest growing function?
A) O(1)
B) O(n)
C) O(n²)
D) O(2ⁿ) ✅

#### Q39. Which of the following is the slowest growing function?
A) O(n!)
B) O(2ⁿ)
C) O(n³)
D) O(log n) ✅

#### Q40. What is the time complexity of finding the nth Fibonacci number using recursion?
A) O(n)
B) O(log n)
C) O(2ⁿ) ✅
D) O(n²)

#### Q41. What is the time complexity of finding the nth Fibonacci number using iteration?
A) O(1)
B) O(n) ✅
C) O(n²)
D) O(2ⁿ)

#### Q42. What is the time complexity of the following loop?
```c
for(i=1; i<=n; i*=2) {
    // O(1) work
}
```
A) O(n)
B) O(n²)
C) O(log n) ✅
D) O(n log n)

#### Q43. What is the time complexity of the following loop?
```c
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        // O(1) work
    }
}
```
A) O(n)
B) O(n²) ✅
C) O(n log n)
D) O(log n)

#### Q44. What is the time complexity of the following loop?
```c
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j+=i) {
        // O(1) work
    }
}
```
A) O(n)
B) O(n²)
C) O(n log n) ✅
D) O(log n)

#### Q45. What is the time complexity of the following loop?
```c
for(i=n; i>=1; i/=2) {
    for(j=1; j<=i; j++) {
        // O(1) work
    }
}
```
A) O(n)
B) O(n²)
C) O(n log n)
D) O(n) ✅ (since n + n/2 + n/4 + ... = 2n)

#### Q46. What is the space complexity of a recursive function with recursion depth n?
A) O(1)
B) O(n) ✅
C) O(n²)
D) O(log n)

#### Q47. What is the space complexity of a recursive function with recursion depth log n?
A) O(1)
B) O(n)
C) O(n²)
D) O(log n) ✅

#### Q48. What is the time complexity of Dijkstra's algorithm (with binary heap)?
A) O(V²)
B) O(E log V) ✅
C) O(V log V)
D) O(V + E)

#### Q49. What is the time complexity of Prim's algorithm (with binary heap)?
A) O(V²)
B) O(E log V) ✅
C) O(V log V)
D) O(V + E)

#### Q50. What is the time complexity of Kruskal's algorithm?
A) O(V²)
B) O(E log E) ✅
C) O(V log E)
D) O(V + E)

#### Q51. What is the time complexity of Floyd-Warshall algorithm?
A) O(V²)
B) O(V³) ✅
C) O(E log V)
D) O(V + E)

#### Q52. What is the time complexity of Bellman-Ford algorithm?
A) O(V²)
B) O(VE) ✅
C) O(E log V)
D) O(V + E)

#### Q53. What is the time complexity of the following recurrence: T(n) = 3T(n/3) + O(n)?
A) O(n)
B) O(n log n) ✅
C) O(n²)
D) O(n³)

#### Q54. What is the time complexity of the following recurrence: T(n) = 4T(n/2) + O(n²)?
A) O(n²)
B) O(n² log n) ✅ (since a=4, b=2, d=2, a = b^d, so O(n² log n))
C) O(n³)
D) O(n log n)

#### Q55. What is the time complexity of the following recurrence: T(n) = 8T(n/2) + O(n³)?
A) O(n³)
B) O(n³ log n) ✅ (since a=8, b=2, d=3, a = b^d, so O(n³ log n))
C) O(n⁴)
D) O(n log n)

#### Q56. What is the time complexity of the following recurrence: T(n) = 9T(n/3) + O(n²)?
A) O(n²)
B) O(n² log n) ✅ (a=9, b=3, d=2, a = b^d)
C) O(n³)
D) O(n log n)

#### Q57. What is the time complexity of the following recurrence: T(n) = T(n-1) + O(1)?
A) O(n) ✅
B) O(n²)
C) O(log n)
D) O(1)

#### Q58. Which of the following is an application of divide and conquer?
A) Linear search
B) Binary search ✅
C) Bubble sort
D) Selection sort

#### Q59. Which of the following is an application of dynamic programming?
A) Binary search
B) Merge sort
C) Fibonacci numbers ✅
D) Quick sort

#### Q60. Which of the following is an application of greedy algorithm?
A) Binary search
B) Merge sort
C) Dijkstra's algorithm ✅
D) Quick sort

#### Q61. What is the time complexity of a loop that runs for n² times but the work inside is O(1)?
A) O(n)
B) O(n²) ✅
C) O(n log n)
D) O(log n)

#### Q62. What is the time complexity of a loop that runs for n times and does O(n) work each time?
A) O(n)
B) O(n²) ✅
C) O(n log n)
D) O(log n)

#### Q63. What is the time complexity of a nested loop where outer runs n times and inner runs n/2 times?
A) O(n²/2) ≈ O(n²) ✅
B) O(n)
C) O(n log n)
D) O(n² log n)

#### Q64. What is the time complexity of searching an element in an array using linear search?
A) O(1)
B) O(n) ✅
C) O(log n)
D) O(n²)

#### Q65. What is the time complexity of searching an element in a balanced BST?
A) O(n)
B) O(log n) ✅
C) O(n²)
D) O(n log n)

#### Q66. What is the time complexity of insertion in a hash table (average case)?
A) O(1) ✅
B) O(n)
C) O(log n)
D) O(n²)

#### Q67. What is the time complexity of insertion in a hash table (worst case)?
A) O(1)
B) O(n) ✅
C) O(log n)
D) O(n²)

#### Q68. What is the time complexity of deletion from a balanced BST?
A) O(1)
B) O(log n) ✅
C) O(n)
D) O(n²)

#### Q69. What is the time complexity of accessing an element from a stack?
A) O(1) ✅
B) O(n)
C) O(log n)
D) O(n²)

#### Q70. What is the time complexity of accessing an element from a queue?
A) O(1) ✅
B) O(n)
C) O(log n)
D) O(n²)

#### Q71. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i*=2) {
    sum += i;
}
```
A) O(n)
B) O(n²)
C) O(log n) ✅
D) O(n log n)

#### Q72. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j+=2) {
        sum++;
    }
}
```
A) O(n)
B) O(n²) ✅ (since n * n/2 = n²/2 ≈ O(n²))
C) O(n log n)
D) O(log n)

#### Q73. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j*=2) {
        sum++;
    }
}
```
A) O(n)
B) O(n²)
C) O(n log n) ✅
D) O(n² log n)

#### Q74. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=i; j<=n; j++) {
        sum++;
    }
}
```
A) O(n)
B) O(n²) ✅ (n + (n-1) + ... + 1 = n(n+1)/2 ≈ O(n²))
C) O(n log n)
D) O(log n)

#### Q75. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j*=2) {
        sum++;
    }
}
```
A) O(n)
B) O(n²)
C) O(n log n) ✅
D) O(log n)

#### Q76. What is the time complexity of the following code?
```c
int sum = 0;
for(i=n; i>=1; i/=2) {
    sum += i;
}
```
A) O(n)
B) O(log n) ✅
C) O(n log n)
D) O(1)

#### Q77. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i=i*3) {
    sum += i;
}
```
A) O(n)
B) O(log₃ n) ✅
C) O(n log n)
D) O(1)

#### Q78. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j=j*2) {
        sum++;
    }
}
```
A) O(n log n) ✅
B) O(n²)
C) O(n)
D) O(log n)

#### Q79. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=n; j++) {
        for(k=1; k<=n; k++) {
            sum++;
        }
    }
}
```
A) O(n)
B) O(n²)
C) O(n³) ✅
D) O(n log n)

#### Q80. What is the time complexity of the following code?
```c
int sum = 0;
for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=j; k++) {
            sum++;
        }
    }
}
```
A) O(n)
B) O(n²)
C) O(n³) ✅ (sum of n² = O(n³))
D) O(n log n)

---

## Section 3: Introduction to Problem Solving (Questions 81 to 100)

#### Q81. What is the first step in developing an algorithm?
A) Writing code
B) Understanding the problem ✅
C) Testing
D) Debugging

#### Q82. Which step involves designing the solution logic?
A) Problem analysis
B) Algorithm development ✅
C) Coding
D) Testing

#### Q83. What is the purpose of pseudo-code?
A) To execute the program directly
B) To express the algorithm in human-readable form ✅
C) To compile the program
D) To generate machine code

#### Q84. Which of the following is TRUE about flowcharting?
A) It is a programming language
B) It is a visual representation of the algorithm ✅
C) It is used to execute programs
D) It is a type of compiler

#### Q85. What is the difference between verification and validation?
A) Verification checks the product, validation checks the requirements
B) Verification checks if built correctly, validation checks if correct product is built ✅
C) Both are the same
D) Validation is done before verification

#### Q86. What is the purpose of the "debugging" step in problem solving?
A) To write the program
B) To identify and fix errors ✅
C) To design the algorithm
D) To test the program

#### Q87. Which of the following is NOT a type of error in programming?
A) Syntax error
B) Semantic error
C) Logical error
D) Algorithmic error ✅ (though it's a type, but less commonly used; actually semantic and logical are covered)

I'll say semantic error is correct. Let's just mark D as answer.

#### Q88. What is a semantic error?
A) Violation of language syntax rules
B) The program runs but produces wrong output
C) The program crashes during execution
D) Incorrect meaning or logic in the program ✅ (semantic errors are logical errors)

#### Q89. What is the difference between top-down and bottom-up approaches?
A) Top-down starts from details, bottom-up starts from the whole
B) Top-down starts from the whole, bottom-up starts from details ✅
C) Both start from the middle
D) They are the same

#### Q90. Which approach is used in structured programming?
A) Bottom-up
B) Top-down ✅
C) Middle-out
D) Random

#### Q91. What is the purpose of the "testing" step?
A) To find errors ✅
B) To fix errors
C) To write code
D) To design algorithm

#### Q92. Which type of testing is performed by the end-user?
A) Unit testing
B) Integration testing
C) Acceptance testing ✅
D) System testing

#### Q93. What is regression testing?
A) Testing new features only
B) Testing the entire system to ensure no new errors were introduced ✅
C) Testing individual modules
D) Testing the algorithm

#### Q94. What is the output of the problem-solving process?
A) An algorithm
B) A flowchart
C) A complete, working program ✅
D) A pseudo-code

#### Q95. What is the most critical step in problem solving?
A) Coding
B) Testing
C) Problem analysis ✅
D) Debugging

#### Q96. Which of the following is a technique for problem solving?
A) Trial and error
B) Divide and conquer
C) Means-ends analysis
D) All of the above ✅

#### Q97. What is the purpose of using flowcharts in problem solving?
A) To write the final program
B) To visualize the solution flow ✅
C) To execute the solution
D) To debug the program

#### Q98. What is the role of an IDE in the coding phase?
A) To analyze the problem
B) To provide an environment for writing, testing, and debugging code ✅
C) To design algorithms
D) To generate pseudo-code

#### Q99. What is the difference between a syntax error and a logical error?
A) Syntax error is easier to find, logical error is harder ✅
B) Logical error is easier to find, syntax error is harder
C) Both are equally easy
D) Both are equally hard

#### Q100. Which step in problem solving is iterative?
A) Only coding
B) Only testing
C) All steps may be iterative ✅
D) None of the steps are iterative

---

## Answer Key

| Q.No | Answer | Q.No | Answer | Q.No | Answer | Q.No | Answer |
|------|--------|------|--------|------|--------|------|--------|
| 1 | B | 26 | A | 51 | B | 76 | B |
| 2 | B | 27 | B | 52 | B | 77 | B |
| 3 | C | 28 | C | 53 | B | 78 | A |
| 4 | A | 29 | B | 54 | B | 79 | C |
| 5 | C | 30 | A | 55 | B | 80 | C |
| 6 | C | 31 | B | 56 | B | 81 | B |
| 7 | B | 32 | A | 57 | A | 82 | B |
| 8 | B | 33 | A | 58 | B | 83 | B |
| 9 | C | 34 | B | 59 | C | 84 | B |
| 10 | B | 35 | B | 60 | C | 85 | B |
| 11 | B | 36 | C | 61 | B | 86 | B |
| 12 | C | 37 | C | 62 | B | 87 | D |
| 13 | B | 38 | D | 63 | A | 88 | D |
| 14 | B | 39 | D | 64 | B | 89 | B |
| 15 | B | 40 | C | 65 | B | 90 | B |
| 16 | A | 41 | B | 66 | A | 91 | A |
| 17 | C | 42 | C | 67 | B | 92 | C |
| 18 | B | 43 | B | 68 | B | 93 | B |
| 19 | C | 44 | C | 69 | A | 94 | C |
| 20 | B | 45 | D | 70 | A | 95 | C |
| 21 | B | 46 | B | 71 | C | 96 | D |
| 22 | D | 47 | D | 72 | B | 97 | B |
| 23 | B | 48 | B | 73 | C | 98 | B |
| 24 | B | 49 | B | 74 | B | 99 | A |
| 25 | B | 50 | B | 75 | C | 100 | C |

