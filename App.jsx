import React from 'react';
import {View, Text, Image} from 'react-native';
import {HomeStyles} from './Styles/HomeCSS/HomeStyle';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bluetooth from './Screens/Bluetooth';
import Wifi from './Screens/Wifi';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Home = ({navigation, ...props}) => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <Header title={'HOME'} />
      </View>
      <View style={HomeStyles.footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bluetooth" component={Bluetooth} />
        <Stack.Screen name="Wifi" component={Wifi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
