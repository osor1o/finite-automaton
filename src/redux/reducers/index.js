import { combineReducers } from 'redux';

import sidebarReducer from './sidebar';
import stateReducer from './states';
import inputReducer from './inputs';
import tableReducer from './table';
import startReducer from './start';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  state: stateReducer,
  input: inputReducer,
  table: tableReducer,
  start: startReducer,
});

export default rootReducer;
