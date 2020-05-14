export const addExecution = (newExecution) => {
  if (newExecution !== '')
    return { type: 'ADD_EXECUTION', payload: newExecution.toUpperCase() };
  return { type: null }
};

export const removeExecution = (toRemoveIndex) => {
  console.log(toRemoveIndex);
  return { type: 'REMOVE_EXECUTION', payload: toRemoveIndex };
}
