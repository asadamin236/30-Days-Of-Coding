const arrayData = [
  {productName: "iPhone 15", price: 999, category: "Electronics", inStock: true},
  {productName: "Nike Air Max", price: 120, category: "Footwear", inStock: false},
  {productName: "MacBook Pro", price: 1999, category: "Electronics", inStock: true},
  {productName: "Coffee Mug", price: 15, category: "Home", inStock: true},
  {productName: "Wireless Headphones", price: 199, category: "Electronics", inStock: true}
]

let newArrayData = arrayData.map(function(element){
  return element
})
console.log(newArrayData);

let newArrayFilter = arrayData.filter(function(element){
  return element.inStock === true
})
console.log(newArrayFilter);

let sumOfPrice = newArrayFilter.reduce((sum, item)=> sum + item.price, 0)

console.log(sumOfPrice);



