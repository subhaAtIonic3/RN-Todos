import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Notes from "../../../screens/Notes";

const Stack = createStackNavigator();

const NotesTab = () => {
  return (
    <Stack.Navigator initialRouteName="Notes">
      <Stack.Screen name="Notes" component={Notes} options={{
        title: "Quick Notes",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgb(146, 65, 255)',
        },
        headerTitleAlign: "center"
      }} />
    </Stack.Navigator>
  );
};

export default NotesTab;