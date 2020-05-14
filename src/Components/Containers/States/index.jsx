import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addState } from './actions';

import { List, TextInput, Button } from 'grommet';

import SidebarBox from '../../Common/SidebarBox';

export default () => {
  const states = useSelector((state) => state.state.list);
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setState('');
    dispatch(addState(state))
  };

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="States">
        <List
          data={states}
        />
        <TextInput
          name="name"
          placeholder="State"
          value={state}
          onChange={({ target }) => setState(target.value)}
        />
        <Button
          type="submit"
          label="+"
          primary
        />
      </SidebarBox>
    </form>
  );
}
