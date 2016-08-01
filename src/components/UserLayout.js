import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          <Header loggedIn={true}></Header>
          <hr/>

          <div className="content-wrap">
            <div className="content-container">
                {this.props.children}
            </div>
          </div>

          <Footer></Footer>
        </div>

      );
  }
}
