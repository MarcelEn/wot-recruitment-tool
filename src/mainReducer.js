import {combineReducers} from 'redux';
import appReducer from './App/appReducer';

export default combineReducers({
    ui: appReducer
});