import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HomeStyles} from './src/Styles/HomeCSS/HomeStyle';
import {Header} from './src/Components/Header';
import {Footer} from './src/Components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bluetooth from './src/Screens/Bluetooth';
import Wifi from './src/Screens/Wifi';
import {enableScreens} from 'react-native-screens';
import Setting from './src/Screens/Setting';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FirstScreen from './src/Screens/FirstScreen';
import LinearGradient from 'react-native-linear-gradient';
import About from './src/Screens/About';
import {useTranslation} from 'react-i18next';

enableScreens();

const Home = ({navigation, ...props}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <View>
      <LinearGradient
        colors={['#82c0d1', '#508796', '#d7d8db']}
        style={HomeStyles.container}>
        <View style={HomeStyles.containerHome}>
          <View style={HomeHeaderStyles.group}>
            {isMenuOpen ? (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('./src/assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('./src/assets/HomeImg/menu.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            )}
            <Text style={HomeHeaderStyles.home}>HOME</Text>
          </View>
        </View>
        {isMenuOpen && (
          <LinearGradient
            style={HomeHeaderStyles.hamburgerMenu}
            colors={['#82c0d1', '#508796', '#d7d8db']}>
            {isMenuOpen ? (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('./src/assets/HomeImg/close.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon2}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleMenu}>
                <Image
                  source={require('./src/assets/HomeImg/menu.png')}
                  resizeMode="contain"
                  style={HomeHeaderStyles.menuIcon}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
              <Text style={HomeHeaderStyles.menuItem}>BLUETOOTH</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Wifi')}>
              <Text style={HomeHeaderStyles.menuItem}>WIFI</Text>
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
    </View>
  );
};

const Stack = createNativeStackNavigator();

async function checkFirstLaunch() {
  try {
    const firstLaunch = await AsyncStorage.getItem('firstLaunch');
    if (firstLaunch === null) {
      await AsyncStorage.setItem('firstLaunch', 'false');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to check first launch:', error);
    return false;
  }
}

const App = ({navigation}) => {
  const {i18n} = useTranslation();

  const [firstLaunch, setFirstLaunch] = useState(null);
  const [showFirstScreen, setShowFirstScreen] = useState(false);

  // useEffect che controlla se è effettivamente la prima volta
  //che l'app viene lanciata per mostrare il FirstScreen per la selezione lingua
  useEffect(() => {
    checkFirstLaunch().then(isFirstLaunch => {
      setFirstLaunch(isFirstLaunch);
      setShowFirstScreen(isFirstLaunch);
    });
  }, []);

  if (firstLaunch === null) {
    return null;
  }

  const handleLanguageSelection = () => {
    setShowFirstScreen(false);
  };

  return (
    <NavigationContainer>
      {showFirstScreen ? (
        <FirstScreen onLanguageSelected={handleLanguageSelection} />
      ) : (
        <Stack.Navigator
          initialRouteName="Bluetooth"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bluetooth" component={Bluetooth} />
          <Stack.Screen name="Wifi" component={Wifi} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="AboutUs" component={About} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
