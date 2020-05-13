import React from 'react';

import {
  Table, TableHeader, TableCell, TableBody, TableRow,
  Select, Button
} from 'grommet';

import SideBarBox from '../../Common/SideBarBox';

export default () => {
  return (
    <SideBarBox title="Table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              S1
            </TableCell>
            <TableCell scope="col" border="bottom">
              Input
            </TableCell>
            <TableCell scope="col" border="bottom">
              S2
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              A
            </TableCell>
            <TableCell scope="row">
              0
            </TableCell>
            <TableCell scope="row">
              B
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Select
        options={['small', 'medium', 'large']}
        placeholder="S1"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Select
        options={['small', 'medium', 'large']}
        placeholder="Input"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Select
        options={['small', 'medium', 'large']}
        placeholder="S2"
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
      <Button label="+" primary />
    </SideBarBox>
  );
}
