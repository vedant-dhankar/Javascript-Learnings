//DATE METHOD

const currDate = new Date();
// how to get the indivisual date
console.log(currDate.toLocaleString());
//06/02/2023, 11:54:39
console.log(currDate.getFullYear());
//2023
console.log(currDate.getMonth());
//1
console.log(currDate.getDate());
//6
console.log(currDate.getDay());
//1



//How To Set Individual Date

console.log(currDate.setFullYear(2022));

//the setFullYear() method can optionally set month and day
console.log(currDate.setFullYear(2022, 10 , 5));

console.log(currDate.setMonth(10));
console.log(currDate.setDate(6));
console.log(currDate.toLocaleString());