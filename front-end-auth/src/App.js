import React from 'react';
import { Navbar } from './Components/Navbar'
import { Switch, Route } from 'react-router-dom'
import AuthContainer from './Containers/AuthContainer'
import { Home } from './Components/Home'
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
    } catch (error) {
      console.log('error', error);
    }
  }

  renderAuthContainer = () => <AuthContainer setUser={this.setUser} />

  render() {
    return (
      <div className="App">
        <Navbar logoutUser={this.logoutUser}
          isUserLoggedIn={this.state.isUserLoggedIn}
        />
        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
