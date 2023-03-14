import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import ACTIONS from './actions';

const defaultState = {
  openSidebar: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openMenu = () => {
    dispatch({ type: ACTIONS.OPEN_SIDEBAR, payload: 'hello' });
  };

  const closeSidebar = () => {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openMenu,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
