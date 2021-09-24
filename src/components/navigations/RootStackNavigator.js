import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

//pages
import Home from '../pages/Home';
import Today from '../pages/today';
import InputObject from '../pages/InputObject';
import {today} from '../Hooks/time'
export const RootStackNavigationProps = StackNavigationProp;
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Today">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: '헬로우월드' }} />
        <Stack.Screen name="Today" component={Today} options={{ title: `오늘의 일정 ${today}` }}/>
        <Stack.Screen name="InputObject" component={InputObject} options={{ title: '목표 추가하기' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
