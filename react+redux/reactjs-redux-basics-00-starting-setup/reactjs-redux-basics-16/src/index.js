import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';

import App from './components/App';

const mathReducer = function (state = {
    result: 1,
    lastValues: []
}, action) {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "MULTIPLY":
            state = {
                ...state,
                result: state.result * action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;

        default:
            break;
    }

    return state;
}

const userReducer = function (state = {
    name: "Bob",
    age: 22
}, action) {
    switch (action.type) {
        case "RENAME":
            state = {
                ...state,
                name: action.payload,
            }
            break;
        case "CHANGE_AGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;

        default:
            break;
    }

    return state;
}

const store = createStore(
    combineReducers({ math: mathReducer, user: userReducer }),
    {},
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));