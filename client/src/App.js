import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import Login from './components/login.js'
import './App.css';

class App extends Component {
  render() {
    let lastLoginFailed = true;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path='/login' component={(props) => <Login {...props} lastLoginFailed={lastLoginFailed} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
