//Time Method

const curTime = new Date();

//How To Get Individual Time
//console.log(curTime.getTime());//1675665442344

//The getTime() method returns the number of milliseconds since 1970
 //console.log(curTime.getHours());//12
 //The getHours() method returns the number of a date as a number
//console.log(curTime.getMinutes());//7
//console.log(curTime.getSeconds());//22
//console.log(curTime.getMilliseconds());//344


//How To Set The individual Time
//console.log(curTime.setTime());/if we don't removie this then show NaN
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(10));
console.log(curTime.setSeconds(56));
console.log(curTime.setMilliseconds(132));
