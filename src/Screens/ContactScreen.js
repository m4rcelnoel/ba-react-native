import * as React from "react";
import {
  View,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-paper";
import CafeBar from "../../img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"

const Contact = () => {

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
            <Text style={{color:"white", paddingLeft:20, fontSize:26 }}>Informationen</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{paddingTop:20, paddingLeft:20}}>
            <View>
              <Text style={{color:"white", fontSize:20}}>Öffnungszeiten:</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:10}}>Mo - Fr: 15:00 - 22:00 Uhr</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>Sa: 15:00 - 02:00 Uhr</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>So: 15:00 - 22:00 Uhr</Text>
            </View>
            <View style={{paddingTop:40}}>
              <Text style={{color:"white", fontSize:20}}>Kontakt:</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:10}}>Tel.: 07121/50012</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>E-Mail: kontakt@bar.de</Text>
            </View>
            <View style={{paddingTop:40}}>
              <Text style={{color:"white", fontSize:20}}>Adresse:</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:10}}>Bar</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>Straße 123</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>72770 Reutlingen</Text>
            </View>
      </View>
      </View>
  );
};

export default Contact;