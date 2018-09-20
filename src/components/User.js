import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {this.props.setUser(user);});
  }

  signIn=()=> {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut=()=> {
    this.props.firebase.auth().signOut();
  }

  displayUser=(currentUser)=> {
    if (currentUser !== null) {return currentUser.displayName;}
    else {return 'Guest'}
  }

  render() {
    return (
      <div className="User">
      <p>{this.displayUser(this.props.currentUser)}</p>
      <button onClick={this.signIn}>Sign In</button>
      <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }

}

export default User;
