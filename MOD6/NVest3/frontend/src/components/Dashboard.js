import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {

  render(){
    return(
      <Container>
        <Row>
          <Col>Available Cash: <span>$100,000</span></Col>
          <Col>Total Assets: <span>$1,200,000</span></Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
