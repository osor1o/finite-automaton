import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { handleCloseSideBar } from './actions';

import {
  Box,
  Collapsible,
  Button,
  Layer,
  ResponsiveContext,
} from 'grommet';

import { FormClose } from 'grommet-icons';

export default (props) => {
  const { children } = props;
  const open = useSelector((state) => state.sideBar.open);
  const dispatch = useDispatch();

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        (!open || size !== 'small') ? (
          <Collapsible direction="horizontal" open={open}>
            <Box
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
        </Box>
          </Collapsible>
        ) : (
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
                {children}
          </Box>
            </Layer>)
      )}
    </ResponsiveContext.Consumer>
  );
};
