import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Profile from "../../../screens/Profile";

const Stack = createStackNavigator();

const NotesTab = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={{
        title: "Profile",
        headerTintColor: 'black',
        headerTitleAlign: "center"
      }} />
    </Stack.Navigator>
  );
};

export default NotesTab;