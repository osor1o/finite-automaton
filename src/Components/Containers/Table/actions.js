export const addTableItem = (newTableItem) => {
  if (
    newTableItem.s1 !== ''
    && newTableItem.i !== ''
    && newTableItem.s2 !== ''
  )
    return { type: 'ADD_TABLE', payload: newTableItem };
  return { type: null }
};

export const clearTable = () => {
  return { type: 'CLEAR_TABLE' };
}
