const INITIAL_STATE = {
  open: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'OPEN_SIDE_BAR':
      return { ...state, open: action.payload };
    case 'CLOSE_SIDE_BAR':
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
