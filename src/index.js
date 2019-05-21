import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';
import './index.css';
import App from './App';

const stores = new RootStore();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('base'),
);