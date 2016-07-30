import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loggedIn: false};

    this.render = this.render.bind(this);
    this.logoff = this.logoff.bind(this);
  }

  render() {
      var loginLink, accountLink, restaurantsLink;

      loginLink = <Link to="/account/login"> Login</Link>;
      accountLink = <Link to="/account/create"> Create Account</Link>;
      restaurantsLink = '';

      if (this.props.id) {
          loginLink = <a href="#" onClick={this.logoff}>Logoff</a>
          accountLink = <Link to="/account/users/${this.props.id}">My Account</Link>
          restaurantsLink = <Link to="/Restaurants">Recommendations</Link>
      }

    return (
      <div class="header">

        <Link to="/">Home</Link> |
        {accountLink} |
        {loginLink}
        {restaurantsLink ? ' | ' : ''}
        {restaurantsLink}
      </div>
    );
  }

  logoff (e) {
      e.preventDefault()
      browserHistory.push('/');
      window.ee.emitEvent('logoff');
  }
}
