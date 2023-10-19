import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
    }, 7000); 
  }, []);
  return (
    <View style={styles.container}>
      
      <View style={styles.centerView}>  
        <Text style={styles.firstText}>my</Text>
        <Text style={styles.secondText}>Lawyer</Text>
      </View>
      <View style={styles.bottomView}> 
        <Text style={styles.lastText}> Find your lawyer here. </Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  centerView: {
    flexDirection: 'row',
  },
  firstText:{
    color:'#FF0000',
    fontSize:40,
  },
  secondText:{
    color:'#000000',
    fontSize:40,
    fontWeight:'800',
  },
  bottomView:{
    position: 'absolute',
    bottom:20,
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',
  },
  lastText:{
    color:'#000000',
    fontSize:30,
  },
});