import React from 'react'
import {Link} from 'react-router'

export default class NoMatch extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          Oops! Something went wrong!
        </div>
      );
  }
}
