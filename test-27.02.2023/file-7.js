function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function checkPrime(x) {
    let count = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            count++;
        }
    }
    return count == 2;
}

let arr = [1, 2, 3, 4, 5, 6];

function getEvenArray(arr) {
    
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (checkPrime(arr[i])) {

            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(getEvenArray(arr));

