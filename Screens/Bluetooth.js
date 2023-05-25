import React, {Component} from 'react';
import { View, ScrollView} from 'react-native';
import MaterialHeader1 from '../components/MaterialHeader1';
import MaterialIconButtonsFooter from '../components/MaterialIconButtonsFooter';
import {BluetoothCSS} from '../Styles/BluetoothCSS/BluetoothCSS';

function Bluetooth(props) {
  return (
    <View style={BluetoothCSS.container}>
      <View style={BluetoothCSS.bluetoothSchermo}>
        <View style={BluetoothCSS.header}>
          <MaterialHeader1
            style={BluetoothCSS.headerBluetooth}></MaterialHeader1>
        </View>
        <View style={BluetoothCSS.btn}>
          <View style={BluetoothCSS.btnAttivaRow}>

            <TouchableOpacity style={[BluetoothCSS.container4, props.style]}>
              <Text style={BluetoothCSS.attiva}>ATTIVA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[BluetoothCSS.container2, props.style]}>
              <Text style={BluetoothCSS.scan}>SCAN</Text>
            </TouchableOpacity>
          </View>
          <View style={BluetoothCSS.btnDisattivaRow}>
            <TouchableOpacity style={[BluetoothCSS.container3, props.style]}>
              <Text style={BluetoothCSS.disattiva}>DISATTIVA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[BluetoothCSS.container1, props.style]}>
              <Text style={BluetoothCSS.stopScan}>STOP SCAN</Text>
            </TouchableOpacity>
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
          <MaterialIconButtonsFooter
            style={BluetoothCSS.footerBluetooth}></MaterialIconButtonsFooter>
        </View>
      </View>
    </View>
  );
}

export default Bluetooth;
