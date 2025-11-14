function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(2, 3);

function abc(num1, num2) {
  return num1 + num2;
}
let result = abc(20, 30);
console.log(result);

function loginUserName(userName) {
  if (userName === undefined){
    console.log("Please Enter A Username");
    return
  }
  return `${userName} is logged in`;
}
//If we not pass the argument from function definition then by default it's answer is undefined like the following
//Empty argument means the function executed 
console.log(loginUserName(""));

console.log(loginUserName());

function loginUserName1(userName) {
  if (!userName){
    console.log("Please Enter A Username");
    return
  }
  return `${userName} is logged in`;
}

console.log(loginUserName1("ALi"));
