import React, { Component } from 'react';
import FriendWidget from '../components/FriendWidget'

class FriendsList extends Component {

  render(){
    return(

      <div className ="friendsList">

        <div className="ui horizontal list"> Radio Buttons Here </div>
        // NOTE: map through friends list here
        {this.props.allUsers.filter(u => u.id != this.props.currentUser.id).map((usr)=>{
          return(
            <FriendWidget
              userInfo={usr}
              key={usr.id}
              friendClickHandler={this.props.friendClickHandler}
              />
          )
        })}

      </div>
    )
  }
}

export default FriendsList
