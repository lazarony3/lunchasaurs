import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import NavLink from './NavLink'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className="footer">
        <NavLink to="/about">About Lunchasaurs</NavLink> | 
        <NavLink to="/contact"> Contact Us</NavLink>
      </div>
    );
  }
}
