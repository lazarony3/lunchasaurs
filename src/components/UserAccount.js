import React from 'react'
import {Link} from 'react-router'
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
  }
  render() {
    return (
        <FoodTypeSelectionList user={this.state.user}></FoodTypeSelectionList>
    );
  }
}
