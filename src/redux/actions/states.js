export const addState = (newState) => {
  if (newState !== '')
    return { type: 'ADD_STATE', payload: newState.charAt(0).toUpperCase() };
  return { type: null }
};

export const clearState = () => {
  return { type: 'CLEAR_STATE' };
}
