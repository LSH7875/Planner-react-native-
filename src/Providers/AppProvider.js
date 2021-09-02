// Context 와 useReducer 설정
import React, { useReducer } from 'react';
import createCtx from '../utils/createCtx';
import reducer from './reducer';
import usePersistedReducer from '../utils/usePersistant'



const [useCtx, Provider] = createCtx();
//const[useCtx,Provider]=[React.createContext(initialState),React.useContext(Ctx)]; 
const initialState = useCtx()
const AppProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, initialState),"plannerwing");
  // 향후 dispatch 는 actions 폴더만들어서 따로 관리할예정.
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppProvider, useCtx };
