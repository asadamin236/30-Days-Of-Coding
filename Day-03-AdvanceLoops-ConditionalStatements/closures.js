//What is closures
function sum(){
  let a = 10
  let b = 12
  return function(){
    console.log(a+b);
    
  }
}

let ans = sum()
ans()
