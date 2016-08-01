import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'
import FoodTypeSelectionList from './FoodTypeSelectionList.js'

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
            Step three: How far would you like to go?
            ****insert distance list here****
        </div>
    );
  }
}
