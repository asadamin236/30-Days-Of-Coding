const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const myTotal = numbers.reduce(function(acc, currVal){
  console.log(`Acc Value: ${acc} and currVal: ${currVal}`);
  return acc + currVal
}, 0)
console.log(myTotal);

let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    price: 1200,
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    genre: "Finance",
    price: 1500,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self Help",
    price: 1800,
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    genre: "Productivity",
    price: 1600,
  },
  {
    id: 5,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genre: "Programming",
    price: 2500,
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999,
    genre: "Programming",
    price: 2700,
  },
  {
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    genre: "Finance",
    price: 1400,
  },
  {
    id: 8,
    title: "Start With Why",
    author: "Simon Sinek",
    year: 2009,
    genre: "Business",
    price: 1300,
  },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    price: 2000,
  },
  {
    id: 10,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    year: 1989,

    genre: "Self Help",
    price: 1700,
  },
];

let myTotalPrice = books.reduce((sum, item)=> sum + item.price, 0)
console.log(myTotalPrice);

