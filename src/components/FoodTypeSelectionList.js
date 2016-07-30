import React from 'react'
import {Link} from 'react-router'
import FoodTypeSelectionItem from './FoodTypeSelectionItem.js'

export default class FoodTypeSelectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preferences: props.user.preferences.foodCategories
    };
    this.render = this.render.bind(this);
  }
  render() {
    let style = {
      'backgroundColor': '#00e68a',
      'maxHeight': '500px',
      'overflowX': 'auto'
    };
    return (
      <div style={style}>
        <ul>
          {this.state.preferences.map(function(foodItemPreference, index){
            return <FoodTypeSelectionItem foodItemPreference={foodItemPreference} index={index} ></FoodTypeSelectionItem>;
          })}
        </ul>
      </div>
      );
  }
}
