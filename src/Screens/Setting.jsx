import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text, Alert, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {SettingCSS} from '../Styles/SettingCSS/SettingCSS';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';

function Setting({navigation, bluetoothConnection = false, ...props}) {
  const [spinner, setSpinner] = useState(false);
  const {i18n} = useTranslation();
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

  //cambia la lingua globale dell'applicazione
  const changeLanguageHandler = language => {
    setSpinner(true);
    i18n.changeLanguage(language).then(res => {
      setSpinner(false);

      Alert.alert(i18n.t('linguaCambiata'));
    });
  };
  return (

      <LinearGradient
        colors={['#82c0d1', '#508796', '#d7d8db']}
        style={SettingCSS.container}>
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
       
        <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{color: '#FFF'}}
        />
        <View style={SettingCSS.textBtn}>
          <Text style={SettingCSS.lingua}>{i18n.t('lingua')}:</Text>

          <View style={SettingCSS.materialButtonViolet3}>
            <TouchableOpacity
              onPress={() => {
                changeLanguageHandler('it');
              }}
              style={[SettingCSS.container1, props.style]}>
              <Text style={SettingCSS.italiano}>Italiano 🇮🇹</Text>
            </TouchableOpacity>
          </View>

          <View style={SettingCSS.materialButtonViolet4}>
            <TouchableOpacity
              onPress={() => {
                changeLanguageHandler('en');
              }}
              style={[SettingCSS.container2, props.style]}>
              <Text style={SettingCSS.english}>English 🇬🇧</Text>
            </TouchableOpacity>
          </View>

          <View style={SettingCSS.materialButtonViolet5}>
            <TouchableOpacity
              onPress={() => {
                changeLanguageHandler('fr');
              }}
              style={[SettingCSS.container3, props.style]}>
              <Text style={SettingCSS.francais}>Français 🇫🇷</Text>
            </TouchableOpacity>
          </View>

          <View style={SettingCSS.materialButtonViolet6}>
            <TouchableOpacity
              onPress={() => {
                changeLanguageHandler('de');
              }}
              style={[SettingCSS.container4, props.style]}>
              <Text style={SettingCSS.deutsch}>Deutsch 🇩🇪</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text style={HomeHeaderStyles.menuItem}>ABOUT US</Text>
            </TouchableOpacity>
          </LinearGradient>

    <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={SettingCSS.container}>
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

      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
      />
      <View style={SettingCSS.textBtn}>
        <Text style={SettingCSS.lingua}>{i18n.t('lingua')}:</Text>

        <View style={SettingCSS.materialButtonViolet3}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('it');
            }}
            style={[SettingCSS.container1, props.style]}>
            <Text style={SettingCSS.italiano}>Italiano 🇮🇹</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet4}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('en');
            }}
            style={[SettingCSS.container2, props.style]}>
            <Text style={SettingCSS.english}>English 🇬🇧</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet5}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('fr');
            }}
            style={[SettingCSS.container3, props.style]}>
            <Text style={SettingCSS.francais}>Français 🇫🇷</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet6}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('de');
            }}
            style={[SettingCSS.container4, props.style]}>
            <Text style={SettingCSS.deutsch}>Deutsch 🇩🇪</Text>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('Wifi')}>
            <Text style={HomeHeaderStyles.menuItem}>WIFI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={HomeHeaderStyles.menuItem}>ABOUT US</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </LinearGradient>
  );
}

export default Setting;
