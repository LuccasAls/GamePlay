import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {  Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'

import { Background } from './src/components/Background';
import { Routes } from './src/routes/index';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });

  
  if(!fontsLoaded) {
    return null
  }

  return (
    <Background>
      <StatusBar 
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
        />
        <Routes/>
    </Background>
  );
}


