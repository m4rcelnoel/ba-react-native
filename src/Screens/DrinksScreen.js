import * as React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImagedCarouselCard,
  ImageBackground,
} from "react-native";
import { Avatar, Button, Card, Surface, Text, List } from "react-native-paper";
import { StyleSheet, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/core";
import { ActivityIndicator, FlatList } from "react-native-paper";

import DrinksScreen from "./DrinksScreen";

import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
import HotDrinks from "../../img/nathan-dumlao-pMW4jzELQCw-unsplash.png";
import ColdDrinks from "../../img/jay-wennington-N_Y88TWmGwA-unsplash.png";
import SoftDrinks from "../../img/valentin-bonjour-TIdqm0Cl8UA-unsplash.png";
import Saefte from "../../img/douglas-alves-6jdn7bNSJF4-unsplash.png";
import SnacksSweet from "../../img/tyler-nix-2rZq49uGxLk-unsplash.png";


const Drinks = ({route, navigation}) => {
  const { itemId } = route.params;
  const { itemName } = route.params;
  const id = JSON.stringify(itemId)
  const nameID = itemName

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getDrinks = async (url, name) => {
    try {
      const response = await fetch(url+name);
      const json = await response.json();
      /* console.log(json) */
      setData(json)
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }
  
  const whichData = (id, nameID) => {
    const url = "http://127.0.0.1:5000/api/v1/ba/"
    console.log(url+nameID)

    getDrinks(url, nameID)



  }

  useEffect(() => {
    whichData(id, nameID)
    /* getDrinks();
    console.log(data) */
  }, []);


  return (
    <View backgroundColor="#0C0F16" style={{paddingBottom:300}}>
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
      <View style={{paddingTop:20}}>
      {isLoading ? (
        <ActivityIndicator/>
      ): (
        data.map((item, i) => {
          return (
            <View>
              <List.Item
                titleStyle={{color:"white"}}
                title={item.name}
                description={item.description}
                right={()=>(<Text style={{color:"white"}}>{item.price}</Text>)}
                />
            </View>
          )
        })
      )}
      </View>
      </View>
  );
};

export default Drinks;
