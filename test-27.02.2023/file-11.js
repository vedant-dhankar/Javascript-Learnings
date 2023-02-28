

// res = {
// even: [],
// odd: []
// }

function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count == 2;
}
/*
function isNotPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count != 2;
}
 */



function getPrimeAndNotPrimeArray(arr) {

    let result = { Prime: [], NotPrime: [] };

    for (let num in arr) {
        if (isPrime(num)) {
            result.Prime.push(Number(num));

        } else {
            result.NotPrime.push(Number(num));
        }
    }

    return result;
}
let output = getPrimeAndNotPrimeArray ([1, 2, 3, 4, 54, 5, 6, 7, 8, 9]);
console.log(output);
