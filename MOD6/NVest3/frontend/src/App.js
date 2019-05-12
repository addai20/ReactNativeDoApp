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

class App extends Component {
  constructor(){
    super()

    // consider replacing this with Redux
    this.state = {
      user: {},
      accounts: []
    }
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



  componentDidMount(){
    fetch('http://localhost:3000/investors/6/')
    .then((resp)=> {
      return resp.json()
    })
    .then((data)=> {
      console.log(data);
      // debugger
      this.setState({
        user: data[0],
        accounts: data[1],
      })
    })

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
        <Dashboard/>
        <AccountsContainer
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
