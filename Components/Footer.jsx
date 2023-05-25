import {HomeFooterStyles} from '../Styles/HomeCSS/HomeFooterStyles';
import {View, Text, Image} from 'react-native';

export const Footer = props => {
  return (
    <View style={[HomeFooterStyles, props.style]}>
      <View style={HomeFooterStyles.group}>
        <Image
          source={require('../assets/HomeImg/bluetooth.png')}
          resizeMode="contain"
          style={HomeFooterStyles.image}></Image>
        <Image
          source={require('../assets/HomeImg/home.png')}
          resizeMode="contain"
          style={HomeFooterStyles.image2}></Image>
        <Image
          source={require('../assets/HomeImg/wifi.png')}
          resizeMode="contain"
          style={HomeFooterStyles.image3}></Image>
      </View>
    </View>
  );
};
