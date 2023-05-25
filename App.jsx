import React from 'react';
import {View, Text, Image} from 'react-native';
import {HomeFooterStyles} from './Styles/HomeCSS/HomeFooterStyles';
import {HomeStyles} from './Styles/HomeCSS/HomeStyle';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';

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

export default Home;
