import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccountHeader from '../components/AccountHeader'
import StockWidget from '../components/StockWidget'



class Account extends Component {

  render(){
    return(
      <Container>
        <h3> {this.props.acctInfo.name}</h3>
        <AccountHeader/>

        {this.props.stocks ? this.props.stocks.map((stock)=>{
          let stock_id = stock.id
          // debugger
          return(
            <StockWidget
              stockInfo={stock}
              taxlots={this.props.taxlots.filter(tl => tl.security_id === stock_id)}
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
