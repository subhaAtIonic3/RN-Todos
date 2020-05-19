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

import Onboarding from './src/screens/Onboarding';
import Signup from "./src/screens/Signup";
import SignIn from "./src/screens/SignIn";

const Stack = createStackNavigator();

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
