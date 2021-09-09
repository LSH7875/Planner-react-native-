import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,Button,TouchableOpacity} from 'react-native';
// import {closePopup} from '../../actions/popup'
import { withScreen } from '../../utils/wrapper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useCtx} from '../../Providers/AppProvider';
const InputObject=({ navigation })=>{


    const {dispatch,state} = useCtx();
    const [text, setText] = useState('');
    
    const inputObjectPlus=()=>{
        dispatch({type:'ObjectPlus',payload:text})
        setText("")
        navigation.goBack()
    }


    const closePopup=()=>{
        dispatch({type:'PopupClose'})
        // navigation.push('Today')
        navigation.goBack()
    }
    return(
        <View style = {{flex:1,width:'100%',height:'100%',backgroundColor:'#ececec',padding:'2%'}}>
            <Text style={{width:'100%', borderBottomColor:'skyblue',borderBottomWidth:1, textAlign:'center', padding:10}}>목표를 입력하세요</Text>
            <TextInput
                style={{borderRadius:0,height: '80%',flexShrink:1,width:'80%',marginRight:'auto',marginLeft:'auto'}}
                placeholder="오늘의 목표를 입력하세요"
                onChangeText={text => setText(text)}
                defaultValue={text}
                multiline ={true}
            />
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{flex:1, marginRight:2,padding:5, backgroundColor:'skyblue',}} onPress={()=>inputObjectPlus()}>
                    <Text style={{textAlign:"center"}}>입력</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1 ,marginLeft:2,padding:5,backgroundColor:'skyblue',}} onPress={()=>closePopup()}>
                    <Text style={{textAlign:"center"}}>취소</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default withScreen(InputObject);