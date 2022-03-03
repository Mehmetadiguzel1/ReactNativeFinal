import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image  } from 'react-native'
import React from 'react'


export default function HomeScreen({navigation}) {
  return (
    
    <SafeAreaView style={styles.container} showHorizontalScrollIndicator={false} >
      <Text style={{fontWeight:'bold', fontSize: 30, marginTop: 5}}>Final Project</Text>
      <ScrollView horizontal={true} style={{backgroundColor: '#333'}}>
        <View style={{flexDirection: 'row', flex:1 , alignItems: 'center', justifyContent: 'center', marginLeft: 10,}}>
            
          <View style={styles.bodyContainer} >
            
            <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={{padding: 5, alignItems:'center'}} >
            
            <Image style={styles.calculatorButton} source={{uri: ('https://brocku.ca/brock-news/wp-content/uploads/2016/12/ThinkstockPhotos-511947890-1600x1131.jpg?x70330')}} />

            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}} >Calculator</Text>

            </TouchableOpacity>
            
          </View>
          <View style={styles.bodyContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Images')} style={{padding: 5, alignItems:'center', }} >
              <Image style={styles.calculatorButton} source={{uri: ('https://www.ultimatemovierankings.com/wp-content/uploads/2016/04/d8090f18bdbfe416f8d5c1a3e681ac57.jpg')}} />

            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}} >Movie Stars</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      
    </SafeAreaView>
    
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  bodyContainer:{
    width: 330,
    height: 520,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 25,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,

  },

  calculatorButton:{
        width: 270,
        height: 410,
        marginTop:5,

  },

})