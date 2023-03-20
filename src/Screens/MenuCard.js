import * as React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Avatar, Text } from "react-native-paper";
import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
import HotDrinks from "../../img/nathan-dumlao-pMW4jzELQCw-unsplash.png";
import ColdDrinks from "../../img/jay-wennington-N_Y88TWmGwA-unsplash.png";
import SoftDrinks from "../../img/valentin-bonjour-TIdqm0Cl8UA-unsplash.png";
import Saefte from "../../img/douglas-alves-6jdn7bNSJF4-unsplash.png";
import SnacksSweet from "../../img/tyler-nix-2rZq49uGxLk-unsplash.png";
import HotChoco from "../../img/jonny-caspari-sWvPvEVygkU-unsplash.png"

const MenuCard = ( {navigation}) => {

  // Array von Kategorien für die Getränkekarte
  const subjects = [ 
    { id: 1, name: "Heißgetränke", image: HotDrinks, nameID: "hotdrinks"},
    { id: 2, name: "Heiße Schoko", image: HotChoco, nameID: "hotchocolate"},
    { id: 3, name: "Eiskaltes", image: ColdDrinks, nameID: "icecold"},
    { id: 4, name: "Softdrinks", image: SoftDrinks, nameID: "softdrinks"},
    { id: 5, name: "Säfte", image: Saefte, nameID: "juice"},
    { id: 6, name: "Snacks süß", image: SnacksSweet, nameID: "hotdrinks"},
    
  ];
  // Abstand zwischen den Karten
  const cardGap = 16;
  //Breite der Karten basierend auf der Bildschirmbreite
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
                <TouchableOpacity onPress={() => navigation.navigate('Drinks', {itemId:subject.id, itemNameID: subject.nameID, itemName: subject.name})}>
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