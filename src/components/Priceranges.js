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
    this.handleOnChange = this.handleOnChange.bind(this);
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
            Step Two: How much do you want to pay?
            <ul>
            {this.state.user.preferences.priceRanges.map(function(price, index){
                return <li><input type="checkbox"
                  checked={price.selected}
                  onClick={self.handleOnChange}/>
                {price.dollarValue}</li>;
            })}
            </ul>
        </div>
    );
  }
  
  handleOnChange(){
      
  }
}
