import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'

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
          </div>

          <div>
          </div>
        </div>
      );
  }
}
