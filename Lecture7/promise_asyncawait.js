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

//same way we have to see for fetch web api
//here result.json() method also return a promise if a promise is resolved or rejected.
fetch("https://dummyjson.com/product")
.then((result)=>result.json())
.then((jsonresult)=>console.log(jsonresult))
.catch((err)=>console.log("error occured in fetching",err));

//now lets see other method which makes js asycnhronous that is async and await
//it is more readable
//we use keyword async in front of function which is awaiting for some results
//await keyword where some varaiable is awaiting for something to return

//lets do it for above both case
function asynctimeout() {
    var a = false;
    //if you want to return something from setTimeout 
    //you have to do this via promise
    //because promise will give to res based on computaion (resolve or reject).
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a) resolve("operation sucessfull");
            else  reject("operation failed ERRR...");
        }, 1000);
    });
}
async function getResult(){
    try{
    var res=await asynctimeout();
    console.log("if successfull",res);
    }
    catch(err){
        console.log("if not successfull",err);
    }
}
getResult();


//it will get more clear as we apply it on fetch api
function fetchData(){
    return fetch("https://dummyjson.com/product");
}
async function getData(){
    try{
        var res=await fetchData();
        var resjson=await res.json();
        console.log("fetching api sucessfull json:",resjson);
    }
    catch(error){
        console.log("fetching api unsucessfull",error);
    }
}
getData();
