import { View, Text, Dimensions, StyleSheet, Image,TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import {button1} from '../common/Button'
import { h1,h2,label,input, link1 } from '../common/formcss'
import Banner from '../images/law.jpg'
import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('screen');
const Login = ({ navigation }) => {

  return (
    <View style={ styles.container }>
    {/* <Image style={style.banner} source={Banner}/> */}
    <View style={styles.centerView}> 
      <Text style={styles.firstText}>my</Text>
      <Text style={styles.secondText}>Lawyer</Text>
    </View>
    <View style={ styles.subContainer} > 
        <Text style={h1}>Login</Text>
        <Text style={h2}>Sign in to continue</Text>
        <View style={styles.formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input}></TextInput>
        </View>
        <View style={styles.formgroup}>
            <Text style={label}>Password</Text>
            <TextInput style={input}></TextInput>
        </View>
        <Text style={button1} onPress={() => navigation.navigate('Home')}>Login</Text>
        <Text style={link1}
        onPress={() => navigation.navigate('Signup')}
        >Don't have an account ? Create an account.</Text>
    </View>
  </View>
  )
}

export default Login
const styles = StyleSheet.create({
  container: {
    width: width, 
    height: height,
    backgroundColor: "#000",
    justifyContent: 'center', 
    alignItems:'center'
  },
  subContainer:{
    width: width, 
    height: '70%',
    backgroundColor: "#D5D8DC",
    borderRadius:18,
    justifyContent:'center',
    alignItems:'center'
  },
  centerView: {
    height: '30%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  firstText:{
    color:'#FF0000',
    fontSize:40,
    
  },
  secondText:{
    color:'#fff',
    fontSize:40,
    fontWeight:'800',
  },
  formgroup:{
    width:'90%',
    display:'flex',
    margin:15
  },
});