import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div className="home-container">
            <Link to="/account/create" className="cta-card">
                <div>
                    <h2>Sign up for Lunchasaurs!</h2>
                    <div>Create an account today..</div>
                </div>
            </Link>
            
            <Link to="/account/login" className="cta-card">
                <div>
                    <h2>Already have an account?</h2>
                    <div>Login now!</div>
                </div>
            </Link>
        </div>
      );
  }
}
