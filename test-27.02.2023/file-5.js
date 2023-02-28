function checkPrime(x) {
    let count = 0;
    for (let i = 1; i<= x; i++){
        if(x % i == 0){
            count++;
        } 
    }
    if (count == 2){
        return true;
    } else {
        return false;
    }  
}


let c = checkPrime(50001)
console.log(c)