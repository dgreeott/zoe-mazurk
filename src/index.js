import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import cartReducer from './components/reducer/cartReducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
