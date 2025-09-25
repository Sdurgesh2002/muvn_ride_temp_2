import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useResponsiveDimensions from '../utils/useResponsiveDimensions';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import EditPen from '../assets/icons/edit_pen.svg';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = ({ name, phone, email, profileImage }) => {
  const { wp, hp } = useResponsiveDimensions();
  const cardHeight = hp(18);
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginHorizontal: wp(4),
        marginTop: hp(2),
        borderRadius: wp(6),
        overflow: 'hidden',
        height: cardHeight,
        width: 'auto',
      }}
    >
      <ImageBackground
        source={require('../assets/profile__bg.png')}
        style={[
          StyleSheet.absoluteFill,
          { width: '100%', height: '100%', backgroundColor: Colors.highlights },
        ]}
        imageStyle={{ borderRadius: wp(6), width: '100%', height: '100%' }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: wp(5),
          height: cardHeight,
        }}
      >
        <Image
          source={profileImage}
          style={[
            styles.profileImage,
            {
              width: wp(18),
              height: wp(18),
              borderRadius: wp(4),
              borderWidth: 6,
            },
          ]}
        />
        <View style={{ marginLeft: wp(4), flex: 1 }}>
          <Text style={[Typography.H1_Bold, { color: Colors.primary }]}>
            {name}
          </Text>
          <Text
            style={[
              Typography.H3_Medium,
              { color: Colors.primary, marginTop: hp(1) },
            ]}
          >
            {phone}
          </Text>
          <Text style={[Typography.H3_Medium, { color: Colors.primary }]}>
            {email}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Editphoto')}>
          <EditPen width={wp(20)} height={wp(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    backgroundColor: Colors.gray,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  editIcon: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});

export default ProfileCard;
