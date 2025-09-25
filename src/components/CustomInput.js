import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const CustomInput = ({ label, error, style, ...props }) => (
  <View style={styles.container}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={Colors.white}
      {...props}
    />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    ...Typography.H3_Medium,
    color: Colors.primary,
    marginBottom: 4,
  },
  input: {
    height: 56,
    backgroundColor: '#428CC5',
    borderRadius: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Colors.secondary,
    color: Colors.white,
    ...Typography.H3_Medium,
    fontFamily: 'Jost-VariableFont_wght',
  },
  error: {
    marginTop: 3,
    color: 'red',
    ...Typography.Body2,
  },
});

export default CustomInput;
