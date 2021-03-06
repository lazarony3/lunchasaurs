import React from 'react'
import {Link} from 'react-router'
import FoodTypeSelectionItem from './FoodTypeSelectionItem.js'
import UpdateUserButton from './UpdateUserButton'

export default class FoodTypeSelectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      preferences: props.user.preferences.foodCategories
    };
    this.render = this.render.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }
  updateItems (item, index) {
    let newState = {
      user: this.state.user,
      preferences: this.state.preferences
    }
    newState.preferences[index] = item;

    this.setState(newState);
  }
  render() {
    let style = {
      'backgroundColor': '#00e68a',
      'maxHeight': '500px',
      'overflowX': 'auto'
    };
    let self = this;
    return (
      <div style={style}>
        <UpdateUserButton updateField="foodCategories" updateData={this.state.preferences} userId={this.state.user.userId}></UpdateUserButton>
        <ul>
          {this.state.preferences.map(function(foodItemPreference, index){
            return <FoodTypeSelectionItem
                          foodItemPreference={foodItemPreference}
                          index={index}
                          updateItems={self.updateItems}>
                    </FoodTypeSelectionItem>;
          })}
        </ul>
      </div>
      );
  }
}
