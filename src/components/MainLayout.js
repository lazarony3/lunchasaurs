import React from 'react'
import {Link} from 'react-router'

export default class MainLayout extends React.Component {

  render() {
    return (
        <div>
          <span>
          </span>

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
