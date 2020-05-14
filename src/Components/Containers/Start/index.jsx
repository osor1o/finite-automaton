import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Select, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  const dispatch = useDispatch();
  const states = useSelector(({ state }) => state.list);
  const [initialState, setInitialState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="Start">
        <Select
          options={states}
          placeholder="Initial State"
          value={initialState}
          onChange={({ option }) => setInitialState(option)}
        />
        <Button type="submit" label="Run" primary />
        <Button label="Clear" />
      </SidebarBox>
    </form>
  );
}
