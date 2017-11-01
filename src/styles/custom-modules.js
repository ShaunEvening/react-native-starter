import { Platform } from 'react-native';

export const typeScaleOverride = {
  f1: { fontSize: 28 },
  f2: { fontSize: 23 },
  f3: { fontSize: 18 },
  f4: { fontSize: 16 },
  f5: { fontSize: 14 },
  f6: { fontSize: 12 },
};

export const textTransforms = {
  ut: { textDecorationLine: 'underline' },
  oh: { overflow: 'hidden' },
};

export const zIndexes = {
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 },
  z4: { zIndex: 4 },
  z5: { zIndex: 5 },
};

export const perecentWidths = {
  w_10: { width: '10%' },
  w_20: { width: '20%' },
  w_25: { width: '25%' },
  w_30: { width: '30%' },
  w_33: { width: '33%' },
  w_34: { width: '34%' },
  w_40: { width: '40%' },
  w_50: { width: '50%' },
  w_60: { width: '60%' },
  w_70: { width: '70%' },
  w_75: { width: '75%' },
  w_80: { width: '80%' },
  w_90: { width: '90%' },
  w_100: { width: '100%' },
};

export const customWidths = {
  wc_23: { width: 23 },
  wc_40: { width: 40 },
  wc_60: { width: 60 },
  wc_70: { width: 70 },
  wc_120: { width: 120 },
  wc_375: { width: 375 },
};

export const perecentHeights = {
  h_10: { height: '10%' },
  h_20: { height: '20%' },
  h_25: { height: '25%' },
  h_30: { height: '30%' },
  h_33: { height: '33%' },
  h_34: { height: '34%' },
  h_40: { height: '40%' },
  h_50: { height: '50%' },
  h_60: { height: '60%' },
  h_70: { height: '70%' },
  h_75: { height: '75%' },
  h_80: { height: '80%' },
  h_90: { height: '90%' },
  h_100: { height: '100%' },
};

export const customHeights = {
  hc_23: { height: 23 },
  hc_60: { height: 60 },
  hc_70: { height: 70 },
  hc_120: { height: 120 },
  hc_375: { height: 375 },
  h_ios_bar: {
    ...Platform.select({
      ios: { height: 20 },
      android: { height: 0 },
    }),
  },
};

export const spacing = {
  mr_1: { marginRight: 1 },
};

export const borders = {
  btw3: { borderTopWidth: 3 },
  bbw3: { borderBottomWidth: 3 },
  bw2: { borderWidth: 2 },
  bw3: { borderWidth: 3 },
  ba0: { borderWidth: 0 },
  br100: { borderRadius: 100 },
  br35: { borderRadius: 35 },
};

export const shapes = {
  ar_1: { aspectRatio: 1 },
  diamond: {
    width: 10,
    height: 10,
    transform: [
      { rotate: '45deg' },
    ],
    right: -18,
  },
  diamond_left: {
    top: 20,
    right: -5,
  },
  diamond_left_tooltip: {
    top: 15,
    right: -5,
  },
  diamond_top: {
    top: -5,
  },
  diamond_bottom: {
    top: -15,
  },
  robot_top: {
    top: -35,
  },
  tool_tip_message_bottom: {
    bottom: 37,
  },
};
