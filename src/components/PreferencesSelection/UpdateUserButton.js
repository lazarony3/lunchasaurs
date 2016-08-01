import React from 'react'
import {browserHistory} from 'react-router'

export default class UpdateUserButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateField: props.updateField,
      updateData: props.updateData,
      userId: props.userId
    };
    this.render = this.render.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    if (users[this.state.userId]) {
      let user = users[this.state.userId];

      user.preferences[this.state.updateField] = this.state.updateData;

      users[this.state.userId] = user;
      localStorage.setItem('users', JSON.stringify(users));
      sessionStorage.setItem('user', JSON.stringify(user));
      browserHistory.push('/user/' + user.userId);
    }
  }
  render() {
    let style = {
      backgroundColor: '#b3ffe0',
      borderRadius: '5px',
      outline: 'none',
      border: '2px solid #00995c',
      minHeight: '30px'
    };
    return (
      <button onClick={this.handleClick} style={style}>Save Changes</button>
    );
  }
}
