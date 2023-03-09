function add(a,b) {
    return a+b
}
let funEXP = add(10,12)
console.log(funEXP)

{function sub(c,d) {
   if (c<d)
   return d-c
   else 
   return c-d
}
let funEXP = sub(23,13)
console.log(funEXP);
}

{
    function areaOfCircle(r) {
        return (r**2)*22/7
        
    }
    let funEXP = areaOfCircle(7)
    console.log(`${funEXP}cm`);

}
{
function convertMeterIntoCentemeters (a){
     return a*100
}
let funEXP = convertMeterIntoCentemeters(1)
console.log(funEXP+"cm");

}
      


let array5 = [4,7,8,9]
let newarrray5 = array5.slice(1,"5");
console.log(newarrray5);
