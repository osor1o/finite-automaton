import React from 'react';

import { useDispatch } from 'react-redux';

import { handleOpenSidebar } from './Containers/SideBar/actions';

import { Box, Heading, Button } from 'grommet';

import { Menu } from 'grommet-icons';

export default (props) => {
  const dispatch = useDispatch();

  return (
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
      <Button
        icon={<Menu />}
        onClick={() => dispatch(handleOpenSidebar())}
      />
    </Box>
  );
}
