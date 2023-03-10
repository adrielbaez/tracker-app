import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
