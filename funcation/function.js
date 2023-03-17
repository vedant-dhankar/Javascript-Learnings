//function defination
//calling a function
//function paramiter
//function arguments
//function expressiobs
//return keyword
//anomoymous function



//$$  FUNCTION DEFINATION 
//a function as consists of the keyword followed by:
//name of function
//a list of paramerets of the function
//the js statment that define that function,encloed in curly brackets{}

//SYNTAX
//FUNCTION==>FUNCTION NAME ()
// {
//STATEMENT
// }

function sum() {
  let m = 10, s = 20;
  var total = m + s;
  console.log(total);
}
sum();

// function parameter vs function arguments
//function parameter are the name listen in the function defination
//function argumets are the real values passed to the function

function add(a, b) {
  var addition = a + b;
  console.log(addition);
}
add(10, 2384)



//FUNCTION EXPRESSION
//creat a function and put it into the variable funEXP


// function sub (a,b) {
//  var subrntaction = a-b;
//console.log(subrntaction);
//}
//var funEXP = sub(10,2)


//return KEYWORD
//IT STOP THE EXECUTION OF FUNCTION
//FUNCTION OFTEN COMPUTE A RETURN VALUE
//THE RETURN VALUE IS "returend" back to the "caller"

//function sub (a,b) {
//  return subtraction = a-b
// }
//var funEXP = sub(10,2);

//console.log( funEXP );

//anonymous function
//similar to funexp and has same syntax


var funEXP = function (r, q) {
  return multi = r * q;
}
console.log(funEXP(15, 10));




