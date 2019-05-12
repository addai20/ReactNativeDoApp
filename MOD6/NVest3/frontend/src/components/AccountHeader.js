import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class AccountHeader extends Component {

  render(){
    return(
      <Row>
        <Col> SYMBOL </Col>
        <Col> QTY </Col>
        <Col> MARKET VALUE </Col>
        <Col> TOTAL COST </Col>
        <Col> EQUITY </Col>
        <Col> TRADE </Col>
      </Row>
    )
  }
}

export default AccountHeader
