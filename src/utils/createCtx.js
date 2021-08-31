// Context 생성하기
import React from 'react';

const createCtx = () => {
  const ctx = React.createContext();
  const useCtx = (Ctx) => {
    const c = React.useContext(Ctx);
    return c;
  };

  return [useCtx, ctx.Provider];
};

export default createCtx;
