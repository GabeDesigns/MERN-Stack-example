import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import Shoppinglist from './components/Shoppinglist';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Shoppinglist />
        </div>
      </Provider>
    );
  }
}

export default App;
