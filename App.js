import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/Screens/Home'
import ContactScreen from './src/Screens/ContactScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Erstellen einer Instanz der Bottom-Tab-Navigators
const Tab = createBottomTabNavigator();

const Main = () => {

  return (
    <PaperProvider>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0C0F16'}}}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home', // Legt den Textbeschriftung des Tabs auf "Home" fest
            tabBarIcon: ({ color, size }) => ( // Definiert das Symbol für den Tab
              <Ionicons name="home" color={color} size={size} /> /* Das Symbol ist ein Home-Icon von Ionicons mit der Farbe und Größe, die der Navigator übergeben hat */
            ),}} />
          <Tab.Screen name="Info" component={ContactScreen} options={{
            tabBarLabel: 'Info', // Legt die Textbeschriftung des Tabs auf "Info" fest
            tabBarIcon: ({ color, size }) => ( // Definiert das Symbol für den Tab
              <Ionicons name="information-outline" color={color} size={size} /> /* Das Symbol ist ein Informations-Icon von Ionicons mit der Farbe und Größe, die der Navigator übergeben hat */
            ),}} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;