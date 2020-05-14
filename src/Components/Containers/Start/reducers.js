const INITIAL_STATE = {
  initialState: null,
  currentState: null,
  currentInput: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_INITIAL_STATE':
      return { ...state, initialState: action.payload };
    case 'SET_CURRENT_STATE':
      return { ...state, currentState: action.payload };
    case 'SET_CURRENT_INPUT':
      return { ...state, currentInput: action.payload };
    default:
      return state;
  }
};
