import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './src/Pages/Feed';
import Details from './src/Pages/Details';
import Comments from './src/Pages/Comments';

//stack para fazer a navegação, é preciso coloca-lo dentro de um container
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator> 
    </NavigationContainer>
    
  )
}


