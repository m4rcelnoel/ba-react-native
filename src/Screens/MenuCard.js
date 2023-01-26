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

import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
import HotDrinks from "../../img/nathan-dumlao-pMW4jzELQCw-unsplash.png";
import ColdDrinks from "../../img/jay-wennington-N_Y88TWmGwA-unsplash.png";
import SoftDrinks from "../../img/valentin-bonjour-TIdqm0Cl8UA-unsplash.png";
import Saefte from "../../img/douglas-alves-6jdn7bNSJF4-unsplash.png";
import SnacksSweet from "../../img/tyler-nix-2rZq49uGxLk-unsplash.png";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MenuCard = ( {navigation}) => {

  const subjects = [
    { id: 1, name: "Heißgetränke", image: HotDrinks, nameID: "hotdrinks"},
    { id: 2, name: "Eiskaltes", image: ColdDrinks, nameID: "icecold"},
    { id: 3, name: "Softdrinks", image: SoftDrinks, nameID: "softdrinks"},
    { id: 4, name: "Säfte", image: Saefte, nameID: "juice"},
    { id: 5, name: "Snacks süß", image: SnacksSweet, nameID: "hotdrinks"},
    { id: 6, name: "Heiße Schoko", image: HotDrinks, nameID: "hotchocolate"},
    { id: 7, name: "Card 4", image: HotDrinks, nameID: "hotdrinks"},
    { id: 8, name: "Card 4", image: HotDrinks, nameID: "hotdrinks"},
    { id: 9, name: "Card 4", image: HotDrinks, nameID: "hotdrinks"},
    { id: 10, name: "Card 4", image: HotDrinks, nameID: "hotdrinks"},
    { id: 11, name: "Card 4", image: HotDrinks, nameID: "hotdrinks"},
  ];

  const showDrinks = () => <DrinksScreen />;


  const cardGap = 16;

  const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;

  return (
    <View backgroundColor="#0C0F16" style={{paddingTop:0, paddingBottom:250}}>
      <ImageBackground source={CafeBar}>
        <View
          style={{
            backgroundColor:"rgba(12,15,22,0.8)",
            height:50
          }}>
        </View>
        <View
          style={{
            height:200
          }}>
          
        </View>
      </ImageBackground>
      <ScrollView style={{paddingTop:0}}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {subjects.map((subject, i) => {
            return (
              <View
                key={subject.id}
                style={{
                  marginTop: cardGap,
                  marginLeft: i % 2 !== 0 ? cardGap : 0,
                  width: cardWidth,
                  height: 180,
                  borderRadius: 16,
                  shadowOpacity: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('Drinks', {itemId:subject.id, itemName: subject.nameID})}>
                  <ImageBackground source={subject.image}>
                    <View
                      key={subject.id}
                      style={{
                        width: cardWidth,
                        height: 160,
                        borderRadius: 16,
                        shadowOpacity: 0,
                        position:"relative",
                        bottom:0,
                        alignItems: "center",
                      }}
                    >
                      <View 
                        style={{
                          backgroundColor:"rgba(0,0,0,0.7)",
                          width:"100%",
                          position:"absolute",
                          bottom:0,
                          alignItems:"center",
                          paddingTop:4,
                          paddingBottom:4
                          }}>
                      <Text
                        style={{
                          fontSize:26,
                          color:"white"
                          }}>
                            {subject.name}
                      </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      </View>
  );
};

export default MenuCard;
