import React from 'react';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer  from './components/Toolbar/SideDrawer/SideDrawer';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Navbar />
      <SideDrawer />
    </div> 
  );
};

export default App;
