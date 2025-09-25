import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomSearch from '../../components/CustomSearch';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import DriverIcon from '../../assets/icons/driver.svg';
import OkadaIcon from '../../assets/icons/okada.svg';
import CourierIcon from '../../assets/icons/courier.svg';
import ScheduleIcon from '../../assets/icons/schedule.svg';
import Header from '../../components/home_header';
import Banner from '../../assets/icons/banner_1.svg';
import Banner2 from '../../assets/icons/banner_2.svg';
import search from '../../assets/icons/mystery.svg';
const services = [
  { title: 'Driver', subtitle: "Let's Get Moving", icon: <DriverIcon /> },
  { title: 'Okada', subtitle: 'Beat Traffic', icon: <OkadaIcon /> },
  { title: 'Courier', subtitle: 'Package Delivery', icon: <CourierIcon /> },
  { title: 'Schedule', subtitle: 'Book Ahead', icon: <ScheduleIcon /> },
];
export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = React.useState('');
  const [activeTab, setActiveTab] = React.useState(0); // 👈 Home tab active by default
  const { wp, hp } = useResponsiveDimensions();

  const handleServicePress = service => {
    console.log('Service pressed:', service.title);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Header />
      <Text style={styles.Text1}>Ready When You Are</Text>

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.scrollContainer, { paddingHorizontal: wp(4) }]}
          keyboardShouldPersistTaps="handled"
        >
          <CustomSearch
            value={searchValue}
            onChangeText={setSearchValue}
            style={{ marginBottom: hp(2) }}
            Icon={search}
          />
          <View style={styles.grid}>
            {services.map(service => (
              <View key={service.title} style={[styles.serviceColumn, { width: '48%', marginBottom: hp(1) }]}>
                <View style={styles.iconWrapper}>
                  {React.cloneElement(service.icon, { width: 60, height: 60 })}
                </View>
                <TouchableOpacity
                  style={styles.serviceCard}
                  activeOpacity={0.7}
                  onPress={() => handleServicePress(service)}
                >
                  <Text style={[Typography.H2_SBold, styles.cardTitle]}>{service.title}</Text>
                  <Text style={[Typography.Body, styles.cardSubtitle]}>{service.subtitle}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <CustomButton
            title="Book Now"
            onPress={() => navigation.navigate('PickupDrop')}
            style={{ marginTop: hp(2), width: '100%' }}
          />

          <Banner width="100%" height={200} />
          <Banner2 width="100%" height={200} />
          <Text style={styles.Text2}>Explore MUVN</Text>

          <View style={styles.muvnRow}>
            <View style={styles.left}>
              <Image source={require('../../assets/safety.jpg')} style={styles.leftImage} resizeMode="contain" />
            </View>
            <View style={styles.right}>
              <Image source={require('../../assets/confidence.jpg')} style={styles.rightImageTop} resizeMode="cover" />
              <Image source={require('../../assets/technologies.jpg')} style={styles.rightImageBottom} resizeMode="cover" />
            </View>
          </View>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  container: { flex: 1, backgroundColor: Colors.white },
  scrollContainer: { paddingBottom: 24 },
  Text1: { ...Typography.H1_Bold, fontWeight: '700', paddingHorizontal: 20, marginTop: 10, marginBottom: 16 },
  Text2: { ...Typography.H1_Bold, fontWeight: '700', marginTop: 10, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceColumn: { alignItems: 'center' },
  iconWrapper: { marginBottom: -20, zIndex: 2, alignItems: 'center', backgroundColor: 'transparent' },
  serviceCard: {
    width: '100%',
    backgroundColor: Colors.inputbox,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 14,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { marginBottom: 4, color: Colors.black, textAlign: 'center' },
  cardSubtitle: { color: Colors.gray, textAlign: 'center' },
  muvnRow: { flexDirection: 'row', height: 260 },
  left: { flex: 1, marginRight: 8 },
  leftImage: { width: '100%', height: '100%', borderRadius: 18 },
  right: { flex: 1, justifyContent: 'space-between' },
  rightImageTop: { width: '100%', height: '49%', borderRadius: 18 },
  rightImageBottom: { width: '100%', height: '49%', borderRadius: 18 },
});
