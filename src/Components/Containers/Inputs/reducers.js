const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_INPUT':
      if (!state.list.includes(action.payload))
        return { ...state, list: [...state.list, action.payload ] };
      return state;
    default:
      return state;
  }
};
