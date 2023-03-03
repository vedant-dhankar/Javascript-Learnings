
const isDivisibleByThreeButNotFive = (num) => num % 3 === 0 && num % 5 !== 0;

const isDivisibleByFiveButNotThree = (num) => num % 5 === 0 && num % 3 !== 0;

const isDivisibleByFiveAndThree = (num) => num % 5 === 0 && num % 3 === 0;


function mainFunction(arr) {
    let result = { DivisibleByThreeAndNotFive: [], DivisibleByFiveButNotThree: [], DivisibleByFiveAndThree: [], rest: [] };
    for (let num of arr) {
        if (isDivisibleByThreeButNotFive(num)) {
            result.DivisibleByThreeAndNotFive.push(num);
        }
        if (isDivisibleByFiveButNotThree(num)) {
            result.DivisibleByFiveButNotThree.push(num);
        }
        if (isDivisibleByFiveAndThree(num)) {
            result.DivisibleByFiveAndThree.push(num);
        }
        else {
            result.rest.push(num)
        }
        
    }
    return result;
}
let arr = [15, 30, 45, 32, 55, 3, 9, 12, 10, 20, 25, 1, 7, 11];
console.log(mainFunction(arr))


