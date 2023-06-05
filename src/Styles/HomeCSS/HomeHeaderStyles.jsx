import {StyleSheet} from 'react-native';

export const HomeHeaderStyles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  home: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    height: 16,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: 27,
    height: 24,
  },

  menuIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  menuIcon2: {
    width: 20,
    height: 20,
    marginLeft: '85%',
    tintColor: '#3F51B5',
    marginTop: 10,
  },
  hamburgerMenu: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: '60%',
    height: '100%',
    borderRightWidth: 3,
    borderColor: 'white',
    gap: 10,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#3F51B5',
    color: 'white',
    padding: 10,
    minWidth: '100%',
  },
});
