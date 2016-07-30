import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'

export default class FoodTypeSelectionList extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          <Header loggedIn={true}></Header>
          <hr/>
          <div>Welcome to your account</div>
          <div className="content-wrap">
            <div className="content-container">
                {this.props.children}
            </div>
          </div>
          <div>
          </div>
        </div>
      );
  }
}
