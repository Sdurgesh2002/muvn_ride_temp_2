import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SvgArrowDropDown from '../assets/icons/ArrowDropDown.svg'; // Example SVG import
import ArrowBack from '../assets/icons/ArrowBack.svg'
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
const Header = ({ onBackPress, onDropdownPress, label }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.leftIcon}>
        <ArrowBack width={20} height={20} />
      </TouchableOpacity>
      <View style={styles.rightBoxContainer}>
        <TouchableOpacity onPress={onDropdownPress} style={styles.rightBox}>
          <Text style={styles.dropdownText}>{label}</Text>
          <SvgArrowDropDown width={10} height={10} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
    height: 62,
  },
  leftIcon: {
    // padding: 8,
  },
  rightBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingVertical: 7,
    paddingHorizontal: 18,
  },
  dropdownText: {
    ...Typography.H3_Medium,
    color:Colors.black,
    marginRight: 5,
    fontFamily:'Jost-VariableFont_wght'
  },
});

export default Header;
