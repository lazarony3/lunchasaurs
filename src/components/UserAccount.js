import React from 'react'
import {Link, browserHistory} from 'react-router'
import Header from './Header.js'
import FoodTypeSelectionList from './FoodTypeSelectionList.js'

export default class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = {
      user: user,
      selectedRestaurant: ''
    };
    this.render = this.render.bind(this);
    this.navigateToPrefs = this.navigateToPrefs.bind(this);
    this.pickRandomRestaurant = this.pickRandomRestaurant.bind(this);
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
            <div>Or if you are feeling lucky?<button onClick={this.pickRandomRestaurant}>Get to Lunch</button></div>
            <div style={this.state.selectedRestaurant ? {display: 'block'} : {display: 'none'}}>You should get {this.state.selectedRestaurant}</div>   
        </div>
    );
  }
  
  navigateToPrefs (e) {
      e.preventDefault();
      this.state.user.preferencesSet = true;
      browserHistory.push('/preferences/cuisine') ;
  }
  pickRandomRestaurant(e) {
      var restaurants = ['Qdoba', 'City Barbeque', 'Jason\'s Deli', 'Manaas', 'Schmitd\'s'],
        selectedIndex = Math.floor(Math.random() * restaurants.length);
        
        this.setState({
            selectedRestaurant: restaurants[selectedIndex]
        });  
  }
}
