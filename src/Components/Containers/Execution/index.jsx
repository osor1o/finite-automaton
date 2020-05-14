import React from 'react';

import { List, Select, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  return (
    <SidebarBox title="Execution">
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
    </SidebarBox>
  );
}
