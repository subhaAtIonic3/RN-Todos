import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Tasks from "../../../screens/Tasks";

const Stack = createStackNavigator();

const TasksTab = () => {
  return (
    <Stack.Navigator initialRouteName="Tasks">
      <Stack.Screen name="Tasks" component={Tasks} options={{
        title: "Work List",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgb(255, 79, 82)',
        },
        headerTitleAlign: "center"
      }} />
    </Stack.Navigator>
  );
};

export  default TasksTab;
