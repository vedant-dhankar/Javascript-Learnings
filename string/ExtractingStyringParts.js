//Extracting String Parts
//There Are 3 methods Of Extracting The Part Of String

//slice(start, end)  method
//substring(start, end) method
//substr(start , length)


//The Slice() Method
//slice() Extracts The Part Of String & returns The Exctracted Part
//In a New String
//Method Takes 2 Parameters:Start Position
//& The End Position (End Not Included).
//slice(start, end)  method
let srt = "Apple , Banana, Kiwi";
console.log(srt.slice(0,5));//end argument ain't included
console.log(srt.slice(7,-2))//it will romove last 2part



//The SubString()Method
//SubString() is similar to Slice()
//The Difference Is That It 
//Can't Accept Negative Index

let fruits = "Apple , Banana , Kiwi";
let res = fruits.substring(0,5);
console.log(res);
let pes = fruits.substring(5,-5);//it will count upto  5 and neglect -index
console.log(pes);

//The Substr() method
//Substr() is similar to slice()
//the difference is that the 2nd parameter spefices the
//length of the edxtracted part

let s = "mango , Banana le,  Kiwi";
console.log(s.substr(0,5));
console.log(s.substr(6,-7));//No Output
console.log(s.substr(-4))//gon print from last
 
