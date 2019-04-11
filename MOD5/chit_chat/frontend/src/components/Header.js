import React, { Component } from 'react';

class Header extends Component {

  render(){
    return(
      <div className="profileContainer">
        <h2 className="profile">
          <img alt="avatar" src="https://i.imgur.com/luI4E2ft.png">
          </img>
          {this.props.currentUser.first_name}
        </h2>
      </div>
    )
  }
}

export default Header
