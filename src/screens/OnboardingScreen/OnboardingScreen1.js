import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import backgroundImage from '../../assets/Splash.png';

const slides = [
  {
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
];

const OnboardingScreen = ({ navigation }) => {
  // <-- navigation receive karo
  const { width, height, wp, hp } = useResponsiveDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate('Login'); // <-- Login route pe navigate karo
    }
  };

  // const handleSkip = () => setCurrentSlide(slides.length - 1);
  const handleSkip = () => navigation.navigate('Login'); // <-- Login route pe navigate karo

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.container}>
            {/* Top Section */}
            <View
              style={{ flex: 1, justifyContent: 'flex-start', padding: wp(7) }}
            >
              <Text
                style={[
                  Typography.H_Introduction,
                  {
                    color: Colors.highlights,
                    fontSize: wp(13),
                    lineHeight: hp(7),
                    fontFamily: 'Jost-VariableFont_wght',
                  },
                ]}
              >
                Need a fast{'\n'}budget{'\n'}friendly{'\n'}ride?
              </Text>
            </View>

            {/* Bottom Card */}
            <View
              style={[
                styles.card,
                {
                  backgroundColor: Colors.secondary,
                  borderTopLeftRadius: wp(8),
                  borderTopRightRadius: wp(8),
                  paddingHorizontal: wp(7),
                  paddingTop: hp(4),
                  paddingBottom: hp(3),
                },
              ]}
            >
              <Text
                style={[
                  Typography.H1_Bold,
                  {
                    color: Colors.primary,
                    marginBottom: hp(1),
                    textAlign: 'center',
                    fontFamily: 'Jost-VariableFont_wght',
                  },
                ]}
              >
                Hop on a bike — anytime, anywhere!
              </Text>

              <Text
                style={[
                  Typography.H3_Medium,
                  {
                    color: Colors.primary,
                    marginBottom: hp(2),
                    paddingHorizontal: wp(10),
                    lineHeight: hp(2),
                    textAlign: 'center',
                    fontFamily: 'Jost-VariableFont_wght',
                  },
                ]}
              >
                {slides[currentSlide].subtitle}
              </Text>

              {/* Pagination */}
              <View style={styles.pagination}>
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor:
                        index === currentSlide
                          ? Colors.highlights
                          : Colors.primary,
                      width: index === currentSlide ? wp(15) : wp(4),
                      height: wp(2),
                      borderRadius: wp(4),
                      marginLeft: index === 0 ? 0 : wp(1.5),
                    }}
                  />
                ))}
              </View>

              {/* Buttons */}
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  onPress={handleSkip}
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: Colors.highlights,
                    backgroundColor: 'transparent',
                    borderRadius: wp(4),
                    paddingVertical: hp(1.5),
                    marginRight: wp(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: Colors.highlights,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    Skip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNext}
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: Colors.highlights,
                    backgroundColor: Colors.highlights,
                    borderRadius: wp(4),
                    paddingVertical: hp(1.5),
                    marginLeft: wp(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: Colors.primary,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    {currentSlide === slides.length - 1 ? 'Login' : 'Next'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, justifyContent: 'flex-end' },
  card: { width: '100%', minHeight: '42%', justifyContent: 'flex-start' },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
});

export default OnboardingScreen;
