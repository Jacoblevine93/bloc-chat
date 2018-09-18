import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

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
      <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
