import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SettingCSS} from '../../Styles/SettingCSS/SettingCSS';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

function FirstScreen({onLanguageSelected, ...props}) {
  const {i18n} = useTranslation();

  const changeLanguageHandler = language => {
    i18n.changeLanguage(language);
    onLanguageSelected();
  };

  const navigation = useNavigation();
  return (
    <View style={SettingCSS.container}>
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
            //Logica per cambiare lingua
            onPress={() => {
              changeLanguageHandler('de');
              onLanguageSelected();
            }}
            style={[SettingCSS.container4, props.style]}>
            <Text style={SettingCSS.deutsch}>Deutsch 🇩🇪</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FirstScreen;
