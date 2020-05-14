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

export default (props) => {
  const { height, width } = props;
  const initialState = useSelector(({ start }) => start.initialState);
  const states = useSelector(({ state }) => state.list);
  const tableItems = useSelector(({ table }) => table.items);

  const nodes = states.map((state) => {
    if (initialState === state)
      return  { id: state, label: state, color: { border: '#7159c1', }, borderWidth: 4 }
    return { id: state, label: state }
  });

  const edges = tableItems.map((tableItem) => ({ from: tableItem.s1, to: tableItem.s2, label: tableItem.i }));

  const graph = {
    nodes,
    edges,
  };

  const options = {
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
    height,
    width,
  };

  return (
    <Box>
      <Graph key={uuidv4()} graph={graph} options={options} />
    </Box>
  );
}
