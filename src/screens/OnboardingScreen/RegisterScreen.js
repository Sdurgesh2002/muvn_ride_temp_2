import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomPasswordInput from '../../components/CustomPasswordInput';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <ImageBackground
      source={require('../../assets/Splash.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.safeArea} edges={['bottom']}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Registration</Text>
              <TouchableOpacity style={styles.helpBtn}>
                <Text style={styles.helpText}>Help ?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.panel}>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <CustomInput
                    value={form.firstName}
                    onChangeText={text => setForm({ ...form, firstName: text })}
                    placeholder="First Name"
                    style={styles.input}
                    inputStyle={styles.inputText}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <CustomInput
                    value={form.lastName}
                    onChangeText={text => setForm({ ...form, lastName: text })}
                    placeholder="Last Name"
                    style={styles.input}
                    inputStyle={styles.inputText}
                  />
                </View>
              </View>

              <CustomInput
                value={form.email}
                onChangeText={text => setForm({ ...form, email: text })}
                placeholder="Email"
                style={styles.input}
                inputStyle={styles.inputText}
              />

              <CustomInput
                value={form.mobile}
                onChangeText={text => setForm({ ...form, mobile: text })}
                placeholder="Mobile Number"
                style={styles.input}
                inputStyle={styles.inputText}
                keyboardType="phone-pad"
                maxLength={10}
              />

              <CustomPasswordInput
                value={form.password}
                onChangeText={text => setForm({ ...form, password: text })}
                placeholder="Password"
                style={styles.input}
                inputStyle={styles.inputText}
              />
              <CustomPasswordInput
                value={form.confirmPassword}
                onChangeText={text =>
                  setForm({ ...form, confirmPassword: text })
                }
                placeholder="Confirm Password"
                style={styles.input}
                inputStyle={styles.inputText}
              />

              <Text style={styles.signInRow}>
                Already have an account?
                <Text
                  style={styles.signInLink}
                  onPress={() => navigation.navigate('Login')}
                >
                  {' '}
                  Sign In
                </Text>
              </Text>

              <CustomButton
                title="Next"
                style={styles.nextBtn}
                textStyle={styles.nextBtnText}
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('6.5%'),
    marginHorizontal: wp('7%'),
  },
  title: {
    fontSize: 32,
    color: '#F7FF27',
    fontWeight: 'bold',
    ...Typography.H_Introduction,
    fontFamily: 'Jost-VariableFont_wght',
  },
  helpBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: wp('3.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
  },
  helpText: {
    color: Colors.primary,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  panel: {
    flex: 1,
    marginTop: hp('32%'),
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    padding: wp('7%'),
    paddingBottom: hp('3%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    backgroundColor: '#53a8ed',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: wp('3%'),
    flex: 1,
    paddingHorizontal: wp('13%'),
    paddingVertical: hp('1.5%'),
  },
  inputContainer: {
    width: wp('42%'),
  },
  input: {
    borderRadius: wp('3%'),
    borderColor: '#fff',
  },
  inputText: {
    color: '#fff',
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  signInRow: {
    color: Colors.white,
    marginTop: 4,
    marginBottom: 16,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  signInLink: {
    color: Colors.highlights,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  nextBtn: {
    marginTop: 8,
    backgroundColor: Colors.highlights,
    borderRadius: 16,
    minHeight: 54,
    justifyContent: 'center',
  },
  nextBtnText: {},
});
export default RegisterScreen;
