export const addExecution = (newExecution) => {
  if (newExecution !== '')
    return { type: 'ADD_EXECUTION', payload: newExecution.toUpperCase() };
  return { type: null }
};
