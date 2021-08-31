import React ,{useState,useEffect} from 'react';
import { View, Text,TouchableOpacity , StyleSheet, SafeAreaView,FlatList,Button } from 'react-native';
import { withScreen } from '../../utils/wrapper';
import styled from 'styled-components/native';




const Today = ({ navigation }) => {
  const [idx,setIdx]=useState(0);
  const initialState=[];
  const [state,setState]=useState(initialState);

  // useEffect(()=>{},[])
  
  const Aaa = styled.TouchableOpacity`
      background-color: #fff000;
      flex:1;     
      justify-content:center;
      align-items: center;
    `
const timeStamp=()=>{
  // idx= idx==undefined?idx=0 :idx++;
  let d=  idx==0? Date.now() : state[idx-1].time;
  let a = Date.now();
  let c = a-d; 
  let b = {id:idx,time:a,minus:c};
  // let b = {id:idx,time:a};
  setState(prev=>[...prev,b])
  setIdx(idx+1);
 
}

const renderMemo=({item})=>{
  return(
    <View>
      <Text style ={{backgroundColor:"blue",color:'white', flex:1}}>{item.minus}</Text>
    </View>
  )
}
  return (
    
    <View>
      <Aaa onPress={()=>navigation.navigate('Home')}>
        <Text>홈으로</Text>
      </Aaa>
      <Button backgroundColor="red" title="시간측정" onPress={()=>timeStamp()}/>
     
        
     
      <View>
        <FlatList data={state} renderItem={renderMemo} style = {{backgroundColor:'green'}}/>
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
