import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {Provider} from "react-redux";
import store from './store/store';
import './scss/app.scss';

let rootDOM = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App name="Parcel & React App"/>
    </Provider>
    , rootDOM);

window.store = store;