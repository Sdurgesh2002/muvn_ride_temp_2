import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header_1';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import useResponsiveDimensions from '../../utils/useResponsiveDimensions';
import { SafeAreaView } from 'react-native-safe-area-context';

// SVG imports
import FilterIcon from '../../assets/icons/Filter.svg';
import OkadaIcon from '../../assets/icons/okada.svg';
import DriverIcon from '../../assets/icons/driver.svg';
import CourierIcon from '../../assets/icons/courier.svg';

const DATA = [
  {
    id: '1',
    type: 'bike',
    address: '125 Dadiesoaba Road',
    date: '22 Mar, 2025 - 10:56 pm',
    amount: 12.0,
    icon: OkadaIcon,
  },
  {
    id: '2',
    type: 'taxi',
    address: '125 Dadiesoaba Road',
    date: '22 Mar, 2025 - 10:56 pm',
    amount: 12.0,
    icon: DriverIcon,
  },
  {
    id: '3',
    type: 'bike',
    address: '125 Dadiesoaba Road',
    date: '22 Mar, 2025 - 10:56 pm',
    amount: 12.0,
    icon: OkadaIcon,
  },
  {
    id: '4',
    type: 'parcel',
    address: '125 Dadiesoaba Road',
    date: '22 Mar, 2025 - 10:56 pm',
    amount: 12.0,
    icon: CourierIcon,
  },
];

// 🔹 Reusable card component
// 🔹 Reusable card component
const HistoryCard = ({ item, onPress, wp, hp }) => {
  const Icon = item.icon;
  return (
    <TouchableOpacity
      style={[styles.card, { marginBottom: hp(2), padding: wp(4) }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Icon with background */}
      <View
        style={{
          width: wp(14),
          height: wp(14),
          borderRadius: wp(7),
          backgroundColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: wp(3),
          shadowColor: Colors.gray,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3, // for Android shadow
        }}
      >
        <Icon width={wp(8)} height={wp(8)} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.amount}>GH₵ {item.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HistoryScreen = ({ navigation }) => {
  const { wp, hp } = useResponsiveDimensions();

  const handleBack = () => {
    navigation.goBack();
  };
  const handlePressItem = item => {
    navigation.navigate('HistoryDeatils', { rideId: item.id });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Header
          title="History"
          onBackPress={handleBack}
          rightIcon={<FilterIcon width={42} height={42} />}
        />
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <HistoryCard
              item={item}
              wp={wp}
              hp={hp}
              onPress={() => handlePressItem(item)}
            />
          )}
          contentContainerStyle={{ padding: wp(4) }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 18,
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  address: {
    ...Typography.H2_SBold,
    color: Colors.black,
    marginBottom: 2,
    fontFamily: 'Jost-VariableFont_wght',
  },
  date: {
    ...Typography.Body,
    color: Colors.gray,
    marginBottom: 2,
    fontFamily: 'Jost-VariableFont_wght',
  },
  amount: {
    ...Typography.Body,
    color: Colors.gray,
  },
});

export default HistoryScreen;
