import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TasksTab from "./Tasks/TasksTab";
import MenuTab from "./Menu/MenuTab";
import NotesTab from "./Notes/NotesTab";
import ProfileTab from "./Profile/ProfileTab";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Tasks') {
              iconName = focused
                ? 'check-circle'
                : 'check-circle-o';
            } else if (route.name === 'Menu') {
              iconName = 'list';
            } else if (route.name === "Notes") {
              iconName = focused ? "file-text" : "file-text-o";
            } else if (route.name === "Profile") {
              iconName = focused ? "user-circle" : "user-circle-o";
            }

            return <FontAwesome name={iconName} size={size - 2} color={color} />;
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        tabStyle: {
          backgroundColor: 'rgb(42, 43, 81)',
        },
      }}>
      <Tab.Screen name="Tasks" component={TasksTab} options={{title: "My Tasks"}} />
      <Tab.Screen name="Menu" component={MenuTab} />
      <Tab.Screen name="Notes" component={NotesTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default Tabs;