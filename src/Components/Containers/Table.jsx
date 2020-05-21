import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTableItem } from '../../redux/actions/table';

import {
  Table, TableHeader, TableCell, TableBody, TableRow,
  Select, Button
} from 'grommet';

import SidebarBox from '../Common/SidebarBox';

export default () => {
  const dispatch = useDispatch();
  const tableItems = useSelector((state) => state.table.items);
  const states = useSelector((state) => state.state.list);
  const inputs = useSelector((state) => state.input.list);
  const [s1, setS1] = useState('');
  const [i, setI] = useState('');
  const [s2, setS2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTableItem({ s1, i, s2 }));
    setS1('');
    setI('');
    setS2('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="Table">
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
            {tableItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell scope="row">
                  {item.s1}
              </TableCell>
                <TableCell scope="row">
                  {item.i}
              </TableCell>
                <TableCell scope="row">
                  {item.s2}
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Select
          options={states}
          placeholder="S1"
          value={s1}
          onChange={({ option }) => setS1(option)}
        />
        <Select
          options={inputs}
          placeholder="Input"
          value={i}
          onChange={({ option }) => setI(option)}
        />
        <Select
          options={states}
          placeholder="S2"
          value={s2}
          onChange={({ option }) => setS2(option)}
        />
        <Button type="submit" label="+" primary />
      </SidebarBox>
    </form>
  );
}
