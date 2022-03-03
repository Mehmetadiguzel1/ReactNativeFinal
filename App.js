import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ImagesScreen from './screens/ImagesScreen';
import DwayneJohnson from './component/DwayneJohnson';
import WillSmith from './component/WillSmith'
import AdamDriver from './component/AdamDriver'
const Stack = createNativeStackNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home"options={{title: 'Home Page', headerStyle: {backgroundColor: '#333'},}} component={HomeScreen} />
      <Stack.Screen name="Calculator"options={{title: 'Home Page', headerStyle: {backgroundColor: '#333'},}}  component={CalculatorScreen} />
      <Stack.Screen name="Images"options={{title: 'Home Page', headerStyle: {backgroundColor: '#333'},}} component={ImagesScreen} />
      <Stack.Screen name="Dwayne Johnson"options={{title: 'Movie Stars', headerStyle: {backgroundColor: '#333'},}} component={DwayneJohnson} />
      <Stack.Screen name="Will Smith"options={{title: 'Movie Stars', headerStyle: {backgroundColor: '#333'},}} component={WillSmith} />
      <Stack.Screen name="Adam Driver"options={{title: 'Movie Stars', headerStyle: {backgroundColor: '#333'},}} component={AdamDriver} />
    </Stack.Navigator>
      
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
