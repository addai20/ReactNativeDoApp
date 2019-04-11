import React, { Component } from 'react';
import Header from '../components/Header'
import MessageContainer from '../containers/MessageContainer'
import FriendsList from '../containers/FriendsList'

class MainContent extends Component {
  //does state need to live here as well??
  constructor(){
    super()

    this.state = {
      currentUser: {},
      masterMessages: [],
      messages: [],
      currentMessage: "",
      selectedUser: {},
      allUsers: [],
      currentConversation: {}
    }
  }

  componentDidMount(){
    // messages are statically fetched for skateboard

    // fetch('http://localhost:3000/users/1/messages')
    //   .then((resp)=>{
    //     return resp.json()
    //   })
    //   .then((messages)=>{
    //     console.log(messages);
    //     this.setState({messages: messages})
    //   })

    // Promise.all allows multiple fetches to be done simultaneously, see below link
    // https://medium.com/@ahnahn.un/a-brief-intro-to-promise-all-92291d93780c
    Promise.all([
      fetch('http://localhost:3000/users/1'),
      fetch('http://localhost:3000/users/1/messages'),
      fetch('http://localhost:3000/users')

    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([userInfo, messages, allUsers])=>{
      console.log(userInfo);
      console.log(messages);
      console.log(allUsers);

      return this.setState({
        currentUser: userInfo,
        messages: messages,
        masterMessages: messages,
        allUsers: allUsers,
      })
    })
  }

  friendClickHandler = (userObj) =>{
    console.log(userObj);
    console.log("friendClickHandler invoked!");

    // debugger
    // get master messages for reset
    let masterMessages = this.state.masterMessages

    // update messages with mssgs from current user and clicked person
    let currentUser = this.state.currentUser.id
    let msgsCopy = this.state.messages
    let recipient = userObj

    // filter messages for sender receiver combo

    let filteredMsgs = masterMessages.filter((msg)=> {
        return msg.sender_id === currentUser && msg.receiver_id === recipient.id
    })

    // debugger

    this.setState({messages: filteredMsgs})

    // return filteredMsgs
  }

  deleteMessage = (e) => {
    console.log("deleteMessage Invoked", e);
    debugger
  }

  messageHandler = (e) => {
    console.log(e);
    // debugger
    console.log("messageHandler invoked");

    this.setState({currentMessage: e.target.value})

    // way to access message text
    // let message = event.target.parentElement.parentElement.children[0].value
  }

  messageSender = () =>{
    console.log("messageSender Invoked!");

    // capture current message & sender from state
    let message = this.state.currentMessage
    let sender = this.state.currentUser.id
    let data = {receiver_id: 2, seen: false, sender_id: sender, text_body: message}

    fetch('http://localhost:3000/users/1/messages', {
      method:'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
    .then(response => {
      console.log('Success')
      let copyOfMsgs = [...this.state.messages]
      copyOfMsgs.push(response)

      this.setState({messages: copyOfMsgs})
    })
    .catch(error => console.error('Error', error));

    // erase current message after sending
    this.setState({currentMessage: ""})
  }



  render(){
    return(
      <div className="mainContent" >
        <Header className="header"
          currentUser={this.state.currentUser}
        />
      <div className="subContent">
        <FriendsList
          allUsers={this.state.allUsers}
          friendClickHandler={this.friendClickHandler}
          currentUser={this.state.currentUser}
        />
        <MessageContainer
          deleteMessage={this.deleteMessage}
          messageHandler={this.messageHandler}
          messages={this.state.messages}
          filteredMsgs={null}
          currentMessage={this.state.currentMessage}
          messageSender={this.messageSender}
          currentUser={this.state.currentUser}

        />

      </div>
      </div>
    )
  }
}

export default MainContent
