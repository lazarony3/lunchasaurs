import React from 'react'
import DistanceItem from './DistanceItem.js'
import UpdateUserButton from './UpdateUserButton'

export default class Distances extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = {
      user: user
    };
    this.render = this.render.bind(this);
  }
  render() {
    var self = this;
    let style = {
      'backgroundColor': '#00e68a',
      'maxHeight': '500px',
      'overflowX': 'auto'
    };
    return (
        <div style={style}>
            <UpdateUserButton updateField="distances" updateData={this.state.user.preferences.distances} userId={this.state.user.userId}></UpdateUserButton>
            Step three: How far would you like to go?
            <ul>
            {this.state.user.preferences.distances.map(function(distance, index){
                return <DistanceItem distanceItem={distance} index={index}></DistanceItem>
            })}
            </ul>
        </div>
    );
  }
}
