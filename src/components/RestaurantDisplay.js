import React from 'react';

export default class RestaurantDisplay extends React.Component {
  constructor(props) {
     super(props);
     this.render = this.render.bind(this);
     this.state = {
       restaurants: this.props.searchForRestaurants()
     };
  }
  render() {
    return (
      <ul>
        {this.state.restaurants.businesses.map(function(business, index){
          return <li key={ index }>{business.name}<br/><img src={business.image_url} /></li>;
        })}
      </ul>
    );
  }
}
