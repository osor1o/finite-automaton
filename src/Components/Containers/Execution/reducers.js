const INITIAL_STATE = {
  list: ['1', '1', '0'],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_EXECUTION':
      return { ...state, list: [...state.list, action.payload ] };
    case 'REMOVE_EXECUTION':
      const list = state.list.filter((item, index) => action.payload !== index);
      return { ...state, list }
    default:
      return state;
  }
};
