import {createStore, applyMiddleware} from 'redux';
// import { applyMiddleware } from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';


import rootReducer from './root-reducer';

//phần mềm trung gian là một mảng
const middlewares = [logger];

// const store = configureStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
