import { combineReducers } from 'redux';

import sidebarReducer from '../Components/Containers/Sidebar/reducers';
import stateReducer from '../Components/Containers/States/reducers';
import inputReducer from '../Components/Containers/Inputs/reducers';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  state: stateReducer,
  input: inputReducer,
});

export default rootReducer;
