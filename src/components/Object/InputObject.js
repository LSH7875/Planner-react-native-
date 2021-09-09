import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,Button,TouchableOpacity} from 'react-native';
// import {closePopup} from '../../actions/popup'


import {useCtx} from '../../Providers/AppProvider';
const InputObect=()=>{


    const {dispatch,state} = useCtx();
    const [text, setText] = useState('');
    
    const inputObjectPlus=()=>{
        dispatch({type:'ObjectPlus',payload:text})
        setText("")
    }


    const closePopup=()=>{
        dispatch({type:'PopupClose'})
    }
    return(
        state.screen.popup===1?
        <View style = {{flex:1,width:'50%',height:'50%',position:'absolute',borderRadius:10,zIndex:5,border:1,backgroundColor:'#ececec',padding:'2%'}}>
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
        :<></>
    )
}

export default InputObect;