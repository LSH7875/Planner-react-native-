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
            {
                console.log('timestart누를때')
                console.log(state)
                //아무목표도 정해지지 않았을 때 그냥 반환
                if(state.screen.objectProceeding==null) return {...state}
                //목표가 정해졌을 때 start
                let today = new Date().toLocaleDateString();
                let todayStartMinute = new Date(today).getTime()/60000;
                let stateDailyObject = {...state.DailyObject};
                let dailyObjectTime=stateDailyObject[`${today}`];
                let currentTime = parseInt(Date.now()/(1000*60));
                console.log(dailyObjectTime)
                // console.log('이건 세부사항');
                // console.log(stateDailyObject);
                if(dailyObjectTime[state.screen.objectProceeding].timeClick>0){
                    let clickNum = (dailyObjectTime[state.screen.objectProceeding].timeClick)+1
                    dailyObjectTime[state.screen.objectProceeding]={...dailyObjectTime[state.screen.objectProceeding],Timelist:[...dailyObjectTime[state.screen.objectProceeding].Timelist,currentTime],timeClick:1}
                    return { 
                        ...state,screen:{...state.screen,Proceeding:1,},
                        DailyObject:{...stateDailyObject}
                    }
                }

                dailyObjectTime[state.screen.objectProceeding]={...dailyObjectTime[state.screen.objectProceeding],objStartTime:currentTime,timeClick:1}
                // console.log('어떻게 변했냥')
                // console.log(dailyObjectTime[state.screen.objectProceeding]);
                // console.log('ssssssssss')
                return {
                    ...state,screen:{...state.screen,Proceeding:1,},
                    DailyObject:{...stateDailyObject}
                }
            }
            // return{...state,DailyObject:{...state.DailyObject,}}7
        
        case 'timeEnd'://완료 누르면 작동함.
            {   let today = new Date().toLocaleDateString();
                let currentTime = parseInt(Date.now()/(1000*60));
                let stateDailyObject = {...state.DailyObject};
                let dailyObjectTime=stateDailyObject[`${today}`];
                let clickNum = (dailyObjectTime[state.screen.objectProceeding].timeClick)+1
                dailyObjectTime[state.screen.objectProceeding]={...dailyObjectTime[state.screen.objectProceeding],objEndTime:currentTime,timeClick:clickNum}

            // console.log(state.DailyObject);
                return {
                    ...state,
                    screen:{...state.screen,Proceeding:0},
                    DailyObject:{...stateDailyObject}
                }
            }
        case 'timePause':
            {  
                let today = new Date().toLocaleDateString();
                let currentTime = parseInt(Date.now()/(1000*60));
                let stateDailyObject = {...state.DailyObject};
                let dailyObjectTime=stateDailyObject[`${today}`];
                let clickNum = (dailyObjectTime[state.screen.objectProceeding].timeClick)+1;
                if(dailyObjectTime[state.screen.objectProceeding].Timelist===null){dailyObjectTime[state.screen.objectProceeding].Timelist="";}
                dailyObjectTime[state.screen.objectProceeding]={...dailyObjectTime[state.screen.objectProceeding],Timelist:[...dailyObjectTime[state.screen.objectProceeding].Timelist,currentTime],timeClick:clickNum}
                return {
                    ...state,
                    screen:{...state.screen,Proceeding:0},
                    DailyObject:{...stateDailyObject}
                }
            }    
        case 'deleteObject':
            {
                let today = new Date().toLocaleDateString();
                let stateDailyObject = {...state.DailyObject};
                let dailyObjectTime=stateDailyObject[`${today}`];
                console.log('state.screen.objectProceeding: ',state.screen.objectProceeding)
                dailyObjectTime.splice(state.screen.objectProceeding,1)
                console.log('deleteObject');
                return{
                    ...state,
                    DailyObject:{...stateDailyObject}
                }
            }
        case 'chooseObject':
            if(state.screen.Proceeding===1){
            return {
                ...state
            }}
            // console.log('오브젝트선택')
            // console.log(action.payload)
            return{
                ...state,screen:{...state.screen,objectProceeding:action.payload}
            }
        case 'getItem':{
            console.log('==========')
            console.log(action.payload)
            return {
                ...state
            }
        }
            
        default:
            return state;
    }
};

export default reducer 