//let var const

var a = 7;
var b = 11;
var c = true;
console.log(a + b + c);

//var is function scope that's why outside the function global var like a=7 run.
function testVar() {
  if (true) {
    var a = 10; // function scope
  }
  console.log(a); // works because var is function-scoped
}
testVar();
console.log(a);

function testLet() {
  if (true) {
    let a = 20; // block scope
    console.log("Inside block:", a); //if we out this line from this block then run global var a=7 because this is block scope and run only inside this block
  }
  // console.log(a); ReferenceError: a is not defined
}

testLet();
console.log(a);

function testConst() {
  if (true) {
    const z = 30;
    console.log("Inside block:", z);
  }
  let z = 10;
  console.log(z);

  // console.log(z); ReferenceError: z is not defined
}
testConst();

{
  //Error because of not defined first so this is hoisted
  // console.log(y);
  const y = 25;
  console.log(y);
}

let user = "Asad";

function showUser() {
  let user = "Amin"; // shadows outer variable
  console.log("Inner:", user);
}
showUser();
console.log("Outer:", user);

let theme = "dark";

function setTheme(theme) {
  // same name, local shadows global
  console.log("Selected:", theme);
}
setTheme("light");

sayHi(); // Works
function sayHi() {
  console.log("Hello Asad!");
}

function totalPrice() {
  if (true) {
    var price = 100; // function scoped
  }
  console.log(price); // 100
}
totalPrice();

sum();

function sum() {
  let a = 6;
  let b = 7;
  console.log(a + b);
}

console.log(typeof a);

var a = 10
console.log(a);
