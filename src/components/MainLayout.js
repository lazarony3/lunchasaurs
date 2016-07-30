import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'
import RestaurantSearchWrapper from '../wrappers/RestaurantSearchWrapper.js'
import Footer from './Footer'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          <Header id={this.props.params.userId}></Header>
          <hr/>
          <div className="content-wrap">
            <div className="content-container">
                {this.props.children}
            </div>
          </div>
          <div>
          </div>
          <hr/>
          <Footer/>
        </div>
      );
  }
}
