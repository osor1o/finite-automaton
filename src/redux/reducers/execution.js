const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_EXECUTION':
      return { ...state, list: [...state.list, action.payload ] };
    case 'REMOVE_EXECUTION':
      const list = state.list.filter((item, index) => action.payload !== index);
      return { ...state, list }
    case 'CLEAR_EXECUTION':
      return INITIAL_STATE;
    default:
      return state;
  }
};
