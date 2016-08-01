import React from 'react'
import {Link, browserHistory} from 'react-router'
import Header from './Header.js'
import RandomRestaurant from './RandomRestaurant'

export default class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = {
      user: user
    };
    this.render = this.render.bind(this);
    this.navigateToPrefs = this.navigateToPrefs.bind(this);
  }
  render() {
      var preferencesText = ''
      if(!this.state.user.preferencesSet){
        preferencesText = <span>We noticed you are new here. Please set your <a href="#" onClick={this.navigateToPrefs}>Preferences</a></span>
      }
    return (
        <div>
            <h2>Welcome {this.state.user.name}!</h2>
            <div>{preferencesText}</div>
            <RandomRestaurant/>
        </div>
    );
  }

  navigateToPrefs (e) {
      e.preventDefault();
      this.state.user.preferencesSet = true;
      browserHistory.push('/preferences/cuisine') ;
  }
}
