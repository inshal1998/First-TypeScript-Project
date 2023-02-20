import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import AppStack from './appStack'
import AuthStack from './authStack'

const MainStack:React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

 // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
        {user !== null ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainStack

const styles = StyleSheet.create({})