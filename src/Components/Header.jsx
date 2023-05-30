import React from 'react';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


//CIAO
export const Header = ({navigation, ...props}) => {
  return (
    <View style={props.style}>
      <LinearGradient
        colors={['#5a80a6', '#404c94', '#3F51B5']}
        style={HomeHeaderStyles.container}>

      <View style={HomeHeaderStyles.group}>
        <Text style={HomeHeaderStyles.home}>{props.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image
            source={require('../assets/HomeImg/settings.png')}
            resizeMode="contain"
            style={HomeHeaderStyles.image}></Image>
        </TouchableOpacity>
      </View>
            </LinearGradient>
    </View>
  );
};
