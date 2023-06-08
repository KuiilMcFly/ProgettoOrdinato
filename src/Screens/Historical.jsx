import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  StyleSheet,
} from 'react-native';
import { AboutStyle } from '../Styles/AboutCSS/AboutCSS';
import { HomeHeaderStyles } from '../Styles/HomeCSS/HomeHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../i18n';
import StoricoRicariche from './StoricoRicariche';

const Historical = ({ navigation, bluetoothConnection = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [ricariche, setRicariche] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!isMenuVisible);
  };

  const aggiungiRicarica = () => {
    const data = new Date().toLocaleString();
    const energia = Math.floor(Math.random() * 100);
    const nuovaRicarica = { data, energia };
    setRicariche([nuovaRicarica, ...ricariche]);
  };

  const checkBluetooth = () => {
    if (bluetoothConnection) {
      navigation.navigate('Wifi');
    } else {
      Alert.alert(i18n.t('bluetoothConnectionAlert'));
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsMenuVisible(false);
      setIsMenuOpen(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={AboutStyle.AboutContainer}
    >
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
        <Text style={HomeHeaderStyles.home}>{i18n.t('historical')}</Text>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <Button title="Aggiungi ricarica" onPress={aggiungiRicarica} />
        <StoricoRicariche ricariche={ricariche} />
      </View>

      {isMenuVisible && (
        <View style={styles.overlay}>
          <LinearGradient
            style={HomeHeaderStyles.hamburgerMenu}
            colors={['#82c0d1', '#508796', '#d7d8db']}
          >
            {isMenuOpen ? (
              <TouchableOpacity onPress={toggleMenu}>
                <View style={{ backgroundColor: '#3F51B5', height: 40 }}>
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
            <View
              style={{ width: '100%', height: '35%', marginLeft: '0%' }}
            >
              <Image
                source={require('../assets/ble.png')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={HomeHeaderStyles.menuItem}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Bluetooth')}
            >
              <Text style={HomeHeaderStyles.menuItem}>BLUETOOTH</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => checkBluetooth()}>
              <Text style={HomeHeaderStyles.menuItem}>WIFI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Setting')}
            >
              <Text style={HomeHeaderStyles.menuItem}>
                {i18n.t('setting')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('contact')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AboutUs')}
            >
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('about')}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Imposta l'opacità qui
  },
});

export default Historical;
