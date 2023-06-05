import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { SettingCSS } from '../Styles/SettingCSS/SettingCSS';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

// Importa l'immagine di caricamento
import LoadingImage from '../assets/Bluetooth.png';

function FirstScreen({ onLanguageSelected, ...props }) {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false); 

  const changeLanguageHandler = language => {
    setLoading(true); 

    i18n.changeLanguage(language);
    setTimeout(() => {
      setLoading(false); 
      onLanguageSelected();
    }, 2000); 
  };

  const navigation = useNavigation();
  return (
    <View>
      {loading ? (
        <LinearGradient  colors={['#82c0d1', '#508796', '#d7d8db']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Image source={LoadingImage} style={{ width: 500, height: 500}} />
          <ActivityIndicator size="large" color="#000000" />
          <Text>Loading...</Text>
        </LinearGradient>
      ) : (
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
                  setLoading(true); // Imposta lo stato di caricamento su true
                }}
                style={[SettingCSS.container1, props.style]}
              >
                <Text style={SettingCSS.italiano}>IT 🇮🇹</Text>
              </TouchableOpacity>
            </View>

            <View style={SettingCSS.materialButtonViolet4}>
              <TouchableOpacity
                onPress={() => {
                  changeLanguageHandler('en');
                  setLoading(true); // Imposta lo stato di caricamento su true
                }}
                style={[SettingCSS.container2, props.style]}
              >
                <Text style={SettingCSS.english}>EN 🇬🇧</Text>
              </TouchableOpacity>
            </View>

            <View style={SettingCSS.materialButtonViolet5}>
              <TouchableOpacity
                onPress={() => {
                  changeLanguageHandler('fr');
                  setLoading(true); // Imposta lo stato di caricamento su true
                }}
                style={[SettingCSS.container3, props.style]}
              >
                <Text style={SettingCSS.francais}>FR 🇫🇷</Text>
              </TouchableOpacity>
            </View>

            <View style={SettingCSS.materialButtonViolet6}>
              <TouchableOpacity
                onPress={() => {
                  changeLanguageHandler('de');
                  setLoading(true); // Imposta lo stato di caricamento su true
                }}
                style={[SettingCSS.container4, props.style]}
              >
                <Text style={SettingCSS.deutsch}>DE 🇩🇪</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
}

export default FirstScreen;
