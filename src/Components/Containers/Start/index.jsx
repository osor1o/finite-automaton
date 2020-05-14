import React from 'react';

import { Select, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  return (
    <SidebarBox title="Start">
      <Select
        options={['small', 'medium', 'large']}
        placeholder="Initial State"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Button label="Run" primary />
      <Button label="Clear" />
    </SidebarBox>
  );
}
