import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";

const Signup = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTextStyle}>Join us</Text>
      <Text style={styles.subTextStyle}>Sign up to continue</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          userName: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ isSubmitting, values, errors, handleChange, handleSubmit }) => (
          <View>
            <View style={styles.logInFormContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>User Name</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  placeholder="Enter your name"
                  onChangeText={handleChange("userName")}
                  value={values.userName}
                />
              </View>
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
                  <Text style={styles.errorText}>
                    Please enter a valid password
                  </Text>
                ) : null} */}
              </View>
            </View>
            <View style={styles.signupBtnContainer}>
              <TouchableOpacity
                style={
                  isSubmitting ? styles.disabledSignupBtn : styles.signupBtn
                }
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text style={styles.signupTextStyle}>Sign Up</Text>
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
  signupBtnContainer: {},
  signupBtn: {
    padding: 15,
    backgroundColor: "rgb(255, 79, 82)",
    borderRadius: 10,
  },
  disabledSignupBtn: {
    opacity: 0.5,
    padding: 15,
    backgroundColor: "rgb(255, 79, 82)",
    borderRadius: 10,
  },
  signupTextStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
export default Signup;
