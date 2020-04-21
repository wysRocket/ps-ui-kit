import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about analytic workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
