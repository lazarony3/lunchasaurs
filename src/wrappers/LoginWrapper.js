import React from 'react'
import Login from '../components/Login'
import {browserHistory} from 'react-router'

export default class LoginWrapper extends React.Component {
    constructor (props) {
        super(props);
    }

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
            window.ee.emitEvent('loggedIn');
            browserHistory.push('/account/users/' + user.userId);
          }
        });
        if (!loggedIn) {
          alert("Failed Login");
        }
    };
}