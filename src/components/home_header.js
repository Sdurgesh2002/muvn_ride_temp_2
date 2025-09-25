import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Menu from '../assets/icons/menu.svg';
import Frame from '../assets/icons/frame.svg';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import Logo from '../assets/muvn_logo.png';
import useResponsiveDimensions from '../utils/useResponsiveDimensions';

const Header = () => {
  const { wp, hp } = useResponsiveDimensions();

  return (
    <View style={[styles.header, { height: hp(7), paddingHorizontal: wp(5) }]}>
      <TouchableOpacity>
        <Menu width={wp(7)} height={hp(4)} />
      </TouchableOpacity>
      {/* Use Image logo with responsive size */}
      <Image source={Logo} style={{ width: wp(25), height: hp(15), resizeMode: 'contain' }} />

      <TouchableOpacity>
        <Frame width={wp(10)} height={hp(10)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
});

export default Header;
