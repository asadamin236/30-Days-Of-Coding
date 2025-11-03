let random = Math.random();

let a = prompt("Please Enter First Number");
let c = prompt("Please Enter Operators");
let b = prompt("Please Enter Second Number");

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

if (random > 0.1) {
  // The Right Results
  console.log(`The Number is: ${a} ${c} ${b}`);
  alert(`The Number Is: ${eval(`${a} ${c} ${b}`)}`);
} else {
  //The Wrong Answers
  alert(`The Number Is: ${eval(`${a} ${c} ${b}`)}`);
}
