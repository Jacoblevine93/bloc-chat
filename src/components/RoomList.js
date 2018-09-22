import React, { Component } from 'react';
import './RoomList.css';

 class RoomList extends Component {
   constructor(props) {
     super(props);

     this.state = {
       rooms: [],
       newRoomName: ""
    };

     this.roomsRef = this.props.firebase.database().ref('rooms');

   }

     componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({rooms: this.state.rooms.concat(room)})
        });
    }

    handleChange=(e)=> {
      this.setState({newRoomName: e.target.value});
    }

    handleSubmit=(e)=> {
      e.preventDefault();
      this.roomsRef.push({name: this.state.newRoomName});
      this.setState({newRoomName: ''});
    }

    render() {
      return (
        <div id="room-list-section">
        <h1 id="title-tag"> Bloc Chat</h1>
        <ul className="room-list">
        {this.state.rooms.map((room) =>
        <div id="rooms" onClick={() => this.props.setActiveRoom(room)} key={room.key}>{room.name}</div>
        )}
        </ul>
        <form onSubmit={this.handleSubmit}>
        <label>
        Chat Room Name: &nbsp;
        <input type="text" value={this.state.newRoomName} onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}

export default RoomList;
