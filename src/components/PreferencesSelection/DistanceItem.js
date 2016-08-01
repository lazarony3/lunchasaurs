import React from 'react'

export default class DistanceItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: props.distanceItem
    };
    this.render = this.render.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
      var newState = {
        distance: {
          distance: this.state.distance.distance,
          selected: event.target.checked
        }
      };

      this.props.updateItems(newState.distance, this.props.index);
      this.setState(newState);
  }
  render() {
    return (
      <li key={ this.props.index }>
        <input type="checkbox"
          checked={this.state.distance.selected}
          onClick={this.handleOnChange}/>
        {this.state.distance.distance}
      </li>
    );
  }
}
