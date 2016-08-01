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
import About from './components/About'
import ContactUs from './components/ContactUs'
import UserAccount from './components/UserAccount'
import Preferences from './components/Preferences'
import Cuisines from './components/Cuisines'
import PriceRanges from './components/PreferencesSelection/PriceRanges'
import Distances from './components/PreferencesSelection/Distances'


render(
  <Router history={browserHistory}>
    <Route path="/user/:userId" component={UserLayout}>
        <IndexRoute component={UserAccount}/>
        <Route path="/preferences" component={Preferences}>
            <Route path="/preferences/cuisine" component={Cuisines}/>
            <Route path="/preferences/pricerange" component={PriceRanges}/>
            <Route path="/preferences/distance" component={Distances}/>
        </Route>
        <Route path="/restaurants" component={RestaurantSearchWrapper}/>
    </Route>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home}/>
        <Route path="/account/create" component={CreateAccountWrapper} />
        <Route path="/account/login" component={LoginWrapper} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="*" component={NoMatch} />

    </Route>
</Router>
, document.getElementById('app')
);
