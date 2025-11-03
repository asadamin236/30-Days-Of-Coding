-> What is loops In javascript?
-> We use loops to perform repeated actions for example when we want to print numbers fro 1 to 100 or 1000 it will very difficult for programmers to write manually that's why javascript automate that task by the using of loops.
-> Types of loops

1. For Loop: The standard loop used when you know exactly how many times the loop should run (e.g., iterating through all elements of an array based on its length).
   Use Case: Accessing arrays values along with their index. e.g
   // Example: Iterating through an array using the index
   let numbers = [10, 20, 30];
   for (let i = 0; i < numbers.length; i++) {
   console.log(`Value at Index ${i}: ${numbers[i]}`);
   }
2. for in loop: This loop is designed to iterate over enumerable properties(keys) and values of an object e.g:
   // Example: Printing object keys and values
   let user = { name: "Ali", age: 30 };
   for (let prop in user) {
   console.log(`${prop}: ${user[prop]}`); // 'prop' is the key (name, age)
   }
3. for of loop: This loop iterates directly over the values of an iterable object (like Arrays, Strings, Maps, Sets).It is cleaner than for loop when you don't need the index. e.g:
   // Example: Accessing array values directly
   let colors = ["red", "green", "blue"];
   for (let item of colors) {
   console.log(item); // 'item' is the value (red, green, blue)
   }
4. while loop: A while loop executes a block of code as long as the specified condition is true. The condition is checked before code runs even once. e.g:

   // Example: Counting up to 5
   let i = 0;
   while (i < 5) {
   console.log(`Count: ${i}`);
   i++;
   }

5. do while loop: Similar to while loop but in do while loop the code executes once even if the condition is false. Because in this loop the condition is check after code execution block. e.g:
   // Example: Runs once even if j is already 10
   let j = 10;
   do {
   console.log(`Value: ${j}`);
   j++;
   } while (j < 5);
   // Output: Value: 10

   -> CLosure:
   Closure is the method of when we create function and return another function inside parent function use the parent function data in return function that is called closure.
   e.g:
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

-> Arrays Methods:
1) map
2) filter
3) foreEach

