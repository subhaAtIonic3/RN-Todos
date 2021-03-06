import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

import Notes from "../../../screens/Notes";
import CreateNotes from "../../../screens/CreateNotes";

const Stack = createStackNavigator();

const NotesTab = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="QuickNotes">
      <Stack.Screen name="QuickNotes" component={Notes} options={{
        title: "Quick Notes",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgb(146, 65, 255)',
        },
        headerTitleAlign: "center"
      }} />
      <Stack.Screen name="CreateNotes" component={CreateNotes} options={{ 
        title: "Add Notes",
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