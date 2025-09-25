// src/constants/Typography.js
import { moderateScale, verticalScale } from '../utils/scaling';

export default {
  H_Introduction: {
    fontSize: moderateScale(48),
    lineHeight: verticalScale(58),
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
  },
  H1_Bold: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
  },
  H2_SBold: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
  },
  H3_Medium: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    fontFamily: 'Jost-VariableFont_wght',
  },
  H3_SBold: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    fontFamily: 'Jost-VariableFont_wght',
  },
  Body: {
    fontSize: moderateScale(13.5),
    fontWeight: '400',
    fontFamily: 'Jost-VariableFont_wght',
  },
  Body2: {
    fontSize: moderateScale(11),
    fontWeight: '400',
    fontFamily: 'Jost-VariableFont_wght',
  },
};
