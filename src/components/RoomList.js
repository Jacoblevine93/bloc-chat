import React, { Component } from 'react';

 class RoomList extends Component {
   constructor(props) {
     super(props);

     this.state = {
       rooms: [],
       newRoomName: "",
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
        <div>
        <ul className="room-list">
        {this.state.rooms.map((room) =>
        <li onClick={this.props.setActiveRoom} key={room.key}>{room.name}</li>
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
