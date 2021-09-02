import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export const usePersistedContext = (context,key = "plannerwing")=>{
    const persistedContext = AsyncStorage.getItem(key);
    return persistedContext ? JSON.parse(presistedContext):context;
}

export const usePersistedReducer = ([state,dispatch],key = "plannerwing")=>{
    useEffect(()=>AsyncStorage.setItem(key,JSON.stringify(state)),[state]);
    return [state,dispatch]
}