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
            console.log('----------')
            console.log(state.DailyObject)
            console.log('----------')
            let f = new Date().toLocaleDateString()
            let e = new Date(f).getTime()/1000;

            let dailyObject=(state.DailyObject===null)?{}:{...state.DailyObject} 

            console.log(dailyObject)
            if(dailyObject.f.length===0){
                dailyObject.push({[`${f}`]:[{id:0,object:action.payload,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:e,objEndTime:e,Timelist:null,list:0}]})
            }else{
                dailyObject.f.push({id:(state.DailyObject.f.length),object:action.payload,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:e,objEndTime:e,Timelist:null,list:0})
            }
                    
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