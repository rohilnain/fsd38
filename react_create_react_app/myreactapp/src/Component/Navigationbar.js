import { Link } from "react-router-dom";
import useOnline from "../utilities/useOnline";
import {useSelector } from "react-redux";
function Navigationbar(){
    const countItems=useSelector((state)=>state.cart.countItems);
    var isOnline=useOnline();
    return(
    <nav className="bg-white border-gray-200 dark:bg-orange-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <Link to="/" className="flex items-center">
                <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" className="h-8 mr-3" alt="Unifood Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Unifood</span>
         </Link>
        <div className="flex items-center md:order-2">  
        <Link to="/cart"  className=" dark:bg-orange-100 flex justify-center items-center">
            <div class="relative py-2">
        <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{countItems}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        </div>
        </Link>
         </div>
         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-orange-100">
                <li>
                    <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                    md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home {isOnline?"🟢":"🔴"}</Link>
                </li>
                <li>
                    <Link to="/About" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                    md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AboutUs</Link>
                </li>
                <li>
                    <Link to="/Contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                    md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ContactUs</Link>
                </li>
                <li>
                    <Link to="/Profile" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                    md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                </li>
                </ul>
         </div>
        </div>
    </nav>
    );
};

export default Navigationbar;

/**
 * Default export ---- export default componentName
 * Default import ---- import componentName from "path"
 * Named export ---- export .....
 * Named import ---- import { } from ""
 */