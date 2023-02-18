import * as React from "react";
import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
} from "react-native";
import { Text, List } from "react-native-paper";
import { ActivityIndicator} from "react-native-paper";
import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"

const Drinks = ({route, navigation}) => {
  const { itemId } = route.params;
  const { itemNameID } = route.params;
  const { itemName } = route.params;
  const name = itemName
  const id = JSON.stringify(itemId)
  const nameID = itemNameID

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getDrinks = async (url, name) => {
    try {
      const response = await fetch(url+name);
      const json = await response.json();
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
    const url = "https://ba.0bdd.de/api/v1/ba/"
    console.log(url+nameID)
    getDrinks(url, nameID)
  }

  useEffect(() => {
    whichData(id, nameID)
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
          <View
            style= {{
              position:"absolute",
              bottom:0,
              width:"100%",
              justifyContent:"center",
              height:50,
              backgroundColor:"rgba(0,0,0,0.8)",
            }}>
            <Text style={{color:"white", paddingLeft:15, fontSize:26 }}>{name}</Text>
          </View>
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
                key={item.id}
                titleStyle={{color:"white"}}
                title={item.name}
                description={item.description}
                right={()=>(<Text style={{color:"white"}} >{item.price}</Text>)}
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