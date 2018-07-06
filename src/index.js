import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
