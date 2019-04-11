import React, { Component } from 'react';
import TranslationContainer from '../containers/TranslationContainer'
import MessagesBox from '../containers/MessagesBox'

class MessageContainer extends Component{

  sendMessageHandler = (event)=>{
    this.props.messageHandler(event)
  }

  render(){
    return(
      <div>
        <MessagesBox
          messages={this.props.messages}
          currentUser={this.props.currentUser}
          deleteMessage={this.props.deleteMessage}
        />
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Write a message!" aria-label="Recipient's username" aria-describedby="button-addon2"
          onChange={(event)=>this.props.messageHandler(event)} value={this.props.currentMessage}
          />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={()=>this.props.messageSender()} id="button-addon2">Send</button>
            </div>
        </div>
        <TranslationContainer/>
      </div>
    )
  }

}

export default MessageContainer;
