import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  
  componentDidMount () {
      window.ee.addListener('loggedIn', function () {
          console.log('logged in');
      })
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
