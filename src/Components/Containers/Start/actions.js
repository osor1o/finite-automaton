export const setInitialState = (newInitialState) => {
  if (newInitialState !== '')
    return { type: 'SET_INITIAL_STATE', payload: newInitialState };
  return { type: null };
};
