import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePersistedContext = async(context,key = "@plannerwing")=>{
    const persistedContext = await AsyncStorage.getItem(key);
    return persistedContext ? JSON.parse(presistedContext):context;
}



export const usePersistedReducer = ([state,dispatch],key = "@plannerwing")=>{
    useEffect(()=>AsyncStorage.setItem(key,JSON.stringify(state)),[state]);
    return [state,dispatch]
}