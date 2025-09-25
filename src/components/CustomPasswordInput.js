import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const eyeOpenIcon = require('../assets/eye-open.png');
const eyeCloseIcon = require('../assets/eye-close.png');

const CustomPasswordInput = ({
  label,
  error,
  style,
  inputStyle,
  ...props
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={label}
          placeholderTextColor={Colors.white}
          secureTextEntry={secure}
          {...props}
        />
        <TouchableOpacity
          onPress={() => setSecure(prev => !prev)}
          style={styles.iconButton}
          activeOpacity={0.7}
        >
          <Image
            source={secure ? eyeCloseIcon : eyeOpenIcon}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#428CC5', 
    borderRadius: 14, 
    height: 56,
    borderWidth: 1,
    borderColor: Colors.white,
    //
    paddingRight: 12,
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 18,
    color: Colors.white,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.white, // White to match image
  },
  error: {
    marginTop: 3,
    color: 'red',
    ...Typography.Body2,
  },
});

export default CustomPasswordInput;
