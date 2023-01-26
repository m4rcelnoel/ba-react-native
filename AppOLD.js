import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import App from './src/App'
import HomeScreen from './src/Screens/Home'
import ContactScreen from './src/Screens/ContactScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const HomeRoute = () => <HomeScreen/>;

const ContactRoute = () => <ContactScreen/>;

const Main = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'contact', title: 'Info', focusedIcon: 'alert-circle', unfocusedIcon: 'alert-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    contact: ContactRoute,
  });

  return (
    <SafeAreaProvider style={{backgroundColor:"#0C0F16"}}>
      <StatusBar style="light"/>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#0C0F16'}}
      theme={{colors: {secondaryContainer: 'white', onSurface:"white", onSurfaceVariant:"#ababab"}}}
    />
    </SafeAreaProvider>
  );
};

export default Main;