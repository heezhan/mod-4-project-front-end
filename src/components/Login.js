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
                <video autoPlay muted loop id="video" controls width="100%">
                    <source src={require("./boxing.mp4")} type="video/mp4"/>
                </video>

                <div className="content">
                    <h4>Username <input type="text" name="username" value={this.state.username} onChange={this.loginHandler}/></h4>
                    <h4>Password <input type="password" name="password" value={this.state.password} onChange={this.loginHandler}/></h4>
                    <button onClick={() => this.props.fetchUser(this.state)}>Login</button>
                    <br/>
                    <br/>
                    <button onClick={() => this.props.fetchUser(this.state)}>Create Account</button>
                </div>
                
            </div>
        )
    }
}

export default Login;