//for loop in javascript
for (let index = 0; index <= 10; index++) {
  const element = index;
  console.log(element);
}

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(`The table of ${i}`);
//   for (let j = 0; j <= 16; j++) {
//     const element = j;
//     console.log(i + "*" + j + "=" + i*j);

//   }
// }

// let myArray = ["bat", "ball", "laptop", "mobile"];
// let myArray2 = []
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   myArray2.push(element)
// }
// console.log(myArray2);

let myArray = [1, 2, 3, 4];
let myArray1 = ["bat", "ball", "laptop", "mobile"];

let myObject = {};

for (let i = 0; i < myArray.length; i++) {
  myObject[myArray[i]] = myArray1[i];
}
console.log(myObject);

for (let index = 1; index <= 20; index++) {
  if (index == 5){
    console.log(`Favourite number ${index} deteted`);
    break
  }
  const element = [index];
  console.log(`The number is ${index}`);
}

for (let index = 0; index <= 20; index++) {
  if(index == 5){
    console.log(`The ${index} is detected`);
    continue
  }
  const element = [index];
  console.log(`The favourite ${index} is print`);
}