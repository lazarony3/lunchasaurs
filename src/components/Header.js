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
    Popup.alert("Holy shit");
  }
  render() {
    ReactDOM.render(
      <span>
        <Popup />
        <Link to="/">Home</Link> |
        <Link to="/CreateAccount"> Create Account</Link>
        <button onClick={this.launchLoginDialog}>Login</button>
      </span>
      , document.getElementById('popupContainer')
    );
  }
}
