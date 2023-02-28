// Other Useful Method

let myName = "vedant dHankar";
console.log(myName.toUpperCase());
//conver whole string in uppercase
console.log(myName.toLowerCase());
////conver whole string in lowercase


//the concat()method
//concat() joins 2 or more stings

let fName = "vedant"
let lName = "chaudhary"
console.log(fName.concat(lName));
console.log(fName.concat(" ", lName));
//we can even write like
console.log(fName + lName);
console.log(`${fName} ${lName}`);


//string.trim()
//the trim() method removes whitespace from both side of string

var str = "      hello world!   "
console.log(str);
console.log(str.trim());
 

//converting string into array
//A string can be converted to an array with the
//split()method

const text = "vedant,singh~chaudahry,numberdar"
console.log(text.split(",")); //split to commas
console.log(text.split(" ")); //split on space
console.log(text.split("~")); //split on danda





