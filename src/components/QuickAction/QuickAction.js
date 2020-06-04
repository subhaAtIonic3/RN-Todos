import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Popover from 'react-native-popover-view';

const QuickAction = ({isVisible, clicked}) => {
  return (
    <View>
      <Popover isVisible={isVisible}>
        <View style={styles.popOverContainer}>
          <TouchableOpacity style={[styles.row]} onPress={() => clicked("quickNote")}>
            <Text style={styles.text}>Add Quick Note</Text>
          </TouchableOpacity>

          <Text style={styles.separatorLine} />

          <TouchableOpacity style={[styles.row]} onPress={() => clicked("task")}>
            <Text style={styles.text}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </Popover>
    </View>
  );
};

const styles = StyleSheet.create({
  popOverContainer: {
    backgroundColor: '#fff',
    height: 200,
    width: 300,
    flex: 1,
    justifyContent: "space-around"
  },
  separatorLine: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 1
  },
  row: {
    padding: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuickAction;
