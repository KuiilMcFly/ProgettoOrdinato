import {HomeFooterStyles} from '../../Styles/HomeCSS/HomeFooterStyles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export const Footer = ({navigation, ...props}) => {
  return (
    <View style={[HomeFooterStyles, props.style]}>
      <View style={HomeFooterStyles.group}>
        <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
          <Image
            source={require('../../assets/HomeImg/bluetooth.png')}
            resizeMode="contain"
            style={HomeFooterStyles.image}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/HomeImg/home.png')}
            resizeMode="contain"
            style={HomeFooterStyles.image2}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Wifi')}>
          <Image
            source={require('../../assets/HomeImg/wifi.png')}
            resizeMode="contain"
            style={HomeFooterStyles.image3}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
