import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {WifiScanStyle} from '../Styles/WifiCSS/WifiScanCSS';
import {WifiStyles} from '../Styles/WifiCSS/WifiStyles';

function Wifi({navigation, props}) {
  return (
    <View style={WifiStyles.container}>
      <View style={WifiStyles.header}>
        <Header title={'WI-FI'} navigation={navigation} />
      </View>
      <View style={WifiStyles.btn}>
        <View style={WifiStyles.btnScan}>
          <TouchableOpacity style={[WifiScanStyle.container]}>
            <Text style={WifiScanStyle.scan}>SCAN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={WifiStyles.scrollView}>
        <View style={WifiStyles.scrollArea}>
          <ScrollView
            contentContainerStyle={
              WifiStyles.scrollArea_contentContainerStyle
            }></ScrollView>
        </View>
      </View>
      <View style={WifiStyles.footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Wifi;
