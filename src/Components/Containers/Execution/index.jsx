import React from 'react';

import { List, Select, Button } from 'grommet';

import SideBarBox from '../../Common/SideBarBox';

export default () => {
  return (
    <SideBarBox title="Execution">
      <List
        data={[
          'test',
          'test',
        ]}
      />
      <Select
        options={['small', 'medium', 'large']}
        placeholder="Input"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Button label="+" primary />
    </SideBarBox>
  );
}
