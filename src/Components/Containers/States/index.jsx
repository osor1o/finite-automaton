import React from 'react';

import { List, TextInput, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

const data = [
  'test',
  'test',
];

export default () => {
  return (
    <SidebarBox title="States">
      <List
        data={data}
      />
      <TextInput name="name" placeholder="State" />
      <Button label="+" primary />
    </SidebarBox>
  );
}
