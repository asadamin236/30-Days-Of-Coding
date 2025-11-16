const users = {
  name: "Asad Amin",
  age: 30,

  welcomeMessage: function () {
    console.log(`${this.name}, Welcome to website`);
    console.log(this);
  },
};
users.welcomeMessage();
users.name = "Aqib";
users.welcomeMessage();

const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());
console.log(this);
function abc() {
  console.log(this);
}
abc();

//In function the answer of this keyword is undefined
function sum() {
  let a = 10;
  console.log(`The value is ${this.a}`);
}

sum();
//explicit way of display arrow function
// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2
// };
//Implicit way of display arrow function
const addTwoNumbers = (num1, num2) => num1 + num2
console.log(addTwoNumbers(4, 3));

const objectFunc = () => ({name: "Asad Amin"})
console.log(objectFunc());
(function apiCall(){
  let PORT = 3000
  console.log(`Database conncected at ${PORT}`);
})()

// const objData = {
//   name: "Asad Amin",
//   age: 26,
//   const contact = ()=>{
//     return console.log(this.name);    
//   }
// }

const name = (function(name){
  console.log(`My name is ${name}`);
  return name
})("Asad Amin")
// console.log(name);
 //Arrow function

 const name1 = ((name, lastName)=> {
  console.log(`My name is ${name} ${lastName}`);
  return name
 })("Asad", "Amin")

 const sum1 = ((a, b, op)=>{
  if (op === "+"){
    console.log(a+b);
  }else if (op === "-"){
    console.log(a-b);
  }else if(op === "*"){
    console.log(a*b)
  }else if(op === "/"){
    console.log(a/b);
  }else{
    console.log("Invalid Input");
  }
 })(9, 3, "*");

 (()=>{
  console.log(`Database Connected Successfully`);
 })()