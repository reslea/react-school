import { combineReducers } from 'redux';
import classesReducer from './classesSlice';
import authReducer from './authSlice';

export const rootReducer = combineReducers({
    classes: classesReducer,
    auth: authReducer,
});