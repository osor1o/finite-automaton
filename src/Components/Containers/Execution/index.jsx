import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addExecution, removeExecution } from './actions';

import { Box, List, Select, Button } from 'grommet';

import { RadialSelected, Trash } from 'grommet-icons';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  const inputs = useSelector(({ input }) => input.list);
  const executions = useSelector(({ execution }) => execution.list);
  const start = useSelector(({ start }) => start);
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
          action={(item, index) => (
            <Button
              key={index}
              icon={<Trash />}
              onClick={() => dispatch(removeExecution(index))}
              disabled={start.submitting}
            />
          )}
        >
          {(item, index) => {
            const baseReturn = (
              <Box direction="row" gap="small">
                <RadialSelected key={index} />
                {item}
              </Box>
            );
            if (start.currentInput === undefined && index === 0)
              return baseReturn
            if (start.currentInput && start.currentInput.index === index)
              return baseReturn
            return item;
          }}
        </List>
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
