import React from 'react';
import {render} from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
// import configureStore from './store/configureStore';
import MainLayout from './components/MainLayout';
import Splash from './components/Splash';
// import UserContainer from './containers/UserContainer';
// import UserDetails from './components/UserDetails';

render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={Splash} />

  </Route>
</Router>
, document.getElementById('app')
);

// <Route path="/users" component={UserContainer} />
// <Route path="/users/:id" component={UserDetails} />
