// Activity 1: Variable Declaration
var number1 = 10;
var number2 = 25;

console.log(`number 1 is ${number1} and number 2 is ${number2}`); 


//Activity 2: Constant Declaration
const isLoggedIn = false;
console.log(`Value of isLoggedIn is ${isLoggedIn}`)


//Activity 3: Data Types
var age = 40;
var word = "Hello World!"
var isTrue = true;
var student = {
    name: "Ajay",
    std: "6th",
    rank: 5,
}
var fruits = ["apple","mango","papaya","banana"]

console.table([
    ["age", typeof age, age],
    ["word", typeof word, word],
    ["isTrue", typeof isTrue, isTrue],
    ["student", typeof student, student],
    ["fruits", typeof fruits, fruits]
])


// Activity 4: Reassigning variables
let x = 100
let y = x;
console.log(`original value of x= ${x}`)
x = x + 50;

console.log(`new value of x= ${x}, y= ${y}`)


//Activity 5: Understanding Const
//isLoggedIn = true
//console.log(isLoggedIn)  // Throws TypeError
