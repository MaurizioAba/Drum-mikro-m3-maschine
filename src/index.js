import React from 'react';
import ReactDOM from 'react-dom';
import "./_variables.sass";
import './index.sass';
import App from './App';
import {StateProvider} from "./stateProvider";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
      <reportWebVitals />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);