import {StyleSheet} from 'react-native';

export const WifiStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 56,
  },
  headerWifi: {
    height: 56,
    width: 360,
  },
  btn: {
    width: 113,
    height: 57,
  },
  btnScan: {
    height: 57,
    width: 113,
    borderRadius: 15,
  },
  scrollView: {
    width: '100%',
    height: '60%',
  },
  scrollArea: {
    width: '90%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  scrollArea_contentContainerStyle: {
    height: 443,
    width: 274,
  },
  footer: {
    width: '100%',
    height: 56,
  },
  footerWifi: {
    height: 56,
    width: 360,
  },
});
