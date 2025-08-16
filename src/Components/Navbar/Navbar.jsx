import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null); // Ref for the navigation menu (the UL)
    const menuIconRef = useRef(null); // Ref for the menu icon

    // This effect handles closing the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the nav menu AND outside the menu icon
            if (
                navRef.current && !navRef.current.contains(event.target) &&
                menuIconRef.current && !menuIconRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="container">
            <img src="" alt="Logo" /> 

            {/* Hamburger Icon - transforms into an X */}
            <div ref={menuIconRef} className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            {/* Navigation links container */}
            <ul ref={navRef} className={`nav-ul ${menuOpen ? 'nav-active' : ''}`}>
                <li className="nav-li">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Index</Link>
                </li>
                <li className="nav-li">
                    <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>
                </li>
                <li className="nav-li">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
