import React from 'react'
import PriceRangeItem from './PriceRangeItem.js'
import UpdateUserButton from './UpdateUserButton'

export default class PriceRanges extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = {
      user: user
    };
    this.render = this.render.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }
  updateItems (item, index) {
    let newState = {
      user: this.state.user
    }
    newState.user.preferences.priceRanges[index] = item;

    this.setState(newState);
  }
  render() {
    let self = this;
    let style = {
      'backgroundColor': '#00e68a',
      'maxHeight': '500px',
      'overflowX': 'auto'
    };
    return (
        <div style={style}>
            <UpdateUserButton updateField="priceRanges"
              updateData={this.state.user.preferences.priceRanges}
              userId={this.state.user.userId}>
            </UpdateUserButton>

            Step Two: How much do you want to pay?
            <ul>
              {this.state.user.preferences.priceRanges.map(function(pricePreference, index){
                  return <PriceRangeItem
                            priceItem={pricePreference}
                            index={index}
                            updateItems={self.updateItems}>
                          </PriceRangeItem>
              })}
            </ul>
        </div>
    );
  }
}
