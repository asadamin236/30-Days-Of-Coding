//Numbers
let x = 250;
let y = 40.5;
console.log("Value of x=" + x);
console.log("Value of y=" + y);

//Strings
let str = "Hello All";
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);

//Undefined

let a;
console.log(typeof a); // Outputs: undefined

let b = true;
console.log(b); // Outputs: undefined

let c = null;

console.log(typeof c);

//BigInt
let bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum);
console.log(typeof bigNum);

//Symbol

let sym = Symbol("Hello");
console.log(typeof sym);
console.log(sym);

//Non Premitive data Like Objects, Arrays and functions
let arr = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Quetta"];
console.log(typeof arr);
console.log(arr[2]);
console.log(arr);
arr1 = [];
arr1.push(arr[2]);
console.log(arr1);
arr1.pop();
console.log(arr1);

let user = {
  // Key: Value
  name: "Asad Amin",
  age: 28,
  isStudent: false,
  arr,
  hobbies: ["coding", "reading", "gaming"], // Value can be an Array
  address: {
    // Value can be another Object
    city: "Karachi",
    country: "Pakistan",
  },
};

console.log(user);
console.log(typeof user); // Output: object
console.log("User's City:", user.address.city); // Accessing nested data
console.log(user.arr[2]);
console.log(user.address.city);
console.log(user.address.country);

function sum() {
  let a = 10;
  let b = 20;
  console.log(a + b);
}
console.log(typeof sum);

const obj = { name: "Asad" };
obj.name = "Amin"; // Allowed
console.log(obj.name);

//Operators in js

//In this the programm check both value and type of value that's why the answer is false
console.log("6" === 6); //"6" type is string and 6 type is number
//This is true because of same value because in this only the values match
console.log("6" == 6);

let z = 6;
let e = 7;

//In this program if only one condition is true the program will be run because in OR the operators need only on condition true. Because in OR the expression is plus like e.g 0 + 1 = 1
if (z == 5 || e == 7) {
  console.log("The expression is true");
}

//In this program need both expressions true because in AND we need two expression multiply e.g 1 * 1 =1 or True if one is false 0 * 1 = 0 flase
//Also called assignment and logical operators
if (z == 6 && e == 7) {
  console.log("The expression is true");
}

// Conditional Statements
let age = 18;

if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You Cannot Vote");
}

let mode = "dark";
let color;
if (mode == "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

//Find Even and Odd
let number = 15;

if (number % 2 === 0) {
  console.log(`The ${number} is even`);
} else {
  console.log(`The ${number} is odd`);
}

let age1 = 18;
if (age1 < 18) {
  console.log("You are Junior");
} else if (age1 >= 18 && age1 <= 40) {
  console.log("You are Middle");
} else {
  console.log("You are Senior");
}

let age2 = 18;
let newAge = age2 >= 18 ? "Adult" : "You are younger";

console.log(newAge);

//By the using of prompt you can take input from user
let num = prompt("Enter a number");

if (num % 5 === 0) {
  console.log(`The ${num} is multiple of 5`);
} else {
  console.log(`The ${num} is not multiple of 5`);
}

//Students Grades Project Using If else

let marks = prompt("Please Enter Your Marks");

if (marks >= 80) {
  console.log(`${marks} Grade A`);
} else if (marks >= 70 && marks < 80) {
  console.log(`${marks} Grade B`);
} else if (marks >= 60 && marks < 70) {
  console.log(`${marks} Grade C`);
} else if (marks >= 50 && marks < 60) {
  console.log(`${marks} Grade D`);
} else {
  console.log(`${marks} Fail Please Try Again`);
}

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

let email = "asadamin@gmail.com";

if (email.includes("@")) {
  console.log(`${email} is correct`);
} else {
  console.log("Please Enter a Valid Email");
}

let role = "admin";

if (role == "admin") {
  console.log("You are allowed to dashboard");
} else {
  console.log("Redirect to login");
}
