import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
// import Chatkit from '@pusher/chatkit'
import MainContent from './containers/MainContent'
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from '../src/components/Navbar'


class App extends Component {




  render() {
    return (
      <div className="App">
        <Navbar
        />
        <MainContent/>

      </div>
    );
  }
}

export default App;
