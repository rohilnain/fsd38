import React from 'react';
import  ReactDOM from 'react-dom';
import './App.css';
import Navigationbar from './Component/Navigationbar';
import Body from './Component/Body';
import Footer from './Component/Footer';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Error from './Component/Error';
import Profile from './Component/Profile';
import About from './Component/About';
import Contact from './Component/Contact';
import Licensing from './Component/Licensing';
import RestaurantMenu from './Component/RestaurantMenu';
import store from './utilities/store';
import { Provider } from 'react-redux';
import { Cart } from './Component/Cart';
import { useState } from 'react';
import ContextProvider from './utilities/ContextProvider';

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
    const [userName, setUserName] = useState("Rohil");
    return(
        <Provider store={store}>
        <ContextProvider value={userName}>
        <Navigationbar/>
        <Outlet/>
        <Footer/>
        </ContextProvider>
        </Provider>
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
      },
      {
        path:"/restaurantmenu/:id",// dynamic routing
        element:<RestaurantMenu/>
      }
      ,
      {
        path:"/cart",
        element:<Cart/>
      }
    ]

  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//export default App;
