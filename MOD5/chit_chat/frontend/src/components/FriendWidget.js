import React, { Component } from 'react';

class FriendWidget extends Component {

  render(){
    // console.log("friendWidget:", this.props);
    return(
      <div className="item" onClick={()=>this.props.friendClickHandler(this.props.userInfo)}>
          <img className="ui mini circular image" src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png"/>
          <div className="content">
            <div className="ui sub header">{`${this.props.userInfo.first_name} ${this.props.userInfo.last_name[0]}.`}</div>
            {`Learning: ${this.props.userInfo.native_language}`}
          </div>
      </div>
    )
  }
}

export default FriendWidget
