import * as React from "react";
import { Avatar } from "react-native-paper";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrinksScreen from "./DrinksScreen";
import MenuCard from "./MenuCard";

const Stack = createNativeStackNavigator();

const Home = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} >
      <Stack.Screen name="MenuCard" component={MenuCard} />
      <Stack.Screen name="Drinks" component={DrinksScreen} />
    </Stack.Navigator>
  );
};

export default Home;