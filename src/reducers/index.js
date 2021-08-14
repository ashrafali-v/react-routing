import {combineReducers} from 'redux';
import userActionReducer from './userAction';
import filmActionReducer from './filmAction';

const allReducers = combineReducers({
    userReducer:userActionReducer,
    filmReducer:filmActionReducer

});

export default allReducers;