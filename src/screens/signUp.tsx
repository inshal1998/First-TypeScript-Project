import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUp:React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>signUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  txt:{
    color:"#000"
  }
})