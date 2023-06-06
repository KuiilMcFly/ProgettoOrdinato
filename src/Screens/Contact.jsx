import {React, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {AboutStyle} from '../Styles/AboutCSS/AboutCSS';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../i18n';

const Contact = ({navigation, bluetoothConnection = false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!isMenuVisible);
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
        <Text style={HomeHeaderStyles.home}>{i18n.t('contact')}</Text>
      </View>

      {isMenuVisible && (
        <LinearGradient
          style={HomeHeaderStyles.hamburgerMenu}
          colors={['#82c0d1', '#508796', '#d7d8db']}>
          {isMenuOpen ? (
            <TouchableOpacity onPress={toggleMenu}>
              <View style = {{backgroundColor: '#3F51B5', height: 40}}>
                <Image
                source={require('../assets/HomeImg/close.png')}
                resizeMode="contain"
                style={HomeHeaderStyles.menuIcon2}
              />
              </View>
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
            <Text style={HomeHeaderStyles.menuItem}>{i18n.t('setting')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('help')}</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('about')}</Text>
            </TouchableOpacity>
        </LinearGradient>
      )}
    </LinearGradient>
  );
};

export default Contact;
