//display only 20 charachters of a string like the one
//used in passwords

let MyPassword = "hsgg ngjbajbhjahu ahgjhwa"
let MyActualPassword = MyPassword.slice(0,20)//will only print between 0 to 20
console.log(MyActualPassword);
console.log(MyActualPassword.length);//cross cheak




//challange time 
//return the unicode of the last charachter in a string

let stri = "HELLO WORLD"
console.log(stri.charCodeAt(stri.length-1));
