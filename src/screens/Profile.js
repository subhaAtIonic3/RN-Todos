import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import UserAvatar from "react-native-user-avatar";
import { FontAwesome } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";

import TaskTile from "../components/TaskTile/TaskTile";

const DATA = [
  {
    name: "Total Task",
    number: 190,
    color: "rgb(255, 79, 82)",
    percentage: 60,
  },
  {
    name: "To Do Task",
    number: 5,
    color: "rgb(103, 98, 255)",
    percentage: 90,
  },
  {
    name: "Quick Notes",
    number: 20,
    color: "rgb(146, 65, 255)",
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <TouchableOpacity style={styles.settings}>
          <FontAwesome name="gear" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.userInfoCard}>
          <View style={styles.profilePicture}>
            <UserAvatar size={70} name="Dany Barbosa" />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>Dany Barbosa</Text>
            <Text style={styles.userEmail}>danny.8q1@fly.com</Text>
          </View>
        </View>
        <View style={styles.taskDetailsContainer}>
          <View style={styles.tasksDetails}>
            <Text style={styles.tasksText}>120</Text>
            <Text style={styles.tasksLabel}>Create Tasks</Text>
          </View>
          <View styles={styles.tasksDetails}>
            <Text style={styles.tasksText}>80</Text>
            <Text style={styles.tasksLabel}>Completed Tasks</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.taskTilesContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {DATA.map((tile) => {
          return (
            <TaskTile
              key={tile.name}
              taskName={tile.name}
              taskNumber={tile.number}
              bgColor={tile.color}
            />
          );
        })}
      </ScrollView>
      <View style={styles.statisticContainer}>
        <Text style={styles.sectionLabel}>Statistics</Text>
        <View style={styles.progressCircleContainer}>
          {DATA.map((tile) => {
            if (tile.percentage) {
              return (
                <View key={tile.name}>
                  <ProgressCircle
                    containerStyle={styles.progressCircle}
                    percent={tile.percentage}
                    radius={30}
                    borderWidth={3}
                    color={tile.color}
                    shadowColor="#ccc"
                    bgColor="#fff"
                  >
                    <Text
                      style={{ fontSize: 18 }}
                    >{`${tile.percentage}%`}</Text>
                  </ProgressCircle>
                  <Text style={styles.progressCircleTaskName}>{tile.name}</Text>
                </View>
              );
            }
            return null;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  userInfoContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 175,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    position: "relative",
  },
  settings: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  userInfoCard: {
    flexDirection: "row",
  },
  profilePicture: {
    height: 70,
    width: 70,
  },
  userNameContainer: {
    marginHorizontal: 20,
    flexDirection: "column",
    alignSelf: "center",
  },
  userName: {
    fontSize: 20,
  },
  userEmail: {
    fontSize: 16,
    color: "rgb(172, 172, 172)",
  },
  taskDetailsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 20,
  },
  tasksDetails: {},
  tasksText: {
    fontSize: 20,
  },
  tasksLabel: {
    fontSize: 16,
    color: "rgb(172, 172, 172)",
  },
  taskTilesContainer: {
    marginVertical: 20,
  },
  statisticContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 175,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  progressCircleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  progressCircle: {},
  progressCircleTaskName: {
    marginTop: 5,
  },
});

export default Profile;
