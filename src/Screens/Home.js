import * as React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImagedCarouselCard,
  ImageBackground,
} from "react-native";
import { Avatar, Button, Card, Surface, Text } from "react-native-paper";
import { StyleSheet, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/core";

import DrinksScreen from "./DrinksScreen";
import MenuCard from "./MenuCard";

import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"

import HotDrinks from "../../img/nathan-dumlao-pMW4jzELQCw-unsplash.png";
import ColdDrinks from "../../img/jay-wennington-N_Y88TWmGwA-unsplash.png";
import SoftDrinks from "../../img/valentin-bonjour-TIdqm0Cl8UA-unsplash.png";
import Saefte from "../../img/douglas-alves-6jdn7bNSJF4-unsplash.png";
import SnacksSweet from "../../img/tyler-nix-2rZq49uGxLk-unsplash.png";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

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
