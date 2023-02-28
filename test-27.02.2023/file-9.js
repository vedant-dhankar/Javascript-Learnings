// prints eiments of Array
//print even elements
//printy 2 arrays from same as seprated even or odd


let arr = [123241,53,21,5,436,36,4257,75];

// Using spread operator
console.log(...arr );

// Using normal for loop
for (let i = 0 ; i < arr.length ; i++){
     console.log(arr[i]);
 }

// Using For Each

arr.forEach((element, index, array) => {
    console.log(element);
})

let newArr = arr.map((currentElem,index,arr)=> {
      return currentElem;
} )
console.log(newArr.toString());

for (let item of arr){
    console.log(item);
}

res = {
    even: [],
    odd: []
}