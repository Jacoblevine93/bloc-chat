import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

this.roomsRef = this.props.firebase.database().ref('messages');

  }














    render() {
      return (
        <div>
        <h1>test</h1>
        </div>
      )
    }
  }

export default MessageList;
