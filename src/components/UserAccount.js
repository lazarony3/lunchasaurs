import React from 'react'
import {Link, browserHistory} from 'react-router'
import Header from './Header.js'
import FoodTypeSelectionList from './FoodTypeSelectionList.js'

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
            Welcome {this.state.user.name}! {preferencesText}
            {this.props.children}
        </div>
    );
  }
  
  navigateToPrefs (e) {
      e.preventDefault();
      this.state.user.preferencesSet = true;
      browserHistory.push('/preferences/cuisine') ;
  }
}
