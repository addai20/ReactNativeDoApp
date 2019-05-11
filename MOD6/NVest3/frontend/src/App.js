import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import StockWidget from '../src/components/StockWidget'
import Header from '../src/components/Header'
import ScrollingIndexes from '../src/components/ScrollingIndexes'
import Dashboard from '../src/components/Dashboard'
import StocksContainer from '../src/containers/StocksContainer'
import API_key from '../src/secret.js'

class App extends Component {
  constructor(){
    super()

    // consider replacing this with Redux
    this.state = {
      taxlots: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/taxlots/')
    .then((resp)=> {
      resp.json()
    })
    .then((data)=> {
      console.log(data);
      this.setState({taxlots: data})
    })
  }


  render(){
    return(
      <div className="App">
        <Header/>
        <ScrollingIndexes/>
        <Dashboard/>
        <StocksContainer/>
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
