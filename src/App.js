import React, { Component } from 'react';
import './App.css';
import NewItemForm from './containers/NewItemForm';
import NewItemsList from './containers/NewItemsList';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <div className="App-title">
          <h1>Shopping List</h1>
          </div>
        </header>
          <NewItemForm />
          <NewItemsList />
    </div>
  }
}

export default App;
