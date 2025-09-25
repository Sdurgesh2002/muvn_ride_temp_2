import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import useResponsiveDimensions from '../utils/useResponsiveDimensions';

import BackIcon from '../assets/icons/ArrowBack.svg';
const Header = ({
  onBackPress,
  title = 'History',
  rightText,
  rightIcon,
  onRightPress,
}) => {
  const { wp, hp } = useResponsiveDimensions();
  return (
    <View style={[styles.container, { height: hp(7) }]}>
      <TouchableOpacity
        style={styles.leftBox}
        onPress={onBackPress}
        accessibilityLabel="Back"
        accessible
      >
        <BackIcon width={20} height={20}/>

      </TouchableOpacity>
      <Text style={[styles.title, { fontSize: wp(5.2) }]}>{title}</Text>
      {rightText || rightIcon ? (
        <TouchableOpacity
          style={[
            styles.rightBox,
            {
              borderRadius: wp(3),
              paddingHorizontal: rightText ? 16 : 0,
              width: rightIcon ? wp(10) : 'auto',
              height: rightIcon ? wp(10) : 'auto',
            },
          ]}
          onPress={onRightPress}
          activeOpacity={0.7}
          accessibilityLabel="Right button"
          accessible
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {rightText ? (
              <Text
                style={[
                  Typography.H3_Medium,
                  {
                    color: Colors.black,
                    marginRight: rightIcon ? 6 : 0,
                    fontFamily: 'Jost-VariableFont_wght',
                  },
                ]}
              >
                {rightText}
              </Text>
            ) : null}
            {rightIcon}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.rightBoxPlaceholder} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  leftBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 46,
    height: 46,
  },
  title: {
    ...Typography.H1_Bold,
    color: Colors.black,
    marginLeft: 8,
    flex: 1,
  },
  rightBox: {
    backgroundColor: Colors.highlights,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    flexDirection: 'row',
    minHeight: 40,
  },
  rightBoxPlaceholder: {
    width: 46,
    height: 46,
    marginLeft: 16,
  },
});
export default Header;
