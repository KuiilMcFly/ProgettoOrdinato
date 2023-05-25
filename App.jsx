import React from "react";
import { View, Text, Image} from "react-native";
import { HomeHeaderStyles } from "./Styles/HomeCSS/HomeHeaderStyles";
import { HomeFooterStyles } from "./Styles/HomeCSS/HomeFooterStyles";
import { HomeStyles } from "./Styles/HomeCSS/HomeStyle";

function Home(props) {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        
      <View style={[HomeHeaderStyles.container, props.style]}>
      <View style={HomeHeaderStyles.group}>
        <Text style={HomeHeaderStyles.home}>HOME</Text>
        <Image
          source={require("../ProgettoSistemato/assets/HomeImg/settings.png")}
          resizeMode="contain"
          style={HomeHeaderStyles.image}
        ></Image>
      </View>
    </View>
      </View>
      <View style={HomeStyles.footer}>

      <View style={[HomeFooterStyles, props.style]}>
      <View style={HomeFooterStyles.group}>
        <Image
          source={require("../ProgettoSistemato/assets/HomeImg/bluetooth.png")}
          resizeMode="contain"
          style={HomeFooterStyles.image}
        ></Image>
        <Image
          source={require("../ProgettoSistemato/assets/HomeImg/home.png")}
          resizeMode="contain"
          style={HomeFooterStyles.image2}
        ></Image>
        <Image
          source={require("../ProgettoSistemato/assets/HomeImg/wifi.png")}
          resizeMode="contain"
          style={HomeFooterStyles.image3}
        ></Image>
      </View>
    </View>
      </View>
    </View>
  );
}


export default Home;
