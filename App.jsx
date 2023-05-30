import React from 'react';
import {View, Text, Image} from 'react-native';
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
enableScreens();

const Home = ({navigation, ...props}) => {
  return (
    <View>
      <LinearGradient
      colors={['#82c0d1', '#508796', '#d7d8db']}
      style={HomeStyles.container}
      >
      <View style={HomeStyles.header}>
        <Header navigation={navigation} title={'HOME'} />
      </View>
      <View style={HomeStyles.footer}>
        <Footer navigation={navigation} />
      </View>
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

/*   const Settings = props => (
    <Setting onLanguageSelected={handleLanguageSelection} {...props} />
  ); */
  

  return (
    <NavigationContainer>
      {showFirstScreen ? (
        <FirstScreen onLanguageSelected={handleLanguageSelection} />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bluetooth" component={Bluetooth} />
          <Stack.Screen name="Wifi" component={Wifi} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
