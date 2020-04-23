import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '', 
            password: ''
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <TextField hintText="Enter username" floatingLabelText="Username" onChange= {(event, newValue) => this.setState({username:newValue})}/>
                        <br/>
                        <TextField hintText="Enter password" floatingLabelText="Password" onChange= {(event, newValue) => this.setState({password:newValue})}/>
                        <br/>
                        <button type="button">Submit </button>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 20
};

export default Login; 

// handleClick(event) {  
//     var apiBaseUrl = "http://localhost:3000/"; 
//     var self = this; 
//     var payload = {
//         "username": this.state.username,
//         "password": this.state.password
//     }
// }
