//so as we now know that asynchronous behaviour of js is not by default
//we can have asynchronousity by using browser api such as setTimeout and setInterval
//we can also use callbacks to have asynchronous behaviour

// function doStep1(num) {
//   setTimeout(() => {
//     return num + 1;
//   }, 1000);
// }

// function doStep2(num) {
//   return num + 2;
// }

// function doStep3(num) {
//   return num + 3;
// }

// function doOperation() {
//   let result = 0;

//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);

//   console.log("result", result);
// }

//it will not give any result as inside doOperation function it will be waiting 
//for doStep1 function result, so from it will take NaN

//so how to achieve it using callbacks 
//we can only achieve it if when result from first function comes then only
//it goes into second function
doOperation=()=>{
    doStep1(0,(result)=>{
        doStep2(result,(result1)=>{
            doStep3(result1,(result2)=>{
                console.log("final result",result2);
            })
        })
    })
}
doStep1=(num,callback)=>{
    num=num+1;
     callback(num);
}
doStep2=(num,callback)=>{
    num=num+2;
     callback(num);
}
doStep3=(num,callback)=>{
    num=num+3;
    callback(num);
}
doOperation();

//so to make js asynchronous using callbacks is a tough task
//thats why it is called as Callback Hell, also known as Pyramid of Doom.