import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import MainLayout from './components/MainLayout';
import Splash from './components/Splash';

render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={Splash} />
  </Route>
</Router>
, document.getElementById('app')
);
