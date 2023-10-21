// Part 1: Callbacks
// 1. Create a simple HTML file with a button and a div element.
// 2. When a button is clicked, use a callback function to simulate a delay of 2 seconds and then update the text in the div element to display “Callback executed after 2 seconds”.
var button=document.querySelector(".button");
var para=document.querySelector(".para");
buttonAction=()=>{
    funct1("Callback executed after 2 seconds",(res2)=>{
        funct2(res2,(res3)=>{
            para.textContent=res3;
        })
    })
};
function funct1(res1,callback)
{
  setTimeout(()=>{
    callback(res1);
    },2000);
};
function funct2(res2,callback)
{
  callback(res2);
};

//button.addEventListener("click",buttonAction);

// Part2: Promises
// 1.Create a new HTML file with a button and another div element.
// 2.When the button is clicked, create a Promise that simulates a successful asynchronous operation that resolves after 3 seconds. During this time, display "Loading..." in the div.
// 3.Once the Promise is resolved, update the text in the div to display "Promise resolved after 3 seconds."
function makePromise(){
var myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved after 3 seconds.");
        reject("Promise did not resolved ");
    },3000);
});
return myPromise;
}
function buttonAction1(){
    button.disabled = true;
    var paracontent="Loading...";
    para.textContent=paracontent;
    var myPromiseRes=makePromise();
    myPromiseRes
    .then((res)=>{
        para.textContent=res;
        button.disabled = false;
    })
    .catch((err)=>{
        para.textContent=err;
        button.disabled = false;
    });
};
//button.addEventListener("click",buttonAction1);



//Part 3: Promises with Error Handling (25 points)
//1.Modify the previous HTML file to handle errors using Promises.
//2.If the Promise takes longer than 5 seconds to resolve, reject it with a message like "Operation timed out."
//3.Display the error message in the div if the Promise is rejected.
callPromise=()=>{
    var myPromise=new Promise((resolve,reject)=>{
        var startTime=new Date();
        setTimeout(()=>{
            var endTime=new Date();
            if(endTime-startTime<=5000) resolve("Operation done within 5 Second");
            else reject("Operation timed out.");
        },4000)
    })
    return myPromise;
}
buttonAction2=()=>{
    button.disabled=true;
    var myPromise=callPromise();
    myPromise
    .then((res)=>{
        para.textContent=res;
        button.disabled=false;
    })
    .catch((err)=>{
        para.textContent=err;
        button.disabled=false;
    });
}
//button.addEventListener("click",buttonAction2);


// Part 4: Async/Await (25 points)
// 1.Create a new HTML file with a button and a div element.
// 2.When the button is clicked, create an asynchronous function that simulates a network request using setTimeout. This function should pause for 4 seconds and then return a message like "Data received successfully."
// 3.Use the await keyword within an async function to call this asynchronous function and update the text in the div with the message once the operation is complete.
waitTime=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received successfully.");
            reject("Data did not received successfully.");
        }, 4000);
    });
}
async function causeDelay(){
    button.disabled=true;
    try{
    var paraContent=await waitTime();
    //it will wait for waitTime function to resolve promise
    //then it will execute next line
    //async wait make looks code synchronous, still handling asycnhronousity
    para.textContent=paraContent;
    button.disabled=false;
    }
    catch(error){
        para.textContent=error;
        button.disabled=false;
    }
}
 buttonAction3=()=>{
    causeDelay();
}
button.addEventListener("click",buttonAction3);



