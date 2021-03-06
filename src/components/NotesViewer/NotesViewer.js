import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

const Item = ({ data }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={[styles.notesType, { borderColor: `${data.color}` }]} />
      <View style={styles.notesCardDescp}>
        <View style={styles.notesCardDescpBody}>
          <Text style={styles.taskName}>{data.title}</Text>
        </View>
        <View style={styles.goDetailsBtnContainer}>
          <TouchableOpacity>
            <Ionicons name="ios-arrow-dropright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const renderHiddenItem = (data, rowMap) => (
  <View style={styles.rowBack}>
    <TouchableOpacity
      style={[styles.backRightBtn, styles.backRightBtnLeft]}
      onPress={() => {
        console.log("Delete");
      }}
    >
      <Feather name="trash" size={20} color="rgb(255, 79, 82)" />
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.backRightBtn, styles.backRightBtnLeft_2]}
      onPress={() => {
        console.log("Edit");
      }}
    >
      <Feather name="edit" size={20} color="rgb(255, 79, 82)" />
    </TouchableOpacity>
  </View>
);

const NotesViewer = ({ listData }) => {
  return (
    <View
      style={{
        paddingVertical: 10,
      }}
    >
      <SwipeListView
        data={listData}
        keyExtractor={(item, index) => item._id}
        renderItem={(data, rowMap) => <Item data={data.item} />}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-140}
        disableRightSwipe
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: "rgb(187, 187, 187)",
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 10,
    backgroundColor: "rgb(242, 242, 242)",
  },
  taskContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  notesType: {
    borderWidth: 1,
    borderRadius: 3,
    width: "40%",
    marginLeft: 15,
  },
  notesCardDescp: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  notesCardDescpBody: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "column",
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    flex: 1,
  },
  goDetailsBtnContainer: {
    alignSelf: "center",
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 60,
  },
  backRightBtnLeft: {
    backgroundColor: "white",
    right: 0,
  },
  backRightBtnLeft_2: {
    backgroundColor: "white",
    right: 65,
  },
});

export default NotesViewer;
