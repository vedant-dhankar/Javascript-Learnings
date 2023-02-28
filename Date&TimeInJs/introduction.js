//Date & Time In java script

//js date objects represents a single moment in time in a
//platform-independent format. date objects contains a number
//thart represents millisecods since 1 jan 1970 UTC/

//crearting date objcets
//there are 4 ways to create a new date object:

//new Date()
//new Date(year , month , day , hours , minutes , seconds , milliseconds)
//it takes 7 arguments
//new Date(milliseconds)
//we can't avoid month section
//new Date(date String )


//new date()
//date objects are ceated with the new date()constructer.

let currDate = new Date();
console.log(currDate);
//it gives date and time

console.log(new Date());
console.log(new Date().toLocaleString());
//06/02/2023, 11:27:11
console.log(new Date().toString());
//Mon Feb 06 2023 11:27:11 GMT+0530 (India Standard Time)

//date now()
//returns the numaric value corresponding to the currenrt time-the number
//of milliseconds elapsed since january 1,1970 00:00:00 UTC


console.log(Date.now());
//1675663237402

//new date(year,month,...)
//7 numbers specify year , month , day , hour , minute , second,
//and millisecond( in that order)
//note: java script count months from 0 to 11.

//january is 0 and december is 11
var d = new Date(2023, 1 , 10 , 11 ,5 , 30 , 90);//montch agrument should be there else it wont work
console.log(d.toLocaleDateString()); //06/02/2023
//only giving date


//new date(datestring)
var a = new Date("October 13, 2021 11:13:00")
console.log(a.toLocaleString()); //06/02/2023, 11:05:30


//new date(milliseconds)
//new date(milliseconds) creates a new date as zero time plus milliseconds

let m =new Date(0);

console.log(m.toLocaleString()); //01/01/1970, 05:30:00
var n = new Date(10000000000);
console.log(n.toLocaleString()); //26/04/1970, 23:16:40
