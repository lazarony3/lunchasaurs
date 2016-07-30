import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>About page 
      </div>
    );
  }
}
