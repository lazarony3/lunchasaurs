import React from 'react'

export default class RandomRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRestaurant: false
    };
    this.render = this.render.bind(this);
    this.pickRandomRestaurant = this.pickRandomRestaurant.bind(this);
  }
  render() {
    return (
        <div>
            <div>Or if you are feeling lucky?<button onClick={this.pickRandomRestaurant}>Get to Lunch</button></div>
            <div style={this.state.selectedRestaurant ? {display: 'block'} : {display: 'none'}}>You should get {this.state.selectedRestaurant}</div>
        </div>
    );
  }

  pickRandomRestaurant(e) {
      var restaurants = ['Qdoba', 'City Barbeque', 'Jason\'s Deli', 'Bibibop', 'Manaas', 'Schmitd\'s'],
        selectedIndex = Math.floor(Math.random() * restaurants.length);

        this.setState({
            selectedRestaurant: restaurants[selectedIndex]
        });
  }
}
