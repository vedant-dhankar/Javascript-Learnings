//FAT ARROR FUNCTION
// NORMAL WAY OF WRITING FUNCTION

console.log(sum());
function sum() {
    let q = 5, s = 6;
    let sum = q + s;
    return `the sum of the two number is ${sum}`;
}

//now in fat arrow function

//console.log(sum()//error will come that how can u use function before defining)
const add = () => `the add of the two number is ${(m = 5) + (n = 6)}`;
console.log(add());




let m = "vedant"
console.log(`My name is ${m}`);


