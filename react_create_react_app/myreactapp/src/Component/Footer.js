
import { Link } from "react-router-dom";

function Footer(){
    return(   
            <footer class="bg-white rounded-lg shadow m-4 dark:bg-orange-100">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">Unifood</Link>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/About" class="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/Licensing" class="mr-4 hover:underline md:mr-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to="/Contact" class="hover:underline">Contact</Link>
                    </li>
                </ul>
                </div>
            </footer>
    );
};

export default Footer;
