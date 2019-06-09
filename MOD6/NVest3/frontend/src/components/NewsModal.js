import React, { Component } from 'react';
// import Boostrap from 'react-bootstrap';
import { Modal } from 'react-bootstrap/Modal';
import { ModalHeader } from 'react-bootstrap/ModalHeader';
import { ModalBody } from 'react-bootstrap/ModalBody';

// https://api.iextrading.com/1.0/stock/market/batch?types=quote,news&symbols=aapl,nflx,fb
// This will display latest news about a particular stock when clicked
class NewsModal extends Component {
  render(){
    return(
      <div>
        <Modal>
          <ModalHeader></ModalHeader>


        </Modal>
      </div>
    )
  }
}

export default NewsModal
