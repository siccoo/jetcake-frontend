import React from 'react';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar_nav">
            <div></div>
            <div className="navbar_logo">
                <a href="/">Jet Cake Frontend </a>
            </div>
            <div className="navbar_navitem">
                <ul>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Login</a></li>
                </ul> 
            </div>
        </nav>
    </header>
);

export default navbar;