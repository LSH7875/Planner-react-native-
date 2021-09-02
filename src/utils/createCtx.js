// Context 생성하기
import React from 'react';
import {usePersistedContext} from '../utils/usePersistant'

const createCtx = () => {
  const ctx = React.createContext();
  const useCtx = (Ctx) => {
    const c = usePersistedContext(React.useContext(Ctx),"plannerwing");
    return c;
  };

  return [useCtx, ctx.Provider];
};

export default createCtx;
