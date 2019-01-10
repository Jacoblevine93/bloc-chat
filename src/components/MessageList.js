import React, { Component } from 'react';
import Moment from 'react-moment';
import './MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
      newMessage: ""
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

  handleChange=(e)=> {
    this.setState({newMessage: e.target.value});
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    var user = this.props.currentUser;
    if (user !== 'Guest') {user = this.props.currentUser.displayName}
    var newMessage = {
      username: user,
      content: this.state.newMessage,
      roomID: this.props.currentRoom,
      timeStamp: this.props.firebase.database.ServerValue.TIMESTAMP,
    }

      this.messagesRef.push(newMessage);
      this.setState({newMessage: ''});
  }

    render() {
      return (
        <section id="message-list-section">
        <h1>{this.props.currentRoom.name}</h1>
        <div id="#message-list-holder">
        <ul className="message-list pre-scrollable">
        {this.state.messageList.filter(message => message.roomID === this.props.currentRoom.key).map((message, index) =>
        <div class="messages" key={index}>
        <table className="message-table" width="100%">
        <tr>
        <td className="username"><b>{message.username}</b></td>
        <td className="timestamp"><i><Moment format="h:mm a">{message.timeStamp}</Moment></i></td>
        </tr>
        <tr>
        <td className="message-content">{message.content}</td>
        </tr>
        </table>
        </div>
        )}
        </ul>
        </div>
        <form class="form-inline" onSubmit={this.handleSubmit}>
        <input id="message-field" class="form-control input-lg" placeholder="Write your message here..." type="text" onChange={this.handleChange} value={this.state.newMessage} />
        <button id="submit-button" type="submit">Send</button>
        </form>
        </section>
      )
    }
  }

export default MessageList;
