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
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  hamburgerMenu: {
    backgroundColor: '#FFFFFF',

    marginTop: 10,
    position: 'absolute',
    left: 10,
    top: 40,
    width: '95%',
    height: '92%',
    borderRadius: 15,

    gap: 30,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',

    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    minWidth: '100%',
    borderRadius: 15,
  },
});
