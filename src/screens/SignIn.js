import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { Formik } from "formik";

const SignIn = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTextStyle}>Welcome back</Text>
      <Text style={styles.subTextStyle}>Sign in to continue</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log(value);
            setSubmitting(false);
            Alert.alert("Test alert", "demo", [
              {
                text: "Cancel",
                onPress: () => console.log("OK"),
                style: "cancel",
              },
            ]);
            props.navigation.navigate("Tabs");
          }, 2000);
        }}
      >
        {({ isSubmitting, handleChange, handleSubmit, values, errors }) => (
          <View>
            <View style={styles.logInFormContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  placeholder="Enter your email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
                {/* {!isValidEmail ? (
            <Text style={styles.errorText}>Enter a valid email</Text>
          ) : null} */}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  placeholder="Enter your password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                {/* {!isValidPassword ? (
            <Text style={styles.errorText}>Please enter a valid password</Text>
          ) : null} */}
              </View>
            </View>
            <View style={styles.loginBtnContainer}>
              <TouchableOpacity
                disabled={isSubmitting}
                style={isSubmitting ? styles.disabledLoginBtn : styles.loginBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.loginTextStyle}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  welcomeTextStyle: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 5,
  },
  subTextStyle: {
    color: "rgb(173,173,173)",
    fontSize: 18,
  },
  logInFormContainer: {
    marginVertical: 40,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 24,
  },
  input: {
    borderBottomColor: "rgb(183,183,183)",
    borderBottomWidth: 1,
    padding: 0,
    fontSize: 16,
  },
  errorText: {
    marginTop: 5,
    color: "red",
  },
  loginBtnContainer: {},
  loginBtn: {
    backgroundColor: "rgb(255, 79, 82)",
    padding: 15,
    borderRadius: 10,
  },
  disabledLoginBtn: {
    backgroundColor: "rgb(255, 79, 82)",
    padding: 15,
    opacity: 0.5,
    borderRadius: 10,
  },
  loginTextStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default SignIn;
