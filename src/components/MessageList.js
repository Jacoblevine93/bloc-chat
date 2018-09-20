import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
      message: {username: "", content: "", sentAt: "", roomID: ""}
   };

    this.messagesRef = this.props.firebase.database().ref('Messages');

  }

  componentDidMount() {
     this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({messageList: this.state.messageList.concat(message)})
     });
  }

    render() {
      console.log(this.props.currentRoom)
      return (
        <div>
        <ul className="message-list">
        {this.state.messageList.filter(message => message.roomID === this.props.currentRoom).map((message, index) =>
        <div key={index}>{message.username}{message.content}{message.sentAt}</div>
        )}
        </ul>
        <h1>test</h1>
        </div>
      )
    }
  }

export default MessageList;
