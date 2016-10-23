import stockItems from './stock-items-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  stockItems
});

export default rootReducer;