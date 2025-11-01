-> Variables: 
Variables is like a contaner that store a values.

-> var, let, const
-> var is function scope and will re-declare and re-assign.
-> let is a scope variable, not re-declare and re-assign available.
-> const is a scope variable and not re-assign and not re-declare.

re-declare means:
let a = 5
let a = 6
re-assign means:
let a = 6
a = 7

Temporal Dead Zone:
When the value is available but before initialization we want to console like the following example:

{
  console.log(a);
  let a = 6
  console.log(a)
}

TDZ is available only in let and const not in var in var we hoisted it.

Hoisting in javascript is when we call function definition before creation like the following example:

sum();

function sum() {
  let a = 6;
  let b = 7;
  console.log(a + b);
}

