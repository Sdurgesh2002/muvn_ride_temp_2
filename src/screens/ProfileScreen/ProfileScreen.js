import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header_1';
import Frame from '../../assets/icons/frame.svg';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import ProfileCard from '../../components/Profile_Card';

import SettingsIcon from '../../assets/icons/settings.svg';
import AddressIcon from '../../assets/icons/location_on.svg';
import HelpIcon from '../../assets/icons/support_agent.svg';
import PrivacyIcon from '../../assets/icons/shield_question.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { label: 'Settings', Icon: SettingsIcon },
  { label: 'Addresses', Icon: AddressIcon },
  { label: 'Help Centre', Icon: HelpIcon },
  { label: 'Privacy & Policy', Icon: PrivacyIcon },
];

const ProfileScreen = () => {
  const { wp, hp } = useResponsiveDimensions();
  const navigation =useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header
        title="Profile"
        rightIcon={<Frame width={wp(10)} height={wp(10)} />}
      />
      <ProfileCard
        name="Emmanuel"
        phone="9999-999-999"
        email="emmanuel@muvn.com"
        profileImage={require('../../assets/payment_logo.png')}
      />
      <View style={{ marginHorizontal: wp(5), flex: 1 }}>
        {menuItems.map(item => (
          <TouchableOpacity
            key={item.label}
            style={[
              styles.menuItem,
              {
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(1),
                paddingVertical: hp(1.5),
                width: '100%',
                justifyContent: 'flex-start',
                paddingRight: wp(0),
              },
            ]}
          >
            <item.Icon
              width={wp(5.5)}
              height={wp(5.5)}
              style={{ marginRight: wp(3) }}
            />
            <Text style={[Typography.H3_SBold, { color: Colors.primary }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          // onPress={handleSignOut}
          style={[
            styles.signOut,
            { marginTop: hp(3), flexDirection: 'row', alignItems: 'center' },
          ]}
        >
          <LogoutIcon
            width={wp(6)}
            height={wp(6)}
            style={{ marginRight: wp(2) }}
          />
          <Text style={[Typography.H3_SBold, { color: Colors.R  }]}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputbox,
    justifyContent: 'center',
  },
  signOut: {
    alignItems: 'flex-start',
  },
});

export default ProfileScreen;
