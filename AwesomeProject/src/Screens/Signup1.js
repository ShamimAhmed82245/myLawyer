import { View, Text, Dimensions, StyleSheet, Image,TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import {button1} from '../common/Button'
import { h1,h2,label,input, link1 } from '../common/formcss'
import Banner from '../images/law.jpg'
import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('screen');
const Signup1 = ({ navigation }) => {

  const [fdata,setFdata] = useState({
    category :'',   
    gender  :'',    
    address :'',       
    phone   :'',     
    chamber :'',     
    fees    :'', 
    rating  :'',
  })

  return (
    <ScrollView>
        <View style={ styles.container }>
            <View style={styles.centerView}> 
                <Text style={styles.firstText}>my</Text>
                <Text style={styles.secondText}>Lawyer</Text>
            </View>
            <View style={ styles.subContainer} >
                <View style={styles.formgroup}>
                    <Text style={label}>category</Text>
                    <TextInput style={input}></TextInput>
                </View> 
                <View style={styles.formgroup}>
                    <Text style={label}>Member ID</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Gender</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Address</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Phone</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Chamber</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Fees</Text>
                    <TextInput style={input}></TextInput>
                </View>
                <Text style={button1} onPress={() => navigation.navigate('Login')}>Submit</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Signup1
const styles = StyleSheet.create({
  container: {
    width: width, 
    height: height,
    backgroundColor: "#000",
    justifyContent: 'center', 
    alignItems:'center'
  },
  centerView: {
    height: '10%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer:{
    width: width, 
    height: '90%',
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
    margin:10
  },
});