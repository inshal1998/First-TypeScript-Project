import { Dimensions, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors, width } from '../../constants/constants'

interface Props{
  placeholder:string,
  onChangeText:(txt:string)=> void | undefined
  secureTextEntry?:boolean
}
const Input:React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{
          console.log(text);
          
        }}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.Black_Mist}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    width:width/1.1,
    alignSelf:'center',
    backgroundColor:Colors.Platinum,
    borderRadius:5,
    marginVertical:10
  },
  input:{
    padding:5,
    color:Colors.Nature_Black
  }
})