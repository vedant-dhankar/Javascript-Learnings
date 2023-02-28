const evenArray = (num) => {
    if(num%2==0)
    return num
}
const oddArray = (num) =>{
    if( num%2!=0)
    return num
}
const PrimeArray = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count == 2;
}
const negativeArray = (num) => num<0
const multiplesOfTwoThreeAndFive = (num) =>  {
    if (num%2==0 || num%3==0 || num%5==0)
    return num
}
 
const divisibleByThree = (num) =>{
    if(num%3==0)
    return num
}

const isDivisible = (num, divisibleNum) => num % divisibleNum === 0
