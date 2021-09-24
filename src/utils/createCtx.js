// Context 생성하기
import React from 'react';
import {usePersistedContext} from '../utils/usePersistant'
import {today} from '../components/Hooks/time'
export const initialState = {
  DailyObject:null,//{id/object/priority/satus/startDate/endDate/objStartTime/objEndTime/Timelist/list}
  Schedule:null,//{id/schedule/start/end/list/alram}
  MonthlyObject:null,//{id/object/startMonth/endMonth/status/list/priority/specific/}
  //specific:{start_week/end_week/object/satus/list/priority}
  MonthlyDailyObject:null,//{}
  Memo:null,//{id/subject/content/index/}
  Project:null,//{id/project/start_date/end_date/status/satisfaction/list/specific/list/memo}
  //sepcific:{specificObj/priority/startDate/endDate/status/memo}
  screen:{popup:0,objectProceeding:null,Proceeding:0,day:today},//{popup/objectProceeding/time}
  //objectProceeding: 선택하는 목표 하나만 가능하게끔 하는 항목
  //Proceeding:0,1//0이면 아무것도 실행을 안하는 거니까  움직임 가능하게
  // 1이면 실행을 하는 중이니까 움직이지 못하게 해야함.
  list:[{'직장':'#1e73be'},{'휴식':'#a9e87c'},{'자기계발':'#dd3333'},{'종교':'#bc87f1'},{'기타':'#f1dbbb'}]

};

const createCtx = () => {
  const ctx = React.createContext(initialState);
  const useCtx = (Ctx=ctx) => {
    const c = (React.useContext(Ctx));
    // const c = usePersistedContext(React.useContext(Ctx));
    return c;
  };

  return [useCtx, ctx.Provider];
};
//원래는 Context.provider로 만든건데 여기서는 ctx.Provider로 만든거임.
//useCtx는 useContext()와 같다. 


export default createCtx;
