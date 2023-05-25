import React from 'react';
import {View, Text, Image} from 'react-native';
import {HomeStyles} from './Styles/HomeCSS/HomeStyle';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home(props) {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <Header />
      </View>
      <View style={HomeStyles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
