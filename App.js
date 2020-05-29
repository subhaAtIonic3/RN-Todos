/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Onboarding from './src/screens/Onboarding';
import Signup from './src/screens/Signup';
import SignIn from './src/screens/SignIn';
import Tasks from './src/screens/Tabs/Tasks/Tasks';
import Menu from './src/screens/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTaskScreens = () => {
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
}

const MenuScreens = () => {
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
}

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
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
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
      <Tab.Screen name="Tasks" component={MyTaskScreens} options={{title: "My Tasks"}} />
      <Tab.Screen name="Menu" component={MenuScreens} />
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
