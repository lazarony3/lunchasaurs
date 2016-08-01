import React from 'react'
import {Link} from 'react-router'

export default class FoodTypeSelectionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItem: props.foodItemPreference
    };
    this.render = this.render.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
      var newState = {
        foodItem: {
          title: this.state.foodItem.title,
          selected: event.target.value === 'on'
        }
      };

      this.setState(newState);
  }
  render() {
    return (
      <li key={ this.props.index }>
        <input type="checkbox"
          checked={this.state.foodItem.selected}
          onClick={this.handleOnChange}/>
        {this.state.foodItem.title}
      </li>
    );
  }
}
