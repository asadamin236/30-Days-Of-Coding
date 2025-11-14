const arrayData = [
  {
    productName: "iPhone 15",
    price: 999,
    category: "Electronics",
    inStock: true,
  },
  {
    productName: "Nike Air Max",
    price: 120,
    category: "Footwear",
    inStock: false,
  },
  {
    productName: "MacBook Pro",
    price: 1999,
    category: "Electronics",
    inStock: true,
  },
  { productName: "Coffee Mug", price: 15, category: "Home", inStock: true },
  {
    productName: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    inStock: true,
  },
];

const { productName } = arrayData[2];
console.log(productName);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Example: sirf names ka array
    const names = data.map((user) => user.name);
    console.log(names);
    const username = data.map((user) => user.username);
    console.log(username);
  });

//Q No 1 Create an object and extract name using function
const objectData = {
  name: "Asad Amin",
  age: 26,
  email: "asad@example.com",
  isAdmin: "Yes",
};
user();
function user() {
  console.log(`The userName is ${objectData.name}`);
}

//Question No 2 Update the objects values

const products = {
  name: "Mobile",
  price: 27000,
};
products.name = "Laptop";
products.price = 50000;
console.log(products);

//Q No 3 FInd Total marks from nested objects
const student = {
  name: "Ali",
  marks: {
    physics: 76,
    maths: 90,
    english: 72,
  },
};

const sumMarks = Object.values(student.marks).reduce(
  (sum, val) => sum + val,
  0
);
console.log(sumMarks);

//Question No 4 Display users by age greater than 22
const users = [
  { name: "Asad", age: 24 },
  { name: "Sami", age: 30 },
  { name: "Ahmed", age: 20 },
];

const userAge = users.filter(function (element) {
  return element.age > 22;
});
console.log(userAge);

//Q No 5 Write a function that get input key and show it's values dynamically

const person = {
  name: "Asif",
  age: 30,
  country: "Pakistan",
};

function getData() {
  console.log(`Show Values ${person.name}, ${person.age}, ${person.country}`);
}
getData();

//Q No 6 Object Destructuring
const car = {
  model: "Civic",
  color: "Black",
  price: 3500000,
};

// const { model, color, price } = car;
// console.log(model, color, price);

//Q No 7 Nested Destructuring Please destructure salary and city
const employee = {
  name: "Usman",
  details: {
    salary: 50000,
    city: "Lahore"
  }
};

const {salary, city} = employee.details
console.log(salary, city);

//Q No 8 From default destructure brand and ram and return ssd: "512GB"

const laptop = {
  brand: "Dell",
  ram: "16GB"
}
const {brand, ram} = laptop
console.log(brand, laptop);
laptop.ssd = "512GB"
console.log(laptop);

//Q No 9 Destructure 2nd Order price
const orders = [
  { id: 1, price: 200 },
  { id: 2, price: 300 },
  { id: 3, price: 400 }
];

let {price} = orders[1]
console.log(price);

//Q No 10 Function Parameter destructuring

const product = {
  title: "Keyboard",
  price: 1500,
};

function getProducts(){
  console.log(`The product is ${product.title} and price is  ${product.price}`);
}
getProducts()
//Q No 11 Convert json string to object
const jsonData = '{"name":"Asad","age":24}';
let data = JSON.parse(jsonData)
console.log(data);
