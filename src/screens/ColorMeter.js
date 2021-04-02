import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ColorPalette from "../components/ColorPalette/ColorPalette";

const COLOR_PALETTES = [
  {
    name: "green",
    isSelected: false,
  },
  {
    name: "red",
    isSelected: false,
  },
  {
    name: "blue",
    isSelected: false,
  },
  {
    name: "black",
    isSelected: false,
  },
  {
    name: "orange",
    isSelected: false,
  },
];

const ColorMeter = (props) => {
  const [colorPalettes, setColorPalettes] = useState([].concat(COLOR_PALETTES));
  const selectColorPalette = (colorName) => {
    const updatedColorArray = [].concat(colorPalettes);
    updatedColorArray.map((colorObj) => {
      if (colorObj.name === colorName) {
        colorObj.isSelected = !colorObj.isSelected;
      } else {
        colorObj.isSelected = false;
      }
    });
    setColorPalettes([].concat(updatedColorArray));
    selectedColorPalette();
  };

  const selectedColorPalette = () => {
    const selectColor = colorPalettes.find((colorObj) => colorObj.isSelected);
    if (selectColor) {
      props.getSelectedColorPalette &&
        props.getSelectedColorPalette(selectColor.name);
    }
  };

  const colorPalettesElement = COLOR_PALETTES.map(({ name, isSelected }) => {
    return (
      <TouchableOpacity key={name} onPress={() => selectColorPalette(name)}>
        <ColorPalette color={name} isSelected={isSelected} />
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.selectColorContainer}>
      <Text style={styles.chooseColorLabel}>Choose Color</Text>
      <View style={styles.colorsContainer}>{colorPalettesElement}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectColorContainer: {},
  chooseColorLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  colorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});

export default ColorMeter;
