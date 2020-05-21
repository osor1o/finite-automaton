import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setInitialState, setFinalState,
  setExecutions, setResultMessage,
  setCurrentState, setBeforeState,
  setLastInput, setSubmitting, clearStart
} from '../../redux/actions/start';

import { handleCloseSidebar } from '../../redux/actions/sidebar';

import { clearState } from '../../redux/actions/states';

import { clearInput } from '../../redux/actions/inputs';

import { clearTable } from '../../redux/actions/table';

import { Select, TextInput, Button, RangeInput, Box } from 'grommet';

import { Dashboard } from "grommet-icons";

import SidebarBox from '../Common/SidebarBox';

export default () => {
  const dispatch = useDispatch();
  const start = useSelector(({ start }) => start);
  const states = useSelector(({ state }) => state.list);
  const tableItems = useSelector(({ table }) => table.items);
  const [speed, setSpeed] = useState(3);

  const sleep = () => new Promise((resolve) => setTimeout(resolve, (9 - speed) * 1000));

  const invalidLastState = (tableItem, index) => {
    const invalidFirstExecution = (
      start.executions.length === 1
      && tableItem.s2 !== start.finalState
    );

    const invalidLastExecution = (
      index === start.executions.length - 1
      && tableItem.s2 !== start.finalState
    );

    return invalidFirstExecution || invalidLastExecution;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      start.initialState === undefined
      || start.finalState === undefined
    ) return;

    dispatch(handleCloseSidebar());
    dispatch(setSubmitting(true));
    dispatch(setInitialState(start.initialState));
    dispatch(setResultMessage(null));

    let cacheCurrentState = start.initialState;

    for (const [index, execution] of start.executions.entries()) {
      if (index !== 0)
        await sleep();

      const currentState = cacheCurrentState;

      const tableItem = tableItems.find((item) => (
        item.s1 === currentState && item.i === execution
      ));

      if (!tableItem) {
        dispatch(setResultMessage({
          value: 'INVALID EXECUTION INPUT',
          type: 'error'
        }));
        break;
      }

      dispatch(setBeforeState(cacheCurrentState));
      cacheCurrentState = tableItem.s2;
      dispatch(setCurrentState(cacheCurrentState));
      dispatch(setLastInput(index, execution));

      if (invalidLastState(tableItem, index)) {
        dispatch(setResultMessage({
          value: 'LAST STATE NOT FOUND',
          type: 'error'
        }));
        break;
      }

      if (index === start.executions.length - 1) {
        dispatch(setResultMessage({
          value: 'SUCCESS!',
          type: 'success'
        }));
      }
    }
    dispatch(setSubmitting(false));
  };

  const handleClear = () => {
    dispatch(clearState());
    dispatch(clearInput());
    dispatch(clearTable());
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
        <Select
          options={states}
          placeholder="Final State"
          value={start.finalState}
          onChange={({ option }) => dispatch(setFinalState(option))}
        />
        <TextInput
          placeholder="Excution Inputs"
          value={start.executions.join('')}
          onChange={({ target }) => dispatch(setExecutions(target.value))}
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
        <Button label="Clear" onClick={handleClear} disabled={start.submitting} />
      </SidebarBox>
    </form>
  );
}
