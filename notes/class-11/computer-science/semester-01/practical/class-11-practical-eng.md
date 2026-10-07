## C Programming

### 1. Sum and product of digits of an integer

```c
#include <stdio.h>

int main() {
    int num, digit, sum = 0, product = 1;
    printf("Enter an integer: ");
    scanf("%d", &num);

    // Work with absolute value to handle negative numbers
    if (num < 0) num = -num;

    // If the number is 0, product should be 0 (since 0*... = 0)
    if (num == 0) {
        sum = 0;
        product = 0;
    } else {
        while (num > 0) {
            digit = num % 10;
            sum += digit;
            product *= digit;
            num /= 10;
        }
    }

    printf("Sum of digits = %d\n", sum);
    printf("Product of digits = %d\n", product);

    return 0;
}
```

---

### 2. Reverse a number

```c
#include <stdio.h>

int main() {
    int num, reversed = 0, remainder;
    printf("Enter an integer: ");
    scanf("%d", &num);

    int original = num;   // keep original for later
    if (num < 0) num = -num; // work with positive

    while (num > 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num /= 10;
    }

    // Restore sign if original was negative
    if (original < 0) reversed = -reversed;

    printf("Reversed number = %d\n", reversed);
    return 0;
}
```

---

### 3. Sum of the series S = 1 + 1/2 + 1/3 + ... + 1/n

```c
#include <stdio.h>

int main() {
    int n;
    float sum = 0.0;
    printf("Enter the number of terms (n): ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        sum += 1.0 / i;   // use 1.0 to force floating-point division
    }

    printf("Sum of the first %d terms = %.4f\n", n, sum);
    return 0;
}
```

---

### 4. Sum of the series S = 1 - 2 + 3 - 4 + 5 - ... (n terms)

```c
#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter the number of terms (n): ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        if (i % 2 == 1)   // odd terms are added
            sum += i;
        else              // even terms are subtracted
            sum -= i;
    }

    printf("Sum of the first %d terms = %d\n", n, sum);
    return 0;
}
```

---

### 5. Check if a string is a palindrome

```c
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

// Function to check palindrome
bool isPalindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i])
            return false;
    }
    return true;
}

int main() {
    char str[100];
    printf("Enter a string: ");
    scanf("%s", str);   // reads a single word (no spaces)

    if (isPalindrome(str))
        printf("\"%s\" is a palindrome.\n", str);
    else
        printf("\"%s\" is not a palindrome.\n", str);

    return 0;
}
```

Here are the easy-to-understand C programs for questions 6 to 10.

---

### 6. Prime check function + generate primes less than 100

```c
#include <stdio.h>
#include <stdbool.h>

// Function to check if a number is prime
bool isPrime(int num) {
    if (num < 2) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

int main() {
    int num;
    printf("Enter a number to check: ");
    scanf("%d", &num);

    if (isPrime(num))
        printf("%d is prime.\n", num);
    else
        printf("%d is not prime.\n", num);

    printf("\nPrime numbers less than 100:\n");
    for (int i = 2; i < 100; i++) {
        if (isPrime(i))
            printf("%d ", i);
    }
    printf("\n");

    return 0;
}
```

---

### 7. Compute factors of a given number

```c
#include <stdio.h>

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);

    printf("Factors of %d are: ", num);
    for (int i = 1; i <= num; i++) {
        if (num % i == 0)
            printf("%d ", i);
    }
    printf("\n");

    return 0;
}
```

---

### 8. Macro that swaps two numbers + program to use it

```c
#include <stdio.h>

// Macro to swap two integers using a temporary variable
#define SWAP(a, b)  do { int temp = a; a = b; b = temp; } while(0)

int main() {
    int x, y;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);

    printf("Before swap: x = %d, y = %d\n", x, y);
    SWAP(x, y);
    printf("After swap:  x = %d, y = %d\n", x, y);

    return 0;
}
```

---

### 9. Print a triangle of stars (odd number of stars per line)

```c
#include <stdio.h>

int main() {
    int lines;
    printf("Enter number of lines: ");
    scanf("%d", &lines);

    for (int i = 1; i <= lines; i++) {
        // Print stars: 1, 3, 5, 7, ... => (2*i - 1) stars
        for (int j = 1; j <= (2 * i - 1); j++) {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}
```

---

### 10. Menu-driven program for array operations

```c
#include <stdio.h>

#define MAX 100

// Function to print even elements
void printEven(int arr[], int n) {
    printf("Even elements: ");
    for (int i = 0; i < n; i++)
        if (arr[i] % 2 == 0)
            printf("%d ", arr[i]);
    printf("\n");
}

// Function to print odd elements
void printOdd(int arr[], int n) {
    printf("Odd elements: ");
    for (int i = 0; i < n; i++)
        if (arr[i] % 2 != 0)
            printf("%d ", arr[i]);
    printf("\n");
}

// Function to print sum and average
void sumAvg(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++)
        sum += arr[i];
    printf("Sum = %d, Average = %.2f\n", sum, (float)sum / n);
}

// Function to print max and min
void maxMin(int arr[], int n) {
    int max = arr[0], min = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    printf("Max = %d, Min = %d\n", max, min);
}

// Function to remove duplicates (keeps first occurrence)
void removeDuplicates(int arr[], int *n) {
    for (int i = 0; i < *n; i++) {
        for (int j = i + 1; j < *n; j++) {
            if (arr[i] == arr[j]) {
                // Shift elements left
                for (int k = j; k < *n - 1; k++)
                    arr[k] = arr[k + 1];
                (*n)--;
                j--; // check the new element at this position
            }
        }
    }
    printf("After removing duplicates: ");
    for (int i = 0; i < *n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// Function to print array in reverse order
void printReverse(int arr[], int n) {
    printf("Reverse order: ");
    for (int i = n - 1; i >= 0; i--)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[MAX], n, choice;

    printf("Enter number of elements (max %d): ", MAX);
    scanf("%d", &n);
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    do {
        printf("\n--- MENU ---\n");
        printf("1. Print even elements\n");
        printf("2. Print odd elements\n");
        printf("3. Sum and average\n");
        printf("4. Max and min\n");
        printf("5. Remove duplicates\n");
        printf("6. Print reverse order\n");
        printf("7. Re-enter array\n");
        printf("8. Quit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: printEven(arr, n); break;
            case 2: printOdd(arr, n); break;
            case 3: sumAvg(arr, n); break;
            case 4: maxMin(arr, n); break;
            case 5: removeDuplicates(arr, &n); break;
            case 6: printReverse(arr, n); break;
            case 7:
                printf("Enter new number of elements: ");
                scanf("%d", &n);
                printf("Enter %d new elements: ", n);
                for (int i = 0; i < n; i++)
                    scanf("%d", &arr[i]);
                break;
            case 8: printf("Exiting...\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 8);

    return 0;
}
```

Here are the easy-to-understand C programs for questions 11 to 15.

---

### 11. Count occurrences of each alphabet in command line arguments

```c
#include <stdio.h>
#include <ctype.h>

int main(int argc, char *argv[]) {
    int count[26] = {0};  // for 'a' to 'z'

    if (argc < 2) {
        printf("Usage: %s <text> ...\n", argv[0]);
        return 1;
    }

    // Process each command line argument (skip argv[0] which is program name)
    for (int i = 1; i < argc; i++) {
        for (int j = 0; argv[i][j] != '\0'; j++) {
            char ch = tolower(argv[i][j]);
            if (ch >= 'a' && ch <= 'z')
                count[ch - 'a']++;
        }
    }

    // Print table
    printf("Alphabet Occurrences:\n");
    for (int i = 0; i < 26; i++) {
        if (count[i] > 0)
            printf("%c : %d\n", 'a' + i, count[i]);
    }

    return 0;
}
```

---

### 12. Swap two numbers using pointers

```c
#include <stdio.h>

// Function to swap using pointers
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);

    printf("Before swap: x = %d, y = %d\n", x, y);
    swap(&x, &y);
    printf("After swap:  x = %d, y = %d\n", x, y);

    return 0;
}
```

---

### 13. Function passed addresses to alter contents

```c
#include <stdio.h>

// Function that alters the contents of two variables (adds 10 to each)
void alter(int *a, int *b) {
    *a = *a + 10;
    *b = *b + 10;
}

int main() {
    int x, y;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);

    printf("Before alteration: x = %d, y = %d\n", x, y);
    alter(&x, &y);
    printf("After alteration (added 10 to each): x = %d, y = %d\n", x, y);

    return 0;
}
```

---

### 14. Compute area and circumference using another function

```c
#include <stdio.h>
#define PI 3.14159

// Function to compute area and circumference; results stored via pointers
void computeCircle(float radius, float *area, float *circumference) {
    *area = PI * radius * radius;
    *circumference = 2 * PI * radius;
}

int main() {
    float radius, area, circumference;
    printf("Enter radius of circle: ");
    scanf("%f", &radius);

    computeCircle(radius, &area, &circumference);
    printf("Area = %.2f\n", area);
    printf("Circumference = %.2f\n", circumference);

    return 0;
}
```

---

### 15. Sum of n elements using dynamic memory allocation (malloc)

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, sum = 0;
    int *arr;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    // Allocate memory for n integers
    arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    printf("Enter %d integers: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Sum of entered numbers = %d\n", sum);

    free(arr);  // free allocated memory
    return 0;
}
```

Here are the easy-to-understand C programs for questions 16 to 20.

---

### 16. Menu-driven string operations

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void showAddresses(char str[]) {
    printf("Character Addresses:\n");
    for (int i = 0; str[i] != '\0'; i++)
        printf("%c : %p\n", str[i], &str[i]);
}

void concatWithoutStrcat(char str1[], char str2[]) {
    char result[200];
    int i = 0, j = 0;
    while (str1[i] != '\0') {
        result[i] = str1[i];
        i++;
    }
    while (str2[j] != '\0') {
        result[i] = str2[j];
        i++; j++;
    }
    result[i] = '\0';
    printf("Concatenated (without strcat): %s\n", result);
}

void concatWithStrcat(char str1[], char str2[]) {
    char temp[200];
    strcpy(temp, str1);
    strcat(temp, str2);
    printf("Concatenated (with strcat): %s\n", temp);
}

void compareStrings(char str1[], char str2[]) {
    int result = strcmp(str1, str2);
    if (result == 0)
        printf("Strings are equal.\n");
    else if (result < 0)
        printf("String 1 is less than String 2.\n");
    else
        printf("String 1 is greater than String 2.\n");
}

void stringLengthUsingPointer(char str[]) {
    char *p = str;
    int len = 0;
    while (*p != '\0') {
        len++;
        p++;
    }
    printf("Length of string = %d\n", len);
}

void toUpperCase(char str[]) {
    char temp[100];
    strcpy(temp, str);
    for (int i = 0; temp[i] != '\0'; i++)
        temp[i] = toupper(temp[i]);
    printf("Uppercase: %s\n", temp);
}

void toLowerCase(char str[]) {
    char temp[100];
    strcpy(temp, str);
    for (int i = 0; temp[i] != '\0'; i++)
        temp[i] = tolower(temp[i]);
    printf("Lowercase: %s\n", temp);
}

void countVowels(char str[]) {
    int count = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        char ch = tolower(str[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            count++;
    }
    printf("Number of vowels = %d\n", count);
}

void reverseString(char str[]) {
    int len = strlen(str);
    char temp[100];
    for (int i = 0; i < len; i++)
        temp[i] = str[len - 1 - i];
    temp[len] = '\0';
    printf("Reversed string: %s\n", temp);
}

int main() {
    char str1[100], str2[100];
    int choice;

    printf("Enter first string: ");
    scanf("%s", str1);
    printf("Enter second string: ");
    scanf("%s", str2);

    do {
        printf("\n--- MENU ---\n");
        printf("a) Show address of each character in string\n");
        printf("b) Concatenate two strings without strcat\n");
        printf("c) Concatenate two strings using strcat\n");
        printf("d) Compare two strings\n");
        printf("e) Calculate length of string (pointers)\n");
        printf("f) Convert lowercase to uppercase\n");
        printf("g) Convert uppercase to lowercase\n");
        printf("h) Count vowels\n");
        printf("i) Reverse the string\n");
        printf("j) Quit\n");
        printf("Enter your choice: ");
        scanf(" %c", &choice);  // space before %c to skip newline

        switch (choice) {
            case 'a': showAddresses(str1); break;
            case 'b': concatWithoutStrcat(str1, str2); break;
            case 'c': concatWithStrcat(str1, str2); break;
            case 'd': compareStrings(str1, str2); break;
            case 'e': stringLengthUsingPointer(str1); break;
            case 'f': toUpperCase(str1); break;
            case 'g': toLowerCase(str1); break;
            case 'h': countVowels(str1); break;
            case 'i': reverseString(str1); break;
            case 'j': printf("Exiting...\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 'j');

    return 0;
}
```

---

### 17. Merge two ordered arrays

```c
#include <stdio.h>

void merge(int arr1[], int n1, int arr2[], int n2, int merged[]) {
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j])
            merged[k++] = arr1[i++];
        else
            merged[k++] = arr2[j++];
    }
    while (i < n1)
        merged[k++] = arr1[i++];
    while (j < n2)
        merged[k++] = arr2[j++];
}

int main() {
    int arr1[100], arr2[100], merged[200];
    int n1, n2;

    printf("Enter size of first sorted array: ");
    scanf("%d", &n1);
    printf("Enter %d elements (sorted): ", n1);
    for (int i = 0; i < n1; i++) scanf("%d", &arr1[i]);

    printf("Enter size of second sorted array: ");
    scanf("%d", &n2);
    printf("Enter %d elements (sorted): ", n2);
    for (int i = 0; i < n2; i++) scanf("%d", &arr2[i]);

    merge(arr1, n1, arr2, n2, merged);

    printf("Merged sorted array: ");
    for (int i = 0; i < n1 + n2; i++)
        printf("%d ", merged[i]);
    printf("\n");

    return 0;
}
```

---

### 18. Fibonacci series using recursion and iteration

```c
#include <stdio.h>

// Recursive function
int fibRecursive(int n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Iterative function
void fibIterative(int n) {
    int a = 0, b = 1, c;
    if (n >= 1) printf("%d ", a);
    if (n >= 2) printf("%d ", b);
    for (int i = 3; i <= n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    printf("\n");
}

int main() {
    int n, choice;
    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Using recursion: ");
    for (int i = 0; i < n; i++)
        printf("%d ", fibRecursive(i));
    printf("\n");

    printf("Using iteration: ");
    fibIterative(n);

    return 0;
}
```

---

### 19. Factorial using recursion and iteration

```c
#include <stdio.h>

// Recursive factorial
long long factRecursive(int n) {
    if (n == 0 || n == 1) return 1;
    return n * factRecursive(n - 1);
}

// Iterative factorial
long long factIterative(int n) {
    long long fact = 1;
    for (int i = 2; i <= n; i++)
        fact *= i;
    return fact;
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Factorial (recursive) = %lld\n", factRecursive(n));
    printf("Factorial (iterative) = %lld\n", factIterative(n));

    return 0;
}
```

---

### 20. GCD of two numbers with recursion and without recursion

```c
#include <stdio.h>

// Recursive GCD (Euclidean algorithm)
int gcdRecursive(int a, int b) {
    if (b == 0) return a;
    return gcdRecursive(b, a % b);
}

// Iterative GCD
int gcdIterative(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int num1, num2;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    printf("GCD (recursive) = %d\n", gcdRecursive(num1, num2));
    printf("GCD (iterative) = %d\n", gcdIterative(num1, num2));

    return 0;
}
```

Here are the easy-to-understand C programs for questions 21 to 28.

---

### 21. Menu-driven matrix operations (Sum, Difference, Product, Transpose)

```c
#include <stdio.h>

#define MAX 10

void readMatrix(int mat[MAX][MAX], int rows, int cols) {
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &mat[i][j]);
}

void printMatrix(int mat[MAX][MAX], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++)
            printf("%d ", mat[i][j]);
        printf("\n");
    }
}

void add(int a[MAX][MAX], int b[MAX][MAX], int rows, int cols) {
    int result[MAX][MAX];
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            result[i][j] = a[i][j] + b[i][j];
    printf("Sum:\n");
    printMatrix(result, rows, cols);
}

void subtract(int a[MAX][MAX], int b[MAX][MAX], int rows, int cols) {
    int result[MAX][MAX];
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            result[i][j] = a[i][j] - b[i][j];
    printf("Difference:\n");
    printMatrix(result, rows, cols);
}

void multiply(int a[MAX][MAX], int b[MAX][MAX], int r1, int c1, int c2) {
    int result[MAX][MAX] = {0};
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c2; j++)
            for (int k = 0; k < c1; k++)
                result[i][j] += a[i][k] * b[k][j];
    printf("Product:\n");
    printMatrix(result, r1, c2);
}

void transpose(int mat[MAX][MAX], int rows, int cols) {
    int trans[MAX][MAX];
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            trans[j][i] = mat[i][j];
    printf("Transpose:\n");
    printMatrix(trans, cols, rows);
}

int main() {
    int a[MAX][MAX], b[MAX][MAX];
    int r1, c1, r2, c2;
    int choice;

    printf("Enter rows and cols for first matrix: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter first matrix:\n");
    readMatrix(a, r1, c1);

    printf("Enter rows and cols for second matrix: ");
    scanf("%d %d", &r2, &c2);
    printf("Enter second matrix:\n");
    readMatrix(b, r2, c2);

    do {
        printf("\n--- MENU ---\n");
        printf("1. Sum (same size)\n");
        printf("2. Difference (same size)\n");
        printf("3. Product (cols1 == rows2)\n");
        printf("4. Transpose of first matrix\n");
        printf("5. Quit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                if (r1 == r2 && c1 == c2) add(a, b, r1, c1);
                else printf("Matrices must be same size!\n");
                break;
            case 2:
                if (r1 == r2 && c1 == c2) subtract(a, b, r1, c1);
                else printf("Matrices must be same size!\n");
                break;
            case 3:
                if (c1 == r2) multiply(a, b, r1, c1, c2);
                else printf("Cols of first must equal rows of second!\n");
                break;
            case 4: transpose(a, r1, c1); break;
            case 5: printf("Exiting...\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 5);

    return 0;
}
```

---

### 22. Copy contents of one text file to another, removing all whitespaces

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    FILE *source, *dest;
    char ch;

    source = fopen("source.txt", "r");
    if (source == NULL) {
        printf("Cannot open source file.\n");
        return 1;
    }

    dest = fopen("destination.txt", "w");
    if (dest == NULL) {
        printf("Cannot create destination file.\n");
        fclose(source);
        return 1;
    }

    while ((ch = fgetc(source)) != EOF) {
        if (!isspace(ch))  // if not whitespace, write to destination
            fputc(ch, dest);
    }

    printf("File copied successfully without whitespaces.\n");
    fclose(source);
    fclose(dest);
    return 0;
}
```

---

### 23. Reverse elements of an array in place using only one pointer

```c
#include <stdio.h>

void reverse(int *arr, int n) {
    int *left = arr;
    int *right = arr + n - 1;
    int temp;

    while (left < right) {
        temp = *left;
        *left = *right;
        *right = temp;
        left++;
        right--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");

    reverse(arr, n);

    printf("Reversed array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
```

---

### 24. Read 10 integers using pointers, print ascending and descending order

```c
#include <stdio.h>

void sortAscending(int *arr, int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = i + 1; j < n; j++)
            if (*(arr + i) > *(arr + j)) {
                int temp = *(arr + i);
                *(arr + i) = *(arr + j);
                *(arr + j) = temp;
            }
}

void sortDescending(int *arr, int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = i + 1; j < n; j++)
            if (*(arr + i) < *(arr + j)) {
                int temp = *(arr + i);
                *(arr + i) = *(arr + j);
                *(arr + j) = temp;
            }
}

int main() {
    int arr[10];
    int *ptr = arr;

    printf("Enter 10 integers: ");
    for (int i = 0; i < 10; i++)
        scanf("%d", ptr + i);  // using pointer arithmetic

    // Sort ascending
    sortAscending(ptr, 10);
    printf("Ascending order: ");
    for (int i = 0; i < 10; i++)
        printf("%d ", *(ptr + i));
    printf("\n");

    // Sort descending
    sortDescending(ptr, 10);
    printf("Descending order: ");
    for (int i = 0; i < 10; i++)
        printf("%d ", *(ptr + i));
    printf("\n");

    return 0;
}
```

---

### 25. Stack operations using array

```c
#include <stdio.h>
#define MAX 100

int stack[MAX];
int top = -1;

void push(int value) {
    if (top == MAX - 1) {
        printf("Stack overflow!\n");
        return;
    }
    stack[++top] = value;
    printf("%d pushed.\n", value);
}

int pop() {
    if (top == -1) {
        printf("Stack underflow!\n");
        return -1;
    }
    return stack[top--];
}

void display() {
    if (top == -1) {
        printf("Stack is empty.\n");
        return;
    }
    printf("Stack: ");
    for (int i = 0; i <= top; i++)
        printf("%d ", stack[i]);
    printf("\n");
}

int main() {
    int choice, value;

    do {
        printf("\n--- STACK MENU ---\n");
        printf("1. Push\n2. Pop\n3. Display\n4. Quit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                push(value);
                break;
            case 2:
                value = pop();
                if (value != -1)
                    printf("Popped: %d\n", value);
                break;
            case 3:
                display();
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice!\n");
        }
    } while (choice != 4);

    return 0;
}
```

---

### 26. Queue operations using array

```c
#include <stdio.h>
#define MAX 100

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == MAX - 1) {
        printf("Queue overflow!\n");
        return;
    }
    if (front == -1) front = 0;
    queue[++rear] = value;
    printf("%d enqueued.\n", value);
}

int dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue underflow!\n");
        return -1;
    }
    int value = queue[front++];
    if (front > rear) front = rear = -1; // reset when empty
    return value;
}

void display() {
    if (front == -1 || front > rear) {
        printf("Queue is empty.\n");
        return;
    }
    printf("Queue: ");
    for (int i = front; i <= rear; i++)
        printf("%d ", queue[i]);
    printf("\n");
}

int main() {
    int choice, value;

    do {
        printf("\n--- QUEUE MENU ---\n");
        printf("1. Enqueue\n2. Dequeue\n3. Display\n4. Quit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                enqueue(value);
                break;
            case 2:
                value = dequeue();
                if (value != -1)
                    printf("Dequeued: %d\n", value);
                break;
            case 3:
                display();
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice!\n");
        }
    } while (choice != 4);

    return 0;
}
```

---

### 27. Linear search in a collection

```c
#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++)
        if (arr[i] == key)
            return i;  // return index
    return -1;
}

int main() {
    int arr[100], n, key;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    int pos = linearSearch(arr, n, key);
    if (pos == -1)
        printf("Element not found.\n");
    else
        printf("Element found at index %d.\n", pos);

    return 0;
}
```

---

### 28. Bubble sort

```c
#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[100], n;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    bubbleSort(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
```

## Experiment: Basic Linux Commands

### Objective

Learn and practice fundamental Linux/Unix commands for file and directory manipulation, navigation, and system information.

---

### 1. `ls` – List directory contents

- **Syntax**: `ls [options] [path]`
- **Common options**:
  - `-l` : long format (permissions, size, date)
  - `-a` : show all files including hidden (starting with `.`)
  - `-lh` : human‑readable sizes
- **Example**:
  ```bash
  ls -la /home/user
  ```

---

### 2. `cd` – Change directory

- **Syntax**: `cd [directory]`
- **Special paths**:
  - `cd ..` → go up one level
  - `cd ~` → go to home directory
  - `cd /` → go to root
  - `cd -` → go to previous directory
- **Example**:
  ```bash
  cd Documents/Projects
  ```

---

### 3. `cp` – Copy files or directories

- **Syntax**: `cp [options] source destination`
- **Common options**:
  - `-r` : recursive (copy directories)
  - `-i` : prompt before overwrite
- **Examples**:
  ```bash
  cp file1.txt file2.txt        # copy file
  cp -r folder1/ folder2/       # copy directory
  ```

---

### 4. `cat` – Concatenate and display file content

- **Syntax**: `cat [file]`
- Also used to create small files (with `>`)
- **Examples**:
  ```bash
  cat myfile.txt                # view content
  cat file1.txt file2.txt > combined.txt   # merge two files
  ```

---

### 5. `mv` – Move or rename files/directories

- **Syntax**: `mv source destination`
- Used both for moving and renaming.
- **Examples**:
  ```bash
  mv oldname.txt newname.txt    # rename
  mv file.txt /home/user/       # move
  ```

---

### 6. `mkdir` – Make a new directory

- **Syntax**: `mkdir [options] directory_name`
- **Option** `-p` : create parent directories if needed
- **Example**:
  ```bash
  mkdir -p project/src          # creates both project and src
  ```

---

### 7. `rmdir` – Remove an empty directory

- **Syntax**: `rmdir [directory]`
- **Note**: Only works if the directory is empty. To remove non‑empty directories, use `rm -r`.
- **Example**:
  ```bash
  rmdir empty_folder
  ```

---

### 8. `who` – Show who is logged in

- **Syntax**: `who`
- Shows username, terminal, login time, and remote host.
- **Example**:
  ```bash
  who
  ```

---

### 9. Wildcards (`*`, `?`, `[ ]`)

Wildcards help you match multiple files.

- `*` – matches zero or more characters  
  Example: `ls *.txt` → lists all `.txt` files.
- `?` – matches exactly one character  
  Example: `ls file?.txt` → matches `file1.txt`, `fileA.txt`, etc.
- `[ ]` – matches any one character from a set  
  Example: `ls file[0-9].txt` → matches `file0.txt` … `file9.txt`.

---

### Sample Experiment (What you can do for your 5 marks)

1. Open a terminal.
2. Create a directory structure:
   ```bash
   mkdir -p LinuxLab/{docs,backup}
   cd LinuxLab
   ```
3. Create sample files using `cat`:
   ```bash
   echo "Hello" > docs/file1.txt
   echo "World" > docs/file2.txt
   ```
4. List files with `ls -l`.
5. Copy files to backup:
   ```bash
   cp docs/*.txt backup/
   ```
6. Use wildcard to view all `.txt` files: `cat backup/*.txt`.
7. Rename a file: `mv docs/file1.txt docs/hello.txt`.
8. Remove a directory (first empty it, then `rmdir` or use `rm -r`).
9. Check who is logged in: `who`.
10. Navigate with `cd ..`, `cd ~`, etc.

---

### Bonus Commands (helpful)

- `pwd` – print current working directory.
- `echo` – display text.
- `man` – show manual for any command (e.g., `man ls`).

---
