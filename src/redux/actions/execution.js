export const addExecution = (newExecution) => {
  if (newExecution !== '')
    return { type: 'ADD_EXECUTION', payload: newExecution.toUpperCase() };
  return { type: null }
};

export const removeExecution = (toRemoveIndex) => {
  return { type: 'REMOVE_EXECUTION', payload: toRemoveIndex };
}

export const clearExecution = () => {
  return { type: 'CLEAR_EXECUTION' };
}
