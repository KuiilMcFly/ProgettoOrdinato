import React from 'react';

const About = () => {
  return (
    <View style={AboutStyle.AboutContainer}>
      <Text style={AboutStyle.text}>Informazioni sulla versione</Text>
      <View style={AboutStyle.VersionContainer}>
        <Text style={AboutStyle.text1}>Versione: </Text>
        <Text style={AboutStyle.text1}>Versione: </Text>
        <Text style={AboutStyle.text1}>Versione: </Text>
      </View>
    </View>
  );
};

export default About;
