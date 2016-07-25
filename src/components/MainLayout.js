import React from 'react'
import {Link} from 'react-router'

export default class MainLayout extends React.Component {

  render() {
    return (
        <div>
        <Link to="/CreateAccount">Create Account</Link>
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
