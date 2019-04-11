import React, { Component } from 'react';

class Message extends Component {

  render(){
    return(
      <div>
        <p>{this.props.sender}</p> <p>{this.props.text}</p>
        <button onClick={(e)=>this.props.deleteMessage(e)}> - </button>
      </div>
    )
  }
}

export default Message
