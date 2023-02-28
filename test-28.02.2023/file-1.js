/*
1. Numbers array given, 
2. create a main function which will use other small functions to perform several operations
3. create mini functions for:
    1. even array
    2. odd array
    3. prime numbers
    4. negative numbers
    5. multiple of 2,3,5 in single array
    6. divisible by 3 in an array
    7. new array with the square of all numbers
    8. new array with cube of all numbers but filter them first which are divisible by 4 (reuse the above function for that)
    9. return an object with key and values as an array
*/

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => num % 2 !== 0;

//Extra
const checkNum = (num, operation) => operation === 'EVEN' ? num % 2 === 0 : num % 2 !== 0;
// Extra
const checkEvenOdd = (num, operation) => {
    if (operation.toUpperCase() === 'EVEN') {
        return num % 2 === 0;
    } else if (operation.toUpperCase() === 'ODD') {
        return num % 2 !== 0;
    } else {
        return 'ERROR';
    }
};

const isNegativeNumber = (num) => num < 0;

const isMultiplesOfTwoThreeAndFive = (num) => num % 2 === 0 || num % 3 === 0 || num % 5 === 0;

const isDivisible = (num, divisibleNum) => num % divisibleNum === 0;

const getPower = (num, power) => num ** power;

const isPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count == 2;
};


function mainFunction(arr) {
    let result = { even: [], odd: [], prime: [], negative: [], multiplesOfTwoThreeAndFive: [], divisibleByThree: [], square: [], cube: [] };

    for (let num of arr) {

        // Edge Case
        if (typeof num === 'string') {
            continue;
        }

        if (isEven(num)) {
            result.even.push(num);
        }
        if (isOdd(num)) {
            result.odd.push(num);
        }
        if (isNegativeNumber(num)) {
            result.negative.push(num);
        }
        if (isPrime(num)) {
            result.prime.push(num);
        }
        if (isDivisible(num, 3)) {
            result.divisibleByThree.push(num);
        }
        if (isMultiplesOfTwoThreeAndFive(num)) {
            result.multiplesOfTwoThreeAndFive.push(num);
        }
        result.square.push(getPower(num, 2));

        if (isDivisible(num, 4)) {
            result.cube.push(getPower(num, 3));
        }

    }
    return result;
}

let array = [13, 21, 1, 24, 14, 42, 'hdhdh', 4, -9, 3, 7];

console.log(mainFunction(array))
