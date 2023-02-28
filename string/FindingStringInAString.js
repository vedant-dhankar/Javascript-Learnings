// finding a string in a string

//string.protopype.indexOf(searchValue [, fromIndex])
//he indexOf() method returns the index of (the positon of) the 1st
// occurrence of a specified text in a string

let myBioData = "godly rizz";
console.log( myBioData.indexOf( "rizz" ) );
console.log( myBioData.indexOf( "g" , 5 ));//here 5 shows that it gonna start from 5

console.log(myBioData.lastIndexOf("rizz"));