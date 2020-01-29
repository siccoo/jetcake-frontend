import React from 'react';
import '../Toolbar/SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../Toolbar/SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

const navbar = props => {
return (
    <header className="navbar">
        
        <nav className="navbar_nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} /> 
            </div>
            <div className="navbar_logo">
                <a href="/home">JetCake Frontend </a>
            </div>
            <div className="spacer"></div>
            <div className="navbar_nav-items">
                <ul>
                    <Link to="/Home" className>Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </ul> 
            </div>
        </nav>
        <div className='Main'><img src={require('./images/hero.png')} /></div>
    </header>
    );
}

export default navbar;