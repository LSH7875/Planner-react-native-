import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,Button, Keyboard} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select'
//https://gahyun-web-diary.tistory.com/260에서 react-native-picker-select읽어보기
//https://github.com/lawnstarter/react-native-picker-select

const EstimateTime=()=>{
    const [text, setText] = useState('');
    return(
        <View style = {{flex:1,width:'50%',position:'absolute',zIndex:5,backgroundColor:'yellow',padding:'2%'}}>
            <Text>계획을 선택하세요</Text>
                {/* <RNPickerSelect 
                    value={계획}
                    onOpen={()=>{Keyboard.dismiss()}}
                /> */}
            <Text>시간를 입력하세요</Text>
            <View>
                <Text>예상시작시간</Text>
                <TextInput  keyboardType="number-pad"/><Text>시</Text><TextInput /><Text>분</Text>
                <Text>예상종료시간</Text>
                <TextInput/><Text>시</Text><TextInput/><Text>분</Text>
            </View>
            <View>
                <Button title="입력"/>
                <Button title="취소"/>
            </View>
        </View>
    )
}

export default EstimateTime;