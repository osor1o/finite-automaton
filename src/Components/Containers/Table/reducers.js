const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      const invalidTableItem = state.items.find((item) => {
        const existStateAndInput = item.s1 === action.payload.s1 && item.i === action.payload.i;
        if (existStateAndInput)
          return false;
        if (existStateAndInput && item.s2 === action.payload.s2)
          return false
        return true;
      });
      if (!Boolean(invalidTableItem))
        return { ...state, items: [...state.items, action.payload ] };
      return state;
    case 'CLEAR_TABLE':
      return INITIAL_STATE;
    default:
      return state;
  }
};
