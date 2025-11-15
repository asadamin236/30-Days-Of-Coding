const appData = {
  users: [
    {
      id: 1,
      name: "Asad",
      age: 24,
      isActive: false,
      orders: [
        { product: "Laptop", price: 120000 },
        { product: "Mouse", price: 1500 },
      ],
      address: {
        city: "Karachi",
        area: "DHA",
        phone: ["03001234567", "03111223344"],
      },
    },
    {
      id: 2,
      name: "Ali",
      age: 20,
      isActive: true,
      orders: [
        { product: "Shoes", price: 4500 },
        { product: "Watch", price: 8000 },
      ],
      address: {
        city: "Lahore",
        area: "Gulberg",
        phone: ["03009998877"],
      },
    },
  ],

  products: [
    { id: 10, name: "Keyboard", price: 2500, stock: 7 },
    { id: 11, name: "Headphones", price: 6000, stock: 3 },
    { id: 12, name: "Coffee Mug", price: 500, stock: 10 },
  ],

  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
};

// Q No 1: Extract “Asad’s” 1st phone number
const contactData = appData.users[0];
console.log(contactData.address.phone[0]);

//Q No 2: Extract Ali’s city using destructuring
const { city } = appData.users[1].address;
console.log(city);

// Q No 3 Add a new order in Asad’s order array

appData.users[0].orders.push({ product: "Keyboard", price: 2500 });
console.log(appData.users[0].orders);

//Q No 4 Filter all active users

const filterData = appData.users;
let filterUsers = filterData.filter(function (element) {
  return element.isActive === true;
});
console.log(filterUsers);

//Q No 5 Find total money spent by user Asad
const asadOrders = appData.users[0].orders;
const totalMoneyAsad = asadOrders.reduce((sum, item) => sum + item.price, 0);
console.log(totalMoneyAsad);

//Q No 6 Find all users older than 21
const allUserMax = appData.users;
const allUsers = allUserMax.filter(function (element) {
  return element.age > 21;
});
console.log(allUsers);

//Q No 7 Add a new product to the products array

const newProduct = appData.products.push({
  id: 13,
  name: "Bat",
  price: 1000,
  stock: 20,
});
console.log(appData);

//Q No 8 Increase stock of “Coffee Mug” by 5

const cofeeMugStock = appData.products.find(
  (product) => product.name === "Coffee Mug"
);

if (cofeeMugStock) {
  cofeeMugStock.stock = cofeeMugStock.stock + 5;
  console.log(`The new stock quantity is ${cofeeMugStock.stock}`);
} else {
  console.log("There is an error");
}
console.log(appData.products);

// Q No 9 Delete product with id 11
const productToDelete = 11;

appData.products = appData.products.filter(
  (product) => product.id !== productToDelete
);
console.log(`The product ${productToDelete} has been deleted`);
console.log(appData.products);

// Q No 10 Create a function that returns user by ID
function getDataById(id) {
  return appData.users.find((user) => user.id === id);
}

const data = getDataById(1);
console.log(data);

// Q No 11 Create a closure function:
let button = document.getElementById("btn-count");
let h1 = document.getElementById("h1");

function createCounter() {
  let count = 0;
  return function () {
    count++;
    if (h1) {
      h1.innerHTML = count;
    }
    // console.log(`The count is ${count}`);
  };
}

let buttonCount = createCounter();

if (button) {
  button.addEventListener("click", buttonCount);
}

//Q No 12 Demonstrate hoisting with var, let, const
//first var

console.log(a);
var a = 10;
//Here is temporal dead zone because of we get value before initialization that's why it shows us reference error this was invented in ecma script 2015 because in var that is problem it don't show us error in hoisting.And when program comes to this line the development is stop here because of synchronous operation
// console.log(b);
// let b = 10;
//Here is also that problem
// console.log(c);
// const c = 10;

//Stack is use in the premitive data types when we store 10 in the dataStack variable and next time we change the value of dataStack it is use as a copy but not change original data only create copy e.g
let dataStack = 10;
console.log(dataStack); //It always shows original data
dataStack = 20;
console.log(dataStack); //It shows us the copy heap data 20
//But in the heap use for object arrays and functions non premitive data but when we change in this it is like stack data and it change original data also like following

let arr = [1, 2, 3, 5];
console.log(arr); //The answer is [1, 2, 3, 4]
arr[3] = 4;
let obj = {
  name: "Asad",
  age: 28,
};
console.log(obj);
obj.age = 26;
console.log(obj); //here is change original obj because of heap..

//Q No 14 Create function: addProduct(productObj)

function addProduct(productObj) {
  appData.products.push(productObj);
  return appData.products.length;
}
let addNewProduct = { id: 11, name: "Headphones", price: 6000, stock: 3 };

addProduct(addNewProduct);

//Q No 15 Create function: updateUserName(id, newName)

function updateUserName(id, newName) {
  const user = appData.users.find((user) => user.id === id);

  if (!user) {
    return `The user with id ${id} does not exist`;
  }

  user.name = newName;
  return user;
}

updateUserName(2, "Aslam");

// Q No 16 Create function: getTotalOrdersCount()

function getTotalOrders() {
  return appData.users.reduce((sum, item) => {
    return sum + item.orders.length;
  }, 0);
}

console.log(getTotalOrders());

//Q No 17 Create function: getPhonesOfAllUsers()
function getPhonesOfAllUsers() {
  getPhoneNoUser1 = appData.users[0].address.phone;
  getPhoneNoUser2 = appData.users[1].address.phone;
  return console.log(getPhoneNoUser1, getPhoneNoUser2);
}
getPhonesOfAllUsers();

//Q No 18 Convert whole appData to JSON string and back

const jsonString = JSON.stringify(appData);
const josnObject = JSON.parse(jsonString);
console.log(josnObject);
