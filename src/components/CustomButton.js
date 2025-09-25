import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const CustomButton = ({ title, onPress, style, textStyle, disabled }) => (
  <TouchableOpacity
    style={[
      styles.button,
      style,
      disabled && styles.disabledButton,
    ]}
    onPress={onPress}
    activeOpacity={0.7}
    disabled={disabled}
  >
    <Text style={[styles.text, textStyle]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.highlights,
    borderRadius: 14,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    // elevation: 5,
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  text: {
    ...Typography.H1_Bold,
    color: Colors.black,
    fontFamily: 'Jost-VariableFont_wght',
    fontStyle: 'Bold',
    textAlign: 'center',
  },
});

export default CustomButton;
