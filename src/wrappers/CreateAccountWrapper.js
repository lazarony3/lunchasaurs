import React from 'react'
import CreateAccount from '../components/CreateAccount'
import {browserHistory} from 'react-router'

export default class CreateAccountWrapper extends React.Component {
  constructor (props) {
      super(props);
  }

  render() {
      return (
          <div className="create-account-wrapper">
              <CreateAccount handle={this.addUserToStorage}/>
          </div>
      )
  }


  addUserToStorage (user) {
      var users = JSON.parse(localStorage.getItem('users')) || [],
          userId = users.length;

      user.userId = userId;

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      browserHistory.push('/account/users/' + user.userId);
  };
}
