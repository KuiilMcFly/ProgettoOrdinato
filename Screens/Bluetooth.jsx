import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {BluetoothCSS} from '../Styles/BluetoothCSS/BluetoothCSS';

function Bluetooth({navigation, ...props}) {
  return (
    <View style={BluetoothCSS.container}>
      <View style={BluetoothCSS.bluetoothSchermo}>
        <View style={BluetoothCSS.header}>
          <Header navigation={navigation} title={'BLUETOOTH'} />
        </View>
        <View style={BluetoothCSS.btn}>
          <View style={BluetoothCSS.btnAttivaRow}>
            <View style={BluetoothCSS.btnAttiva1}>
              <TouchableOpacity style={[BluetoothCSS.container4, props.style]}>
                <Text style={BluetoothCSS.attiva}>ATTIVA</Text>
              </TouchableOpacity>
            </View>
            <View style={BluetoothCSS.scan1}>
              <TouchableOpacity style={[BluetoothCSS.container2, props.style]}>
                <Text style={BluetoothCSS.scan}>SCAN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={BluetoothCSS.btnDisattivaRow}>
            <View style={BluetoothCSS.btnDisattiva1}>
              <TouchableOpacity style={[BluetoothCSS.container3, props.style]}>
                <Text style={BluetoothCSS.disattiva}>DISATTIVA</Text>
              </TouchableOpacity>
            </View>
            <View style={BluetoothCSS.stopScan1}>
              <TouchableOpacity style={[BluetoothCSS.container1, props.style]}>
                <Text style={BluetoothCSS.stopScan}>STOP SCAN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={BluetoothCSS.scrollView}>
          <View style={BluetoothCSS.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={
                BluetoothCSS.scrollArea_contentContainerStyle
              }></ScrollView>
          </View>
        </View>
        <View style={BluetoothCSS.footer}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

export default Bluetooth;
