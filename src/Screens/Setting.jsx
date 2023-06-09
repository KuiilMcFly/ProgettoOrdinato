import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, Image, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { SettingCSS } from '../Styles/SettingCSS/SettingCSS';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { HomeHeaderStyles } from '../Styles/HomeCSS/HomeHeaderStyles';

function Setting({ navigation, bluetoothConnection = false, ...props }) {
  const [spinner, setSpinner] = useState(false);
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsMenuVisible(false);
      setIsMenuOpen(false); // Aggiungi questa riga per chiudere il menu quando la pagina viene sfocata
    });

    return unsubscribe;
  }, [navigation]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!isMenuVisible);
  };

  // Cambia la lingua globale dell'applicazione
  const changeLanguageHandler = language => {
    setSpinner(true);
    i18n.changeLanguage(language).then(res => {
      setSpinner(false);
      Alert.alert(i18n.t('linguaCambiata'));
    });
  };

  // Verifica stato del Bluetooth
  function checkBluetooth() {
    if (bluetoothConnection) {
      navigation.navigate('Wifi');
    } else {
      Alert.alert(i18n.t('bluetoothConnectionAlert'));
    }
  }

  return (
    <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={SettingCSS.container}
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
        <Text style={HomeHeaderStyles.home}>{i18n.t('setting')}</Text>
      </View>

      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
      <View style={SettingCSS.textBtn}>
        <Text style={SettingCSS.lingua}>{i18n.t('lingua')}:</Text>

        <View style={SettingCSS.materialButtonViolet3}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('it');
            }}
            style={[SettingCSS.container1, props.style]}
          >
            <Text style={SettingCSS.italiano}>Italiano 🇮🇹</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet4}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('en');
            }}
            style={[SettingCSS.container2, props.style]}
          >
            <Text style={SettingCSS.english}>English 🇬🇧</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet5}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('fr');
            }}
            style={[SettingCSS.container3, props.style]}
          >
            <Text style={SettingCSS.francais}>Français 🇫🇷</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet6}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('de');
            }}
            style={[SettingCSS.container4, props.style]}
          >
            <Text style={SettingCSS.deutsch}>Deutsch 🇩🇪</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isMenuOpen && (
        <View style={styles.overlay}>
          <LinearGradient
            style={HomeHeaderStyles.hamburgerMenu}
            colors={['#82c0d1', '#508796', '#d7d8db']}
          >
            <TouchableOpacity onPress={toggleMenu}>
              <View style={{ backgroundColor: '#3F51B5', height: 40 }}>
                <Image
                  source={require('../assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon2}
                />
              </View>
            </TouchableOpacity>
            <View style={{ width: '100%', height: '35%', marginLeft: '0%' }}>
              <Image
                source={require('../assets/ble.png')}
                style={{ width: '100%', height: '100%' }}
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
            <TouchableOpacity onPress={() => navigation.navigate('Historical')}>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('historical')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('contact')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text style={HomeHeaderStyles.menuItem}>{i18n.t('about')} </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Imposta l'opacità qui
  },
});

export default Setting;
