import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '1',
      username: null

    };
  }

  setActiveRoom=(room)=> {
    this.setState({activeRoom: room.key});
  }

  setUser=(user)=> {
    this.setState({username: user});
  }

  render() {
    return (
      <div className="App">
      <RoomList
      currentRoom={this.state.activeRoom}
      setActiveRoom={this.setActiveRoom}
      firebase={firebase}
        />
      <MessageList
      currentRoom={this.state.activeRoom}
      currentUser={this.state.username}
      firebase={firebase}
        />
      <User
      setUser={this.setUser}
      currentUser={this.state.username}
      firebase={firebase}
        />
      </div>
    );
  }
}

export default App;
