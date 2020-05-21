import React from 'react';

import {useDispatch} from 'react-redux';

import {handleOpenSidebar} from '../redux/actions/sidebar';

import {Box, Heading, Button, ResponsiveContext} from 'grommet';

import {Menu} from 'grommet-icons';

import If from './Common/If';

export default (props) => {
  const dispatch = useDispatch();

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          background='brand'
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation='medium'
          style={{ zIndex: '1' }}
          {...props}
        >
          <Heading level='3' margin='none'>Finite Automaton</Heading>
          <If test={size === 'small'}>
            <Button
              icon={<Menu />}
              onClick={() => dispatch(handleOpenSidebar())}
            />
          </If>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}
