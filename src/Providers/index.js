import React from 'react';
import { AppProvider } from './AppProvider'; // 전역상태 Provider

const RootProvider = ({ children }) => {
  return <AppProvider>{children}</AppProvider>; // 이곳에다가 감싸는 Layout포멧을 만든다.
};

export default RootProvider;
