import {HomeFooterStyles} from '../Styles/HomeCSS/HomeFooterStyles';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

export const Footer = ({navigation, bluetoothConnection = false, ...props}) => {
  const {i18n} = useTranslation();

  //verifica stato del bluetooth
  function checkBluetooth(){
    if(bluetoothConnection){
      navigation.navigate('Wifi')
    }
    else{
      Alert.alert(i18n.t("bluetoothConnectionAlert"))
    }

  }

  return (
    <View style={props.style}>
      <LinearGradient
        colors={['#3F51B5', '#404c94', '#5a80a6']}
        style={HomeFooterStyles.container}>
        <View style={HomeFooterStyles.group}>
          <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
            <Image
              source={require('../assets/HomeImg/bluetooth.png')}
              resizeMode="contain"
              style={HomeFooterStyles.image}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/HomeImg/home.png')}
              resizeMode="contain"
              style={HomeFooterStyles.image2}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => 
           checkBluetooth()}>
            <Image
              source={require('../assets/HomeImg/wifi.png')}
              resizeMode="contain"
              style={HomeFooterStyles.image3}></Image>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
