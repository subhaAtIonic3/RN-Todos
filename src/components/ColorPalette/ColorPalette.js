import React from 'react';
import {View, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const ColorPalette = ({color = 'black', isSelected}) => {
  return (
    <View style={styles.colorPaletteContainer}>
      {
        isSelected ? 
        <Feather style={styles.checkIcon} name="check" size={30} color="white" /> 
        :
        null
      }
      <View
        style={[styles.colorPalette, {backgroundColor: color}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorPaletteContainer: {
  },
  colorPalette: {
    height: 50,
    width: 50,
    borderRadius: 5,
    position: "relative"

  },
  checkIcon: {
      position: "absolute",
      zIndex: 100,
      top: 10,
      left: 10
  }
});

export default ColorPalette;
