function calculateCart(num1){
  return num1
}
console.log(calculateCart(200, 300, 400));

//Rest operators when we pass more than one orguments and one parameter then it handle all the data and return in the single array
function addCalculateCart(...num1){
  return num1
}
console.log(addCalculateCart(200, 300, 400));

//spread operator 

function addToCart(val1, val2, ...num1){
  return num1
}
console.log(addToCart(2, 3, 5, 7));

const users = {
  name: "Bat",
  prices: 3000
}

function handleObject(anyObject){
  console.log(`The product is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(users)

handleObject({
  name: "Sam",
  price: 500
})

//Access the 2nd value from array using function 
const arrayValues = [1, 4, 5, 6, 8]

function returnSecondValue (getValue){
  return getValue[1]
}
console.log(returnSecondValue(arrayValues));
