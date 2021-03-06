import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskTile = ({taskName, taskNumber, bgColor}) => {
  return (
    <View style={[styles.container, { backgroundColor: `${bgColor}` }]}>
      <View style={styles.tile}>
        <Text style={styles.taskName}>{taskName}</Text>
        <Text style={styles.taskNumber}>
          {taskNumber > 1 ? `${taskNumber} Task` : `${taskNumber} Tasks`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 80,
    width: 150,
    borderRadius: 5,
    marginRight: 10
  },
  tile: {
    paddingVertical: 5,
    paddingHorizontal: 30
  },
  taskName: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  taskNumber: {
    color: 'white',
    fontSize: 16,
  },
});

export default TaskTile;
