import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Account from '../containers/Account'
import StockWidget from '../components/StockWidget'


class AccountsContainer extends Component{

  render(){
    return(
      <Container>
        {this.props.accounts.map((acct)=> {
          // debugger
          return (
            <Account
              acctInfo={acct[0]}
              stocks={acct[1]}
              taxlots={acct[2]}
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
