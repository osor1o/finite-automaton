import { combineReducers } from 'redux';

import sideBarReducer from '../Components/Containers/SideBar/reducers';

const rootReducer = combineReducers({
  sideBar: sideBarReducer,
});

export default rootReducer;
