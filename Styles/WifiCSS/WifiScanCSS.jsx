import {StyleSheet} from 'react-native/Libraries/StyleSheet/StyleSheet';

export const WifiScanStyle = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
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
  scan: {
    color: '#fff',
    fontSize: 14,
  },
});
