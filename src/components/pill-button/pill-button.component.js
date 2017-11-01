import React from 'react';
import type { Children } from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from 'styles';

type Props = {
  onPress: () => void,
  disabled: boolean,
  activeStyles: {},
  disabledStyles: {},
  children: Children,
};

export const PillButton = ({
  onPress,
  disabled = false,
  activeStyles = {},
  disabledStyles = {},
  children }: Props) => {
  const styles = disabled ? disabledStyles : activeStyles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        s.jcfe,
        s.aic,
        s.ass,
        s.br5,
        s.pa3,
        ...styles,
      ]}
      activeOpacity={0.5}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};
