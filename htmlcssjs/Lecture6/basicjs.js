console.log(x);
var x;
console.log(add1(3,5));
console.log(p);
function add1(a,b)
{
 return a+b;
}
var p=function add()
{
 return 2+3;
}
console.log(p);
x=4;
console.log(x);
//hosting concept in javascript very important
//it can work on varibales that has global scope (like var and let if define globally), function alone is always 
//global function expression are not like int above function expression var p=add function
//hosting let us use varibales and function before they are declared 
//As memory is allocated first and then execution starts.

//arrow functions


// function multiply(a,b){
//     var c=a+b;
//     return c*a*b;
// }

//arrow function are shorter way of writing function, it increases readiability
//we do not use function keyword see below for above multiplication function

multiply=(a,b)=>{(a+b)*a*b};
//for single parameter you can remove the brackets also () and {}
negation=a=>-a;
var x=negation(2);
console.log(x);
