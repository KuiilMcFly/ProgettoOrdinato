import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {SettingCSS} from '../Styles/SettingCSS/SettingCSS';

function Setting(props) {
  return (
    <View style={SettingCSS.container}>
      <View style={BluetoothCSS.header}>
        <Header />
      </View>
      <View style={SettingCSS.textBtn}>
        <Text style={SettingCSS.lingua}>Lingua :</Text>

        <View style={SettingCSS.materialButtonViolet3}>
          <TouchableOpacity style={[SettingCSS.container1, props.style]}>
            <Text style={SettingCSS.italiano}>Italiano</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet4}>
          <TouchableOpacity style={[SettingCSS.container2, props.style]}>
            <Text style={SettingCSS.english}>English</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet5}>
          <TouchableOpacity style={[SettingCSS.container3, props.style]}>
            <Text style={SettingCSS.francais}>Français</Text>
          </TouchableOpacity>
        </View>

        <View style={SettingCSS.materialButtonViolet6}>
          <TouchableOpacity style={[SettingCSS.container4, props.style]}>
            <Text style={SettingCSS.deutsch}>Deutsch</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={BluetoothCSS.footer}>
        <Footer />
      </View>
    </View>
  );
}

export default Setting;
