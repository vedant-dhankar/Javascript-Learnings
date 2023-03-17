let p = fetch('https://jsonplaceholder.typicode.com/todos/')
p.then((value1)=> {
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => console.log(data));


  