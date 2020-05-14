export const addInput = (newInput) => {
  if (newInput !== '')
    return { type: 'ADD_INPUT', payload: newInput.toUpperCase() };
  return { type: null }
};

export const clearInput = () => {
  return { type: 'CLEAR_INPUT' };
}
