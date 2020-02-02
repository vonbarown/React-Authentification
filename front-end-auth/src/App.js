import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PrivateRoute } from './Components/PrivateRoute';
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import AuthContainer from './Containers/AuthContainer'
import Users from './Components/Users'
import axios from 'axios'

import './App.css';

class App extends React.Component {

  state = {
    user: null,
    isUserLoggedIn: false
  }

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true
    })
  }
  logoutUser = async () => {
    try {
      await axios.get('/auth/logout')
      this.setState({
        user: null,
        isUserLoggedIn: false
      })
      this.props.history.push('/')
    } catch (error) {
      console.log('error', error);
    }
  }

  checkUserIsLoggedIn = async () => {
    try {
      const { data } = await axios.get('/auth/isUserLoggedIn')
      this.setUser(data.payload)
    } catch (error) {

    }
  }

  renderAuthContainer = (routeProps) => <AuthContainer setUser={this.setUser}{...routeProps} isUserLoggedIn={this.state.isUserLoggedIn} />

  render() {
    return (
      <div className="App">
        <Navbar logoutUser={this.logoutUser}
          isUserLoggedIn={this.state.isUserLoggedIn}
        />
        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <PrivateRoute path='/users' component={Users} isUserLoggedIn={this.state.isUserLoggedIn} />
          <PrivateRoute path='/profile' component={Users} isUserLoggedIn={this.state.isUserLoggedIn} />

          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
