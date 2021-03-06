import React, { Component } from "react";
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

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togglePopup: false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={this.toggleAddTaskPopup}>
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
  }

  toggleAddTaskPopup = () => {
    this.setState((prevState) => ({
      ...this.state,
      togglePopup: !prevState.togglePopup,
    }));
  };

  popupItemClickHandler = (type) => {
    const { navigation } = this.props;
    if (type === "quickNote") {
      // go to quick notes screen
      navigation.navigate("CreateNotes");
    } else {
      // go tot create task screen
    }
    this.setState((prevState) => ({
      togglePopup: !prevState.togglePopup,
    }));
  };

  render() {
    return (
      <View style={styles.notesContainer}>
        {this.state.togglePopup ? (
          <QuickAction isVisible={true} clicked={this.popupItemClickHandler} />
        ) : null}
        <NotesViewer listData={DATA} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notesContainer: {
    paddingHorizontal: 15,
  },
});

export default Notes;
