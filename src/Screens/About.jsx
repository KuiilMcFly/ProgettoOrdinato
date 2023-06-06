import {React, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {AboutStyle} from '../Styles/AboutCSS/AboutCSS';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../i18n';

const About = ({navigation, bluetoothConnection = false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={AboutStyle.AboutContainer}>
      <View style={HomeHeaderStyles.group}>
        {isMenuOpen ? (
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={require('../assets/HomeImg/close.png')}
              resizeMode="contain"
              style={HomeHeaderStyles.menuIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={require('../assets/HomeImg/menu.png')}
              resizeMode="contain"
              style={HomeHeaderStyles.menuIcon}
            />
          </TouchableOpacity>
        )}
        <Text style={HomeHeaderStyles.home}>ABOUT US</Text>
      </View>

      <View style={AboutStyle.AboutContainer1}>
        <Text style={AboutStyle.text}>Informazioni sulla versione</Text>
        <View style={AboutStyle.VersionContainer}>
          <Text style={AboutStyle.text1}>Versione: </Text>
          <Text style={AboutStyle.text1}>Versione: </Text>
          <Text style={AboutStyle.text1}>Versione: </Text>
        </View>
      </View>

      {isMenuOpen && (
        <LinearGradient
          style={HomeHeaderStyles.hamburgerMenu}
          colors={['#82c0d1', '#508796', '#d7d8db']}>
          {isMenuOpen ? (
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                source={require('../assets/HomeImg/close.png')}
                resizeMode="contain"
                style={HomeHeaderStyles.menuIcon2}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                source={require('../assets/HomeImg/menu.png')}
                resizeMode="contain"
                style={HomeHeaderStyles.menuIcon}
              />
            </TouchableOpacity>
          )}
          <View style={{width: '100%', height: '35%', marginLeft: '0%'}}>
            <Image
              source={require('../assets/ble.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={HomeHeaderStyles.menuItem}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
            <Text style={HomeHeaderStyles.menuItem}>BLUETOOTH</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => checkBluetooth()}>
            <Text style={HomeHeaderStyles.menuItem}>WIFI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Text style={HomeHeaderStyles.menuItem}>SETTING</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </LinearGradient>
  );
};

export default About;
