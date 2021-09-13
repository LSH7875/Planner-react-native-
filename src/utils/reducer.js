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
            console.log('이거다말이여')
            console.log(state.DailyObject);
            let dailyObject=(state.DailyObject===null)?{[`${f}`]:[]}:{...state.DailyObject} 
            console.log('dailyObejct');
            console.log(dailyObject);
            
            console.log('1111111111');
            if(action.payload.list.selectedLanguage===undefined){
                action.payload.list.selectedLanguage = '#1e73be';
            };
            console.log('    위엔색깔')
            // if(dailyObject.f===undefined){
                dailyObject[`${f}`].push({id:(dailyObject[`${f}`].length),object:action.payload.text,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:e,objEndTime:e,Timelist:null,list:action.payload.list.selectedLanguage});
            // }else{
            //     dailyObject.f[state.DailyObject.f.length]={id:(state.DailyObject.f.length),object:action.payload.text,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:e,objEndTime:e,Timelist:null,list:action.payload.list};
            // }
                    
            return {
                ...state,DailyObject:dailyObject,screen:{...state.screen,popup:0}
            }
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