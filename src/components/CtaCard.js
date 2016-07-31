import React from 'react'
import {Link} from 'react-router'

export default class CtaCard extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
            <Link to={this.props.to} className="cta-card">
                <div>
                    <h2>{this.props.heading}</h2>
                    <div>{this.props.message}</div>
                </div>
            </Link>
      );
  }
}