import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView  } from 'react-native'
import React from 'react'


export default function HomeScreen({navigation}) {
  return (
    
    <SafeAreaView style={styles.container} showHorizontalScrollIndicator={false} >
      <Text style={{fontWeight:'bold', fontSize: 30, marginTop: 5}}>Final Project</Text>
      <ScrollView horizontal={true} style={{backgroundColor: '#303946'}}>
        <View style={{flexDirection: 'row', flex:1 , alignItems: 'center', justifyContent: 'center', marginLeft: 10,}}>
            
          <View style={styles.bodyContainer} >
            
            <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={{padding: 5,}} >
            <Text style={styles.calculatorButton}>Calculator</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.bodyContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Images')} style={{padding: 5}} >
              <Text style={styles.imagesButton}>Images</Text>
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
    backgroundColor: '#303946'
  },
  bodyContainer:{
    width: 330,
    height: 520,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242B34',
    borderWidth: 2,
    borderColor: '#242B34',
    borderRadius: 25,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 4},
    elevation: 18,

  },

  calculatorButton:{
        width: 300,
        height: 30,
        textAlign:"center",
        fontSize: 17,
        fontWeight:"bold",
        marginTop:10,
        color: 'white', 
        backgroundColor: "#000",
        borderRadius: 5,
  },
  imagesButton:{
        width: 300,
        height: 30,
        textAlign:"center",
        fontSize: 17,
        fontWeight:"bold",
        marginTop:10,
        color: 'white', 
        backgroundColor: "#000",
        borderRadius: 5,
  }
})