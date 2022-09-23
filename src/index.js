import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';
import { BrowserRouter } from "react-router-dom"
import Chart from './container/chart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store= {store}>
      <BrowserRouter>

          <App /> 
       {/* <Chart /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


