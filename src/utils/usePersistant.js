import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const key = "plannerwing";

// useEffect=async(context)=>{
//     try{
//         let plan = await AsyncStorage.getItem(key);
//         if(plan){
//             plan=JSON.parse(plan);
//             useState({plan});
//         }
//     } catch(e){
//         console.log('error from AsyncStorage : ',e)
//     }
// }

// addPlan = (plan)=>{
//     const plan = state;
//     symbolicateStackTrace({plan})
//     AsyncStorage.setItem(key,JSON.stringify(plan))
//         .then(()=>{console.log('storage updated!')})
//         .catch((e)=>{console.log('addplan error: ',e)})
// }
export const usePersistedContext = async(context)=>{
    //읽어오기임.
    const persistedContext = await AsyncStorage.getItem(key);
    return persistedContext ? JSON.parse(presistedContext):context;
}



export const usePersistedReducer = ({state,dispatch})=>{
    //아이템 설정하는 것...
    useEffect(()=>AsyncStorage.setItem(key,JSON.stringify(state)),[state]);
    return [state,dispatch]
}