import React from 'react';

import { useSelector } from 'react-redux';

import {Box, Text} from 'grommet';

import If from './Common/If';

export default () => {
  const { type, value } = useSelector(({ start }) => start.resultMessage) || {};

  const getBg = () => {
    switch(type) {
      case 'success':
        return 'status-ok';
      case 'error':
        return 'status-critical'
      default:
        return 'light-2';
    }
  }

  return (
    <If test={value}>
        <Box pad="small" gap="small" background={getBg()}>
          <Text size="large">
            {value}
          </Text>
        </Box>
      </If>
  );
};
