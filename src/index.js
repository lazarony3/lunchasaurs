window.ee = new EventEmitter();

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler, IndexRoute } from 'react-router'
import MainLayout from './components/MainLayout';
import NoMatch from './components/NoMatch';
import CreateAccountWrapper from './wrappers/CreateAccountWrapper';
import LoginWrapper from './wrappers/LoginWrapper';
import RestaurantSearchWrapper from './wrappers/RestaurantSearchWrapper';
import Home from './components/Home'
import UserLayout from './components/UserLayout'


render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home}/>
        <Route path="/account/create" component={CreateAccountWrapper} />
        <Route path="/account/login" component={LoginWrapper} />
        // <Route path="/Restaurants" component={RestaurantSearchWrapper} />
        // <Route path="*" component={NoMatch} />
    </Route>
    <Route path="/user/:userId" component={UserLayout}>
        <Route path="/user/:userId/estaurants" component={RestaurantSearchWrapper}/>
    </Route>
</Router>
, document.getElementById('app')
);
