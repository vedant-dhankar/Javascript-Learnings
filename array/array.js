/// ***Arrays in JavaScript***

// ***when we use var we can store only***
//  **one value at one time**
var friend1 = "moksh";
var friend2 = "rakshat";
var friend3 = "ishmeet";
// %___length_process___%
console.log(friend1, friend2, friend3);

//when we feel like storing multipe values in one variable
//isned of var we use array.

// in js we have array class, &
//arrays are the prototype of this class.

//example    ^^^0^^^    ^^1^^   ^^^2^^^
let array = ["dhankar", true, "chaudhary"];
for (let i = 0; i < array.length; i++)
      console.log(typeof (array[i]), "==>", (array[i]));


//what all are in array
// TRAVERSAL OF AN ARRAY
// SEARCHING AND FILTER IN AN ARRAY
//HOW TO SORT & COMPARE AN ARRAY
//HOW TO INSERT,ADD,REPLACE & DELETE ELEMENTS IN ARRAY
//MAP(),REDUCE(),FILTER()




//TRAVERSAL OF AN ARRAY
//NEVIGATE THROUGH AN ARRAY
//if we want to get the single dada at a time and also
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      console.log(myExes[myExes.length - 1]);//if we know to know the length of an array or want to consolelog last elemete
}


//if we want to pring all data
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      for (let index = 0; index < myExes.length; index++) {
            console.log(myExes[index]);
      }
}

//after es6 we have for in and for of loop to
//for in gives index number
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      for (let ELEMENTS in myExes) {
            console.log(ELEMENTS);
      }
}
//for of gives elements
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      for (let ELEMENTS of myExes) {
            console.log(ELEMENTS);
      }
}
//array.prototipe..(FOR EACH)
//calls a function for each element in array

let myExes = ["prashansa", "keya", "sanvi", "angel"];
myExes.forEach(function (element, index, array) {
      console.log(element + "index:" + index + " " + array);
});

//far arrow function
myExes.forEach((element, index, array) => {
      console.log(element + "index : " + index + " " + array);
})

//searching & filter in an array

//array.prototype.indexOf()
//returns the first (least) index of element within the arrat equal
//to an element , or -1 if non in found. 

//{
//let myExes = ["prashansa", "keya", "sanvi", "angel"];

//}


//create or delete or replace

//push()
// add elements to end array

{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      const count = myExes.push("nidhi", "pakhi")//can add multiple elements
      console.log(myExes);
      console.log(count);//returns new length

}

//unshift()
//adds elements at start
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"];
      myExes.unshift("pakhi")
      console.log(myExes)
}

//pop
//removes last elements of array
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"]

      console.log(myExes.pop());//tell wut is removed
      console.log(myExes);//gives new array
}

//shift()
//removes element from first
{
      let myExes = ["prashansa", "keya", "sanvi", "angel"]

      console.log(myExes.shift());//tell wut is removed
      console.log(myExes);//gives new array
}
//1 : add decmber at the end of array
//2: what is the return value of splice method?
//3: update march to march (upadte)?
//delete june from array?
{
      const months = ["jan", 'March', 'april', 'june', 'july'];


      //splice()
      //add or remove elements from an array

      //sol1
      const newMonths = months.splice(5, 0, 'dec');
      console.log(months);

      //sol2
      console.log(newMonths);

      //sol3

      const updateMonth = months.splice(1, 1, 'march')
      console.log(months);

      //sol4 
      const newMonth = months.splice(3, 1)
      console.log(months);
}


//
let myEx = ["prashansa", "keya", "sanvi", "angel"]

let indexOfmyEx = myEx.indexOf("keya");
if (indexOfmyEx != -1) {
      const fullex = myEx.splice(indexOfmyEx, 1, 'keya nagpal')
      console.log(myEx)
}
else {
      console.log('no such data found');
}


//map()
//reduce()
//filter()



//MAP()
//chainable method
//returns elements after execution of something
//retunrns a new array contaning the results of callin a 
//function on every element in this array
{
      {

            let array1 = [1, 2, 3, 45, 55];
            //num <9

            let newArr = array1.map((currentElem, index, arr) => {
                  return currentElem > 9;
            })
            console.log(array1);
            console.log(newArr);//true false will come
      }
}
//now we want data instead of true and flase
let array2 = [23, 4565, 53]
let newarray2 = array2.map((currentElemt, index, arr) => {
      return `index no = ${index} and the value is ${currentElemt}belongs to ${arr}`
})
console.log(newarray2);

//it returns a new array without changing original array


function jaat(q,b) {
      console.log("I'm Fucking Rich Nigga Man")
    console.log("Lord King Nigga");
}
jaat(1,2)