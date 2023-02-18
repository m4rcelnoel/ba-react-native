import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/Screens/Home'
import ContactScreen from './src/Screens/ContactScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Main = () => {

  return (
    <PaperProvider>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0C0F16'}}}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),}} />
          <Tab.Screen name="Info" component={ContactScreen} options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" color={color} size={size} />
            ),}} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;