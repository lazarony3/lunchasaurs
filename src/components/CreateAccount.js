import React from 'react'


export default class CreateAccount extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.render = this.render.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addUserToStorage = this.addUserToStorage.bind(this);
    }
    
    render() {
        return (
            <div>
                Name: <input type="text" id="name" onChange={this.handleInputChange} value={this.state.name} placeholder="name (required)"/>
                Email: <input type="email" id="email" onChange={this.handleInputChange} value={this.state.email} placeholder="email (required)"/>
                Password: <input type="password" id="password" onChange={this.handleInputChange} value={this.state.password} placeholder="*********"/>
                <button onClick={this.handleClick} disabled={!this.state.name || !this.state.email || !this.state.password}>Create</button>
            </div>
        );
    };
    
    handleInputChange(event) {
        var newState = {};
        
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }
    
    handleClick () {
        var user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        
        this.addUserToStorage(user);
    };
    
    addUserToStorage (user) {
        var users = localStorage.getItem('users') || [];
        
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };
}
