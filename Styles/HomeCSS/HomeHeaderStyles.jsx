import {StyleSheet} from 'react-native';

export const HomeHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  group: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  home: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    height: 16,
    width: '100%',
  },
  image: {
    width: 27,
    height: 24,
  },
});
