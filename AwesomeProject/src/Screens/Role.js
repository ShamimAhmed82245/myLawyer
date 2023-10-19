import { View, Text, Dimensions, StyleSheet, Image,TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import {button1} from '../common/Button'
import { h1,h2,label,input, link1 } from '../common/formcss'
import Banner from '../images/law.jpg'
const { width, height } = Dimensions.get('screen');
const Role = ({ navigation }) => {
  const [fdata,setFdata] = useState('');
  return (
    <View style={ styles.container }>
      <View style={styles.centerView}> 
        <Text style={styles.firstText}>my</Text>
        <Text style={styles.secondText}>Lawyer</Text>
      </View>
      <View style={ styles.subContainer} > 
          <Text style={h1}>{fdata.name}</Text>
          <Text style={h1}>Are you a Lawyer ?</Text>
          <Text style={button1}
            onPress={() => navigation.navigate('Signup1')}
          >YES</Text>
          <Text style={button1} onPress={() => navigation.navigate('Login')}>NO</Text>
      </View>
    </View>
  )
}

export default Role
const styles = StyleSheet.create({
  container: {
    width: width, 
    height: height,
    backgroundColor: "#000",
    justifyContent: 'center', 
    alignItems:'center'
  },
  centerView: {
    height: '30%',
    flexDirection: 'row',
    justifyContent:'center',
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