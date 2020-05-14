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

export const setLastInput = (newLastInputIndex, newLastInputValue) => {
  return {
    type: 'SET_CURRENT_INPUT',
    payload: { index: newLastInputIndex, value: newLastInputValue }
  };
}

export const setSubmitting = (newSubmitting) => {
  return { type: 'SET_SUBMITTING', payload: newSubmitting };
}

export const clearStart = () => {
  return { type: 'CLEAR_START' };
}
