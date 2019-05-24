import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import StockWidget from '../src/components/StockWidget'
import Header from '../src/components/Header'
import ScrollingIndexes from '../src/components/ScrollingIndexes'
import Dashboard from '../src/components/Dashboard'
import AccountsContainer from '../src/containers/AccountsContainer'
import API_key from '../src/secret.js'
import ReactTimeout from 'react-timeout'

class App extends Component {
  constructor(){
    super()

    // consider replacing this with Redux
    this.state = {
      user: {},
      accounts: [],
      symbols: [],
      currentModal: null,
      selectedStock: {},
      stockObjects: null,

    }
  }

  toggleAlerts = () =>{
    console.log("toggleAlerts Invoked!");
  }

  getTotalAssets = (obj) =>{
    // get accounts
    let acctsArr = obj[1]
    let result;

    if(obj[1] === undefined){
      return null
    }
    // map through accounts and get
    let symbolsArr = acctsArr.map((acct)=>{
      // debugger
      if(acct[1].length === 0){
        return null
      } else{
        return acct[1].map(stocks => stocks.symbol)
      }
    })

  }

   isMarketOpen = () =>{
    // return true if time is between 9:30 and 4 PM
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()

    //needs to show "Market Closed on Sundays"

    if(hours === 9 && minutes >= 30){
      return true;
    }else if (hours > 9 && hours < 16) {
      return true
    }else{
      return false
    }
    //
  }

  marketStatus = () =>{

    let message;
    if (this.isMarketOpen()){
      message = "Markets: OPEN"
    }else{
      message = "Markets: CLOSED"
    }

    return message
  }

  initialStockDataFetch = () => {
    // should use setTimeout to refresh stock data and news every 30 seconds
    setInterval(()=>this.getStockObjects(), 5000)
    // this.getStockObjects()
  }

  getStockObjects = () => {
    let symbolsStr = this.state.symbols.join(`,`)
    // debugger
    //YOU MAY HAVE TO FETCH STOCK DATA FROM RAILS BACKEND INSTEAD OF REACT FRONTEND
    let base = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbolsStr}&types=quote,news,chart&range=1m&last=5&token=${API_key}`

    fetch(base+API_key)
    .then((resp)=>{
      debugger
      return resp.json()
    })
    .then((objects)=>{
      this.setState({stockObjects : objects})
      console.log(objects);
    })

  }

  buyStocks = (stock) => {
    console.log(`buyStocks method invoked for: ${stock}!`);
  }


  sellStocks = (stock) => {
    console.log(`sellStocks method invoked for: ${stock}!`);
  }



  componentDidMount(){
    // use promise.all to fetch the securities from http://localhost:3000/securities
    Promise.all([
      fetch('http://localhost:3000/investors/7/'),
      fetch('http://localhost:3000/securities/')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data, allStocks]) => {
      console.log(data);
      console.log(allStocks);
      let allSymbols = allStocks.map(stock=> stock.symbol)
      return this.setState({
        user: data[0],
        accounts: data[1],
        available_cash: data[0].available_cash,
        symbols: allSymbols
      })
    })


    // this.initialStockDataFetch()

    // fetch('http://localhost:3000/investors/6/')
    // .then((resp)=> {
    //   return resp.json()
    // })
    // .then((data)=> {
    //   console.log(data);
    //   // debugger
    //   let allSymbols = this.getTotalAssets(data)
    //   // debugger
    //   this.setState({
    //     user: data[0],
    //     accounts: data[1],
    //     available_cash: data[0].available_cash,
    //     symbols: allSymbols,
    //   })
    //
    //   // this.getTotalAssets()
    // })

    //GET EXAMPLE ARROW FUNCTION
// fetch('http://localhost:3000/taxlots')
// .then((response)=>{
//   return response.json()
// })
// .then((stocks)=>{
//   console.log(stocks)
//   //store stocks in allStocks state
//   this.setState({allStocks: stocks})
// })
  }


  render(){
    return(
      <div className="App">
        <Header
          marketStatus={this.marketStatus}
          />
        <ScrollingIndexes/>
        <Dashboard
          cash={this.state.user.available_cash}
          />
        <AccountsContainer
          buyStocks={this.buyStocks}
          sellStocks={this.sellStocks}
          accounts={this.state.accounts}
          />
      </div>
    )
  }
}

export default App





// function App() {
//
//   return (
//     <div className="App">
//       <Header/>
//       <ScrollingIndexes/>
//     </div>
//   );
// }
//
// export default App;
