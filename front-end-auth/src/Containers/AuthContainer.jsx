import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SigngupForm'

class AuthContainer extends Component {
    state = {
        username: '',
        password: ''
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/signup' component={SignupForm} />
                </Switch>
            </div>
        )
    }
}

export default AuthContainer