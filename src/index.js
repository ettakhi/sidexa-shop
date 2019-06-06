import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import stores from './stores';
import { Provider } from 'mobx-react';

ReactDOM.render(
  <Provider store={stores.shoppingStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
