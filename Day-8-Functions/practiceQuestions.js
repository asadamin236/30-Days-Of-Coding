//Create a Product Inventory System
const products = [
  { id: 1, name: "Cricket Bat", price: 300, category: "Sports", stock: 20 },
  { id: 2, name: "Tennis Ball", price: 100, category: "Sports", stock: 10 },
  { id: 3, name: "Football", price: 600, category: "Sports", stock: 20 },
  {
    id: 4,
    name: "iPhone 15",
    price: 80000,
    category: "Electronics",
    stock: 5,
  },
  {
    id: 5,
    name: "Laptop",
    price: 120000,
    category: "Electronics",
    stock: 4,
  },
  {
    id: 6,
    name: "Wireless Headphones",
    price: 5000,
    category: "Electronics",
    stock: 2,
  },
  { id: 7, name: "Coffee Mug", price: 250, category: "Home", stock: 7 },
  { id: 8, name: "Table Lamp", price: 1500, category: "Home", stock: 2 },
  { id: 9, name: "Pillow", price: 800, category: "Home", stock: 3 },
  { id: 10, name: "T-Shirt", price: 1200, category: "Clothing", stock: 4 },
  { id: 11, name: "Jeans", price: 3500, category: "Clothing", stock: 3 },
  { id: 12, name: "Sneakers", price: 4500, category: "Footwear", stock: 2 },
  {
    id: 13,
    name: "Formal Shoes",
    price: 6000,
    category: "Footwear",
    stock: 3,
  },
  { id: 14, name: "Fiction Novel", price: 450, category: "Books", stock: 7 },
  {
    id: 15,
    name: "Programming Guide",
    price: 1800,
    category: "Books",
    stock: 3,
  },
];

//Q No 1 Filter products with price >= 500
let filterProducts = products.filter(function (element) {
  return element.price >= 500;
});
console.log(filterProducts);

//Q No 2 Calculate Total Inventory Value

const sumOfStock = products.reduce(
  (sum, item) => sum + item.stock * item.price,
  0
);
console.log(sumOfStock);

//Q No 3 Write function that update quantity and product in the addToCart function

function addToCart(productId, quantity) {
  return `Add ${productId} and ${quantity}`;
}

console.log(addToCart(1, 7));
//Q No 4 Remove Product From Cart

//Q No 5 Apply Discount Function
let discounPercent = 10;
const discount = products.map(function (element) {
  return element.price - (element.price * discounPercent) / 100;
});
console.log(discount);
