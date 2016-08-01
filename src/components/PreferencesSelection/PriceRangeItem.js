import React from 'react'

export default class PriceRangeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: props.priceItem
    };
    this.render = this.render.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
      var newState = {
        price: {
          dollarValue: this.state.price.dollarValue,
          text: this.state.price.text,
          selected: event.target.checked
        }
      };

      this.props.updateItems(newState.price, this.props.index);
      this.setState(newState);
  }
  render() {
    return (
      <li key={ this.props.index }>
        <input type="checkbox"
          checked={this.state.price.selected}
          onClick={this.handleOnChange}/>
        {this.state.price.dollarValue}
      </li>
    );
  }
}
