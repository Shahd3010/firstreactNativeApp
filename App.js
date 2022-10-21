import  React,{useState} from 'react';
import { colors } from './src/utils/colors.js';
import {Focus} from './src/features/focuse'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  TextDecoder,
  StatusBar,
  Image,
} from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  const [currentSubject,setCurrentSubject]=useState('hi')
  return (
    <SafeAreaView style={styles.container}>
     <Focus/>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blue,
  },
 
});
