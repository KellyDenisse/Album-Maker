const stepReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return action.payload;
    default:
      return state;
  }
};
export default stepReducer