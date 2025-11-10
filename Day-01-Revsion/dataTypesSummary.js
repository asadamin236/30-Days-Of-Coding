//Premitive Data Types

// 7 Categories of Premitive Data Types In Javascript
// Number, String, Boolean, Stmbol, Bigint, Null, Undefined
let score = 100;
const scoreValue = 100.5;
const isLoggedIn = true;
let outsideTemp = null;
let isEmail;
let bigNumber = 12999n;

console.log([score, scoreValue, isLoggedIn, outsideTemp, isEmail, bigNumber]);

const id = Symbol("id");
const login = Symbol("id");

console.log(id === login);

//Reference or Non Premotive Data Types.
//Arrays, Objects, Functions

const students = ["test1", "test2", "test3", "test4", "test5", "test6"];
const studentObj = {
  name: "test1",
  email: "test1@gmail.com",
  isStudent: "Yes",
  contact: "031000000",
  students,
};
console.log(
  students,
  studentObj.name,
  studentObj.email,
  studentObj.isStudent,
  studentObj.contact
);
console.log(typeof students);

function abc(name) {
  console.log(`Hello ${name}`);
}
abc("Asad Amin");

// Memory In javascript Heap and Stack
//Stack Memory use in premitive and Heap is use in The Non Premitive.

//When we talk about Stack Memory in the premitive it's change values over time that's why it use stack boxes like places in the memory. e.g

let myName = "Asad";
let myLastName = " Amin";
// console.log(fullName);
myName = "Adnan";
myLastName = " Ali";
let fullName = myName + myLastName;

console.log(fullName);

//Check for Heap in non premitive data types


let userObj = {
  name: "Test1",
  email: "Test1@gmail.com",
  contact: "0320000000"
}

let userObj1 = userObj
userObj1.email = "test2@gmail.com"

console.log(userObj.email);
console.log(userObj1.email);


