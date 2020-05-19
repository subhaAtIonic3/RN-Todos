import React, { Component } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeTextStyle}>Welcome back</Text>
                <Text style={styles.subTextStyle}>Sign in to continue</Text>
                <View style={styles.logInFormContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput style={styles.input} placeholder="Enter your email" />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput tyle={styles.input} placeholder="Enter your password" />
                </View>
                <View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {},
    welcomeTextStyle: {},
    subTextStyle: {},
    logInFormContainer: {},
    inputLabel: {},
    input: {},
    loginBtn: {}

});

export default SignIn;