import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {SettingCSS} from '../Styles/SettingCSS/SettingCSS';
import {BluetoothCSS} from '../Styles/BluetoothCSS/BluetoothCSS';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

function Setting({navigation, ...props}) {
  const [spinner, setSpinner] = useState(false);
  const {i18n} = useTranslation();

  const changeLanguageHandler = language => {
    setSpinner(true);
    i18n.changeLanguage(language).then((res)=>{
      setSpinner(false);
      
      Alert.alert(i18n.t('linguaCambiata'))
    })
    

  };
  return (
    <View>
      <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={SettingCSS.container}
      >
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
      />
      <View style={BluetoothCSS.header}>
        <Header title={'IMPOSTAZIONI'} navigation={navigation} />
      </View>
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
      <View style={BluetoothCSS.footer}>
        <Footer navigation={navigation} />
      </View>
            </LinearGradient>
    </View>
  );
}

export default Setting;
