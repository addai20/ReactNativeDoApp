import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TradeButtons from '../components/TradeButtons'

class StockWidget extends Component{


  render(){

    let symbol = this.props.stock.symbol.toUpperCase()
    let qty = this.props.taxlots.map(tl => tl.quantity).reduce((acc, cv) => acc + cv)
    let mv;
    let price = this.props.taxlots.map(tl => tl.price).reduce((acc, cv) => acc + cv)
    let equity = mv - price

    return(
      <Row>
        <Col> <a> {symbol} </a> </Col>
        <Col> {qty} </Col>
        <Col> ... </Col>
        <Col> ${price} </Col>
        <Col> ... </Col>
        <Col>
          <TradeButtons
            stock={this.props.stock}
            buyStocks={this.props.buyStocks}
            sellStocks={this.props.sellStocks}
          />
        </Col>
      </Row>
    )
  }
}

export default StockWidget
