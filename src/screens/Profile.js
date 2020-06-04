import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import UserAvatar from 'react-native-user-avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  render() {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  userInfoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 175,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    position: "relative"
  },
  settings: {
      position: "absolute",
      top: 10,
      right: 10
  },
  userInfoCard: {
    flexDirection: 'row',
  },
  profilePicture: {
    height: 70,
    width: 70,
  },
  userNameContainer: {
    marginHorizontal: 20,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  userName: {
    fontSize: 20
  },
  userEmail: {
    fontSize: 16,
    color: "rgb(172, 172, 172)"
  },
  taskDetailsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 20
  },
  tasksDetails: {
  },
  tasksText: {
    fontSize: 20
  },
  tasksLabel: {
    fontSize: 16,
    color: "rgb(172, 172, 172)"
  }
});

export default Profile;
