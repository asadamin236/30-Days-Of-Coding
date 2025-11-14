const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(myArray);

//Array Methods
//Add one element in the start
myArray.push(9);
console.log(myArray);
//Remove one element from start
myArray.pop();
console.log(myArray);
//Add one element in the start
myArray.unshift(0);
console.log(myArray);
//use for remove one element from start
myArray.shift();
console.log(myArray);
//inclues method
console.log(myArray.includes(9));

//convert array to string
let newArray = myArray.join();
console.log(newArray);
console.log(typeof newArray);

//Slice or aplice

const arr = [
  { itemName: "Footeball", category: "Sports", price: 500 },
  { itemName: "BallPoint", category: "Stationary", price: 30 },
  { itemName: "Bat", category: "Sports", price: 1500 },
  { itemName: "Mobile RealMe Note50", category: "ELectronics", price: 20000 },
  { itemName: "Light", category: "ELectronics", price: 500 },
];
console.log(arr);

const newArr = arr.filter(function (elements) {
  return elements.price > 500;
});
console.log(newArr);

let newArr2 = arr.map(function (element) {
  return element;
});
console.log(newArr2);

//Sum of price of all products
let sumOfPrice = arr.reduce((sum, item) => sum + item.price, 0);
console.log(sumOfPrice);

//Average of price of all products
let averagePrice = arr.reduce((sum, item) => sum + item.price, 0) / arr.length;

console.log(averagePrice);

arr2 = [1, 2, 3, 4, 5];
let sum = 0;
arr2.forEach(function (element) {
  console.log((sum += element));
});

console.log(arr2);

//When the slice use when we don't need to extract data from original array and not change the original array..
let sliceArr = arr2.slice(1, 3);
console.log(sliceArr);
console.log(arr2);

//When we use splice when we need to change in the original array remove and update data.
let spliceArr = arr2.splice(1, 3);
console.log(spliceArr);
console.log(arr2);

const marvel_Heros = ["Thor", "Ironman", "Spiderman"];
const dc_Heros = ["Superman", "Flash", "Batman"];

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);

// let allHeros = marvel_Heros.concat(dc_Heros)
// console.log(allHeros);

//Spread and concat use for combine arrays data
const all_Heros = [...marvel_Heros, ...dc_Heros];
console.log(all_Heros);

//when we have nested arrays data and we want to combine them flat use for that

const numbers = [1, 2, 3, [4, 6, 7], 8, 0, 9];

const all_numbers = numbers.flat(Infinity);
console.log(all_numbers.sort());

console.log(Array.isArray("Asad Amin"));
console.log(Array.from("AsadAmin AmirKhan"));

//How to resolve this?
const obj = { name: "AsadAMin" };

// Step 1: get the value (string)
const nameString = Object.values(obj)[0]; // "AsadAMin"

// Step 2: convert string to array of characters
const nameArray = Array.from(nameString);

console.log(nameArray);
// Output: ["A","s","a","d","A","M","i","n"]

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));
