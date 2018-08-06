import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import song from './reducers/songReducer';
import user from './reducers/userReducer';

export default createStore(
    combineReducers({ song, user }),
    {},
    applyMiddleware(thunk)
);