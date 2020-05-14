export const addState = (newState) => {
  if (newState !== '')
    return { type: 'ADD_STATE', payload: newState.toUpperCase() };
  return { type: null }
};
