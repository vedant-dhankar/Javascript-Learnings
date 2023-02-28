//1 : add decmber at the end of array
//2: what is the return value of splice method?
//3: update march to march (upadte)?
//delete june from array?
{{
const months = ["jan", 'March','april','june','july'];


//splice()
//add or remove elements from an array

//sol1
const newMonths =  months.splice(5,0,'dec');
console.log(months);

//sol2
console.log(newMonths);

//sol3

const updateMonth = months.splice(1,1,'march')
console.log(months);

//sol4 
const newMonth = months.splice(3,1)
console.log(months);
}


//
let myEx = ["prashansa", "keya", "sanvi", "angel"]

let indexOfmyEx = myEx.indexOf("keya");
if(indexOfmyEx !=  -1 )
{
     const fullex = myEx.splice(indexOfmyEx,1,'keya nagpal')
    console.log(myEx)
} 
else  
{
    console.log('no such data found');
}
}



//find the square root of eacg element in an array

let arr = [2,6,4,6];

for( let i = 0; i<arr.length; i++)

console.log(arr[i]**2);



//multiply each element by 2 and return only those 
//elements which are greater then 10

let array = [2,3,4,56,5]

for(let i = 0;i<array.length;i++)
   if ( array[i]*2 >= 10){
       console.log(array[i]*2);
}


