import React from 'react';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer  from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Navbar />
      <SideDrawer />
      <Backdrop />
    </div> 
  );
};

export default App;
