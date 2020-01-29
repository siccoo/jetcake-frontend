import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    return (
        <nav className="side-drawer">
        <ul>
            <li><a href="/">Sign up</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
    );  
};

export default sideDrawer;