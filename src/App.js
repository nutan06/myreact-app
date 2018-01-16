import React, { Component } from 'react';

import './App.css';
import Pics from './Pics'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to search new images</h1>
        </header>
        
        <Pics/>
      </div>
    );
  }
}

export default App;
