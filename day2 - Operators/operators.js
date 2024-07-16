// Activity 1: Arithmetic Operations
//Task 1: Write a program to add two numbers and log the result to the console.
//Task 2: Write a program to subtract two numbers and log the result to the console.
//Task 3: Write a program to multiply two numbers and log the result to the console.
//Task 4: Write a program to divide two numbers and log the result to the console.
//Task 5: Write a program to find the reminder when one number is divided by another and log the result to the console.

let num1 = 175
let num2 = 20

console.table([
    ['Add','173 + 25',num1+num2],
    ['Subtract','173 - 25',num1-num2],
    ['Multiply','173 * 25',num1*num2],
    ['Divide','173 / 25',num1/num2],
    ['Remainder','173 % 25',num1%num2],
])


/** Activity 2: Assignment Operators
 * Task 6: Use the += operator to add a number to a variable and log the result to the console.
 * Task 7: Use the -= operator to subtract a number to a variable and log the result to the console.
 */

num1 += 30
console.log(num1)

num2 -= 5
console.log(num2)


/**Activity 3: Comparison Operators
 * Task 8: Write a program to compare two numbers using > and < and log the result to the console.
 * task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
 * task 10: Write a program to compare two numbers using == and === and log the result to the console.
 */

let x = 10;
let y = 15;

console.log(x < y)
console.log(x > y)
console.log(x >= 25)
console.log(y <= 20)
console.log(x != y)
console.log(y == "15")
console.log(y === "15")


/**Activity 4: Logical Operators
 * Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
 * Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
 * Task 13: Write a program that uses the ! operator to negate a conditions and log the result to the console.
 */

console.log(16 % 4 == 0 && 200 <= 500)
console.log('hello' !== 'Hello' || (3+5) == 10)
console.log(!true)


/**Activity 5: Ternary Operator
 * Task 14: Write a program that uses the ternary operator to check if a number us positive or negative and log the result to the console.
 */

console.log( -50 > 0 ? "number is positive" : "number is negative")
