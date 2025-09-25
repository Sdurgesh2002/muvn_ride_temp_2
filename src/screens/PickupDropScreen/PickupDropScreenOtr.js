import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Main_Header';
import CustomButton from '../../components/CustomButton';
import CustomSearch from '../../components/CustomSearch';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import Map from '../../assets/icons/map_search.svg';
import PinSVG from '../../assets/icons/mystery.svg';
import { useNavigation } from '@react-navigation/native';
import { use } from 'react';


const PickupDropScreenOtr = () => {
  const { width } = useResponsiveDimensions();
  const [pickup, setPickup] = useState('');
  const navigation=useNavigation();

  const [drop, setDrop] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header
        label="For Other"
        onBackPress={() => {}}
        onDropdownPress={() => {}}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Contact Details</Text>

        <View style={styles.inputWithIcon}>
          <CustomSearch
            placeholder="Martin Koper"
            value={pickup}
            onChangeText={setPickup}
            rightElement={
              <TouchableOpacity onPress={{}}>
                <Text
                  style={{
                    color: '#247CFF',
                    fontWeight: '500',
                    ...Typography.Body,
                    fontFamily: 'Jost-VariableFont_wght',
                    textDecorationLine: 'underline',
                  }}
                >
                  Add Contact
                </Text>
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            style={styles.rightIconContainer}
          ></TouchableOpacity>
        </View>

        <View style={styles.inputWithIcon}>
          <CustomSearch
            placeholder="9999-999-999"
            value={drop}
            onChangeText={setDrop}
            Icon={null}
          />
          <TouchableOpacity
            style={styles.rightIconContainer}
          ></TouchableOpacity>
        </View>
        <Text style={styles.title}>Select Pick-up & Drop</Text>
        <View>
          <View style={styles.inputWithIcon}>
            <CustomSearch
              placeholder="D-12 Old Bewkai Road"
              value={pickup}
              onChangeText={setPickup}
              Icon={null}
            />
            <TouchableOpacity style={styles.rightIconContainer}>
              <PinSVG width={24} height={24} fill={Colors.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.connectorContainer}>
            <View style={styles.verticalLine} />
            <View style={styles.distancePillContainer}>
              <Text style={styles.distanceText}>4.5 Miles</Text>
            </View>
          </View>

          <View style={styles.inputWithIcon}>
            <CustomSearch
              placeholder="H-25 Melcom Adum Branch"
              value={drop}
              onChangeText={setDrop}
              Icon={null}
            />
            <TouchableOpacity style={styles.rightIconContainer}>
              <PinSVG width={24} height={24} fill={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.mapBtn}>
          <Text style={styles.mapBtnText}>Select From Map</Text>
          <Map style={styles.mapBtnText1} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Book Now"
          onPress={() => navigation.navigate('ChooseRide')}
          style={styles.bookButton}
          textStyle={styles.bookButtonText}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  connectorContainer: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 4,
    marginTop: -6,
  },
  verticalLine: {
    width: 2,
    height: 48,
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    left: '50%',
    top: 0,
    zIndex: 0,
    transform: [{ translateX: -1 }],
  },
  distancePillContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    zIndex: 1,
    elevation: 2,
    alignSelf: 'center',
  },
  distanceText: {
    color: '#888',
    fontWeight: 'bold',
  },
  distanceContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
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
    left: 5,
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
    borderBottomWidth: 0.3,
    borderBottomColor: '#9B9B9B',
    borderBottomColor: Colors.gray,
  },
  recentAddress: {
    ...Typography.Body,
    flex: 1,
    marginLeft: 10,
    fontFamily: '500',
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

export default PickupDropScreenOtr;
