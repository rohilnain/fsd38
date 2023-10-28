import React from "react";
import  ReactDOM from "react-dom";
const header=React.createElement("h1",{id:1},"hello world using react");
const root1=ReactDOM.createRoot(document.getElementById("root1"));
//root1.render(header);
//When you render React elements, they 
//essentially take over the specified part of the DOM, replacing any HTML content within it
//here it is root, so anything within root in html page is discarded
//thats why h2 of index.html is not render when we build

//if we want to render little bit complex html structre
//lets say
//  <div id='parent'>
//     <div id='child1'>
//      <h1>child 1</h1>
//     </div>
//     <div id='child2'>
//     <h1>child 2</h1>
//     </div>
//  </div>
//how we can create using React.createElement
const header2=React.createElement("h1",null,"child2-react");
const header1=React.createElement("h1",null,"child1-react");
const child2=React.createElement("div",{id:"child2"},[header2]);
const child1=React.createElement("div",{id:"child1"},[header1]);
const parent=React.createElement("div",{id:"parent"},[child1,child2]);
const root=ReactDOM.createRoot(document.getElementById("root1"));

//so it becomes really complex if we make rendering of little bit of complex html
//one more thing what does create.createElement gives us
//it gives us object so header1 or parent1 are objects

//console.log(header1);
//root.render(parent);

//Good read

// When using React.createElement in React, you are essentially creating a virtual representation of the DOM element,
// which is referred to as a React element. This React element, along with its properties and children, is then used to build a virtual DOM representation.
// The virtual DOM is a lightweight copy of the actual DOM maintained by React. When you render a React element to the DOM,
// React performs a process called reconciliation. During reconciliation, React compares the virtual DOM representation with the actual DOM, and based on the differences, it efficiently updates the actual DOM to match the virtual DOM.
// Here's a simplified version of the process of rendering an object created by React.createElement to HTML:
// React creates a virtual representation of the DOM using the React.createElement function, 
//which constructs a plain JavaScript object describing the component, its props, and its children.
// The virtual DOM is then reconciled with the actual DOM to determine the changes that need 
//to be made. React efficiently calculates the minimum number of changes required to update the actual DOM to match the virtual DOM.
// Finally, based on the changes calculated during the reconciliation process, React updates 
//the actual DOM to reflect the changes made to the virtual DOM.
// The process involves a series of optimizations to minimize the number of actual
//DOM manipulations, thus enhancing the performance of React applications.
// Ultimately, React elements are rendered into HTML as a result of this reconciliation process,
// where the changes identified are applied to the real DOM to reflect the current state of the React application. 
//This approach allows React to efficiently manage complex UIs and update the DOM in a performant manner.
//previously when we were manipulationh html files using vanilla js, it use to delete complete
//DOM tree and recreate it ( actual DOM is very high), so it was a expensive operation
//her we create 2 virtual dom(light ones only useful properties) changes in one compare with it 
//with other at last update the actual
// so this is a concept of virtual DOM, reconcillation and react.create element

//now as we know to render complex html we have to write complex react.creatElement syntax
// for this come JSX 
//JSX stands for JavaScript XML. JSX allows us to write HTML in React. 
//JSX makes it easier to write and add HTML in React.
//JSX allows us to write HTML elements in JavaScript and place them in the DOM 
//without any createElement()  and/or appendChild() methods.
const parentdiv=
 <div id='parent'>
    <div id='child1'>
     <h1>child 1</h1>
    </div>
    <div id='child2'>
    <h1>child 2</h1>
    </div>
 </div>;
 //root.render(parentdiv);


 //so as we know that React.createElement use to give js object which is then rendered
 //at last actual DOM is updated (html)
 //but here we giving it jsx format
 //actually what happens in our node modules we have one module called as babel
 //which converts jsx ->React.createElement format (object)
 //Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a 
// backwards compatible version of JavaScript in current and older browsers or environments.
 //this action is not need to be explicity done


 //Also remember jsx requires one parent div always.
 //in this you see that we have root div and parent div
 // so there is redundancy in div
 //so here comes concept of react fragments
 //which will be passed but does not reflected in html code

 const parentdiv1=
 <>
 {/* react fragment opening tag  or <React.Fragment> */}
    <div id='child1'>
     <h1>child 1</h1>
    </div>
    <div id='child2'>
    <h1>child 2</h1>
    </div>
  {/* react fragment closing tag or </React.Fragment>; */}
 </>;
 //root.render(parentdiv1);


 //now lets check the concept of Component 
 // so Component are javascript function that returns a jsx (v.imp);
 //there are two types of components 
 //1.functional component (new way) 2.class component (old way)
 //lets for now see functional component
 //Function name of component should start with upper letter

 function ParentDiv2(){
    //functioning returning a jsx
    //render to give parenthesis after return (jsx component);
    return(
        <>
          <div id='child1'>
           <h1>child 1</h1>
          </div>
          <div id='child2'>
           <h1>child 2</h1>
          </div>
        </>
    );
 };
 //this is how component is rendered.- by using angular bracket
 //root.render(<ParentDiv2/>);

 //you can also render normal js inside jsx 
 //using { } (curly bracks)

 function ParentDiv3(){
    const data=1234;
    //functioning returning a jsx
    //render to give parenthesis after return (jsx component);
    return(
        <>
          {data}
          <div id='child1'>
           <h1>child 1</h1>
          </div>
          <div id='child2'>
           <h1>child 2</h1>
          </div>
        </>
    );
 };
 //this is how component is rendered.- by using angular bracket
 root.render(<ParentDiv3/>);






