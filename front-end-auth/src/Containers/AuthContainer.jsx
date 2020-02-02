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

    signupUser = async (user) => {
        try {
            const { data } = await axios.post('/auth/signup', this.state)

            this.props.setUser(data.payload)

        } catch (error) {
            console.log(error);

        }

    }

    loginUser = async () => {
        try {
            const { data } = await axios.post('/auth/login', this.state)

            this.props.setUser(data.payload)
            this.props.history.push('/users')
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