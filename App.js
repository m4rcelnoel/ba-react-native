import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import App from './src/App'
import Home from './src/Screens/Home'
import ContactScreen from './src/Screens/ContactScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();


const Main = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false}} >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Info" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;