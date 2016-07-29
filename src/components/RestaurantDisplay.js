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
        {this.state.restaurants.businesses.map(function(business, index){
          return <li key={ index }>{business.name}</li>;
        })}
      </ul>
    );
  }
}
