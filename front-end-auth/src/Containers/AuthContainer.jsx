import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SigngupForm'
import axios from 'axios'

class AuthContainer extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    signupUser = (user) => {
        console.log('signing up user');

    }

    loginUser = async () => {
        try {
            const { data } = await axios.post('/auth/login', this.state)

            console.log(data);
            this.props.setUser(data.payload)

        } catch (error) {
            console.log(error);

        }
    }

    renderSignupForm = () => {
        const { username, password } = this.state
        return (
            <SignupForm
                handleChange={this.handleChange}
                username={username}
                password={password}
                signupUser={this.signupUser}
            />
        )
    }

    renderLoginForm = () => {
        const { username, password } = this.state
        return (
            <LoginForm
                handleChange={this.handleChange}
                username={username}
                password={password}
                loginUser={this.loginUser}
            />
        )
    }


    render() {
        console.log(this.state);

        return (
            <div>
                <Switch>
                    <Route path='/login' component={this.renderLoginForm} />
                    <Route path='/signup' render={this.renderSignupForm} />
                </Switch>
            </div>
        )
    }
}

export default AuthContainer