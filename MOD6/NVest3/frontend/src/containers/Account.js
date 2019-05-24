import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccountHeader from '../components/AccountHeader'
import StockWidget from '../components/StockWidget'



class Account extends Component {

  constructor(){
    super()

    this.state = {
      realTimeData : []
    }
  }

  componentDidMount(){

    // THIS MAY NOT BE NEEDED! FETCHTING STOCKS FROM SECURITIES INDEX IN APP.JS
    //fetch from finance api
    //update realTimeData state with current stock values
      //can realTimeData be an array of objects?
      //capture most recent closing price if after market hours?
        //does API have after hours stock values?

  }

  render(){
    return(
      <div>
      <Container>
        <h3> {this.props.acctInfo.name}</h3>
        <AccountHeader/>
        <br/>

        {this.props.stocks ? this.props.stocks.map((stock)=>{
          let stock_id = stock.id
          // debugger
          return(
            <StockWidget
              key={stock.id}
              stock={stock}
              taxlots={this.props.taxlots.filter(tl => tl.security_id === stock_id)}
              buyStocks={this.props.buyStocks}
              sellStocks={this.props.sellStocks}
            />
          )
        })
      : <h4> This account has no assets yet</h4>
    }


      </Container>
      <br/>
      </div>

    )
  }

}

export default Account
