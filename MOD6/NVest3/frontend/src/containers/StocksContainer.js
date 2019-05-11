import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class StocksContainer extends Component{

  render(){
    return(
      <Container>
        <Row>
          <Col> SYMBOL </Col>
          <Col> QTY </Col>
          <Col> MARKET VALUE </Col>
          <Col> TOTAL VALUE </Col>
          <Col> UNIT COST </Col>
          <Col> EQUITY </Col>
          <Col> BUY/SELL </Col>
        </Row>

        <Row>
          <Col> AAPL </Col>
          <Col> 100 </Col>
          <Col> 20000 </Col>
          <Col> 20000 </Col>
          <Col> 85 </Col>
          <Col> 3000 </Col>
          <Col> BUY/SELL </Col>
        </Row>
      </Container>
    )
  }
}

export default StocksContainer


// SYMBOL
// QTY
// MARKET VALUE
// TOTAL VALUE
// UNIT COST
// EQUITY
// BUY/SELL
