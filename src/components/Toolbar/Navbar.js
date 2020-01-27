import React from 'react';
import '../Toolbar/SideDrawer/DrawerToggleButton';
import './Navbar.css';
import drawerToggleButton from '../Toolbar/SideDrawer/DrawerToggleButton';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar_nav">
            <div>
                <drawerToggleButton />
            </div>
            <div className="navbar_logo">
                <a href="/">JetCake Frontend </a>
            </div>
            <div className="spacer"></div>
            <div className="navbar_nav-items">
                <ul>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Login</a></li>
                </ul> 
            </div>
        </nav>
    </header>
);

export default navbar;