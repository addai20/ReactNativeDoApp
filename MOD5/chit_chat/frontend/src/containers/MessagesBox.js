import React, { Component } from 'react';
import Message from '../components/Message'

class MessagesBox extends Component {
  render(){
    return(
      <div className="messagesBox">
        {this.props.messages ? this.props.messages.filter((msg) => msg.sender_id === this.props.currentUser.id || msg.receiver_id === this.props.currentUser.id).map((msg)=>{
          return (
          <div>
            <Message
              key={msg.id}
              sender={msg.sender_id}
              receiver={msg.receiver_id}
              text={msg.text_body}
              deleteMessage={this.props.deleteMessage}
            />
          </div>
        )

      })
    : null}
      </div>
    )
  }
}

export default MessagesBox
