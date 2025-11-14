//SingleTon Objects
const tinderObjects = new Object();
console.log(tinderObjects);

tinderObjects.name = "Asad Amin";
tinderObjects.age = 23;
tinderObjects.address = "Peshawar";
console.log(tinderObjects);

const obj1 = {
  email: "admin@example.com",
  fullName: {
    firstName: "Asad",
    lastName: "Amin",
  },
};

console.log(obj1.email, obj1.fullName);

const obj2 = { 1: "a", 2: "b" };
const obj3 = { 3: "c", 4: "d" };
const obj4 = { obj2, obj3 };
const obj5 = Object.assign({}, obj2, obj3);
console.log(obj4);
console.log(obj5);

const obj6 = { ...obj2, ...obj3 };
console.log(obj6);

console.log(Object.keys(tinderObjects));
console.log(Object.values(tinderObjects));

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

console.log(Object.entries(arrayData[1].productName));


console.log(arrayData[1].productName);
