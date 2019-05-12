import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TradeButtons from '../components/TradeButtons'

class StockWidget extends Component{


  render(){

    let symbol = this.props.stockInfo.symbol.toUpperCase()
    let qty = this.props.taxlots.map(tl => tl.quantity).reduce((acc, cv) => acc + cv)
    let mv;
    let price = this.props.taxlots.map(tl => tl.price).reduce((acc, cv) => acc + cv)
    let equity = mv - price

    return(
      <Row>
        <Col> <a> {symbol} </a> </Col>
        <Col> {qty} </Col>
        <Col> MARKET VALUE </Col>
        <Col> ${price} </Col>
        <Col> EQUITY </Col>
        <Col> <TradeButtons/> </Col>
      </Row>
    )
  }
}

export default StockWidget
