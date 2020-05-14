import { combineReducers } from 'redux';

import sidebarReducer from '../Components/Containers/Sidebar/reducers';
import stateReducer from '../Components/Containers/States/reducers';
import inputReducer from '../Components/Containers/Inputs/reducers';
import tableReducer from '../Components/Containers/Table/reducers';
import executionReducer from '../Components/Containers/Execution/reducers';
import startReducer from '../Components/Containers/Start/reducers';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  state: stateReducer,
  input: inputReducer,
  table: tableReducer,
  execution: executionReducer,
  start: startReducer,
});

export default rootReducer;
