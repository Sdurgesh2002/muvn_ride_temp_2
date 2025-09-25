import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import useResponsiveDimensions from '../utils/useResponsiveDimensions';
import RideRouteCard from './RideRouteCard';
const RideSummaryCard = ({
  avatar,
  name,
  rating,
  amount,
  date,
  status,
  tripCharges,
  subtotal,
  riderPromotion,
  rounding,
  paymentLogo,
  paymentMethod,
  paymentTime,
  paymentAmount,
}) => {
  const { wp, hp } = useResponsiveDimensions();
  const [expanded, setExpanded] = useState(false);
  const getImageSource = src => {
    if (!src) return null;
    if (typeof src === 'string') return { uri: src };
    return src;
  };
  return (
    <TouchableOpacity
      activeOpacity={0.93}
      style={[styles.container, { padding: wp(4), borderRadius: wp(3) }]}
      onPress={() => setExpanded(!expanded)}
    >
      <View style={styles.rowSpace}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ position: 'relative', marginRight: wp(3.5) }}>
            <Image
              source={getImageSource(avatar)}
              style={{
                width: wp(12),
                height: wp(12),
                borderRadius: wp(6),
                backgroundColor: Colors.white,
                borderWidth: 2,
                borderColor: Colors.grayLight,
              }}
            />

            {rating && (
              <View
                style={{
                  position: 'absolute',
                  bottom: -wp(3),
                  backgroundColor: Colors.white,
                  borderRadius: wp(2),
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: wp(2),
                  paddingVertical: wp(0.5),
                  elevation: 3,
                  shadowColor: Colors.black,
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Image
                  source={require('../assets/Star.png')}
                  style={{ width: wp(4), height: wp(4), marginRight: 2 }}
                />
                <Text
                  style={{
                    color: Colors.black,

                    fontSize: wp(3.5),
                  }}
                >
                  {rating}
                </Text>
              </View>
            )}
          </View>

          <View>
            <Text
              style={[
                Typography.H1_Bold,
                { color: Colors.black, fontFamily: 'Jost-VariableFont_wght' },
              ]}
            >
              {name}
            </Text>
            <Text style={[Typography.H3_Medium, { color: Colors.black }]}>
              {`${amount}`}
            </Text>
            <Text
              style={[
                Typography.Body,
                { color: Colors.gray, fontFamily: 'Jost-VariableFont_wght' },
              ]}
            >
              {date}
            </Text>
          </View>
        </View>

        {status && (
          <View style={styles.statusBadge}>
            <Text
              style={[Typography.Body2, { color: Colors.white }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {status}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.divider} />

      <RideRouteCard
        fromTitle="12 Old Bekwai Rd"
        fromAddress="12 Old Bekwai Rd, Kumasi, Ghana"
        fromTime="09:12 am"
        toTitle="H-25 Melcom Adum Branch"
        toAddress="206 Prempen II Avenue, Kumasi, Ghana"
        toTime="09:17 am"
        distance="4.5 Km"
      />

      {expanded && (
        <>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text
              style={[
                Typography.H1_Bold,
                {
                  color: Colors.primary,
                  fontWeight: '700',
                },
              ]}
            >
              Total Fare
            </Text>
            <Text
              style={{
                ...Typography.H1_Bold,
                fontWeight: '700',
              }}
            >{`${amount}`}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.row}>
            <Text
              style={[
                Typography.H3_SBold,
                { color: Colors.black, fontWeight: '600' },
              ]}
            >
              Trip Charges
            </Text>
            <Text
              style={[Typography.H3_SBold, { color: Colors.black }]}
            >{`GH₵ ${tripCharges}`}</Text>
          </View>
          <View style={styles.divider} />

          {/* {subtotal && ( */}
          <View style={styles.row}>
            <Text
              style={[
                Typography.H3_SBold,
                { color: Colors.black, fontWeight: '600' },
              ]}
            >
              Subtotal
            </Text>
            <Text
              style={[
                Typography.H3_SBold,
                { color: Colors.black, fontWeight: '600' },
              ]}
            >{`GH₵ ${subtotal}`}</Text>
          </View>
          {/* )} */}

          {riderPromotion && (
            <View style={styles.row}>
              <Text style={[Typography.H3_Medium, { color: Colors.black }]}>
                Rider Promotion
              </Text>
              <Text style={[Typography.H3_SBold, { color: '#379000' }]}>
                - GH₵ {riderPromotion}
              </Text>
            </View>
          )}
          {rounding && (
            <View style={styles.row}>
              <Text style={[Typography.H3_Medium, { color: Colors.black }]}>
                Rounding
              </Text>
              <Text style={[Typography.H3_Medium, { color: '#379000' }]}>
                - GH₵ {rounding}
              </Text>
            </View>
          )}
          <View style={styles.divider} />

          <Text
            style={[
              Typography.H2_SBold,
              { color: Colors.primary, marginBottom: hp(0.5) },
            ]}
          >
            Payment
          </Text>
          <View style={styles.paymentRow}>
            {/* {paymentLogo && ( */}
            <Image
              source={getImageSource(paymentLogo)}
              style={{
                width: wp(10),
                height: wp(10),
                marginRight: 8,
                borderRadius: wp(5),
                backgroundColor: Colors.inputbox,
              }}
            />
            {/* // ) */}
            <View>
              <Text style={[Typography.H3_Medium, { color: Colors.black }]}>
                {paymentMethod}
              </Text>
              <Text style={[Typography.Body, { color: Colors.gray }]}>
                {paymentTime}
              </Text>
            </View>
            <Text
              style={[
                Typography.H3_Medium,
                { color: Colors.black, marginLeft: 'auto' },
              ]}
            >{`GH₵ ${paymentAmount}`}</Text>
          </View>

          <View style={styles.divider} />

          <Text
            style={[
              Typography.Body,
              {
                color: Colors.textCta,

                alignSelf: 'center',
              },
            ]}
          >
            Download PDF
          </Text>
        </>
      )}
      <View style={styles.divider} />
      <Text
        style={{
          alignSelf: 'center',
          color: Colors.gray,
          marginTop: expanded ? hp(0.3) : hp(1),
          ...Typography.Body,
        }}
      >
        {expanded ? 'Receipt ▴' : 'Receipt ▾'}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputbox,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    elevation: 2,
    // marginVertical: 10,
    // marginHorizontal: 14,
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  statusBadge: {
    backgroundColor: '#379000',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    maxWidth: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  routeBlock: {
    marginTop: 2,
    marginBottom: 2,
    paddingHorizontal: 0,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  distanceBox: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.inputbox,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 6,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray || '#E0E0E0',
    marginVertical: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 2,
  },
});

export default RideSummaryCard;
