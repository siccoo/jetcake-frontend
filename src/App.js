import React from 'react';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer  from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import { Switch, BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {
    let sideDrawer;
    let backDrop;

  if(this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backDrop = <Backdrop />
  }

  return (
    <div style={{height: '100%'}}>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
      
     {sideDrawer}
     {backDrop}
      {/* <Switch>
          <Route exact={true} path='/home' component={Home} />
          <Route path='/' component={} />
          <Route path='/' component={} />
          <Route path='/' component={} />

          
          <Footer />
          
          
        </Switch> */}
    </div> 
  );
}
};

export default App;
