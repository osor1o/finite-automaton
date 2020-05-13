import React from 'react';

import { List, TextInput, Button } from 'grommet';

import SideBarBox from '../../Common/SideBarBox';

const data = [
  'test',
  'test',
];

export default () => {
  return (
    <SideBarBox title="States">
      <List
        data={data}
      />
      <TextInput name="name" placeholder="State" />
      <Button label="+" primary />
    </SideBarBox>
  );
}
