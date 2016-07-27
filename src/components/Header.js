import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
      <div class="header">
        <Link to="/">Home</Link> |
        <Link to="/CreateAccount"> Create Account</Link> |
        <Link to="/Login"> Login</Link>
      </div>
    );
  }
}
