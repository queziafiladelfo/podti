import React from 'react';
import { View, Text} from  'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App(){
  return(
    <View>
      <Text>App</Text>
    </View>
  )
}
