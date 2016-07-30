import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import NavLink from './NavLink'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loggedIn: false};

    this.render = this.render.bind(this);
    this.logoff = this.logoff.bind(this);
  }

  render() {
      var loginLink, accountLink, restaurantsLink, homeLink;

      homeLink = <Link to="/">Home</Link>
      loginLink = <NavLink to="/account/login"> Login</NavLink>;
      accountLink = <NavLink to="/account/create"> Create Account</NavLink>;
      restaurantsLink = '';

      if (this.props.loggedIn) {
          homeLink = ''
          loginLink = <a href="#" onClick={this.logoff}>Logoff</a>
          accountLink = <NavLink to={'/user/' + JSON.parse(sessionStorage.getItem('user')).userId}>My Account</NavLink>
          restaurantsLink = <NavLink to="/restaurants">Recommendations</NavLink>
      }

    return (
      <div className="header">
        {homeLink}
        {homeLink ? ' | ': ''}
        {accountLink} |
        {loginLink}
        {restaurantsLink ? ' | ' : ''}
        {restaurantsLink}
      </div>
    );
  }

  logoff (e) {
      e.preventDefault()
      
      sessionStorage.removeItem('user');
      browserHistory.push('/');
  }
}
