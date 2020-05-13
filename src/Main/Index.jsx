import React, { useState, useRef, useLayoutEffect } from 'react';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import {
  Grommet,
  Box,
} from 'grommet';

import theme from './theme';
import reducers from './reducers';

import AppBar from '../Components/AppBar';
import Graphs from '../Components/Containers/Graphs';
import SideBar from '../Components/Containers/SideBar';

const store = createStore(reducers);

export default () => {
  const bodyRef = useRef(null);
  const [graphsDimensions, setGraphsDimensions] = useState({
    width: '600px',
    height: '600px'
  });

  useLayoutEffect(() => {
    if (bodyRef.current) {
      setGraphsDimensions({
        width: `${bodyRef.current.offsetWidth}px`,
        height: `${bodyRef.current.offsetHeight}px`,
      })
    }
  }, [bodyRef])

  return (
    <Provider store={store}>
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar />
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <SideBar />
            <Box
              flex
              align='center'
              justify='center'
              ref={bodyRef}
              overflow='hidden'
            >
              <Graphs
                width={graphsDimensions.width}
                height={graphsDimensions.height}
              />
            </Box>
          </Box>
        </Box>
      </Grommet>
    </Provider>
  );
}
