import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Swiper from "react-native-swiper";

const { height } = Dimensions.get("window");

const SCREEN_HEIGHT = height;

const SLIDES = [
  {
    key: "1",
    title: "Welcome to todos",
    text: "Whats going to happen tomorrow?",
    image: require("../assets/images/onboarding-1.jpg"),
  },
  {
    key: "2",
    title: "Works happens",
    text: "Got notified when work happens.",
    image: require("../assets/images/onboarding-2.jpg"),
  },
  {
    key: "3",
    title: "Tasks and assign",
    text: "Task and assign them to colleagues",
    image: require("../assets/images/onboarding-3.jpg"),
  },
];

const Onboarding = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onIndexChangedHandler = (index) => {
    setCurrentIndex(index);
  };

  const getFooterStyle = () => {
    if (currentIndex === 1) {
      return {
        ...styles.footerContainer,
        backgroundColor: "rgb(103, 98, 255)",
      };
    } else if (currentIndex === 2) {
      return {
        ...styles.footerContainer,
        backgroundColor: "rgb(146, 65, 255)",
      };
    } else {
      return {
        ...styles.footerContainer,
        backgroundColor: "rgb(255, 79, 82)",
      };
    }
  };

  const renderSlides = () => {
    return SLIDES.map((item) => {
      return (
        <View style={styles.slide} key={item.key}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Swiper
          onIndexChanged={onIndexChangedHandler}
          dotColor="#ccc"
          activeDotColor="#333"
          style={styles.wrapper}
          loop={false}
          bounces={true}
        >
          {renderSlides()}
        </Swiper>
      </View>
      <View style={{ ...getFooterStyle() }}>
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => props.navigation.navigate("Signup")}
        >
          <Text style={styles.getStartedTextStyle}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate("SignIn")}
        >
          <Text style={styles.loginTextStyle}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: SCREEN_HEIGHT,
  },
  slideContainer: {
    height: SCREEN_HEIGHT * 0.7,
  },
  wrapper: {},
  slide: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 300,
    height: 280,
    resizeMode: "contain",
  },
  text: {
    color: "#333",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "#333",
    textAlign: "center",
  },
  footerContainer: {
    flex: 1,
  },
  getStartedBtn: {
    padding: 15,
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    elevation: 9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  getStartedTextStyle: {
    fontSize: 18,
  },
  loginBtn: {
    padding: 20,
    marginHorizontal: 30,
    alignItems: "center",
  },
  loginTextStyle: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Onboarding;
