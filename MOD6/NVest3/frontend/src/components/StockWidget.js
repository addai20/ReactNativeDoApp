import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TradeButtons from '../components/TradeButtons'

class StockWidget extends Component{



  render(){
    return(
      <Row>
        <Col> {this.props.stockInfo.symbol.toUpperCase()} </Col>
        <Col> {this.props.taxlots.map(tl => tl.quantity).reduce((acc, cv) => acc + cv)} </Col>
        <Col> MARKET VALUE </Col>
        <Col> UNIT COST</Col>
        <Col> TOTAL COST </Col>
        <Col> EQUITY </Col>
        <Col> <TradeButtons/> </Col>
      </Row>
    )
  }
}

export default StockWidget
