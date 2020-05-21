const INITIAL_STATE = {
  items: [
    { s1: 'A', i: '0', s2: 'A' },
    { s1: 'A', i: '1', s2: 'B' },
    { s1: 'B', i: '1', s2: 'C' },
    { s1: 'C', i: '1', s2: 'A' }
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      const invalidTableItem = state.items.find((item) => {
        const existStateAndInput = item.s1 === action.payload.s1 && item.i === action.payload.i;
        if (existStateAndInput)
          return true;
        if (existStateAndInput && item.s2 === action.payload.s2)
          return true
        return false;
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
