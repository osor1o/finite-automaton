const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      if (!state.list.includes(action.payload))
        return { ...state, list: [...state.items, action.payload ] };
      return state;
    default:
      return state;
  }
};
