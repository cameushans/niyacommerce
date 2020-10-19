import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersistGate} from "redux-persist/integration/react"
import { Provider } from "react-redux";
import {store,persistor} from "./App";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripPromise = loadStripe("pk_test_51GyDemFwYhRf51ZNKBURFG5arZaOMUZpWpSWfyZIgHf3qBd3At4nUWxUQdCiwPMguXOnLZv9smtaw9YsQRedTCGV00NVTMqINc");

console.log(Elements)




ReactDOM.render(
  <Provider store={store}>
       <BrowserRouter>
              <PersistGate persistor={persistor}>
                    <Elements stripe={stripPromise}>
                          <App />
                    </Elements>
              </PersistGate>
       </BrowserRouter>
  </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
