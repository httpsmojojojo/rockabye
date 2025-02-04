// BackgroundImageComponent.js
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImageComponent = ({ children }) => {
  return (
    <ImageBackground
      source={require('../Theme/Assests/BG.png')} // Replace with your image path
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default BackgroundImageComponent;