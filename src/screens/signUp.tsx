import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from '../components'
import { Colors } from '../constants/constants'

interface data {
  name:string,
  email:string,
  password:string,
}

const SignUp:React.FC = () => {
  const [data, setData] = useState<data>({
    name:'',
    email:'',
    password:''
  })

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>SignUp</Text>
      <Input
        placeholder='Name'
        onChangeText={(text)=>setData({...data , name:text})}
      />
      <Input
        placeholder='Email'
        onChangeText={(text)=>setData({...data , email:text})}
      />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(text)=>setData({...data , password:text})}
      />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    color:Colors.Black_Mist
  }
})