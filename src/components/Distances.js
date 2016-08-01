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
      var self = this;
      let style = {
        'backgroundColor': '#00e68a',
        'maxHeight': '500px',
        'overflowX': 'auto'
      };
    return (
        <div style={style}>
            Step three: How far would you like to go?
            <ul>
            {this.state.user.preferences.distances.map(function(distance, index){
                return <li><input type="checkbox"
                  checked={distance.selected}
                  onClick={self.handleOnChange}/>
                {distance.distance}</li>;
            })}
            </ul>
        </div>
    );
  }
}
