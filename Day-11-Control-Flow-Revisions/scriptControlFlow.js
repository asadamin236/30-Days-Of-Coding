// if statement
let a = true;

if (a) {
  console.log(`The user is login`);
}

if ("2" == 2) {
  console.log("The expression is true");
}

if ("2" !== 2) {
  console.log("The expression is true");
}

// if else
if ("2" === 2) {
  console.log("The expression is true");
} else {
  console.log("Th expression is false");
}

const score = 200;

if (score > 100) {
  let val = 20;
  console.log(`The value is: ${val}`);
}
//This line is not executed because of block scope thet's why here is reference error val is not defined 
// console.log(`The value is: ${val}`);
//implicit scope if statement

let balance = 1000
if (balance > 500) console.log("The balance is greater than 500");

let userLoggedIn = true
let debitCard = true

if(userLoggedIn && debitCard){
  console.log("User is allow to take course");
}
let googleAccount = true
let gmailAccount = false

if (googleAccount || gmailAccount){
  let user = "Asad Amin"
  console.log(`${user} loggedIn successfully`);
}

//ternury operator 
let temperature = 100
temperature <= 80 ? console.log(`The Temperature is less than 80`): console.log(`The temperature is greater than 80`);
;
