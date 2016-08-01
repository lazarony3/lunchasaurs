import React from 'react'
import NavLink from './NavLink'

export default class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
        <ol>
            <li><NavLink to="/preferences/cuisine">Cuisines</NavLink></li>
            <li><NavLink to="/preferences/pricerange">Prices</NavLink></li>
            <li><NavLink to="/preferences/distance">Distance</NavLink></li>
        </ol>
        {this.props.children}
        </div>
    );
  }
}
