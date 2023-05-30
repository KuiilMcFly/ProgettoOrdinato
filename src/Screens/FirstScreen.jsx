import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SettingCSS} from '../Styles/SettingCSS/SettingCSS';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
function FirstScreen({onLanguageSelected, ...props}) {
  const {i18n} = useTranslation();

  const changeLanguageHandler = language => {
    i18n.changeLanguage(language);
    onLanguageSelected();
  };

  const navigation = useNavigation();
  return (
    <View>
        <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
      >

      <View style={SettingCSS.textBtn}>
        <Text style={SettingCSS.lingua}>Lingua :</Text>

        <View style={SettingCSS.materialButtonViolet3}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('it');
              onLanguageSelected();
            }}
            style={[SettingCSS.container1, props.style]}>
            <Text style={SettingCSS.italiano}>IT 🇮🇹</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet4}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('en');
              onLanguageSelected();
            }}
            style={[SettingCSS.container2, props.style]}>
            <Text style={SettingCSS.english}>EN 🇬🇧</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet5}>
          <TouchableOpacity
            onPress={() => {
              changeLanguageHandler('fr');
              onLanguageSelected();
            }}
            style={[SettingCSS.container3, props.style]}>
            <Text style={SettingCSS.francais}>FR 🇫🇷</Text>
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
            <Text style={SettingCSS.deutsch}>DE 🇩🇪</Text>
          </TouchableOpacity>
        </View>
      </View>
              </LinearGradient>
    </View>
  );
}

export default FirstScreen;
