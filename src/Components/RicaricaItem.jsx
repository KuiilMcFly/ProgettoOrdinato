import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RicaricaItem = ({data, energia}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.energia}>{energia} kWh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  energia: {
    fontSize: 16,
  },
});

export default RicaricaItem;
