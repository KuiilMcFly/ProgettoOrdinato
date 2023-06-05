import {StyleSheet} from 'react-native';

export const WifiStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  containerBtn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
    marginBottom: '10%',
  },
  scrollArea: {
    width: '90%',
    alignSelf: 'center',
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  scrollArea_contentContainerStyle: {
    width: '100%',
    padding: 10,
    gap: 10,
  },
});
