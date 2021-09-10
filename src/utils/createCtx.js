// Context 생성하기
import React from 'react';
import {usePersistedContext} from '../utils/usePersistant'

export const initialState = {
  DailyObject:null,//{id/object/priority/satus/startDate/endDate/objStartTime/objEndTime/Timelist/list}
  Schedule:null,//{id/schedule/start/end/list/alram}
  MonthlyObject:null,//{id/object/startMonth/endMonth/status/list/priority/specific/}
  //specific:{start_week/end_week/object/satus/list/priority}
  MonthlyDailyObject:null,//{}
  Memo:null,//{id/subject/content/index/}
  Project:null,//{id/project/start_date/end_date/status/satisfaction/list/specific/list/memo}
  //sepcific:{specificObj/priority/startDate/endDate/status/memo}
  screen:{popup:0,objectProceeding:null}//{popup/objectProceeding/time}

};

const createCtx = () => {
  const ctx = React.createContext(initialState);
  const useCtx = (Ctx=ctx) => {
    const c = (React.useContext(Ctx));
    //const c = usePersistedContext(React.useContext(Ctx),"plannerwing");
    return c;
  };

  return [useCtx, ctx.Provider];
};
//원래는 Context.provider로 만든건데 여기서는 ctx.Provider로 만든거임.
//useCtx는 useContext()와 같다. 


export default createCtx;
