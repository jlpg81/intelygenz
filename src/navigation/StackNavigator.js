import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import NewsDetailPage from '../pages/NewsDetailPage';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetailPage"
        component={NewsDetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
