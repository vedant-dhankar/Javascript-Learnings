let myExes = ["prashansa", "keya", "sanvi", "angel"];

myExes.forEach(function (element, index) {
    console.log(element + " index:" + index);
});

let result = '';
let arr = [];

myExes.forEach((el, i)=> {
    // 1st way
    console.log(`${el} index: ${i}`);
    if (i == myExes.length-1){
        result = result + `${el} index: ${i}`;
    } else {
        result = result + `${el} index: ${i}` + ', ';
    }

    // 2nd way
    arr.push(`${el} index: ${i}`);

});

console.log(result);
console.log(arr.join(', '))

