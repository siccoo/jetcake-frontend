import React from 'react';
import Navbar from './Toolbar/Navbar';

const Home = props => {
    return (
        <div className='App-home'>
            <Navbar />
            <div className='hero'>
            <h2> Welcome to Jetcake Home Page</h2>
            <p>The goal for this project is to create a fully functional website in React with the site structure and features as you can see. </p>
            </div>
           
            </div>
    );
}

export default Home;