import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Main_Header';
import CustomButton from '../../components/CustomButton';
import CustomSearch from '../../components/CustomSearch';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import Map from '../../assets/icons/map_search.svg'
// Import your SVGs
import Location from '../../assets/icons/my_location.svg';
import PinSVG from '../../assets/icons/mystery.svg';
import History from '../../assets/icons/history_1.svg';
import { s } from 'react-native-size-matters';

const recentPlaces = [
  { id: 1, address: '125 Dadiesoaba Road', distance: '4.5 Miles' },
  { id: 2, address: '2d2 Victoria Opoku', distance: '6.5 Miles' },
  { id: 3, address: 'H-25 Melcom Adum Branch', distance: '2.1 Miles' },
];

const PickupDropScreen = () => {
  const { width } = useResponsiveDimensions();
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
      const navigation = useNavigation();  
  

  const renderRecentPlace = ({ item }) => (
    <View style={styles.recentPlaceRow}>
      <History width={18} height={18} fill={Colors.gray} />
      <Text style={styles.recentAddress}>{item.address}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header
        label="For Me"
        onBackPress={() => {}}
        onDropdownPress={() => {}}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Select Pick-up & Drop</Text>

        {/* Pick-up Input with Right Icon */}
        <View style={styles.inputWithIcon}>
          <CustomSearch
            placeholder="D-12 Old Bewkai Road"
            value={pickup}
            onChangeText={setPickup}
            Icon={null} // icon disable kar diya
          />
          <TouchableOpacity style={styles.rightIconContainer}>
            <Location width={24} height={24} fill={Colors.black} />
          </TouchableOpacity>
        </View>

        {/* Drop Input with Right Icon */}
        <View style={styles.inputWithIcon}>
          <CustomSearch
            placeholder="Where to ?"
            value={drop}
            onChangeText={setDrop}
            Icon={null} // icon disable kar diya
          />
          <TouchableOpacity style={styles.rightIconContainer}>
            <PinSVG width={24} height={24} fill={Colors.black} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.mapBtn}>
          <Text style={styles.mapBtnText}>Select From Map</Text>
          <Map  style={styles.mapBtnText1} />
        </TouchableOpacity>

        <View style={styles.recentPlacesHeader}>
          <Text style={styles.title}>Recent Places</Text>
          <TouchableOpacity>
            <Text style={styles.title2}>Clear All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={recentPlaces}
          keyExtractor={item => item.id.toString()}
          renderItem={renderRecentPlace}
          style={styles.flatList}
          scrollEnabled={false}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Book Now"
          onPress={() =>  navigation.navigate('PickupDropOtr')}
          style={styles.bookButton}
          textStyle={styles.bookButtonText}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  title: {
    ...Typography.H1_Bold,
    color: Colors.black,
    marginVertical: 14,
    fontWeight: '700',
  },
  title2: {
    ...Typography.H1_Bold,
    color: Colors.textCta,
    marginVertical: 14,
    fontWeight: '700',
  },
  inputWithIcon: {
    position: 'relative',
    marginBottom: 12,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  mapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderColor: Colors.highlights2,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  mapBtnText: {
    ...Typography.Body,
    color: Colors.textCta,
    fontWeight: '600', 
    fontFamily: 'Jost-VariableFont_wght',
  },
  mapBtnText1: {
    color: Colors.textCta,
    left:5
  },
  recentPlacesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  recentTitle: {
    ...Typography.H3_SBold,
    color: Colors.primary,
  },
  clearAll: {
    ...Typography.Body2,
    color: Colors.textCta,
    fontWeight: '700',
  },
  recentPlaceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.3  ,
    borderBottomColor:'#9B9B9B',
    borderBottomColor: Colors.gray,
  },
  recentAddress: {
    ...Typography.Body,
    flex: 1,
    marginLeft: 10,
    fontFamily:'500',
    color: Colors.gray,
  },
  distance: {
    ...Typography.Body,
    color: Colors.gray,
    minWidth: 55,
    textAlign: 'right',
  },
  flatList: {
    marginBottom: 26,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  bookButton: {
    backgroundColor: Colors.highlights,
    borderRadius: 14,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  bookButtonText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PickupDropScreen;
