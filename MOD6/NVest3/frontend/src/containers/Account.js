import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccountHeader from '../components/AccountHeader'
import StockWidget from '../components/StockWidget'



class Account extends Component {

  render(){
    return(
      <Container>
        <h3> {this.props.acctInfo[0].name}</h3>
        <AccountHeader/>

        {this.props.acctInfo[1] ? this.props.acctInfo[1].map((stock)=>{
          return(
            <StockWidget
              stockInfo={stock}
            />
          )
        })
      : <h4> This account has no assets yet</h4>
    }


      </Container>
    )
  }

}

export default Account
