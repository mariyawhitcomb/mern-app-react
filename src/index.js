import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { createNewItem, removeItem } from './actions/list'
import { Provider } from "react-redux";

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(createNewItem('Reputation'))
store.dispatch(createNewItem('Red'))
store.dispatch(removeItem(0))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
