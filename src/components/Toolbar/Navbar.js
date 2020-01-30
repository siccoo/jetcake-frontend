import React from 'react';
import '../Toolbar/SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../Toolbar/SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

const navbar = props => {
return (
    <header className="navbar">
        {/* <div className='Main'>
                <img src={require('./images/hero.png')} />
                <div className='hero'>
            
                <h2> Welcome to Jetcake Home Page</h2>
                <p>The goal for this project is to create a fully functional website in React with the site structure and features as you can see. </p>
            </div>
        </div>
        <div>   */}
        <nav className="navbar_nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} /> 
            </div>
            <div className="navbar_logo">
                <a href="/">JetCake Frontend </a>
            </div>
            <div className="spacer"></div>
            <div className="navbar_nav-items">
                <ul>
                    <Link to="/home" className>Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </ul> 
            </div>
        </nav>
        {/* </div> */}
    </header>
    );
}

export default navbar;