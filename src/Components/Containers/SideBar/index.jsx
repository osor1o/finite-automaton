import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { handleCloseSideBar } from './actions';

import {
  Box,
  Button,
  Layer,
  ResponsiveContext,
} from 'grommet';

import { FormClose } from 'grommet-icons';

import If from '../../Common/If';
import Inputs from '../Inputs';
import States from '../States';
import Table from '../Table';
import Execution from '../Execution';
import Start from '../Start';

const Children = () => {
  return (
    <Box fill pad="large" overflow="auto">
      <States />
      <Inputs />
      <Table />
      <Execution />
      <Start />
    </Box>
  );
}

export default () => {
  const open = useSelector((state) => state.sideBar.open);
  const dispatch = useDispatch();

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <>
          <If test={size !== 'small'}>
            <Box
              flex
              background='light-2'
              align='center'
              justify='center'
            >
              <Children />
            </Box>
          </If>
          <If test={open && size === 'small'}>
            <Layer>
              <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
              >
                <Button
                  icon={<FormClose />}
                  onClick={() => dispatch(handleCloseSideBar())}
                />
              </Box>
              <Box
                fill
                background='light-2'
                align='center'
                justify='center'
              >
                <Children />
              </Box>
            </Layer>
          </If>
        </>
      )}
    </ResponsiveContext.Consumer>
  );
};
