const INITIAL_STATE = {
  items: [
    { s1: 'A', i: '0', s2: 'A' },
    { s1: 'A', i: '1', s2: 'B' },
    { s1: 'B', i: '1', s2: 'C' },
    { s1: 'C', i: '0', s2: 'A' },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      return { ...state, items: [...state.items, action.payload ] };
    default:
      return state;
  }
};
