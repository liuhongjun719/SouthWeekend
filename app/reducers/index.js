
import { combineReducers } from 'redux';
import read from './read';
import leftCellPage from './leftCellReducer';



const rootReducer = combineReducers({
  read,
  leftCellPage,
});

export default rootReducer;
