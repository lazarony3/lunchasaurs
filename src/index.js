import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import MainLayout from './components/MainLayout';
import Splash from './components/Splash';
import NoMatch from './components/NoMatch';
import CreateAccountWrapper from './wrappers/CreateAccountWrapper';
import LoginWrapper from './wrappers/LoginWrapper';
import RestaurantSearchWrapper from './wrappers/RestaurantSearchWrapper';

render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={Splash} />
    <Route path="/CreateAccount" component={CreateAccountWrapper} />
    <Route path="/Login" component={LoginWrapper} />
    <Route path="/Restaurants" component={RestaurantSearchWrapper} />
    <Route path="*" component={NoMatch} />
  </Route>
</Router>
, document.getElementById('app')
);
