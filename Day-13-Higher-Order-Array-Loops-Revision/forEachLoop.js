const data = ["Javascript", "Java", "Python", "C++", "Ruby"]

data.forEach(element => {
  console.log(element);
  
});

const data1 = data[2]
const data2 = []
data2.push(data1)
console.log(data1);


data2.forEach(function(element){
  console.log(element[1]);
})
const myCoding = [
  {
    language: "Javascript",
    languageFileName: "js"
  },
  {
    language: "Python",
    languageFileName: "py"
  },
  {
    language: "C++",
    languageFileName: "cpp"
  }
]

myCoding.forEach((item)=>{
  console.log(item.language);
  console.log(item.languageFileName);
})

//here data not return 
// const values = myCoding.forEach(function(item){
//   console.log(item.language);
//   return item
// })

const values = myCoding.filter(function(item){
  return item.language.startsWith("J")
})

console.log(values);
