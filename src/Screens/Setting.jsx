import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {SettingCSS} from '../Styles/SettingCSS/SettingCSS';
import {BluetoothCSS} from '../Styles/BluetoothCSS/BluetoothCSS';
import {useTranslation} from 'react-i18next';

function Setting({navigation,onLanguageSelected, ...props}) {
  const {i18n} = useTranslation();

  const changeLanguageHandler = language => {
    i18n.changeLanguage(language);
    onLanguageSelected();
  };
  return (
    <View style={SettingCSS.container}>
      <View style={BluetoothCSS.header}>
        <Header title={'IMPOSTAZIONI'} navigation={navigation} />
      </View>
      <View style={SettingCSS.textBtn}>
        <Text style={SettingCSS.lingua}>Lingua :</Text>

        <View style={SettingCSS.materialButtonViolet3}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('it');
              onLanguageSelected();
            }}
            style={[SettingCSS.container1, props.style]}>
            <Text style={SettingCSS.italiano}>Italiano 🇮🇹</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet4}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('en');
              onLanguageSelected();
            }}
            style={[SettingCSS.container2, props.style]}>
            <Text style={SettingCSS.english}>English 🇬🇧</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet5}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('fr');
              onLanguageSelected();
            }}
            style={[SettingCSS.container3, props.style]}>
            <Text style={SettingCSS.francais}>Français 🇫🇷</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet6}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('de');
              onLanguageSelected();
            }}
            style={[SettingCSS.container4, props.style]}>
            <Text style={SettingCSS.deutsch}>Deutsch 🇩🇪</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={BluetoothCSS.footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Setting;
