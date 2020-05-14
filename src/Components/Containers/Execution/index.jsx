import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addExecution } from './actions';

import { List, Select, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  const inputs = useSelector((state) => state.input.list);
  const executions = useSelector((state) => state.execution.list);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExecution(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="Execution">
        <List
          data={executions}
        />
        <Select
          options={inputs}
          placeholder="Input"
          value={input}
          onChange={({ option }) => setInput(option)}
        />
        <Button type="submit" label="+" primary />
      </SidebarBox>
    </form>
  );
}
