//var
var myName = "VEDANT";
console.log(myName);
myName = "VEDANT DHANKAR";
console.log(myName);

//let
let A = 18;
console.log(A);
A = 19;
console.log(A);

//const
//const b = 5;
//console.log(b);
//b = 1;
//console.log(b);//error const ==> constant
//you cannot update const

//var==> FUNCTION SCOPE
function biodata() {
   var myFrontSize = 10;
   console.log(myFrontSize);

   if(true){
    var myBackSize = 100
    console.log("inner"+ myBackSize);
    console.log("inner"+ myFrontSize);
   }
   console.log("innerOuter"+ myBackSize);
}
biodata()
//var==> FUNCTION SCOPE
// LET & CONST ==> BLOCK SCOPE

//function biodata() {
  //  let myFrontSize = 10;
    //console.log(myFrontSize);
 
    //if(true){
     //let myBackSize = 100
     //console.log("inner"+ myBackSize);
     //console.log("inner"+ myFrontSize);
    //}
    //console.log("innerOuter"+ myBackSize);
 //}
 
 //biodata()//error will come


