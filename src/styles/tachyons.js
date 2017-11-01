import NativeTachyons, { styles } from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';
import { palette } from './colors';
import {
  zIndexes,
  perecentWidths,
  customWidths,
  typeScaleOverride,
  perecentHeights,
  customHeights,
  spacing,
  shapes,
  borders,
  textTransforms,
} from './custom-modules';

NativeTachyons.build({
  rem: 16,
  colors: {
    palette,
  },
}, StyleSheet);

const extendedStyles = StyleSheet.create({
  ...zIndexes,
  ...perecentWidths,
  ...perecentHeights,
  ...customWidths,
  ...customHeights,
  ...typeScaleOverride,
  ...shapes,
  ...spacing,
  ...borders,
  ...textTransforms,
});

export const s = {
  ...styles,
  ...extendedStyles,
};
