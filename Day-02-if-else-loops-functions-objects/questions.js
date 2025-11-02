//Question No 1: How to declare three tyoes of variables in Javascript And also difference?

var a = 7;
console.log(a);
//if we declare this again this is still not showing an error and this is old version of variables
var a = 10;
console.log(a);

function sum() {
  var a = 12;
  console.log(a);
}

console.log(typeof sum);
console.log(a);
//If we want to display a after function calling then the global var will be display the function var a is visible upto function calling. And also re declare and re assign.
sum();
//Let has been re assign but not re declare
let c = 5;
console.log(c);

//let is a block scope when i call it from outside function the outside a will be display when the block is ended the let variable is also ended.
{
  let a = 6;
  function sum() {
    let a = 7;
    let b = 8;
    console.log(a + b);
  }
  console.log(a);
}
sum();

//Once we assign value to const it will not re assign and not re declare it is specially use for constant values.

const d = 7;
// d = 6  // typeerror available because of re assign
//syntaxerror because of re declare
// const d = 8
console.log(d);

{
  const d = 7;
  function sum() {
    const e = 4;
    const d = 7;
    console.log(e + d);
  }
  console.log(d);
}
sum();

// Q No 2 What is TDZ? Explain with an example

//When we want to console the output before initialization it is called TDZ. It is available in var but in the let and const it will show reference error
console.log(typeof y);

var y = 10;
console.log(y);

// console.log(z);
// let z = 7

//Q No 3What is hoisting?

// when we call function before creation of function it is called hoisting but it is only available in function not arrow function and function variables.

abc();

function abc() {
  console.log("Function Call");
}

//Q No 4 Difference between var and let scope

// var is a function scope and let is a block scope

//Q No 5 Why we don't change value in const?

// Because it is created in ES6 2015 for the purpose of constant values or the api's that cannot change the developers will use for that purpose that why const don't change values

// Q No 6 Difference between premitive and non premitib=ve data types?
//Premitive Data Types: Stores single value and represents types of value like strings, numbers, bigInt, null, objects,symbol etc
//while Non premitive data types store ultiples types of data and use referece of data like numbers, objects, string everythings that we stores as a data. e.g objects, arrays and functions

//Q No 7: In javascript why the null value output is object?

//In javascript the null represents that the number is available in memory but not show at that time that's why it consider as an object.

//question Ni 8: When we use bigInt in js?

//When the number is greater that 2^53 - 1

//Question No 9: What is the difference between null and undefined?

//Null means the value is available but not show at that time but undefined mean the value is not assigned.

//Question No 11: DIfference between == and ===? Write an example.

//== shows represents only value e.g

console.log("6" == 6);

//=== compare both data type and value.
console.log("6" === 6);

//Q No 12: Difference between logical && and OR ||? Give an examples

// In Logical && both condition will be true then the condition will true else false following example

if (6 == 6 && 7 == 7) {
  console.log("The condition is true");
}
//In logical OR || wants only one condition is true then the condition is true. Following an example.

if (6 == 6 || 6 != 6) {
  console.log("The expression is true");
}

//Question No 13: If z = 5 and e = 10 then what will be the result of expression (z == 5 || e == 7)? Explain also.

//The answer will be true because of one condition is true and when the one condition is true 1 + 0 = 1

let z = 5;
let e = 10;
if (z == 5 || e == 7) {
  console.log("The answer is true");
}

//Question No 14: What is ternary operator? Write a program on ternary operator.
//Ternary Operator is the part of conditional statements when we need only one if else case.
let age = 18;

const age1 = age >= 18 ? "Adult" : "You are Younger";
console.log(age1);

//Question No 15: Write 3 types of loops names in Javascript And also write one example

//for loop, while loop, do while loop e.g

for (i = 0; i <= 5; i++) {
  console.log(i);
}

//Question No 16: Wirte an array [10, 20, 30, 40] and write down the program of sum.

let arr = [10, 20, 30, 40];
let totalSum = 0;

// forEach direct array ke elements ko access karta hai
arr.forEach((element) => {
  totalSum += element;
});

console.log("Total Sum (forEach):", totalSum); // Output: 100

//Question No 17 Difference between function expression and arrow function Give example?

//When we create a function and give it to variable that is function expression

const fun = function sum() {
  console.log("This is function");
};

fun();

// Arrow Function (Single Parameter)
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Asad"); // Output: Hello, Asad!
