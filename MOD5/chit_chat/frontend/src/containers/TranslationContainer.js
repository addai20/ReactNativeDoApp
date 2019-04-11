import React, { Component } from 'react';
import TranslationBox from '../components/TranslationBox'

class TranslationContainer extends Component {

  render(){
    return(
      <div className="TranslationContainer">
      <TranslationBox
        placeholder="translate here"
      />
      <TranslationBox/>

      </div>
    )
  }
}

export default TranslationContainer
