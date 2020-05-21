import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addInput } from '../../redux/actions/inputs';

import { List, TextInput, Button } from 'grommet';

import SidebarBox from '../Common/SidebarBox';

export default () => {
  const inputs = useSelector((state) => state.input.list);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    dispatch(addInput(input))
  };

  return (
    <form onSubmit={handleSubmit}>
      <SidebarBox title="Inputs">
        <List
          data={inputs}
        />
        <TextInput
          placeholder="Input"
          value={input}
          onChange={({ target }) => setInput(target.value)}
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
