import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
      message: {username: "", content: "", sentAt: "", roomID: ""}
   };

    this.roomsRef = this.props.firebase.database().ref('Messages');

  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       message.username = snapshot.username;
       message.roomID = snapshot.roomID;
       message.content = snapshot.content;
       message.sentAt = snapshot.sentAt;
       console.log(message);
       this.setState({messageList: this.state.messageList.concat(message)})
     });
  }

    render() {
      console.log(this.props.currentRoom);
      return (
        <div>
        <ul className="message-list">
        {this.state.messageList.filter(message => message.roomID === this.props.currentRoom.roomID).map((message, index) =>
        <li key={index}>{JSON.stringify(message)}</li>
        )}
        </ul>
        <h1>test</h1>
        </div>
      )
    }
  }

export default MessageList;
