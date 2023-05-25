
import React from 'react';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';
import {View, Text, Image} from 'react-native';

export const Header = props => {
  return (
    <View style={[HomeHeaderStyles.container, props.style]}>
      <View style={HomeHeaderStyles.group}>
        <Text style={HomeHeaderStyles.home}>HOME</Text>
        <Image
          source={require('../assets/HomeImg/settings.png')}
          resizeMode="contain"
          style={HomeHeaderStyles.image}></Image>
      </View>
    </View>
  );
};

