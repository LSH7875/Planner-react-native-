// Context 와 useReducer 설정
import React, { useReducer,useEffect } from 'react';
import createCtx,{initialState} from '../utils/createCtx';
import reducer from '../utils/reducer';
// import usePersistedReducer from '../utils/usePersistant'



const [useCtx, Provider] = createCtx();//변수선언이다. 겁먹지 말자.
//const[useCtx,Provider]=[useContext,context.provider];
//console.log(useCtx())
// const initialState = {};
const AppProvider = ({ children }) => {
  const [state, dispatch] = (useReducer(reducer, initialState));
  
  //const [state, dispatch] = usePersistedReducer(useReducer(reducer, initialState),"plannerwing");
  
  // 향후 dispatch 는 actions 폴더만들어서 따로 관리할예정.
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppProvider, useCtx };
