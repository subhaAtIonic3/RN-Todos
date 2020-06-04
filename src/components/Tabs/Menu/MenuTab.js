import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Menu from "../../../screens/Menu";

const Stack = createStackNavigator();

const MenuTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{
        title: "Projects",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgb(255, 79, 82)',
        },
        headerTitleAlign: "center"
      }}
      />
    </Stack.Navigator>
  );
};

export default MenuTab;