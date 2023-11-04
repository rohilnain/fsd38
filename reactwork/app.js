import React from 'react';
import  ReactDOM from 'react-dom';
import './app.css';
import Navigationbar from './src/component/Navigationbar';
import Body from './src/component/body';
import Footer from './src/component/Footer';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Error from './src/component/Error';
import Profile from './src/component/Profile';
import About from './src/component/About';
import Contact from './src/component/Contact';
import Licensing from './src/component/Licensing';


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
        <Outlet/>
        <Footer/>
        </>
    );
};
//create browser take array of objects
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path:"/Licensing",
        element:<Licensing/>
      }
    ]

  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
