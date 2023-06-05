import React from 'react';
import {Modal, View, TouchableOpacity, Text} from 'react-native';
import {HomeHeaderStyles} from '../Styles/HomeCSS/HomeHeaderStyles';
export const HamburgerModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text>Close Modal</Text>
      </TouchableOpacity>
      <View style={HomeHeaderStyles.transparentView}>
        <View>
          <TouchableOpacity style={HomeHeaderStyles.buttonContainer}>
            <Text style={HomeHeaderStyles.buttonText}>Impostazioni</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeHeaderStyles.buttonContainer}>
            <Text style={HomeHeaderStyles.buttonText}>Wi Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeHeaderStyles.buttonContainer}>
            <Text style={HomeHeaderStyles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
