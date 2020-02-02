import React from 'react';
import { Navbar } from './Components/Navbar'
import { Switch, Route } from 'react-router-dom'
import AuthContainer from './Containers/AuthContainer'
import { Home } from './Components/Home'
import { Users } from './Components/Users'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={AuthContainer} />
        <Route path='/signup' component={AuthContainer} />
        <Route path='/users' component={Users} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
