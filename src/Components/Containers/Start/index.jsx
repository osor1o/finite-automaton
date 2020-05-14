import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setInitialState, setCurrentState, setBeforeState,
  setCurrentInput, setSubmitting, clearStart
} from './actions';

import { Select, Button, RangeInput, Box } from 'grommet';

import { Dashboard } from "grommet-icons";

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  const dispatch = useDispatch();
  const start = useSelector(({ start }) => start);
  const states = useSelector(({ state }) => state.list);
  const executions = useSelector(({ execution }) => execution.list);
  const tableItems = useSelector(({ table }) => table.items);
  const [speed, setSpeed] = useState(3);

  const sleep = () => new Promise((resolve) => setTimeout(resolve, speed * 1000));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (start.initialState === undefined)
      return;
    dispatch(setSubmitting(true));
    dispatch(setInitialState(start.initialState));
    let cacheCurrentState = start.initialState;
    for (const [index, execution] of executions.entries()) {
      if (index !== 0)
        await sleep();
      const currentState = cacheCurrentState;
      const tableItem = tableItems.find((item) => (
        item.s1 === currentState && item.i === execution
      ));
      if (!tableItem) {
        alert('STATE NOT FOUND');
        break;
      }
      dispatch(setBeforeState(cacheCurrentState));
      cacheCurrentState = tableItem.s2;
      dispatch(setCurrentState(cacheCurrentState));
      dispatch(setCurrentInput(index, execution));
    }
    dispatch(setSubmitting(false));
  };

  const handleClear = () => {
    dispatch(clearStart());
  };

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="Start">
        <Select
          options={states}
          placeholder="Initial State"
          value={start.initialState}
          onChange={({ option }) => dispatch(setInitialState(option))}
        />
        <Box direction="row" gap="small">
          <Dashboard />
          <RangeInput
            value={speed}
            onChange={({ target }) => setSpeed(target.value)}
            max={8}
            min={1}
            step={1}
          />
        </Box>
        <Button type="submit" label="Run" primary disabled={start.submitting} />
        <Button label="Stop" />
        <Button label="Clear" onClick={handleClear} disabled={start.submitting} />
      </SidebarBox>
    </form>
  );
}
