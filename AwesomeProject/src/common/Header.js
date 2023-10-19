import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn}>
        <Image source={require('../images/back.png') } style={styles.back}></Image>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 60,
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'#fff',
        elevation: 5,
        alignItems:'center',
        paddingLeft:20
    },
    back:{
        width:24,
        height:24,
    },
    backBtn:{

    }
})