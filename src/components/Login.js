import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    loginHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render () {
        return (
            <div>
                <h4>Username <input type="text" name="username" value={this.state.username} onChange={this.loginHandler}/></h4>
                <h4>Password <input type="password" name="password" value={this.state.password} onChange={this.loginHandler}/></h4>
                <button onClick={() => this.props.fetchUser(this.state)}>Login</button>
                <br/>
                <br/>
                <button>Create Account</button>
            </div>
        )
    }
}

export default Login;