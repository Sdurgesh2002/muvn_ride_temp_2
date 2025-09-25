import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const { width } = Dimensions.get('window');

const RideRouteCard = ({
  fromTitle,
  fromAddress,
  fromTime,
  toTitle,
  toAddress,
  toTime,
  distance,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <View style={styles.startIcon} />
          <View style={styles.dashedLine} />
          <View style={styles.endIcon} />
        </View>
        <View style={styles.middleColumn}>
          <View style={styles.item}>
            <Text style={styles.title}>{fromTitle}</Text>
            <View style={styles.rowSpace}>
              <Text style={styles.address}>{fromAddress}</Text>
              <Text style={styles.time}>{fromTime}</Text>
            </View>
          </View>
          <View style={styles.distanceBadge}>
            <Text style={styles.distanceText}>{distance}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.title}>{toTitle}</Text>
            <View style={styles.rowSpace}>
              <Text style={styles.address}>{toAddress}</Text>
              <Text style={styles.time}>{toTime}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    alignItems: 'center',
    width: 30,
  },
  startIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.gold || 'gold',
    marginBottom: 4,
  },
  endIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.gold || 'gold',
    marginTop: 4,
  },
  dashedLine: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#999',
    borderStyle: 'dashed',
    marginVertical: 4,
  },
  middleColumn: {
    flex: 1,
    paddingLeft: 12,
  },
  item: {
    marginBottom: 12,
  },
  title: {
    ...Typography.H3_Medium,
    fontWeight: 'bold',
    color:Colors.black,
    marginBottom: 4,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    ...Typography.Body,
    color: '#9B9B9B',
    flexShrink: 1,
  },
  time: {
    ...Typography.Body,
    color: '#777',
    fontSize: 13,
  },
  distanceBadge: {
    alignSelf: 'flex-start',
    left:'-15%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 12,
    minWidth: width * 0.2,
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 12,
    color: '#555',
  },
});

export default RideRouteCard;
