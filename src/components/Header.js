import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import Popup from 'react-popup';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.launchLoginDialog = this.launchLoginDialog.bind(this);
  }
  launchLoginDialog() {
    Popup.create({
      title: "Login",
      content: '<LoginPopup></LoginPopup>',
      buttons: {
          left: [{}, ...],
          right: [{}, ...]
      },
      className: null, // or string
      noOverlay: true, // hide overlay layer (default is false, overlay visible)
      position: {x: 0, y: 0} // or a function, more on this further down
    });
  }
  render() {
    return (
      <span>
        <Popup />
        <Link to="/">Home</Link> |
        <Link to="/CreateAccount"> Create Account</Link> |
        <button onClick={this.launchLoginDialog}>Login</button>
      </span>
    );
  }
}
