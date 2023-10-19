import { View, Text, Dimensions, StyleSheet, Image,TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import {button1} from '../common/Button'
import { h1,h2,label,input, link1 } from '../common/formcss'
import Banner from '../images/law.jpg'
import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('screen');
const Signup = ({ navigation }) => {
  
  const [fdata,setFdata] = useState({
    name    :'',   
    memberID:'',       
    email   :'',     
    password:'',        
  }) 

  const [errormsg,setErrormsg] =useState(null);
  
  return (
    <ScrollView>
        <View style={ styles.container }>
            <View style={styles.centerView}> 
                <Text style={styles.firstText}>my</Text>
                <Text style={styles.secondText}>Lawyer</Text>
            </View>
            <View style={ styles.subContainer} > 
                <Text style={h1}>Create a New Account</Text>
                <Text style={link1}
                onPress={() => navigation.navigate('Login')}
                >Already have an account ? Login here.</Text>
                <View style={styles.formgroup}>
                    <Text style={label}>Name</Text>
                    <TextInput style={input}
                      onChangeText={(text) => setFdata({...fdata,name:text})}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput style={input}
                      onChangeText={(text) => setFdata({...fdata,email:text})}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Password</Text>
                    <TextInput style={input}
                       secureTextEntry={true}
                      onChangeText={(text) => setFdata({...fdata,password:text})}
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={label}>Confirm Password</Text>
                    <TextInput style={input}
                      secureTextEntry={true}
                      onChangeText={(text) => setFdata({...fdata,cppassword:text})}
                    />
                </View>
                <Text style={button1}
                    onPress={() => navigation.navigate('Role')}
                >Next</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Signup
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
    margin:15
  },
});