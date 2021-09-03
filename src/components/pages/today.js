import React ,{useState,useEffect} from 'react';
import { View, Text,TouchableOpacity , StyleSheet, SafeAreaView,FlatList,Button} from 'react-native';
import { withScreen } from '../../utils/wrapper';
import styled from 'styled-components/native';
import {useCtx} from '../../Providers/AppProvider';

console.log("hello world!")

const Today = ({ navigation }) => {
  const {dispatch,state} = useCtx();
  console.log(state)

  const [idx,setIdx]=useState(0);
  const initialState=[];
  const [state1,setState1]=useState(initialState);
  const bbbb='aaaaa';
  const [object,setObject] = useState(initialState);

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
  let e = new Date(f).getTime()/1000;
  let b = {id:idx,time:a,minus:c,daytime:e};
  

  // let b = {id:idx,time:a};
  setState1(prev=>[...prev,b])
  setIdx(idx+1);
}

const plusObject=()=>{
  setObject(prev=>[...prev,'먹표'])
}

const renderMemo=({item})=>{
 
    return(
      
      <View>
        <Text style ={{backgroundColor:"blue",color:'white'}}>{item.idx}</Text>
      </View>
      
    )
  }


const renderobject=({item})=>{
  return(
    <View style={{flex:1,flexDirection:'row'}}>
      <Text style={{flex:8}}>{item}</Text>
      <TouchableOpacity style ={{flex:2}}backgroundColor="red" onPress={()=>timeStamp()}>
        <Text style={{}}>시작</Text>
      </TouchableOpacity>
    </View>
  )
}
  return (
    
    <View style ={{flex:1, width:'100%', flexDirection:'column'}}>
      <View style={{flex:2,backgroundColor:'pink'}}>
        {/* <Aaa onPress={()=>navigation.navigate('Home')}><Text>홈으로</Text></Aaa> */}
        <Text>이번주 목표</Text>
      </View>
      <View style ={{flex:8, backgroundColor:'lightblue',flexDirection:'row'}}>
      <View style ={{flex:1}}>
        <Text>Today's todo list</Text>
        <TouchableOpacity onPress={()=>plusObject()}><Text>+</Text></TouchableOpacity>
        <FlatList data={object} renderItem={renderobject} />
        
        <Text>메모</Text>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <View style ={{flex:1,backgroundColor:"red"}}>

        </View>
        <View style ={{flex:5,backgroundColor:"purple"}}>
          <Text style ={{backgroundColor:"red"}}>계획</Text>
        </View>
        <View style = {{flex:5, flexDirection:'column',backgroundColor:"white"}}>
          <Text style ={{backgroundColor:"red"}}>실제</Text>
          <FlatList data={state1} renderItem={renderMemo} />
        </View> 
        
      
      
      
      </View>
     
    
    </View>
    </View>
    
    
  //   <Container>
  //   <MainText>
  //     Hello Application
  //     <Text>이동하기?</Text>
  //   </MainText>
  // </Container>
  );
};

export default withScreen(Today);
