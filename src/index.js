import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/stylesheet/index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './app/store';
import { Provider } from 'react-redux';
import '../src/stylesheet/response.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>
);

