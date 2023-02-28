
// res = {
// even: [],
// odd: []
// }

function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
   return num % 2 !== 0;
}


function getEvenOddArray(arr) {

    let result = { even: [], odd: [] };

    for (let num in arr) {
        if (isEven(num)) {
            result.even.push(Number(num));

        } else if (isOdd(num)) {
            result.odd.push(Number(num));
        }
    }

    return result;
}
let output = getEvenOddArray([1, 2, 3, 4, 54, 5, 6, 7, 8, 9]);
console.log(output);

console.log(typeof output.even[0]);

console.log(typeof +'3');
console.log(typeof Number('3'));
