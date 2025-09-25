import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const CustomSearch = ({
  placeholder = 'Where to?',
  value,
  onChangeText,
  style,
  inputStyle,
  Icon, // Icon component passed as prop
  iconWidth = 22,
  iconHeight = 22,
  iconFill = Colors.gray,
  rightElement, // new prop for right side accessory
  ...props
}) => (
  <View style={[styles.container, style]}>
    {Icon && (
      <Icon width={iconWidth} height={iconHeight} fill={iconFill} style={styles.icon} />
    )}
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={Colors.black}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
    {/* Render the custom right element if provided */}
    {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputbox,
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    ...Typography.H2_SBold,
    color: Colors.black,
    fontFamily: 'Jost-VariableFont_wght',
  },
  rightElement: {
    marginLeft: 16,
  },
});

export default CustomSearch;
