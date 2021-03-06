import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import NotesViewer from "../components/NotesViewer/NotesViewer";
import QuickAction from "../components/QuickAction/QuickAction";

const DATA = [
  {
    title: "Notes #1",
    showMenu: false,
    _id: "1",
    color: "red",
  },
  {
    title: "Notes #2",
    showMenu: false,
    color: "green",
    _id: "2",
  },
  {
    title: "Complete task z02-718",
    showMenu: false,
    _id: "3",
    color: "red",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "4",
    color: "green",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "5",
    color: "orange",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "6",
    color: "black",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "7",
    color: "blue",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "8",
    color: "orange",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "9",
    color: "blue",
  },
  {
    title: "Scrum call",
    showMenu: false,
    _id: "10",
    color: "orange",
  },
];

const Notes = (props) => {
  const [togglePopup, setTogglePopup] = useState(false);

  useLayoutEffect(() => {
    const { navigation } = props;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleAddTaskPopup}>
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <MaterialIcons name="playlist-add" size={24} color="white" />
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  const toggleAddTaskPopup = () => {
    setTogglePopup(!togglePopup);
  };

  const popupItemClickHandler = (type) => {
    const { navigation } = props;
    if (type === "quickNote") {
      // go to quick notes screen
      navigation.navigate("CreateNotes");
    } else {
      // go tot create task screen
    }
    setTogglePopup(!togglePopup);
  };

  return (
    <View style={styles.notesContainer}>
      {togglePopup ? (
        <QuickAction isVisible={true} clicked={popupItemClickHandler} />
      ) : null}
      <NotesViewer listData={DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    paddingHorizontal: 15,
  },
});

export default Notes;
