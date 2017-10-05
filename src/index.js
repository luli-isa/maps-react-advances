import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/index.scss';
import Main from './components/Main';
import ReactLeaflet from './components/ReactLeaflet';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={Main}/>
        <Route path="/reactleaflet" component={ReactLeaflet} />
      </div>
    </Router>,
    document.getElementById('root')
);
