import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

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
      loginLink = <Link to="/account/login"> Login</Link>;
      accountLink = <Link to="/account/create"> Create Account</Link>;
      restaurantsLink = '';

      if (this.props.loggedIn) {
          homeLink = ''
          loginLink = <a href="#" onClick={this.logoff}>Logoff</a>
          accountLink = <Link to={'/user/' + JSON.parse(sessionStorage.getItem('user')).userId}>My Account</Link>
          restaurantsLink = <Link to="/restaurants">Recommendations</Link>
      }

    return (
      <div class="header">
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
