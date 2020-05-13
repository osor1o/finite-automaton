import React from 'react';

import { Select, Button } from 'grommet';

import SideBarBox from '../../Common/SideBarBox';

export default () => {
  return (
    <SideBarBox title="Start">
      <Select
        options={['small', 'medium', 'large']}
        placeholder="Initial State"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Button label="Run" primary />
      <Button label="Clear" />
    </SideBarBox>
  );
}
