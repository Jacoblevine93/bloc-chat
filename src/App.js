import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBSSLizzuR528vMP4u3PB04pXJrDdc_dno",
    authDomain: "bloc-chat-90637.firebaseapp.com",
    databaseURL: "https://bloc-chat-90637.firebaseio.com",
    projectId: "bloc-chat-90637",
    storageBucket: "bloc-chat-90637.appspot.com",
    messagingSenderId: "141815988728"
  };
  firebase.initializeApp(config);

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
      </div>
    );
  }
}

export default App;
