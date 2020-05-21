import React, { useState, useLayoutEffect, useRef } from "react";

import { useSelector } from 'react-redux';

import { Box, Text } from 'grommet';

import Graph from "react-graph-vis";

import { v4 as uuidv4 } from 'uuid'

import ResultMessage from './ResultMessage';

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

export default () => {
  const start = useSelector(({ start }) => start);
  const states = useSelector(({ state }) => state.list);
  const tableItems = useSelector(({ table }) => table.items);

  const bodyRef = useRef(null);
  const [graphsDimensions, setGraphsDimensions] = useState({
    width: '600px',
    height: '600px'
  });

  useLayoutEffect(() => {
    if (bodyRef.current) {
      const resizeBox = () => {
        setGraphsDimensions({
          width: `${bodyRef.current.offsetWidth}px`,
          height: `${bodyRef.current.offsetHeight}px`,
        })
      }

      window.addEventListener('resize', resizeBox);
      setTimeout(resizeBox, 100);
    }
  }, [bodyRef]);

  const nodes = states.map((state) => {
    const baseReturn = { id: state, label: state };
    if (start.currentState === state)
      return { ...baseReturn, color: { border: '#7159c1', }, borderWidth: 3 };
    if (start.initialState === state)
      return { ...baseReturn, borderWidth: 3 };
    if (start.finalState === state)
      return { ...baseReturn, color: { border: '#f00' }, borderWidth: 3 };
    return baseReturn;
  });

  const edges = tableItems.map((tableItem) => {
    const baseReturn = { from: tableItem.s1, to: tableItem.s2, label: tableItem.i };
    if (
      start.lastInput
      && start.lastInput.value === tableItem.i
      && start.currentState === tableItem.s2
      && start.beforeState === tableItem.s1
    )
      return { ...baseReturn, width: 3 };
    return baseReturn;
  });

  const graph = {
    nodes,
    edges,
  };

  const options = {
    ...INITIAL_OPTIONS,
    height: graphsDimensions.height,
    width: graphsDimensions.width,
  };

  const lastInput = (start.lastInput)
    ? start.lastInput.value
    : null;

  return (
    <Box full flex overflow="hidden">
      <Box pad="small" gap="small" background='light-2'>
        <Text size="large">
          Current State: {start.currentState}
        </Text>
        <Text size="large">
          Last Input: {lastInput}
        </Text>
      </Box>
      <ResultMessage />
      <Box flex ref={bodyRef}>
        <Graph key={uuidv4()} graph={graph} options={options} />
      </Box>
    </Box>
  );
}
