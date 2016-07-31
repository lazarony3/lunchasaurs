import React from 'react'
import CreateAccount from '../components/CreateAccount'
import {browserHistory} from 'react-router'
import YelpData from '../yelpData.js'

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
      var yelpDataObj = new YelpData(),
          foodCategories = yelpDataObj.foodCategories;

      var users = JSON.parse(localStorage.getItem('users')) || [],
          userId = users.length;

      user.userId = userId;
      user.preferences = {
        foodCategories: foodCategories.map(function(food) {
          return {
            title: food,
            selected: false
          };
        })
      }

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      sessionStorage.setItem('user', JSON.stringify(user));
      browserHistory.push('/user/' + user.userId);
  };
}
