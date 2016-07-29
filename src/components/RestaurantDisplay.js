import React from 'react';

export default class RestaurantDisplay extends React.Component {
  constructor(props) {
     super(props);
     this.render = this.render.bind(this);
     this.state = {
       restaurants: this.props.searchForRestaurants()
     };
     console.log(this.state);
  }
  render() {
    return (
      <ul>

      </ul>
    );
    // {this.state.restaurants.businesses.map(function(name, index){
    //             return <li key={ index }>{name}</li>;
    //           })}
  }
}
