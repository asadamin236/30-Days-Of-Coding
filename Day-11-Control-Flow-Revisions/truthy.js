let userEmail = "asad@google.com"

if (userEmail){
  console.log("Got user email");
}else{
  console.log("Don't take user email");
}

let name = []  //truthy value
if (name){
  console.log("Got name");
}else{
  console.log("Don't take name");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}, 
if (name.length === 0) {
  console.log("The name array is an empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("The object is an empty");
}

console.log(false == 0);
console.log(false == "");
console.log(0 == "");

// Nulish Coalescing Operator (??) null undefined
let val1;
// val1 = 6 ?? 10

val1 = null ?? 10
console.log(val1);

