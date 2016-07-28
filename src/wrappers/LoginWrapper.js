import React from 'react'
import Login from '../components/Login'

export default class LoginWrapper extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <Login logUserIn={this.logUserIn}/>
            </div>
        )
    }
    
    
    logUserIn (data) {
        var self = this, loggedIn = false;
        var users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(function(user) {
          if (user.username === data.username && user.password === data.password ) {
            loggedIn = true;
            sessionStorage.setItem('user', JSON.stringify(user));
          }
        });
        if (!loggedIn) {
          alert("Failed Login");
        }
    };
}