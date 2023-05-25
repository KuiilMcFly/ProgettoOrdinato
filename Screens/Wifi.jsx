import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {WifiScanStyle} from '../Styles/WifiCSS/WifiScanCSS';

function Wifi(props) {
  return (
    <View style={WifiStyles.container}>
      <View style={WifiStyles.header}>
        <Header />
      </View>
      <View style={WifiStyles.btn}>
        <View style={WifiStyles.btnScan}>
          <TouchableOpacity style={[WifiScanStyle.container, props.style]}>
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
        <Footer />
      </View>
    </View>
  );
}

export default Wifi;
