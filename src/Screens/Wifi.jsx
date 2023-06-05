import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Text,
  View,
  Modal,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {WifiScanStyle} from '../Styles/WifiCSS/WifiScanCSS';
import {WifiStyles} from '../Styles/WifiCSS/WifiStyles';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import WifiManager from 'react-native-wifi-reborn';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import ModalStyles from '../Styles/BluetoothCSS/BluetoothModal1';
import CustomConnectBt from '../Components/CustomConnectBt';
import i18n from '../../i18n';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';

function Wifi(props) {
  const [passwordWifi, setPasswordWifi] = useState('');
  const [scannedWifi, setScannedWifi] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [characteristicUUID, setCharacteristicUUID] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <LinearGradient
        colors={['#82c0d1', '#508796', '#d7d8db']}
        style={WifiStyles.container}>
        <View style={WifiStyles.containerBtn}>
          <View style={HomeHeaderStyles.group}>
            {isMenuOpen ? (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('../assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('../assets/HomeImg/menu.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            )}
            <Text style={HomeHeaderStyles.home}>WIFI</Text>
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
                contentContainerStyle={
                  WifiStyles.scrollArea_contentContainerStyle
                }
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
        </View>

        {isMenuOpen && (
          <LinearGradient
            style={HomeHeaderStyles.hamburgerMenu}
            colors={['#82c0d1', '#508796', '#d7d8db']}>
            {isMenuOpen ? (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('../assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon2}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('../assets/HomeImg/menu.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            )}
            <View style={{width: '100%', height: '35%', marginLeft: '0%'}}>
            <Image
              source={require('../assets/ble.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={HomeHeaderStyles.menuItem}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
              <Text style={HomeHeaderStyles.menuItem}>BLUETOOTH</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Text style={HomeHeaderStyles.menuItem}>SETTING</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text style={HomeHeaderStyles.menuItem}>ABOUT US</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </LinearGradient>
  );
}

export default Wifi;
