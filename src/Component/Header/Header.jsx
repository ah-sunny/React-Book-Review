import { NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {    

    const link = <>
        <li><NavLink to='/home' >Home</NavLink> </li>
        <li><NavLink to='/listed-book'>Listed Books</NavLink> </li>
        <li><NavLink to='/pages-to-read'>Pages to Read</NavLink></li>
        <li><NavLink to='/author'>Author List</NavLink></li>
        <li><NavLink to='/create-Account'>Create Account</NavLink></li>
     
    </>

    return (
        <nav>

            <div className="navbar bg-base-100 my-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">                         
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl lg:text-4xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-5 font-semibold text-xl px-2">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-4  ">
                    <a className="btn lg:text-xl bg-[#23BE0A] text-white hover:text-black">Sign In</a>
                    <a className="btn lg:text-xl text-white bg-[#59C6D2] hover:text-black">Sign Up</a>
                </div>
            </div>

        </nav>
    );
};

export default Header;