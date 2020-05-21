export const setInitialState = (newInitialState) => {
  if (newInitialState !== '')
    return { type: 'SET_INITIAL_STATE', payload: newInitialState };
  return { type: null };
};

export const setFinalState = (newFinalState) => {
  if (newFinalState !== '')
    return { type: 'SET_FINAL_STATE', payload: newFinalState };
  return { type: null };
};

export const setExecutions = (newExecutions) => {
  return { type: 'SET_EXECUTIONS', payload: newExecutions.split('') };
};

export const setResultMessage = (newResultMessage) => {
  if (newResultMessage === null)
    return { type: 'SET_RESULT_MESSAGE', payload: newResultMessage };
  if (newResultMessage.value && newResultMessage.type)
    return { type: 'SET_RESULT_MESSAGE', payload: newResultMessage };
  return { type: null };
}

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
