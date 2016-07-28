import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import MainLayout from './components/MainLayout';
import Splash from './components/Splash';
import CreateAccountWrapper from './wrappers/CreateAccountWrapper';
import Login from './components/Login';

render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={Splash} />
    <Route path="/CreateAccount" component={CreateAccountWrapper} />
    <Route path="/Login" component={Login} />
  </Route>
</Router>
, document.getElementById('app')
);
