import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Account from '../containers/Account'
import StockWidget from '../components/StockWidget'


class AccountsContainer extends Component{

  render(){
    return(
      <Container>
        {this.props.accounts.map((acct)=> {
          return (
            <Account
              acctInfo={acct}
            />
          )
        })}



      </Container>
    )
  }
}

export default AccountsContainer


// SYMBOL
// QTY
// MARKET VALUE
// TOTAL VALUE
// UNIT COST
// EQUITY
// BUY/SELL
