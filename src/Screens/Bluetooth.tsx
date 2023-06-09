import React, {useState, useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, LogBox} from 'react-native';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Button,
  Modal,
  Alert,
  StyleSheet
} from 'react-native';
import {BluetoothCSS} from '../Styles/BluetoothCSS/BluetoothCSS';
import ModalStyles from '../Styles/BluetoothCSS/BluetoothModal1';
import Spinner from 'react-native-loading-spinner-overlay';
import {BleManager} from 'react-native-ble-plx';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Base64 from '../../Base64';
import CustomConnectBt from '../Components/CustomConnectBt';
import {useTranslation} from 'react-i18next';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';

function Bluetooth({navigation, bluetoothConnection = false, ...props}) {
  const {i18n} = useTranslation();
  const [spinner, setSpinner] = useState(false);
  const [scannedDevices, setScannedDevices] = useState([]);
  const [scannedDeviceCount, setScannedDeviceCount] = useState(0);
  const [connectedDevice, setConnectedDevice] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [characteristicUUID, setCharacteristicUUID] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  LogBox.ignoreLogs(['new NativeEventEmitter']);

  const [isDisconnectedModalVisible, setIsDisconnectedModalVisible] =
    useState(false);
  const [isBluetoothEnabled, setBluetoothEnabled] = useState(false);

  const _bleManager = useRef(null as unknown as BleManager);

  useEffect(() => {
    if (!_bleManager.current) {
      _bleManager.current = new BleManager();
    }
    deviceScan();
    return () => {};
  }, []);

  useEffect(() => {
    createBLESubscription();
  });

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

      const granted = await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN, {
        title: 'Location permission for Bluetooth scanning',
        message: 'Whatever message you want to show',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      const grantedConnect = await request(
        PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
        {
          title: 'Location permission for Bluetooth scanning',
          message: 'Whatever message you want to show',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (
        granted === RESULTS.GRANTED &&
        isCoarseGranted === RESULTS.GRANTED &&
        grantedConnect === RESULTS.GRANTED
      ) {
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
    createBLESubscription();
    requestLocationPermission().then(permission => {
      if (permission) {
        let timerId: number;
        const devices = new Map();

        _bleManager.current.startDeviceScan(
          null,
          null,
          (error, device: any) => {
            if (error) {
              console.log(JSON.stringify(error)); //JSON CHE CI HA SALVATO LA VITA
              return;
            }
            if (device.name && device.name !== 'Unknown Device') {
              if (!devices.has(device.id)) {
                devices.set(device.id, {
                  id: device.id,
                  name: device.name,
                });

                setScannedDeviceCount(count => count + 1);
                setScannedDevices(Array.from(devices.values()));
              }
            }

            if (scannedDeviceCount >= 9) {
              clearTimeout(timerId);
              deviceStopScan();
            }
          },
        );

        timerId = setTimeout(() => {
          deviceStopScan();
        }, 10000);
      }
    });
  }

  function deviceStopScan() {
    _bleManager.current.stopDeviceScan();
  }

  function connect(_device) {
    setSpinner(true);
    _bleManager.current.connectToDevice(_device.id).then(
      connectedDevice => {
        connectedDevice.isConnected().then(bluetoothStatus => {
          setConnectedDevice(true);
          connectedDevice
            .discoverAllServicesAndCharacteristics()
            .then(discoveredDev => {
              discoveredDev.services().then(
                async services => {
                  for (const service of services) {
                    const characteristics = await service.characteristics();
                    for (const characteristic of characteristics) {
                      console.log('Characteristic UUID:', characteristic.uuid);
                      if (
                        characteristic.uuid.toLowerCase().includes('00002a19')
                      ) {
                        characteristic.read().then(
                          value => {
                            console.log(value.value);
                            const batteryString = Base64.atob(value.value);
                            const newBattery = batteryString.charCodeAt(0);
                            console.log(
                              'Percentuale di carica della batteria:',
                              newBattery,
                            );

                            // Aggiorna le variabili di stato
                            setBatteryLevel(newBattery);
                            setCharacteristicUUID(characteristic.uuid);
                            setSelectedDevice(connectedDevice);
                            setSpinner(false);
                          },
                          err => {
                            Alert.alert('Connessione non riuscita');
                            setSpinner(false);
                          },
                        );
                      }
                    }
                  }
                },
                err => {
                  Alert.alert('Connessione non riuscita');
                  setSpinner(false);
                },
              );
            });
        });
        console.log();

        // Gestisci la disconnessione
        connectedDevice.onDisconnected(() => {
          setIsDisconnectedModalVisible(true);
          setSelectedDevice(null);
          setConnectedDevice(false);
        });
      },
      err => {
        console.log(JSON.stringify(err));

        Alert.alert('Connessione non riuscita');
        setSpinner(false);
      },
    );
  }

  function createBLESubscription() {
    const subscription = _bleManager.current.onStateChange(async state => {
      console.log('Device Bluetooth state changed to ', state);
      if (state === 'PoweredOn') {
        setBluetoothEnabled(true);
        subscription.remove();
        return true;
      } else if (state === 'PoweredOff') {
        Alert.alert(
          i18n.t('bluetoothNonAttivo'),
          i18n.t('bluetoothNonAttivoMessage'),
          [{text: i18n.t('ok')}],
        );
        //Bluetooth is not currently powered on and available to use.
        setBluetoothEnabled(false);
        return false;
      } else {
        subscription.remove();
        console.error('unhandled status [' + state + ']. Stopped scan');
      }
      subscription.remove();
    }, true);
  }

  //verifica stato del bluetooth
  function checkBluetooth() {
    if (bluetoothConnection) {
      navigation.navigate('Wifi');
    } else {
      Alert.alert(i18n.t('bluetoothConnectionAlert'));
    }
  }
  function stopBluetoothConnection(deviceId) {
    _bleManager.current.cancelDeviceConnection(deviceId).then(
      res => {
        Alert.alert(i18n.t('disconnessioneRiuscita'));
        setSelectedDevice(null);
      },
      err => {
        Alert.alert(i18n.t('warn'));
      },
    );
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!isMenuVisible);
  };

  //Visualizzazione
  return (
    <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={BluetoothCSS.container}>
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
        <Text style={HomeHeaderStyles.home}>BLUETOOTH</Text>
      </View>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
      />
      <View style={BluetoothCSS.bluetoothSchermo}>
        <View style={BluetoothCSS.header}></View>

        <View style={BluetoothCSS.scrollView}>
          <View style={BluetoothCSS.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={
                BluetoothCSS.scrollArea_contentContainerStyle
              }>
              {scannedDevices.map(device => (
                <CustomConnectBt
                  key={device.id}
                  label={`${device.name}`}
                  onPress={() => connect(device)}
                />
              ))}
            </ScrollView>
            <Modal visible={!!selectedDevice} animationType="slide">
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Text style={ModalStyles.deviceData}>
                  {selectedDevice?.name || ''}
                </Text>
                <Text style={ModalStyles.deviceData}>
                  {selectedDevice?.id || ''}
                </Text>

                <Text style={ModalStyles.deviceData}>
                  Current connection status:{' '}
                  {selectedDevice ? 'Connected' : 'Not connected'}
                </Text>

                <Text style={ModalStyles.deviceData}>
                  Percentuale di carica della batteria: {batteryLevel}%
                </Text>

                <Text style={ModalStyles.deviceData}>
                  Characteristic UUID: {characteristicUUID}
                </Text>

                <Button
                  title="Close"
                  onPress={() => stopBluetoothConnection(selectedDevice?.id)}
                />
              </View>
            </Modal>

            <Modal visible={isDisconnectedModalVisible} animationType="slide">
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={ModalStyles.deviceData}>
                  Connessione interrotta
                </Text>
                <Button
                  title="Torna alla schermata principale"
                  onPress={() => {
                    setIsDisconnectedModalVisible(false);
                    navigation.navigate('Home');
                  }}
                />
              </View>
            </Modal>
          </View>
        </View>

        <View style={BluetoothCSS.btn}>
          <TouchableOpacity
            style={[BluetoothCSS.container2, props.style]}
            onPress={() => deviceScan()}>
            <Text style={BluetoothCSS.scan}>{i18n.t('scansione')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[BluetoothCSS.container2, props.style]}
            onPress={() => deviceStopScan()}>
            <Text style={BluetoothCSS.scan}>{i18n.t('fermaScansione')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isMenuOpen && (
        <View style={styles.overlay}>
        <LinearGradient
          style={HomeHeaderStyles.hamburgerMenu}
          colors={['#82c0d1', '#508796', '#d7d8db']}>
          {isMenuOpen ? (
            <TouchableOpacity onPress={toggleMenu}>
              <View style={{backgroundColor: '#3F51B5', height: 40}}>
                <Image
                  source={require('../assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon2}
                />
              </View>
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
          <TouchableOpacity onPress={() => checkBluetooth()}>
            <Text style={HomeHeaderStyles.menuItem}>WIFI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Text style={HomeHeaderStyles.menuItem}>{i18n.t('setting')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Historical')}>
            <Text style={HomeHeaderStyles.menuItem}>{i18n.t('historical')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={HomeHeaderStyles.menuItem}>{i18n.t('contact')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={HomeHeaderStyles.menuItem}>{i18n.t('about')}</Text>
          </TouchableOpacity>
        </LinearGradient>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Imposta l'opacità qui
  },
});

export default Bluetooth;
