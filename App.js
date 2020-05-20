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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from './src/screens/Onboarding';
import Signup from "./src/screens/Signup";
import SignIn from "./src/screens/SignIn";
import Tasks from './src/screens/Tasks';
import Menu from './src/screens/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Tasks">
      <Tab.Screen name="My Tasks" component={Tasks} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={Onboarding} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            headerTitle: ""
          }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{
            headerTitle: ""
          }} />
          <Stack.Screen name="Tabs" component={Tabs} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
