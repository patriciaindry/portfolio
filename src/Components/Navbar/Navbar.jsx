import React from "react";
import {Link, useLocation} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    // const location = useLocation();
    // const whiteNavbarRoutes = ['/works', '/about', '/contact'];

    // const isWhitePage = whiteNavbarRoutes.includes(location.pathname);
    return (
        <nav className="container">
            <img src="" alt="" /> 
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link to="/">Index</Link>
                </li>
                <li className="nav-li">
                    <Link to="/works">Works</Link>
                </li>
                <li className="nav-li">
                    <Link to="/about">Profile</Link>
                </li>
                {/* <li>
                    <Link to="/contact">Contact</Link>
                </li> */}
                
            </ul>
        </nav>
    )
}

export default Navbar;