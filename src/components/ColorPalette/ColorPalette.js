import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"; 


const ColorPalette = ({ color="black", isSelected }) => {
    return (
        <TouchableOpacity style={[styles.colorPalette, {backgroundColor: color}]}></TouchableOpacity>
    );
};

const styles = StyleSheet.create({
        colorPalette: {
        height: 50,
        width: 50,
        borderRadius: 5
    },
});

export default ColorPalette;