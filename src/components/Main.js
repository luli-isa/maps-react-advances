import React, { Component } from 'react';
import App from 'grommet/components/App';
import {  Route, Switch } from 'react-router-dom';

import FooterApp from './FooterApp';
import HeaderApp from './HeaderApp';
import ReactLeaflet from './ReactLeaflet';
import Choropleth from './Choropleth';
import NotFound from './NotFound';
import Home from './Home';
import Online from './ReactLeaflet/Online'

class Main extends Component {
  render() {
    return (
      <App centered={false}>
         <HeaderApp />
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/reactleaflet" component={ReactLeaflet} />
            <Route path="/reactleafletonline" component={Online} />
            <Route path="/choropleth" component={Choropleth} />
            <Route component={NotFound}/>
         </Switch>
         <FooterApp />
      </App>
    );
  }
}

export default Main;
