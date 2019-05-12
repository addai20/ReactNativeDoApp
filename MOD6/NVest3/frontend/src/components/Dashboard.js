import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {

  render(){
    return(
      <Container>
        <Row>
          <Col>Available Cash: <h2>${this.props.cash}</h2></Col>
          <Col>Total Assets: <h2>$1,200,000</h2></Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
