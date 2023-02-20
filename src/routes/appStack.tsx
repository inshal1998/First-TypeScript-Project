import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,DashBoard } from "../screens";
const Stack = createNativeStackNavigator();

const AppStack:React.FC = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
  )
}

export default AppStack
