//EXTRACTING STRING CHARACHTERS

//THERE ARE 3 WAYS FOR EXTRACTING STRING CHARACHTERS

//charAt(position)
//charCodeAt(position)
// properly access [ ]


//the charAt() Method
//the charAt() Method returns the charachters at a
//specified index (position) in a string

let str = "HELLO WORLD";
console.log(str.charAt(0));



//charCodeAt()Mehod
//charCodeAt()Mehod returns the unicode of the
//charachters at a specified index in a string:
//The Mehod returns a UTF-16 code
//(an integer between 0 & 65535)

let string = "HELLO WORLD";
console.log(str.charCodeAt(0));

//the unicode standar provies a unique number for every
//charachter, no matter the platform,device,application
//or language. UTF-8 is a popular Unicode encoding which
//has 88-bit code units.

//challange time 
//return the unicode of the last charachter in a string

let stri = "HELLO WORLD"
console.log(stri.charCodeAt(stri.length-1));



//property access
//ECMAScript 5 (2009) allows property access[] on strings

let strin = "HELLO WORLD"
console.log(strin[0]);


