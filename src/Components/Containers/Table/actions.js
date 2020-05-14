export const addTable = (newTableItem) => {
  if (
    newTableItem.s1 !== ''
    && newTableItem.i !== ''
    && newTableItem.s2 !== ''
  )
    return { type: 'ADD_TABLE', payload: newTableItem.toUpperCase() };
  return { type: null }
};
