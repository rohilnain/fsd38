import React from 'react';
import  ReactDOM from 'react-dom';
import './app.css';
import Navigationbar from './src/component/Navigationbar';
import Body from './src/component/body';
import Footer from './src/component/Footer';


//it is used to make body of html page to have zero margin and zero padding intially
<div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
</div>

function App(){
    return(
        <>
        <Navigationbar/>
        <Body/>
        <Footer/>
        </>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
