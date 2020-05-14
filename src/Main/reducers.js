import { combineReducers } from 'redux';

import sidebarReducer from '../Components/Containers/Sidebar/reducers';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
