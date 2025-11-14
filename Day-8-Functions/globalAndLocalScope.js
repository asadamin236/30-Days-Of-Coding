var a = 20;

if (true) {
  let a = 10;
  const b = 30;
  var c = 40;
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
  const userName = "Asad Amin";

  function two() {
    const contact = "03100000";
    console.log(userName);
  }
  // console.log(contact);
  two();
}
one();

if (true) {
  const name = "Asad Amin";
  if (name === "Asad Amin") {
    const email = "asad@example.com";
    console.log(name + email);
  }
  console.log(name);
}
// console.log(email);

//function hoisting and expression hoisting

console.log(sum(6));

function sum(num) {
  return num + 2;
}
//Here is showing this error because we cannot hoisting the function expression before initialization of function expressions ReferenceError: Cannot access 'name' before initialization
// console.log(name("Asad Amin"));

const name = function (userName) {
  return `The user name is ${userName}`;
};

console.log(name("Asad Amin"));
