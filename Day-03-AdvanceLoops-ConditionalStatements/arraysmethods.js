const names = ["Asad", "Amir", "Ali", "Saqib"];

names.forEach(function (value) {
  console.log(value);
});
//Note Break and continue is not allowed in forEach loop
names.forEach(function (value) {
  if (value === "Asad") {
  } else {
    console.log(value);
  }
});

//Map method

let newArr = names.map(function (value) {
  return value + "Ji";
});

console.log(newArr);

let newArr1 = names.filter(function (value) {
  if (value.startsWith("A")) {
    return true;
  }
});

console.log(newArr1);

//Destructuring method

const user = {
  name: "test",
  contactNo: "031000000",
  address: {
    zipCode: "1234",
    isUser: "user",
  },
};
arr = [];
const { zipCode } = user.address;
console.log(zipCode);

//Spread and rest methods

const copyNames = [...names];
console.log(copyNames);

//rest operator
function abcd(a, b, c, ...main) {
  console.log(a, b, c, main);
}

abcd(1, 2, 3, 4, 5, 6);

const lastNames = ["Amin", "Khan", "Jaan", "Zaman"];

const copyArray = [...names, ...lastNames];
console.log(copyArray);

//Question Please filter the products by type "Electronics"
const products = [
  { name: "Laptops", type: "Electronics" },
  { name: "Phone", type: "Electronics" },
  { name: "Shirt", type: "CLothes" },
  { name: "Pants", type: "Clothes" },
  { name: "Shoes", type: "Footwear" },
];

const filterProducts = products.filter(function (value) {
  if (value.type == "Electronics") {
    return true;
  }
});

console.log(filterProducts);

//Mapping over an array of user data to create a list of user cards

let newProducts = products.map(function (value) {
  return `<div><h1>${value.name}</h1><h1>${value.type}</h1></div>`;
});

console.log(newProducts);

//Grouping an array of objects by a specific property (e.g grouping users by role)

const users = [
  { name: "test1", age: 26, role: "user" },
  { name: "test2", age: 30, role: "admin" },
  { name: "test3", age: 20, role: "admin" },
  { name: "test4", age: 35, role: "user" },
  { name: "test5", age: 50, role: "user" },
];

let obj = {};
let newUsers = users.forEach(function (user) {
  if (obj[user.role]) {
    obj[user.role].push(user);
  } else {
    obj[user.role] = [];
    obj[user.role].push(user);
  }
});

console.log(obj);

// Array of objects with id, name, and age
const people = [
  { id: 1, name: "Asad", age: 25 },
  { id: 2, name: "Amir", age: 30 },
  { id: 3, name: "Ali", age: 22 },
  { id: 4, name: "Saqib", age: 28 },
  { id: 5, name: "Sara", age: 24 },
];

//Removing or updating a specific object in an array of data based on unique id.

const updatePeopke = people.filter(function(user){
  return user.id !== 2
})

console.log(updatePeopke);

