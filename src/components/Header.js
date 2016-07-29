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

  componentDidMount () {
      var self = this;
      window.ee.addListener('loggedIn', function () {
          console.log('logged in');
          self.setState({
              loggedIn: true
          });
      })
  }

  render() {
      var loginLink, accountLink, restaurantsLink;

      loginLink = <Link to="/Login"> Login</Link>;
      accountLink = <Link to="/CreateAccount"> Create Account</Link>;
      restaurantsLink = '';

      if (this.state.loggedIn) {
          loginLink = <a href="#" onClick={this.logoff}>Logoff</a>
          accountLink = <Link to="/MyAccount">My Account</Link>
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
      this.setState({
          loggedIn: false
      });
  }
}
