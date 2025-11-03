console.log("This is practice of loops");

a = 1;
for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "Asad Amin",
  role: "Mern Stack",
  Company: "Freelancer",
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}

for (const element of "Asad Amin") {
  console.log(element);
}
// Example: Iterating through an array using the index
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Value at Index ${i}: ${numbers[i]}`);
}

// Example: Printing object keys and values
let user = { name: "Ali", age: 30 };
for (let prop in user) {
  console.log(`${prop}: ${user[prop]}`); // 'prop' is the key (name, age)
}

// Example: Accessing array values directly
let colors = ["red", "green", "blue"];
for (let item of colors) {
  console.log(item); // 'item' is the value (red, green, blue)
}

// Example: Counting up to 5
let i = 0;
while (i < 5) {
  console.log(`Count: ${i}`);
  i++;
}

// Example: Runs once even if j is already 10
let j = 0;
do {
  console.log(`Value: ${j}`);
  j++;
} while (j <= 5);
// Output: Value: 10

//Question No 1: Write a program to print the marks of students in an object using for loop

marks = {
  Asad: 70,
  Ali: 80,
  Adnan: 75,
  Khalid: 90,
};

for (const key in marks) {
  const element = marks[key];
  console.log(`The marks for ${key} is ${element}`);
}

//Question No 2 Write for loop to reverce these arrays values let colors = ["Red", "Green", "Blue", "Yellow"];

let color = ["Red", "Green", "Blue", "Yellow"];

for (let i = color.length - 1; i >= 0; i--) {
  console.log(color[i]);
}

//Question No 3: Print 1 to 20 even numbers using for loop.

for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`The ${i} is even`);
  }
}

//Question No 4: Create an object like let student = {name: "Ali", id: 101, course: "MERN"}; and display key values using for in loop.

let student = { name: "Ali", id: 101, course: "MERN" };

for (const key in student) {
  const element = student[key];
  console.log(`${key}: ${element}`);
}

//Question No 5: Calculate the price of every item let items = {apple: 2, banana: 4, orange: 1}; The price is 10. Calculate total price.

let items = { apple: 2, banana: 4, orange: 1 };
let price = 10;
let totalQuantity = 0;

// Calculate the total quantity
for (const key in items) {
  totalQuantity += items[key];
}

// Calculate the total price
let totalPrice = totalQuantity * price;

console.log(`Total Quantity: ${totalQuantity}`); // Output: Total Quantity: 7
console.log(`Total Price: ${totalPrice}`); // Output: Total Price: 70

//Question No 6: Sum all the array elements with each other let arr = [10, 20, 40, 50]

arr = [10, 20, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  console.log(`The sum is: ${sum}`);
}

//Question No 7: Use for of loop to print every element in separate line myString = "Asad Amin".
myString = "Asad Amin";

for (const element of myString) {
  console.log(element);
}

//Question No 8: FInd out lasgest number in this array let numbers = [55, 12, 88, 33, 91, 10];

let Numbers = [55, 12, 88, 33, 91, 10];
let largest = Numbers[0];

for (const number of Numbers) {
  if (number > largest) {
    largest = number;
  }
}

console.log(`The largest number is: ${largest}`);

//Functions Block

function abc(name) {
  console.log("Hey " + name + " You are very good");
  console.log("Hey " + name + " Your work is very good");
  console.log("Hey " + name + " Your course is very good");
}

abc("Amir");

function xyz(a, b, op) {
  if (op === "+") {
    console.log(a + b);
  } else if (op === "-") {
    console.log(a - b);
  } else if (op === "/") {
    console.log(a / b);
  } else if (op === "*") {
    console.log(a * b);
  } else {
    console.log("SomeThing Go Wrong");
  }
}

xyz(6, 4, "+");
xyz(8, 4, "/");

function calculator(a, b, op) {
  switch (op) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;

    default:
      console.log("Invalid Operator");
      break;
  }
}

calculator(6, 4, "*")
