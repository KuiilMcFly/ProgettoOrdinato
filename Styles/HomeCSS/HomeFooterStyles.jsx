import {StyleSheet} from 'react-native';

export const HomeFooterStyles = StyleSheet.create({
  container: {
    backgroundColor: '#3f51b5',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  group: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  image: {
    width: 30,
    height: 32,
  },
  image2: {
    width: 36,
    height: 31,
  },
  image3: {
    width: 34,
    height: 29,
  },
});
