import React from 'react';
import Navbar from './Toolbar/Navbar';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = props => {
    return (
        <div className='App-home'>
            {/* <div className='Main'>
            <img src={require('./images/hero.png')} />
            </div> */}
            <div className='hero'>
            <h2> Welcome to Jetcake Home Page</h2>
            <p>The goal for this project is to create a fully functional website in React with the site structure and features as you can see. </p>
            </div>
            <Navbar />
            </div>
    );
}

export default Home;