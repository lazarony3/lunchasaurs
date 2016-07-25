import React from 'react'


export default class CreateAccount extends React.Component {
        
        render() {
            var self = this;
            return (
                <div>
                    Name: <input type="text" id="name" />
                    Email: <input type="email" id="email" />
                    Password: <input type="password" id="password" />
                    <button onClick={self.handleClick}>Create</button>
                </div>
            )
        };
        
        handleClick (e) {
            e.preventDefault();
            var newUser = {};
            
            newUser.name = $('#name').val();
            newUser.email = $('#email').val();
            newUser.password = $('#password').val();
            
            this.addUserToStorage(newUser);
        }
        
        addUserToStorage (user) {
            var users = JSON.stringify(localStorage.getItem('users')) || [];
            
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
}
