//Q1: Variable & Scope Bug
function test() {
  //We can't display a before initialization it throw reference error and this is created in the es-6 2015 because of TDZ.
  // console.log(a);
  let a = 10;
  console.log(a);
}
test();

//Q2: Loop Bug this is because of ; by default it means the sentence is ended and we don't need to end line in for loop before starting the execution block..
for (
  let i = 0;
  i <= 5;
  i++ //;
) {
  console.log("Number:", i);
}

//Q3: Function Return Bug

function add(a, b) {
  // console.log(a+b)
  return a + b;
}
let result = add(5, 10);
console.log("Sum is:", result);

//Q4: Array Push Bug
let arr = [1, 2, 3];
// arr.push = 4;
arr.push(4);
console.log(arr);

//Q5: Object Property Bug
const user = {
  name: "Asad",
  age: 25,
};
const addressValue = user["address"] || "Field Not Available";
console.log(user["name"]);
// console.log(user["address"]);
console.log(addressValue);

//Q6: Equality Confusion
//fix this for the Equal answer
// for the equal answer we need to change === to ==

if ("5" == 5) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

//Q7: setTimeout Scope Bug
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//Q8: Undefined Function Error
//this error is because of that we don't use hoisting in the function expression and arrow function that's why the program return refference error
// greet("Asad");

const greet = function (name) {
  console.log("Hello", name);
};

greet("Asad");

//Q9: Array Filter Bug
//Expected: only filtered numbers printed. Why original array logs instead? Fix it to log the result. because we store the new data in the results
//bug fixed
let nums = [10, 15, 20, 25];
let results = nums.filter((num) => num > 15);
// console.log(nums);
console.log(results);

//Q10: Logical Error in If Statement
//this is because we end the ; after condition when we comment ;then the results will be fixed
let score = 80;
if (score > 90) //;
{
  console.log("Excellent");
}
