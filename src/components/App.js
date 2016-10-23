import React, { Component } from 'react';
import '../styles/App.css';
import StockItemsContainer from './StockItemsContainer'; 
import {Provider} from 'react-redux';
import configureStore from '../store/configure-store';

const store = configureStore(); 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <StockItemsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
