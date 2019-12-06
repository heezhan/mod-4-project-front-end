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
                <video autoPlay muted loop id="video">
                    <source src="https://www.videvo.net/videvo_files/converted/2018_05/preview/180419_Boxing_02_04.mp470839.webm" type="video/mp4" />
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