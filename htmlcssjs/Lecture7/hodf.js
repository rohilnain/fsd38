// In JavaScript, higher-order functions are functions that can either take other functions as arguments or return them as results. 
//They are a fundamental concept in functional programming, allowing for the creation of more abstract and reusable code. 
//Some common higher-order functions include map, filter, reduce, and forEach.

var A=[1,2,3,4,5];
for(i=0;i<A.length;i++){
    //console.log(A[i]);
}
// lest see first hodf , ForEach
//so in ForEach u r performing operation on each array element
//see Foreach takes function as argument (here arrow function)
// function printelement(element){
//     console.log(element);
// }
// A.forEach(printelement);
//so below is a notation of this using arrow function way more convenient


A.forEach((element)=>console.log(element));

//Map
// map --- transforms the contents of an array and always return a new array
var A=[-1,-2,3,4,9];
var B=A.map(element=>element*element);
//console.log(B);

//Reduce
//reduce --> iterate through contents of an array and return single ans
//like returning a sum of element
var A=[2,3,4,5];
var B=A.reduce((element,sum)=> sum+element,0);
console.log(B);
//above code is same as
function sumelement(sum, curr)
{
    return sum+curr;
}
var C=A.reduce(sumelement,0);
console.log(C);
//or like this
var D=A.reduce((element,curr)=>element*curr,1);
//same no need to pass 1 var D=A.reduce((element,curr)=>element*curr);
console.log("multiplication of element",D);
// you can pass 1 or 0 correspondingly but if you don't pass it will then also work


// filter ---> HOF which takes out some contents of an array based on some condition
// filter ---> returns a new array
console.log(".......studying filter hof.........");
var A=[1,2,3,4,5];
//extracting odd nummbers from a array
var B=A.filter((element)=>element%2);
console.log(B);

var A=[-1.-5,0,2,5];
//printing out positive numbers
var B=A.filter(element=>element>0);
console.log(B);


//Find
//returns first element of array which matches condition
var A=[1,3,5,6,8,9];
//find first even numbver in a array
var B=A.find(element=>element%2==0);
console.log(B);
//findIndex another hof function which gives index of first element satisfying condition
var B=A.findIndex(element=>element%2==0);
console.log(B);


// every -- checks whether every element of array is satisfying the condition
// some -- even if one element of array is satisfying condition ---> true
console.log("studying every and some hof")

A=[-1,-2,-9,-3,-11];
var B=A.every(element=>element<0);
var C=A.some(element=>element>0);
console.log("every result",B);
console.log("someresult",C);

//sort
console.log("studying sort function");

const array = [5, 3, 8, 1, 2];
//it means a less than b (a-b) for decreasing order do (b-a)
const sortedArray = array.sort((a, b) => a-b);
console.log("sorted array",sortedArray);
//though ther is sort function also like array.sort(), which will sort the array itself so it is array method

//see chaining module for chaining of hof



