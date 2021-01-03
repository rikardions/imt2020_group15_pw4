import * as React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/hoomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My list' }} />
          <Stack.Screen name="details" component={DetailsScreen} options={{ title: 'Article' }} />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}