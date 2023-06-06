import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import RicaricaItem from '../Components/RicaricaItem';

const StoricoRicariche = ({ricariche}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ricariche}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <RicaricaItem data={item.data} energia={item.energia} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default StoricoRicariche;
