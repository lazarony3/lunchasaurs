import React from 'react'
import {Link} from 'react-router'
import FoodTypeSelectionList from './PreferencesSelection/FoodTypeSelectionList.js'

export default class Cuisines extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = {
      user: user
    };
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
            Step one: What type of cuisine do you enjoy?
            <FoodTypeSelectionList user={this.state.user}></FoodTypeSelectionList>
        </div>
    );
  }
}
