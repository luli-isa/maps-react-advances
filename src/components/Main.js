import React, { Component } from 'react';
import App from 'grommet/components/App';
import {  Route, Switch } from 'react-router-dom';

import FooterApp from './FooterApp';
import HeaderApp from './HeaderApp';
import ReactLeaflet from './ReactLeaflet';
import D3Maps from './D3Maps';
import NotFound from './NotFound';
import Home from './Home';
import Online from './ReactLeaflet/Online';
import AntPathApp from './ReactLeaflet/AntPathApp';
import Links from './Links';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
         <HeaderApp />
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/reactleaflet" component={ReactLeaflet} />
            <Route path="/reactleafletonline" component={Online} />
            <Route path="/reactleafletantpath" component={AntPathApp} />
            <Route path="/d3maps" component={D3Maps} />
            <Route path="/links" component={Links} />
            <Route component={NotFound}/>
         </Switch>
         <FooterApp />
      </App>
    );
  }
}

export default Main;
