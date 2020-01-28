import React from 'react';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer  from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import { Switch, BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Navbar />
      <SideDrawer />
      <Backdrop />
      {/* <Switch>
          <Route exact={true} path='/home' component={Home} />
          <Route path='/' component={} />
          <Route path='/' component={} />
          <Route path='/' component={} />

          
          <Footer />
          
          
        </Switch> */}
    </div> 
  );
};

export default App;
