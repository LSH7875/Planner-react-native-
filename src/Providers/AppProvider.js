// Context 와 useReducer 설정
import React, { useReducer } from 'react';
import createCtx from '../utils/createCtx';

const [useCtx, Provider] = createCtx();
const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // 향후 dispatch 는 actions 폴더만들어서 따로 관리할예정.
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppProvider, useCtx };
