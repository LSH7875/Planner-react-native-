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
            
            let dailyObject=(state.DailyObject===null)?[]:[...state.DailyObject] 

            console.log(dailyObject)
            if(dailyObject.length===0){
                dailyObject.push({id:0,object:action.payload,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:'오늘 시작시간으로',objEndTime:'오늘 끝나는 시간',Timelist:null,list:0})
            }else{
                console.log('dailyObject의 타입')
                console.log(typeof dailyObject)
                dailyObject.push({id:(state.DailyObject.length),object:action.payload,priority:0,status:0,startDate:(new Date().toLocaleDateString()),endDate:(new Date().toLocaleDateString()),objStartTime:'오늘 시작시간으로',objEndTime:'오늘 끝나는 시간',Timelist:null,list:0})
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