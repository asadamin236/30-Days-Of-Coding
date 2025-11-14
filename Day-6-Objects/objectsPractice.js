const data = Symbol("Data");
const objData = {
  name: "Asad Amin",
  [data]: Symbol("Data"),
  age: 24,
  contact: "031000000",
  isLogined: false,
};
console.log(objData);

//Update data in the objects..
console.log(objData[data]);  // Works
console.log(typeof objData[data]); // "symbol"
//When we freeze object then we cannot change it's data and not show any error but don't change..
// Object.freeze(objData);
//Not apply change because of using freeze..
// objData.isLogined = true;
// console.log(objData);

const obj = {
  property1: "value1", // property name may be an identifier
  2: "value2", // or a number
  "property n": "value3", // or a string
};

console.log(obj);

objData.greeting = function(){
  console.log("Hello Javacript");
}

objData.greetingTwo = function(){
  console.log(`Hello Javascript ${this.name}`);
}

console.log(objData.greeting());

console.log(objData.greetingTwo());


