import React, { Component } from 'react';

class TradeButtons extends Component{
  render(){
    // debugger
    let stock = this.props.stock
    return(
      <div>
      <button onClick={()=> this.props.buyStocks(stock.symbol)}>BUY</button>
      <button onClick={()=> this.props.sellStocks(stock.symbol)}>SELL</button>
      </div>
    )
  }
}

export default TradeButtons
