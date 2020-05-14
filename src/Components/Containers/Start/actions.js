export const setInitialState = (newInitialState) => {
  if (newInitialState !== '')
    return { type: 'SET_INITIAL_STATE', payload: newInitialState };
  return { type: null };
};

export const setCurrentState = (newCurrentState) => {
  return { type: 'SET_CURRENT_STATE', payload: newCurrentState };
}

export const setBeforeState = (newBeforeState) => {
  return { type: 'SET_BEFORE_STATE', payload: newBeforeState };
}

export const setCurrentInput = (newCurrentInput) => {
  return { type: 'SET_CURRENT_INPUT', payload: newCurrentInput };
}

export const clearStart = () => {
  return { type: 'CLEAR_START' };
}
