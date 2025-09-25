import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import CustomInput from '../../components/CustomInput';
import CustomPasswordInput from '../../components/CustomPasswordInput';
import CustomButton from '../../components/CustomButton';

const bgImage = require('../../assets/Splash.png');

// Helper functions
function isEmail(str) {
  return /\S+@\S+\.\S+/.test(str);
}
function isMobile(str) {
  const sanitized = str.replace(/[^0-9]/g, '');
  return /^[6-9]\d{9}$/.test(sanitized);
}
// TermsText component extracted for reuse
const TermsText = () => (
  <Text style={styles.infoText}>
    By continuing, you agree to the
    <Text
      style={styles.link}
      onPress={() => Linking.openURL('https://example.com/terms')}
    >
      {' '}
      T&C{' '}
    </Text>
    and
    <Text
      style={styles.link}
      onPress={() => Linking.openURL('https://example.com/privacy')}
    >
      {' '}
      Privacy Policy
    </Text>
  </Text>
);
const LoginScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    step: 'initial', // 'initial' | 'otp_input' | 'otp_verify' | 'password'
    inputValue: '',
    password: '',
    otp: ['', '', '', '', '', ''],
  });
  const [passwordError, setPasswordError] = useState('');
  const inputs = useRef(
    Array(6)
      .fill()
      .map(() => React.createRef()),
  ).current;
  const handlePasswordLogin = () => {
    if (form.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
      // Proceed with login
    }
  };
  // Refs for OTP inputs initialized once

  const infoMsg =
    'We’re sending a verification PIN to your mobile number to keep your bookings secure and ensure smooth communication. This helps us provide faster and more personalized support.';

  // Handlers
  const handleInputChange = useCallback(val => {
    setForm(prev => ({
      ...prev,
      inputValue: val,
      step: 'initial',
      password: '',
      otp: ['', '', '', '', '', ''],
    }));
  }, []);

  const handleLogin = useCallback(() => {
    if (isMobile(form.inputValue)) {
      setForm(prev => ({ ...prev, step: 'otp_input' }));
    } else if (isEmail(form.inputValue)) {
      setForm(prev => ({ ...prev, step: 'password' }));
    }
    // Else: show validation error if needed
  }, [form.inputValue]);

  const handleSendOTP = useCallback(() => {
    setForm(prev => ({ ...prev, step: 'otp_verify' }));
  }, []);

  const handleOtpChange = useCallback(
    (value, idx) => {
      if (!/^\d?$/.test(value)) return;
      const updatedOtp = [...form.otp];
      updatedOtp[idx] = value;
      setForm(prev => ({
        ...prev,
        otp: updatedOtp,
      }));
      if (value && idx < 5) {
        inputs[idx + 1].current.focus();
      }
    },
    [form.otp, inputs],
  );

  return (
    <ImageBackground
      source={bgImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.loginTitle}>Login</Text>
        <TouchableOpacity style={styles.helpBtn}>
          <Text style={styles.helpText}>Help ?</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <View style={styles.formContainer}>
          <TermsText />

          {/* INITIAL STEP */}
          {form.step === 'initial' && (
            <>
              <CustomInput
                value={form.inputValue}
                onChangeText={handleInputChange}
                placeholder="Enter Contact Number or Email"
                style={styles.input}
                inputStyle={styles.inputContent}
                placeholderTextColor="#fff"
                keyboardType="default"
              />
              <Text style={styles.newUser}>
                New user?
                <Text
                  style={styles.createAccount}
                  onPress={() => navigation.navigate('Register')}
                >
                  {' '}
                  Create an account
                </Text>
              </Text>
              <CustomButton
                title="Login"
                onPress={handleLogin}
                style={styles.loginBtn}
                textStyle={styles.loginBtnText}
              />
            </>
          )}

          {/* OTP REQUEST */}
          {form.step === 'otp_input' && (
            <>
              <CustomInput
                value={form.inputValue}
                editable={false}
                style={styles.input}
                inputStyle={styles.inputContent}
              />
              <Text style={styles.newUser}>
                New user?
                <Text
                  style={styles.createAccount}
                  onPress={() => navigation.navigate('Register')}
                >
                  {' '}
                  Create an account
                </Text>
              </Text>
              <Text style={styles.otpInfoMsg}>{infoMsg}</Text>
              <CustomButton
                title="Send OTP"
                onPress={handleSendOTP}
                style={styles.loginBtn}
                textStyle={styles.loginBtnText}
              />
            </>
          )}

          {/* OTP VERIFY */}
          {form.step === 'otp_verify' && (
            <>
              <View style={styles.otpBoxesRow}>
                {form.otp.map((digit, idx) => (
                  <CustomInput
                    key={idx}
                    ref={inputs[idx]}
                    value={digit}
                    onChangeText={v => handleOtpChange(v, idx)}
                    style={styles.otpBox}
                    inputStyle={styles.otpBoxInput}
                    maxLength={1}
                    keyboardType="number-pad"
                  />
                ))}
              </View>
              <TouchableOpacity>
                <Text style={styles.resendOTP}>Resend OTP</Text>
              </TouchableOpacity>
              <Text style={styles.otpInfoMsg}>{infoMsg}</Text>
              <CustomButton
                title="Login"
                onPress={() => {
                  // Handle OTP verification login logic here
                }}
                style={styles.loginBtn}
                textStyle={styles.loginBtnText}
              />
            </>
          )}

          {/* PASSWORD */}
          {form.step === 'password' && (
            <>
              <CustomInput
                value={form.inputValue}
                editable={false}
                style={styles.input}
                inputStyle={styles.inputContent}
              />
              <CustomPasswordInput
                label="Password"
                value={form.password}
                // style={styles.input}
                onChangeText={val =>
                  setForm(prev => ({ ...prev, password: val }))
                }
                placeholder="Enter your password"
                error={passwordError}
              />

              <View style={styles.rowBetween}>
                <Text style={styles.newUser}>
                  New user?
                  <Text
                    style={styles.createAccount}
                    onPress={() => navigation.navigate('Register')}
                  >
                    {' '}
                    Create an account
                  </Text>
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.newUser,
                      { color: Colors.highlights, marginLeft: 0 },
                    ]}
                    onPress={() => {
                      // Forgot password logic
                    }}
                  >
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </View>

              <CustomButton
                title="Login"
                onPress={handlePasswordLogin} // Call validation on click
                style={styles.loginBtn}
                textStyle={styles.loginBtnText}
              />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, justifyContent: 'flex-end' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('6.5%'),
    marginHorizontal: wp('7%'),
  },
  loginTitle: {
    ...Typography.H_Introduction,
    color: Colors.highlights,
    fontWeight: '700',
    fontFamily: 'Jost-VariableFont_wght',
  },
  helpBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: wp('3.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
  },
  helpText: {
    ...Typography.H3_Medium,
    color: Colors.primary,
    fontFamily: 'Jost-VariableFont_wght',
  },
  formContainer: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    padding: wp('7%'),
    paddingBottom: hp('3%'),
  },
  infoText: {
    ...Typography.H3_Medium,
    color: Colors.primary,
    marginBottom: hp('2%'),
    fontFamily: 'Jost-VariableFont_wght',
  },
  link: {
    color: Colors.highlights,
    fontFamily: 'Jost-VariableFont_wght',
  },
  input: {
    backgroundColor: '#428CC5',
    borderRadius: wp('4%'),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  inputContent: {
    color: '#FFFFFF',
    ...Typography.H3_Medium,
    textAlign: 'left',
    fontFamily: 'Jost-VariableFont_wght',
  },
  newUser: {
    color: '#FFFFFF',
    ...Typography.H3_Medium,
    marginBottom: hp('1.3%'),
    fontFamily: 'Jost-VariableFont_wght',
  },
  createAccount: {
    color: Colors.highlights,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  otpInfoMsg: {
    fontSize: 18,
    color: '#111',
    marginVertical: hp('2%'),
    fontFamily: 'Jost-VariableFont_wght',
  },
  loginBtn: {
 
  },
  loginBtnText: {
    
  },
  otpBoxesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  otpBox: {
    width: wp('12%'),
    height: wp('12%'),
    marginHorizontal: wp('1%'),
    backgroundColor: '#4598C7',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpBoxInput: {
    color: '#F7FF27',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Jost-VariableFont_wght',
    fontWeight: 'bold',
  },
  resendOTP: {
    color: '#F7FF27',
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    marginTop: hp('0.5%'),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
});
export default LoginScreen;
