// Context 와 useReducer 설정
import React, { useReducer } from 'react';
import createCtx from '../utils/createCtx';
import reducer from './reducer';
import usePersistedReducer from '../utils/usePersistant'



const [useCtx, Provider] = createCtx();
const initialState = {
  DailyObject:null,//{id/object/priority/satus/startDate/endDate/objStartTime/objEndTime/Timelist/list}
  Schedule:null,//{id/schedule/start/end/list/alram}
  MonthlyObject:null,//{id/object/startMonth/endMonth/status/list/priority/specific/}
  //specific:{start_week/end_week/object/satus/list/priority}
  MonthlyDailyObject:null,//{}
  Memo:null,//{id/subject/content/index/}
  Project:null,//{id/project/start_date/end_date/status/satisfaction/list/specific/list/memo}
  //sepcific:{specificObj/priority/startDate/endDate/status/memo}
  screen:null//{}

};
const AppProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, initialState),"plannerwing");
  // 향후 dispatch 는 actions 폴더만들어서 따로 관리할예정.
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppProvider, useCtx };
