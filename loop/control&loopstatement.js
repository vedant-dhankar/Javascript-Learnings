 //write a programe that works out weather if a given
 //year is a leap year or not

 let year = 99700

 if (year%4==0)  {
    console.log("leap year");
 }
 else{
    console.log("not a leap year")
 }

//ternary operator
//it takes 3 operands
//variablename = (condition)? value1:value2
let age = 13
if (age>=18) {
    console.log("eligible");
} else {
    console.log("not eligible");
}
//we can write it in ternery operator
//variablename = (condition)? value1:value2

console.log((age<=10)? "you can vote":"can't vote");

//switch statement
//find the area of circle, triangle or rectangle?

let a = "circle"
var PI = 3.14 , l = 10 , b = 5 , r = 5;

switch(a){
    case 'circle':
        console.log(PI*r**2);
         break;
    case 'triangle':
        console.log(l*b/2)
        break;
    case 'rectangle':
        console.log(l*b);
        break;
    default:
        console.log("not suported");     
} 
//break
//terminates the current loop,switch,or lable
//statement and transfer


//while loop
//the while loop creater a loop that executes a specified statement
//as long as the test condition evauates to true.

let num = 0

while(num <= 10){
  console.log(num) //infinite loop
  num++;
}

//do while loop
do{
    console.log(num) //infinite loop
  num++;
} while (num<=10);

//for loop
for (let index = 5; index <=10; index++) {
    console.log(index);5
}

//for loop ques creating tabel of 8
for (let num = 1; num <= 10; num++) {
    let table = 8;
    console.log(table + " * " + num + " = " + table * num);
}
