import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

//pages
import Home from '../pages/Home';
import Today from '../pages/today';

export const RootStackNavigationProps = StackNavigationProp;
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Today">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: '헬로우월드' }} />
        <Stack.Screen name="Today" component={Today} options={{ title: '오늘의 일정' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
