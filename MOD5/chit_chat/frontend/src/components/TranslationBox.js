import React, { Component } from 'react';

class TranslationBox extends Component {
  //does state need to live here???

  render(){
    return(
      <div>
        <textarea rows="4" cols="25" placeholder="Enter Text Here!"/>
        <button onClick={null}/>
      </div>
    )
  }
}

export default TranslationBox
