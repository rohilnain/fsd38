//By default javascript is a synchronous language
//it goes on execution wise line by line
//if something waits, it does not wait for it, rather it executes another line by line

console.log("first statement");

console.log("second statement");

setTimeout(()=>{console.log("third statement")},10);

// setTimeout executes the specified code only once after the specified delay, 
// while setInterval executes the specified code repeatedly at every specified interval.
// setTimeout can be used to delay the execution of a code snippet, 
// while setInterval can be used to create a recurring execution of code.
//setTimeout and setInterval are both browser api

//if there are multiple settimeout statement then execution wise 
//it will first execute the other code line by line 
//then it will executes settimeout statement in ascending order of time given to them
setTimeout(()=>{console.log("fourth statement")},0);
//so here fourth timeout statement will come before third time out statement

console.log("fifth statement");

//Remember very important: this is how event happens or event loop in js works

//first execution is happens  for element which are in call stack line by line 
//like here statement 1, 2 and 5th (call stack), those who don't make js execution waits

//second after call stack execution there happens executions of MICROTASK QUEUE
//like process.nextclick(), promise callback, async callback MICOTASKQUEUE

//third after microtask queue execution execution happens for web apis
//such as setTimeout, setInterval, setImmediate

//lets see this with example

console.log("start");//call stack
setTimeout(()=>{console.log("inside setTimeout Web Api")},0);//Web Api
Promise.resolve("promise").then(result=>console.log(result));//Microtask Queue events
console.log("end");//call stack

//output will be "start">"end">promise>inside setTimeout Web Api

