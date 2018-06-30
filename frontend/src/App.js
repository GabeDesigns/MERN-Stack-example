import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import Shoppinglist from './components/Shoppinglist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Shoppinglist />
      </div>
    );
  }
}

export default App;
