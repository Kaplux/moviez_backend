import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import { LoginContainer } from './components/login.js'
import { HomeContainer } from './components/home.js'

import './App.css';

class App extends Component {
  render() {
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
          <Route path='/login' component={LoginContainer} />
          <Route path='/' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
