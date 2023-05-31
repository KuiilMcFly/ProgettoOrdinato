import React, { useState } from 'react';
import { HomeHeaderStyles } from '../Styles/HomeCSS/HomeHeaderStyles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Header = ({ navigation, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={props.style}>
      <LinearGradient colors={['#5a80a6', '#404c94', '#3F51B5']} style={HomeHeaderStyles.container}>
        <View style={HomeHeaderStyles.group}>
          {isMenuOpen ? (
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                source={require('../assets/HomeImg/close.png')}
                resizeMode="contain"
                style={HomeHeaderStyles.menuIcon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                source={require('../assets/HomeImg/menu.png')}
                resizeMode="contain"
                style={HomeHeaderStyles.menuIcon}
              />
            </TouchableOpacity>
          )}
          <Text style={HomeHeaderStyles.home}>{props.title}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image
              source={require('../assets/HomeImg/settings.png')}
              resizeMode="contain"
              style={HomeHeaderStyles.image}
            />
          </TouchableOpacity>
        </View>
        {isMenuOpen && (
          <View style={HomeHeaderStyles.hamburgerMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu1')}>
              <Text style={HomeHeaderStyles.menuItem}>Menu Item 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu2')}>
              <Text style={HomeHeaderStyles.menuItem}>Menu Item 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu3')}>
              <Text style={HomeHeaderStyles.menuItem}>Menu Item 3</Text>
            </TouchableOpacity>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};
