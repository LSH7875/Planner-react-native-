import React ,{useState,useEffect} from 'react';
import { View, Text,TextInput,TouchableOpacity , StyleSheet, SafeAreaView,FlatList,Button} from 'react-native';
import { withScreen } from '../../utils/wrapper';
import styled from 'styled-components/native';
import {useCtx} from '../../Providers/AppProvider';
import InputObject from './InputObject';
import EstimateTime from '../Object/EstimateTime';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {usePersistedReducer} from '../../utils/usePersistant'
import AsyncStorage from '@react-native-async-storage/async-storage';
console.log("hello world!")

const Today = ({ navigation }) => {
  let f = new Date().toLocaleDateString();
  const {dispatch,state} = useCtx();

  useEffect(async()=>{
    console.log('useEffectplannerWing')
    AsyncStorage.setItem('@plannerWing',JSON.stringify(state))
    console.log('저장이 잘 되었는가')
    result = await AsyncStorage.getItem('@plannerWing')
    console.log('아이템 갖고오나')
    console.log(JSON.parse(result))
  },[state])

  // const {dispatch,state} = usePersistedReducer(useCtx());
  console.log('---------')
  console.log(state.DailyObject)
  console.log('--------')

  const [idx,setIdx]=useState(0);
  const initialState=[];
  const [state1,setState1]=useState(initialState);
  const bbbb='aaaaa';
  const [object,setObject] = useState(initialState);
  const time = ['',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  // const time = ()=>{
  //   let timelist =[]
  //   let number=0;
  //   for(i=0;i<24;i++){
  //     timelist.push(number);
  //     number++;
  //   }
  //   return timelist
  // }

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

  const deleteObject=()=>{
    dispatch({type:'deleteObject'})
  }

  //계획
  const renderobject=({item})=>{
    console.log('렌더오브젝트')
    console.log(item.object)
    if(state.screen.objectProceeding===item.id){
      return(
        <View style={{ marginTop:1,paddingTop:3,paddingBottom:3,flex:2,flexDirection:'row' ,backgroundColor:`${item.list}`}}>      
          <TouchableOpacity style={{flex:8}}onPress={()=>chooseObject(item.id)}>
            <Text style={{flex:8, fontSize:18,width:'100%',paddingLeft:4}}>{item.object}</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={{flex:1, padding:1,backgroundColor:'red'}} onPress={()=>deleteObject()}>
            <Text style ={{textAlign:'center'}}>X</Text>
          </TouchableOpacity>
        {/* <TouchableOpacity style ={{flex:2 ,margin:2}} backgroundColor="red" onPress={()=>timeStamp()}>
          <Text style={{backgroundColor:'palegreen',textAlign:'center'}}>시작</Text>
        </TouchableOpacity> */}
      </View>
      )
    } else{
        return(
          <View style={{flex:1,flexDirection:'row' ,backgroundColor:`${item.list}`,paddingTop:3,paddingBottom:3,borderBottomWidth:1,borderBottomColor:'#efefef'}}>      
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
        <Text style ={{color:'white',textAlign:'right',}} >{item}</Text> 
      </View>
    )
  }

  //시간 측정하는 함수
  const timeStart =()=>{
    let currentTime = parseInt(Date.now()/(1000*60));
    // let e = parseInt(new Date(f).getTime()/(1000*60));
    let dayStartTime = new Date(f).getTime()/(1000*60);
    let dayEndTime = dayStartTime+1440;
    let top = (currentTime-dayStartTime)/1440;
    let bottom = (dayEndTime-currentTime)/1440;
    console.log(top,bottom)
    dispatch({type:'timeStart',payload:state.screen.objectProceeding});
  }
  
  const timePause=()=>{
    dispatch({type:'timePause'})
  }


  useEffect(()=>{
    console.log('상태다옹')
    console.log(state)
  },[state])
const timeEnd=()=>{
  dispatch({type:'timeEnd'})
}


  return (
    <>
      {/* <EstimateTime/> */}
      <View style ={{flex:1, width:'100%', flexDirection:'column'}}>
        <View style={{flex:2,backgroundColor:'pink'}}>
          {/* <Aaa onPress={()=>navigation.navigate('Home')}><Text>홈으로</Text></Aaa> */}
          <Text>이번주 목표</Text>
        </View>
        <View style ={{flex:8, backgroundColor:'white',flexDirection:'row'}}>
        <View style ={{flex:1}}>
          <Text>Today's todo list</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('InputObject')}><Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'lightblue',color:'white',fontWeight:'800'}}>추가하기</Text></TouchableOpacity>
          {state.screen.Proceeding===0?
          <TouchableOpacity onPress={()=>timeStart()}><Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'red',color:'white',fontWeight:'800'}}>시작하기</Text></TouchableOpacity>
          :
          (<View style ={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>timePause()}>
                <Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'blue',color:'white',fontWeight:'800'}}>일시정지</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>timeEnd()}>
              <Text style ={{margin:4,borderRadius:4,padding:6,textAlign:'center', backgroundColor:'green',color:'white',fontWeight:'800'}}>완료</Text>
            </TouchableOpacity>
            </View>
          </View>)}
          {state.DailyObject===null?<></>:
           <FlatList data={state.DailyObject[state.screen.day]} renderItem={renderobject} />}
          {/* <FlatList data={state.DailyObject[`${f}`]} renderItem={renderobject} />} */}
          <Text>메모</Text>
        </View>
        <View style ={{flex:1,flexDirection:'row'}}>
          <View style ={{flex:1,backgroundColor:"blue",flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
            <FlatList data={time} renderItem={renderTime}/>
          </View>
          <View style ={{flex:5,backgroundColor:"purple"}}>
            <Text style ={{backgroundColor:"red"}}>계획</Text>
          </View>
          <View style = {{flex:5, flexDirection:'column',backgroundColor:"white"}}>
            <Text style ={{backgroundColor:"red"}}>실제</Text>
            {/* {state.DailyObject.f.length===0?
            <></>:
            <FlatList data={state.DailyObject[`${f}`]} renderItem={renderMemo} />
            } */}
          </View> 
        </View>
      </View>
    </View>
    </>
  
  )
};

export default withScreen(Today);
