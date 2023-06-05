import {StyleSheet} from 'react-native';

export const BluetoothCSS = StyleSheet.create({
  container: {
    flex: 1,
  },
  bluetoothSchermo: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
  },
  headerBluetooth: {
    height: 56,
    width: 360,
  },
  btn: {
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 10,
    flexDirection: 'row',
  },

  scan: {
    height: 55,
    width: 121,
    borderRadius: 15,
  },

  stopScan: {
    height: 55,
    width: 121,
    borderRadius: 15,
  },

  scrollView: {
    width: '100%',
    height: '60%',
    marginTop: '10%',
  },
  scrollArea: {
    borderRadius: 15,
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  scrollArea_contentContainerStyle: {
    width: '100%',
    padding: 10,
    gap: 10,
  },
  footer: {
    width: '100%',
    height: 56,
  },
  footerBluetooth: {
    height: 56,
    width: 361,
  },

  scan: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  container2: {
    height: 70,
    width: 150,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    marginBottom: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
