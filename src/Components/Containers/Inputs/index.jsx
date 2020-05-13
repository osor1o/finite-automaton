import React from 'react';

import { List, TextInput, Button } from 'grommet';

import SideBarBox from '../../Common/SideBarBox';

export default () => {
  return (
    <SideBarBox title="Inputs">
      <List
        data={[
          'test',
          'test',
        ]}
      />
      <TextInput name="name" placeholder="Input" />
      <Button label="+" primary />
    </SideBarBox>
  );
}
