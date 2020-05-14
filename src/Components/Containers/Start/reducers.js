const INITIAL_STATE = {
  submitting: false,
  initialState: undefined,
  beforeState: undefined,
  currentState: undefined,
  currentInput: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_INITIAL_STATE':
      return {
        ...state,
        initialState: action.payload,
        currentState: action.payload,
        currentInput: undefined
      };
    case 'SET_CURRENT_STATE':
      return { ...state, currentState: action.payload };
    case 'SET_BEFORE_STATE':
      return { ...state, beforeState: action.payload };
    case 'SET_CURRENT_INPUT':
      return { ...state, currentInput: action.payload };
    case 'CLEAR_START':
      return INITIAL_STATE;
    case 'SET_SUBMITTING':
      return { ...state, submitting: action.payload };
    default:
      return state;
  }
};
