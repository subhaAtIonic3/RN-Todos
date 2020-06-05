import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import ColorPalette from '../components/ColorPalette/ColorPalette';

class ColorMeter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorPalettes: [
        {
          name: "green",
          isSelected: false
        },
        {
          name: "red",
          isSelected: false
        },
        {
          name: "blue",
          isSelected: false
        }, {
          name: "black",
          isSelected: false
        }, {
          name: "orange",
          isSelected: false
        }
      ]
    }
  }

  selectColorPalette = (colorName) => {
    const updatedColorArray = [...this.state.colorPalettes];
    updatedColorArray.map((colorObj) => {
      if (colorObj.name === colorName) {
        colorObj.isSelected = !colorObj.isSelected;
      } else {
        colorObj.isSelected = false
      }
    });
    this.setState({
      colorPalettes: updatedColorArray
    });
    this.selectedColorPalette();
  }

  selectedColorPalette = () => {
    const selectColor = this.state.colorPalettes.find((colorObj) => colorObj.isSelected);

    this.props.getSelectedColorPalette && this.props.getSelectedColorPalette(selectColor.name);
  }

  render() {

    const colorPalettesElement = (this.state.colorPalettes.map(({ name, isSelected }) => {
      return(
        <TouchableOpacity key={name} onPress={() => this.selectColorPalette(name)}>
          <ColorPalette color={name} isSelected={isSelected} />
        </TouchableOpacity>
      )
    }));

    return (
      <View style={styles.selectColorContainer}>
        <Text style={styles.chooseColorLabel}>Choose Color</Text>
        <View style={styles.colorsContainer}>
          {colorPalettesElement}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectColorContainer: {},
  chooseColorLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});

export default ColorMeter;
