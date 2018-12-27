import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const stores = new RootStore();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>, document.getElementById('base')
);
registerServiceWorker();