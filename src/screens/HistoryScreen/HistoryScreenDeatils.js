import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../../components/Header_1';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import RideSummaryCard from '../../components/RideSummaryCard';
import Avtar from '../../assets/muvn_logo.png';
import payment from '../../assets/payment_logo.png';
import Typography from '../../constants/Typography';
const HistoryScreenDetails = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header title="History" onBackPress={handleBack} />

        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <Image
            source={require('../../assets/location_map.png')}
            style={styles.location}
          />

          <RideSummaryCard
            avatar={Avtar}
            name="Kwadwo"
            rating={4.5}
            amount="GH₵ 15.00"
            date="22 Mar, 2025 - 09:12 am"
            status="Complete"
            from="12 Old Bekwai Rd"
            to="H-25 Melcom Adum Branch"
            distance="4.5 Km"
            subtotal="15.96"
            tripCharges="15.96"
            riderPromotion="-0.60"
            rounding="-0.36"
            paymentMethod="MoMo from MTN"
            paymentTime="09:18 am"
            paymentLogo={payment}
            paymentAmount="15.00"
          />
          <Text
            style={{
              ...Typography.H1_Bold,
              marginVertical: 16,
            }}
          >
            Help
          </Text>
          <Text style={styles.heading}>Report Safety Issue</Text>
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <Text style={styles.subheading}>
              Let us know if you have a safety related issue
            </Text>
            <Text>&#8250;</Text>
          </View>
          <View style={styles.divider} />

          <Text style={styles.heading}>Provide Rider Feedback</Text>

          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <Text style={styles.subheading}>
              For issues that aren’t safety related
            </Text>
            <Text>&#8250;</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray || '#E0E0E0',
    marginVertical: 12,
  },
  location:{
    width:'100%',
    borderRadius:20,
    marginVertical:10,

  },

  subheading: {
    ...Typography.Body,
    color: Colors.gray,
  },
  heading: {
    ...Typography.H3_Medium,
  },
  text: {
    fontSize: 24,
  },
});
export default HistoryScreenDetails;
