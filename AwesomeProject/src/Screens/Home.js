import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { h1 } from '../common/formcss'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Header title={'Home'}/>
      <Image source={require('../images/bannr.png')} style={styles.banner} />
      <Text style={h1}>Select Category</Text>
      <View style={{marginTop:15}}>
        <FlatList 
            data={[1,1,1,1,1,1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
              return (
                <TouchableOpacity>
                  <LinearGradient colors={['#009FFD', '#2A2A72']} style={styles.linearGradient}>
                    <Text style={styles.catName}>{'Category ' + index +1}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
        />
      </View>
      <Text style={h1}>Top Rated Lawyer</Text>
      <View style={{marginTop:15,alignItems:'center'}}>
        <FlatList
          data={[1,1,1,1,1,1]} 
          numColumns={2}
          renderItem={({item,index}) =>{
            return ( 
              <View style={styles.lawyerItem}>
                <Image source={require('../images/person.png')} style={styles.person}/>
              </View>
            );
          }}
        />
      </View>
    </View>
    </ScrollView>
   
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  banner:{
    width: '100%',
    height:201,
    borderRadius:10,
    alignSelf:'center',
    marginTop:10
  },
  linearGradient: {
    height:80,
    width:120,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  lawyerItem:{
    width:'45%',
    height:200,
    backgroundColor:'#fff',
    borderRadius: 10,
    borderWidth:0.2,
    borderColor:'#2A2A72',
    margin:10,
    alignItems:'center'
  },
  person:{
    width:80,
    height:80,
    marginTop:2
  }
})