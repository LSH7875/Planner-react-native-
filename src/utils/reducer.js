const reducer = (state, action) => {
    switch (action.type) {
        case 'PlusObject':
            return {
            ...state,screen:{...state.screen,popup:1}
            }
        case 'PopupClose':
            return {
                ...state,screen:{...state.screen,popup:0}
                }
        case 'ObjectPlus':
            let f = new Date().toLocaleDateString()
            let e = new Date(f).getTime()/1000;
            let dailyObject=(state.DailyObject===null)?{[`${f}`]:[]}:{...state.DailyObject} 
            if(action.payload.list.selectedLanguage===undefined){
                action.payload.list.selectedLanguage = '#1e73be';
            };
                dailyObject[`${f}`].push({id:(dailyObject[`${f}`].length),object:action.payload.text,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:e,objEndTime:e,Timelist:null,timeClick:0,list:action.payload.list.selectedLanguage});                   
            return {
                ...state,DailyObject:dailyObject,screen:{...state.screen,popup:0}
            }
        case 'timeStart':
            let today = new Date().toLocaleDateString();
            let todayStartMinute = new Date(f).getTime()/60000;
            let dailyObjectTime={...state.DailyObject[`${f}`]};
            

            // return{...state,DailyObject:{...state.DailyObject,}}
        case 'chooseObject':
            console.log('오브젝트선택')
            console.log(action.payload)
            return{
                ...state,screen:{...state.screen,objectProceeding:action.payload}
            }
        default:
            return state;
    }
};

export default reducer 