const accountId = 12345
console.log(accountId);
//Not allowed because of re assign assignment to const variable
// accountId = 6666
//temporal dead zone
// console.log(accountPassword);
let accountCity = "Peshawar"

let accountPassword = 1223344
console.log(accountPassword);
console.log(accountCity);
//don't use var in js because of block scope and function scope.
accountPassword = "sjhasjhas"
console.log(accountPassword);
console.log({accountId, accountPassword, accountCity});


