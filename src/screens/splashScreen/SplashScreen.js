import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  Animated,
} from "react-native";
import backgroundImage from "../../assets/Splash.png";
import logoImage from "../../assets/muvn-logo.png";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Onboard'); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [navigation]);

  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 3000, 
      useNativeDriver: true,
      delay: 500, 
    }).start();
  }, [logoOpacity]);

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Animated.Image
            source={logoImage}
            style={[styles.logo, { opacity: logoOpacity }]}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "100%",
    width: 200,
  },
});

export default SplashScreen;
