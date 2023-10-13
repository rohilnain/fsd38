// A method is a function that is associated with an object.
// It is called using the dot notation on an object.
// Methods are used to perform actions on an object, and they can access the object's properties.
// Examples include Array.prototype.push, Array.prototype.pop, etc.

var A=["Dec","Jan","Feb","Mar"];
A.sort();
//sorting based on lexigraphical ways
console.log(A);

//fill method
//fills all the elements of an array from a start index to an end index with a static value. 
// 3 arguments first value, second startindex(inclusive), third endindex(exclusive)
var A=[1,2,3,4,5,6];
console.log("before fill method",A);
A.fill(0,2,4);
console.log("after fill method",A);//[ 1, 2, 0, 0, 5, 6 ] so 2nd and 3rd index became zero
//if index is negative it is treated as length+index
A.fill(0,-2,5);
console.log(A);//[ 1, 2, 0, 0, 0, 6 ] so filled out 4th index


//creating a array of length 20 with value -1
var A=new Array(20).fill(-1);
console.log(A);


