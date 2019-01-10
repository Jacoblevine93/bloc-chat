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
        if (!this.props.activeRoom) this.props.setActiveRoom(room);
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
      //$('#myModal').modal('hide');
      //document.getElementById('myModal').modal('hide');
    }

    render() {
      return (
        <div id="room-list-section">
          <div class="align-middle">
          <h1 id="title-tag"> Bloc Chat</h1>
          <button type="button" id="modal-button" data-toggle="modal" data-target="#myModal">New Room</button>
          <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"></h4>
              </div>
              <div class="modal-body">
              <form onSubmit={this.handleSubmit}>
              <label>
              Chat Room Name: &nbsp;<br />
              <input type="text" value={this.state.newRoomName} onChange={this.handleChange} required />
              </label>
              <input class="btn btn-default" type="submit" value="Submit" />
              </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <ul className="room-list">
        {this.state.rooms.map((room) =>
        <div id="rooms" onClick={() => this.props.setActiveRoom(room)} key={room.key}>{room.name}</div>
        )}
        </ul>
        </div>
      );
    }
}

export default RoomList;
