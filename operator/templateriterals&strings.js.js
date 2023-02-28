// TEMPLATE LITERALS (TEMPLATE STRINGS)

//JS PROGRAME TO PRINT TABLE OF GIVEN NO.(8)

//OUTPUT : 8 * 1 = 8
//  8 8 2 = 16.....

for (let num = 1; num <= 10; num++) {
    let tableOf = 8;
    console.log(tableOf + " * " + num + " = " + tableOf * num);
    //console.log( ` ${tableOf} * ${num} = ${tableOf * num }` );
}

//default parameters
//defalut function parameters alow named parameters to be
// initialized with defalut values if no value or undefined is passed.
//function multi (x,z{
function multi (x,z=5){//we can pass defalut value
    return  x*z;
}
console.log(multi(5,3))
console.log(multi(5))



