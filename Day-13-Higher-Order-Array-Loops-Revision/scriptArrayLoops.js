//for of loop

arr = [1, 2, 3, 4, 5]

for (const element of arr) {
  console.log(`Please run ${element}`);
}

const greeting = "Asad Amin"

for (const element of greeting) {
  console.log(`The words is ${element}`);
}

//maps 
const map = new Map()
map.set("Pak", "Pakistan")
map.set("Ind", "India")
map.set("Eng", "England")
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

//create object

const myObject = {
  name: "Asad Amin",
  email: "asad@test.com"
}
//here is not iterable error here we don't use forof loop
// for (const [key, value] of myObject) {
//   console.log(key, value);
  
// }

for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}
const data = ["Java", "Javascript", "Python", "Ruby"]

for (const key in data) {
  console.log(data[key]);
  
}