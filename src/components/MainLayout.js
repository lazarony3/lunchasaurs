import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'
import RestaurantSearchWrapper from '../wrappers/RestaurantSearchWrapper.js'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          <Header></Header>
          <hr/>
          <div>
            {this.props.children}
            <RestaurantSearchWrapper></RestaurantSearchWrapper>
          </div>

          <div>
          </div>
        </div>
      );
  }
}
