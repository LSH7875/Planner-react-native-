import React from 'react';
import styled from 'styled-components/native';
import { withScreen } from '../../utils/wrapper';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <MainText>
        Hello Application
        <Text><Button title="오늘의 일정" onPress={()=>navigation.navigate('Today')}/></Text>
      </MainText>
    </Container>
  );
};

export default withScreen(Home);
