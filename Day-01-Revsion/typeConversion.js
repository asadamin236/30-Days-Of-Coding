let a = 102
let b = "102abc"
let c = Number(b)
let booleanValue = true
let convertValue = Number(booleanValue)
let number1 = 33
let string1 = String(number1)

//when we check typeof c it's a number but when we again console c then the answer is Nan because it has alphabets too.
console.log([typeof a, typeof b, typeof c, c, typeof convertValue, convertValue, typeof number1, typeof string1, number1, string1]);
