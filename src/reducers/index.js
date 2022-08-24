import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, 
    applyMiddleware(thunk, loggerMiddleware));