import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

const Item = ({ data }) => {
  return (
    <View style={styles.taskContainer}>
      <View
        style={{
          alignSelf: "center",
          paddingRight: 20,
        }}
      >
        <TouchableOpacity>
          <Feather name="circle" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.taskName}>{data.title}</Text>
        <Text style={styles.taskTime}>{data.time}</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity>
          <Ionicons name="ios-arrow-dropright" size={24} color="black" />
        </TouchableOpacity>
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

const TaskViewer = ({ listData }) => {
  return (
    <View
      style={{
        paddingBottom: 105,
        paddingVertical: 10,
      }}
    >
      <Text style={styles.sectionTitle}>MAY 30, 2020</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: "row",
    borderColor: "blue",
    borderRightWidth: 2,
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskTime: {
    fontSize: 14,
    color: "rgb(173, 173, 173)",
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

export default TaskViewer;
