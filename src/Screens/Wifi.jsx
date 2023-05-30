import React, {useState, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  Modal,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {WifiScanStyle} from '../Styles/WifiCSS/WifiScanCSS';
import {WifiStyles} from '../Styles/WifiCSS/WifiStyles';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import WifiManager from 'react-native-wifi-reborn';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import ModalStyles from '../Styles/BluetoothCSS/BluetoothModal1';
import CustomConnectBt from '../Components/CustomConnectBt';
import i18n from '../../i18n';

function Wifi(props) {
  const [passwordWifi, setPasswordWifi] = useState('');
  const [scannedWifi, setScannedWifi] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [characteristicUUID, setCharacteristicUUID] = useState(null);

  const [isDisconnectedModalVisible, setIsDisconnectedModalVisible] =
    useState(false);

  const navigation = useNavigation();

  useEffect(() => {});

  const requestLocationPermission = async () => {
    try {
      const isCoarseGranted = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission for GPS scanning',
          message: 'Whatever message you want to show',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (isCoarseGranted === RESULTS.GRANTED) {
        console.log('Location permission for Bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for Bluetooth scanning revoked');
        return false;
      }
    } catch (error) {
      console.warn(error);
      return false;
    }
  };

  function deviceScan() {
    requestLocationPermission().then(permission => {
      if (permission) {
        WifiManager.isEnabled().then(
          res => {
            if (res) {
              let timerId: number;
              const wifiList = new Map();
              WifiManager.loadWifiList().then(wifi => {
                console.log(wifi);
                wifi.forEach(element => {
                  if (!wifiList.has(element.SSID)) {
                    wifiList.set(element.SSID, {
                      SSID: element.SSID,
                      level: element.level,
                    });
                    setScannedDeviceCount(count => count + 1);
                    setScannedWifi(Array.from(wifiList.values()));
                  }
                });
              });
            } else {
              Alert.alert('Attenzione il wifi non è abilitato');
            }
          },
          err => {
            Alert.alert('Attenzione il wifi non è abilitato');
          },
        );
      }
    });
  }

  function selectWifi(wifi) {
    setConnectedDevice(wifi);
    console.log(connectedDevice);
  }

  function connect(SSID) {
    WifiManager.connectToProtectedSSID(SSID, passwordWifi, false).then(x => {
      Alert.alert('Connessione riuscita!');
    });
  }
  function stopConnection() {
    WifiManager.disconnect().then(
      res => {
        setConnectedDevice(null);
      },
      err => {
        console.log('try me bitch');
      },
    );
  }

  const renderItem = ({item}) => (
    <CustomConnectBt
      key={item.SSID}
      label={`${item.SSID}`}
      onPress={() => selectWifi(item)}
    />
  );

  return (
    <View style={WifiStyles.container}>
      <View style={WifiStyles.header}>
        <Header title={'WI-FI'} navigation={navigation} />
      </View>
      <View style={WifiStyles.btn}>
        <View style={WifiStyles.btnScan}>
          <TouchableOpacity
            onPress={deviceScan}
            style={[WifiScanStyle.container]}>
            <Text style={WifiScanStyle.scan}>{i18n.t('scansione')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={WifiStyles.scrollView}>
        <View style={WifiStyles.scrollArea}>
          <FlatList
            contentContainerStyle={WifiStyles.scrollArea_contentContainerStyle}
            data={scannedWifi}
            renderItem={renderItem}
            keyExtractor={item => item.SSID}
          />
        </View>
      </View>
      <Modal visible={!!connectedDevice} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={ModalStyles.deviceData}>
            {connectedDevice?.SSID || ''}
          </Text>
          <TextInput
            placeholder="password"
            style={ModalStyles.deviceData}
            onChangeText={text => setPasswordWifi(text)}
          />
          <Button
            title="Connetti"
            onPress={() => {
              connect(connectedDevice.SSID);
            }}
          />
          <Button title="Close" onPress={() => stopConnection()} />
        </View>
      </Modal>
      <View style={WifiStyles.footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Wifi;
