import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup,Login } from "../screens";
const Stack = createNativeStackNavigator();


const AuthStack:React.FC = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

  )
}

export default AuthStack
