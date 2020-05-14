import React from 'react';

import { List, TextInput, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  return (
    <SidebarBox title="Inputs">
      <List
        data={[
          'test',
          'test',
        ]}
      />
      <TextInput name="name" placeholder="Input" />
      <Button label="+" primary />
    </SidebarBox>
  );
}
