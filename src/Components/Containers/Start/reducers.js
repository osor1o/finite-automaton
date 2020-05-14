const INITIAL_STATE = {
  initialState: null,
  currentEdge: null,
  currentNode: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_INITIAL_STATE':
      return { ...state, initialState: action.payload };
    default:
      return state;
  }
};
