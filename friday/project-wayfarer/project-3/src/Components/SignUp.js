import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""   
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    render() {
        return(
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <h2>SignUp</h2>
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="Register" />
        </form>
        )
    }
}

export default SignUp;