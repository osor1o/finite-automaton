import React from "react";

import { useSelector } from 'react-redux';

import { Box } from 'grommet';

import Graph from "react-graph-vis";

import { v4 as uuidv4 } from 'uuid'

// const graph = {
//   nodes: [
//     { id: 1, label: "Node 1", selected: true, color: { border: '#7159c1', }, borderWidth: 2 },
//     { id: 2, label: "Node 2", },
//     { id: 3, label: "Node 3", },
//     { id: 4, label: "Node 4", },
//   ],
//   edges: [
//     // { from: 1, to: 2, label: '123', width: 2 },
//     // { from: 1, to: 1, label: '123' },
//     // { from: 1, to: 3 },
//     // { from: 2, to: 4 },
//   ]
// };

const INITIAL_OPTIONS = {
  nodes: {
    font: {
      size: 25,
    },
    color: {
      border: '#1B2430',
      background: '#fff',
      highlight: {
        border: '#7159c1',
        background: '#fff'
      }
    },
    shape: 'circle'
  },
  edges: {
  },
};

export default (props) => {
  const { height, width } = props;
  const startState = useSelector(({ start }) => start);
  const states = useSelector(({ state }) => state.list);
  const tableItems = useSelector(({ table }) => table.items);

  const nodes = states.map((state) => {
    const baseReturn = { id: state, label: state };
    if (startState.initialState === state)
      return { ...baseReturn, borderWidth: 3 };
    if (startState.currentState === state)
      return { ...baseReturn, color: { border: '#7159c1', }, borderWidth: 3 };
    return baseReturn;
  });

  const edges = tableItems.map((tableItem) => {
    const baseReturn = { from: tableItem.s1, to: tableItem.s2, label: tableItem.i };
    if (startState.currentInput === tableItem.i && startState.currentState === tableItem.s1)
      return { ...baseReturn, width: 3 };
    return baseReturn;
  });

  const graph = {
    nodes,
    edges,
  };

  const options = {
    ...INITIAL_OPTIONS,
    height,
    width,
  };

  return (
    <Box>
      <Graph key={uuidv4()} graph={graph} options={options} />
    </Box>
  );
}
