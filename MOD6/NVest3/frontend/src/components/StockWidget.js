import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TradeButtons from '../components/TradeButtons'

class StockWidget extends Component{

  render(){
    return(
      <Row>
        <Col> SYMBOL </Col>
        <Col> QTY </Col>
        <Col> MARKET VALUE </Col>
        <Col> TOTAL VALUE </Col>
        <Col> UNIT COST </Col>
        <Col> EQUITY </Col>
        <Col> <TradeButtons/> </Col>
      </Row>
    )
  }
}

export default StockWidget
