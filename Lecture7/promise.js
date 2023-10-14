//the Promise object is used for asynchronous computations. 
//A promise represents a value that may not be available yet 
//but will be resolved at some point in the future. 
//It has three states: pending, fulfilled, or rejected. 
//Once a promise is fulfilled or rejected, it is considered settled and its value is immutable.

var myPromise=new Promise((resolve,reject)=>{
    let success=false;
    setTimeout(()=>{
        if(success){
            resolve('Operation was successful.');
        }
        else{
            reject('Operation has failed.');
        }
    },1000)//// Simulating a delay of 2 seconds
});
//We create a new Promise called myPromise, which has a simulated asynchronous operation. 
//The promise is resolved with a success message after a delay of 2 seconds.
//We use the then method to handle the resolved value and 
//the catch method to handle any errors if the promise is rejected.
myPromise
.then((message)=>{
    console.log("If promise is fullfilled:",message);
})
.catch((message)=>{
    console.log("If promise is rejected:",message);
});

console.log("Keeping a call stack statement to showcase the asynchronousity of code");

