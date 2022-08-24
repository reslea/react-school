import { combineReducers } from 'redux';
import classesReducer from './classesSlice';

export const rootReducer = combineReducers({
    classes: classesReducer,
});