import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,Button} from 'react-native';

import {useCtx} from '../../Providers/AppProvider';
const InputObect=()=>{
    const {dispatch,state} = useCtx();
    const [text, setText] = useState('');
    return(
        state.screen.popup===1?
        <View style = {{flex:1,width:'50%',height:'50%',position:'absolute',zIndex:5,backgroundColor:'red',padding:'2%'}}>
            <Text>목표를 입력하세요</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <View>
                <Button title="입력"/>
                <Button title="취소"/>
            </View>
        </View>
        :<></>
    )
}

export default InputObect;