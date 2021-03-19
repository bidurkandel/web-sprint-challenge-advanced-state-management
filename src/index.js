// React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Component and Styling Dependencies
import "./index.css";
import App from "./App";

// Redux Dependencies:
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and library methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.