import { combineReducers } from 'redux';

import sidebarReducer from './sidebar';
import stateReducer from './states';
import inputReducer from './inputs';
import tableReducer from './table';
import executionReducer from './execution';
import startReducer from './start';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  state: stateReducer,
  input: inputReducer,
  table: tableReducer,
  execution: executionReducer,
  start: startReducer,
});

export default rootReducer;
