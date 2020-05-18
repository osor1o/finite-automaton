import React from 'react';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import {
  Grommet,
  Box,
} from 'grommet';

import theme from './theme';
import reducers from './reducers';

import AppBar from '../Components/AppBar';
import Graphs from '../Components/Graphs';
import Sidebar from '../Components/Containers/Sidebar';

const store = createStore(reducers);

export default () => {
  return (
    <Provider store={store}>
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar />
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Sidebar />
            <Graphs />
          </Box>
        </Box>
      </Grommet>
    </Provider>
  );
}
