import React from 'react';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer  from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login'

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

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {  
    let backDrop;

  if(this.state.sideDrawerOpen) {
    backDrop = <Backdrop click={this.backDropClickHandler}/>
  }

  return (
    <div style={{height: '100%'}}>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
     {backDrop}
      <Switch>
          <Route exact={true} path='/home' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          {/* <Route path='/' component={} /> */}
          {/* <Footer /> */}
        </Switch>
    </div> 
  );
}
};

export default App;
