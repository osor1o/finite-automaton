import React from 'react';

import { Box, Text } from 'grommet';

import If from './If';

export default ({ children, title }) => {
  return (
    <Box flex="grow" margin={{ bottom: 'medium' }} gap="medium">
      <If test={title}>
        <Text size="xlarge">{ title }</Text>
      </If>
      { children }
    </Box>
  )
}
