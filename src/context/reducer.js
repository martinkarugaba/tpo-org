import ACTIONS from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_SIDEBAR:
      return {
        ...state,
        openSidebar: !state.openSidebar,
      };
    case ACTIONS.CLOSE_SIDEBAR:
      return {
        ...state,
        openSidebar: false,
      };
    default:
      return state;
  }
};

export default reducer;
