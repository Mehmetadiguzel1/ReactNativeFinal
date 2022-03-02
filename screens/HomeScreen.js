import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import CalculatorScreen from './CalculatorScreen';


export default function HomeScreen({navigation}) {
  return (
    
    <View style={styles.container}>
      <Text style={{color: 'white'}} > Final Project </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={{padding: 5,}} >
      <Text style={styles.calculatorButton}>Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Images')} style={{padding: 5}} >
        <Text style={styles.imagesButton}>Images</Text>
      </TouchableOpacity>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303946'
  },

  calculatorButton:{
        width: 200,
        height: 30,
        textAlign:"center",
        fontSize: 17,
        fontWeight:"bold",
        marginTop:10,
        color: '#A0A0A0', 
        backgroundColor: "#222",
        borderRadius: 5,
  },
  imagesButton:{
        width: 200,
        height: 30,
        textAlign:"center",
        fontSize: 17,
        fontWeight:"bold",
        marginTop:10,
        color: '#A0A0A0', 
        backgroundColor: "#222",
        borderRadius: 5,
  }
})