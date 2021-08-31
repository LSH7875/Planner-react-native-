/* eslint-disable react-native/no-inline-styles */
import { Platform, View } from 'react-native';
import React from 'react';

export const withScreen = (WrapperComponent) => {
  return (props) => {
    return (
      <View
        style={
          Platform.OS === 'web'
            ? {
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }
            : {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }
        }>
        <WrapperComponent {...props} />
      </View>
    );
  };
};
