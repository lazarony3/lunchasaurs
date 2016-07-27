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
      event.preventDefault();

      // this.props.actions.addUser({
      //   name: this.state.name,
      //   email: this.state.email
      // });
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
