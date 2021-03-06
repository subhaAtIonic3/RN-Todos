import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import ColorMeter from "./ColorMeter";

const CreateNotes = (props) => {
  const selectedColorPalette = (colorName) => {
    console.log(colorName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        <View style={styles.notesCard}>
          <View>
            <TextInput style={styles.notesTitle} placeholder="Title" />
          </View>
          <View style={styles.notesDescription}>
            <TextInput
              style={styles.notesInput}
              multiline
              placeholder="Description"
            />
          </View>
          <ColorMeter getSelectedColorPalette={selectedColorPalette} />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.doneBtn}>
              <Text style={styles.doneBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  notesContainer: {
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notesCard: {},
  notesDescription: {},
  notesInput: {
    marginTop: 5,
    marginBottom: 30,
    fontSize: 18,
  },
  btnContainer: {
    marginVertical: 30,
  },
  doneBtn: {
    padding: 15,
    backgroundColor: "rgb(146, 65, 255)",
    borderRadius: 10,
    alignItems: "center",
  },
  doneBtnText: {
    color: "white",
    fontSize: 18,
  },
});

export default CreateNotes;
