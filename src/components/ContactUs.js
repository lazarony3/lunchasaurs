import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        name: '',
        email: '',
        comment: ''
    }
    this.render = this.render.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Love us? Hate us? We want to hear what you have to say!</h2>
        <form onSubmit={this.submitForm}>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
          <label htmlFor="comment">comment: </label>
          <textarea id="comment" value={this.state.comment} onChange={this.handleInputChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  
  
  handleInputChange(event) {
      var newState = {};

      newState[event.target.id] = event.target.value;
      this.setState(newState);
  }
  
  submitForm () {
      event.preventDefault();
      var comments = JSON.parse(localStorage.getItem('comments')) || [],
      
      comment = {
          name: this.state.name,
          email: this.state.email,
          comment: this.state.comment
      }
      
      comments.push(comment);
      
      localStorage.setItem('comments', JSON.stringify(comments));
      alert('Thank you, we Value your feedback.')
      browserHistory.push('/')
  }
}
