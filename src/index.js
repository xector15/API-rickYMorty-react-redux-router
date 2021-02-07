import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux' 
import reducer from './reducers'
import App from './routes/App';


const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "search": [],
    "personajes" : [],
    "alive": [],
    "dead": [],
    "robot": [],
    "creatures": [],
};

const composeH = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeH());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);