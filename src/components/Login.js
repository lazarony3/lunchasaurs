import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       username: '',
       password: ''
     };
     this.render = this.render.bind(this);
     this.handleUsernameChange = this.handleUsernameChange.bind(this);
     this.handlePasswordChange = this.handlePasswordChange.bind(this);
     this.logUserIn = this.logUserIn.bind(this);
    }
    handleUsernameChange (event) {
      this.setState({
        username: event.target.value
      });
    }
    handlePasswordChange (event) {
      this.setState({
        password: event.target.value
      });
    }
    logUserIn (event) {
      var self = this, loggedIn = false;
      event.preventDefault();
      var users = JSON.parse(localStorage.getItem('users')) || [];

      users.forEach(function(user) {
        if (user.name === self.state.username && user.password === self.state.password ) {
          alert("Logging in.");
          loggedIn = true;
        }
      });
      if (!loggedIn) {
        alert("Failed Login");
      }
    }
  render() {
    return (
      <form onSubmit={this.logUserIn}>
        <label htmlFor="name">Username: </label>
        <input id="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        <label htmlFor="email">Password: </label>
        <input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
