import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import CustomButton from '../../components/CustomButton';
import BackIcon from '../../assets/icons/ArrowBack.svg';
import OkadaIcon from '../../assets/icons/okada.svg';
import CarIcon from '../../assets/icons/driver.svg';
import CourierIcon from '../../assets/icons/courier.svg';
import CashIcon from '../../assets/icons/payments.svg';
import { useNavigation } from '@react-navigation/native';
const rides = [
  {
    id: 'okada',
    label: 'Okada',
    desc: '900 m | 2 min',
    price: 25.36,
    icon: <OkadaIcon width={40} height={40} />,
  },
  {
    id: 'drive',
    label: 'Drive',
    desc: '1.2 miles | 5 min',
    price: 32.36,
    icon: <CarIcon width={40} height={40} />,
  },
  {
    id: 'courier',
    label: 'Courier',
    desc: '',
    price: 55.36,
    icon: <CourierIcon width={40} height={40} />,
  },
];
export default function RideStateScreen() {
  const { wp, hp } = useResponsiveDimensions();
  const [step, setStep] = useState('choose');
  const [selectedRide, setSelectedRide] = useState(rides[0]);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../assets/mock-map.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: 'rgba(255,255,255,0.85)',
              borderRadius: 24,
              padding: 8,
              elevation: 3,
              shadowColor: '#000',
              shadowOpacity: 0.15,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 2 },
            }}
            onPress={() => {
              if (step === 'confirm') {
                setStep('choose');
              } else {
                navigation.goBack();
              }
            }}
          >
            <BackIcon width={24} height={24} fill={Colors.black} />
          </TouchableOpacity>
        </View>
        {step === 'choose' && (
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Choose A Ride</Text>
            <View style={{ gap: hp(1.8) }}>
              {rides.map(ride => (
                <TouchableOpacity
                  key={ride.id}
                  onPress={() => setSelectedRide(ride)}
                  style={[
                    styles.rideOption,
                    ride.id === selectedRide.id && styles.rideOptionSelected,
                  ]}
                  activeOpacity={0.75}
                >
                  <View style={styles.rideIcon}>{ride.icon}</View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.rideLabel}>{ride.label}</Text>
                    <Text style={styles.rideDesc}>{ride.desc}</Text>
                  </View>
                  <Text style={styles.ridePrice}>{`₵ ${ride.price.toFixed(
                    2,
                  )}`}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <CustomButton
              title="Continue"
              onPress={() => setStep('confirm')}
              style={[styles.continueBtn, { marginTop: hp(4) }]}
              textStyle={styles.btnText}
            />
          </View>
        )}
        {step === 'confirm' && (
          <View style={styles.confirmSheet}>
            <Text style={styles.sheetTitle}>Confirm Pickup Location</Text>
            <View style={styles.summaryCard}>
              <View style={styles.rideIcon}>{selectedRide.icon}</View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rideLabel}>{selectedRide.label}</Text>
                <Text style={styles.rideDesc}>{selectedRide.desc}</Text>
              </View>
              <Text style={styles.ridePrice}>{`₵ ${selectedRide.price.toFixed(
                2,
              )}`}</Text>
            </View>
            <View style={styles.paymentRow}>
              <CashIcon width={28} height={28} />
              <Text style={styles.paymentText}>Cash</Text>
              <Text style={styles.chevron}>&#8250;</Text>
            </View>
            <CustomButton
              title="Confirm"
              onPress={() => setStep('searching')}
              style={styles.confirmBtn}
              textStyle={styles.confirmBtnText}
            />
          </View>
        )}
        {step === 'searching' && (
          <View style={styles.confirmSheet}>
            <Text style={styles.sheetTitle}>Searching Rider</Text>
            <Text style={styles.searchingText}>
              Assigning a rider... Please wait.
            </Text>

            <CustomButton
              title="Cancel Ride"
              style={styles.cancelBtn}
              textStyle={styles.cancelBtnText}
              onPress={() => setStep('choose')}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  flex1: { flex: 1 },
  searchingText: {
    ...Typography.H3_Medium,
    textAlign: 'center',
    color: Colors.black,
    marginBottom: 26,
  },
  cancelBtn: {
    width: '100%',
    backgroundColor: Colors.highlights, // neon yellow like screenshot
    borderRadius: 18,
    height: 60,
    alignSelf: 'center',
  },
  cancelBtnText: {
    color: Colors.black,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    padding: 22,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    minHeight: 340,
    marginTop: -12,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 8,
    shadowOffset: { height: 0, width: 0 },
  },
  confirmSheet: {
    backgroundColor: Colors.white,
    padding: 22,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -12,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 8,
    shadowOffset: { height: 0, width: 0 },
  },
  sheetTitle: {
    ...Typography.H1_Bold,
    marginBottom: 22,
    textAlign: 'center',
    color: Colors.black,
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
  },
  rideOption: {
    backgroundColor: Colors.inputbox,
    borderRadius: 12,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  rideOptionSelected: {
    borderColor: Colors.black,
    backgroundColor: Colors.white,
  },
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#203253',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 12,
    gap: 16,
  },
  rideIcon: {
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rideLabel: {
    ...Typography.H3_SBold,
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
    color: Colors.black,
  },
  rideDesc: {
    ...Typography.H3_SBold,
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
    color: Colors.black,
  },
  ridePrice: {
    ...Typography.H3_SBold,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 8,
  },
  continueBtn: {
    width: '100%',
    backgroundColor: Colors.highlights,
    borderRadius: 14,
    height: 52,
  },
  btnText: {
    color: Colors.black,
  },
  confirmBtn: {
    width: '100%',
    backgroundColor: Colors.highlights,
    borderRadius: 18,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
  },
  confirmBtnText: {
    color: Colors.black,
    // fontWeight: 'bold',
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    marginBottom: 26,
  },
  paymentText: {
    ...Typography.H3_SBold,
    fontWeight: '700',
    color: Colors.black,
    marginLeft: 10,
  },
  chevron: {
    marginLeft: 'auto',
    fontSize: 26,
    color: Colors.black,
    fontWeight: '900',
  },
});
