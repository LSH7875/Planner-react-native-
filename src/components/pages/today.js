import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,TouchableOpacity , StyleSheet, SafeAreaView,FlatList,Button} from 'react-native';
import { withScreen } from '../../utils/wrapper';
import styled from 'styled-components/native';
import {useCtx} from '../../Providers/AppProvider';
import InputObject from '../Object/InputObject';
import EstimateTime from '../Object/EstimateTime';

console.log("hello world!")

const Today = ({ navigation }) => {
  const {dispatch,state} = useCtx();
  console.log(state)


  const [idx,setIdx]=useState(0);
  const initialState=[];
  const [state1,setState1]=useState(initialState);
  const bbbb='aaaaa';
  const [object,setObject] = useState(initialState);

  const time = ()=>{
    let timelist =[]
    for(i=0;i<24;i++){
      timelist.push(i)
    }
    return timelist
  }

  const Aaa = styled.TouchableOpacity`
      background-color: #fff000;
      flex:1;     
      justify-content:center;
      align-items: center;
    `
  const timeStamp=()=>{
  // idx= idx==undefined?idx=0 :idx++;
    let d=  idx==0? Date.now() : state1[idx-1].time;
    let a = Date.now();
    let c = parseInt((a-d)/1000); 
    let f = new Date().toLocaleDateString()
    let e = new Date(f).getTime()/1000;//new Date(f).getTime()/60000 이건 분단위 측정임. 오늘의 시작 시간을 구하는 것임

    let b = {id:idx,time:a,minus:c,daytime:e};
    

  // let b = {id:idx,time:a};
    setState1(prev=>[...prev,b])
    setIdx(idx+1);
  }
  const chooseObject=(key)=>{
    dispatch({type:'chooseObject',payload:key})
  }
  const plusObject=()=>{
    dispatch({type:'PlusObject'})
    setObject(prev=>[...prev,'먹표'])
  }

  const renderMemo=({item})=>{
    console.log('item')
    console.log( item)
  
    return(    
      <View>
        <Text style ={{backgroundColor:"blue",color:'white'}}>{item.idx}</Text>
      </View>
    )
  }

  //계획
  const renderobject=({item})=>{
    console.log('렌더오브젝트')
    console.log(item.object)
    if(state.screen.objectProceeding===item.id){
      return(
        <View style={{ marginTop:1,paddingTop:3,paddingBottom:3,flex:1,flexDirection:'row' ,backgroundColor:'#64DB99'}}>      
          <TouchableOpacity style={{flex:8}}onPress={()=>chooseObject(item.id)}>
            <Text style={{flex:8, width:'100%',paddingLeft:4}}>{item.object}</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={{flex:1, padding:1}} onPress={()=>deleteObject()}>
            <Text>X</Text>
          </TouchableOpacity>
        {/* <TouchableOpacity style ={{flex:2 ,margin:2}} backgroundColor="red" onPress={()=>timeStamp()}>
          <Text style={{backgroundColor:'palegreen',textAlign:'center'}}>시작</Text>
        </TouchableOpacity> */}
      </View>
      )
    } else{
        return(
          <View style={{flex:1,flexDirection:'row' ,paddingTop:3,paddingBottom:3,borderBottomWidth:1,borderBottomColor:'#efefef'}}>      
            <TouchableOpacity style={{width:'100%'}} onPress={()=>chooseObject(item.id)}>
              <Text style={{flex:8}}>{item.object}</Text>
            </TouchableOpacity>
          </View>
        )
    }
  }
  const renderTime = ({item})=>{
    return (
      <View style = {{flex:1}}>
        <Text>{item}</Text> 
      </View>
    )
  }

  //시간 측정하는 함수
  const timeStart =()=>{

  }
  
  return (
    <>
      <InputObject/>
      {/* <EstimateTime/> */}
      <View style ={{flex:1, width:'100%', flexDirection:'column'}}>
        <View style={{flex:2,backgroundColor:'pink'}}>
          {/* <Aaa onPress={()=>navigation.navigate('Home')}><Text>홈으로</Text></Aaa> */}
          <Text>이번주 목표</Text>
        </View>
        <View style ={{flex:8, backgroundColor:'white',flexDirection:'row'}}>
        <View style ={{flex:1}}>
          <Text>Today's todo list</Text>
          <TouchableOpacity onPress={()=>plusObject()}><Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'lightblue',color:'white',fontWeight:'800'}}>추가하기</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>timeStart()}><Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'red',color:'white',fontWeight:'800'}}>시작하기</Text></TouchableOpacity>
          <FlatList data={state.DailyObject} renderItem={renderobject} />
          <Text>메모</Text>
        </View>
        <View style ={{flex:1,flexDirection:'row'}}>
          <View style ={{flex:1,backgroundColor:"red",flexDirection:'column'}}>
            <FlatList data={time} renderItem={renderTime}/>
          </View>
          <View style ={{flex:5,backgroundColor:"purple"}}>
            <Text style ={{backgroundColor:"red"}}>계획</Text>
          </View>
          <View style = {{flex:5, flexDirection:'column',backgroundColor:"white"}}>
            <Text style ={{backgroundColor:"red"}}>실제</Text>
            <FlatList data={state.DailyObject} renderItem={renderMemo} />
          </View> 
        </View>
      </View>
    </View>
    </>
  
  )
};

export default withScreen(Today);
