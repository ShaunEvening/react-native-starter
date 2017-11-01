import React from 'react';
import { TextInput, Platform } from 'react-native';
import i18next from 'i18next';
import { s } from 'styles';

type Props = {
  style: {},
  placeholderTextKey: string,
  otherProps: any,
};

export const LocalizedInput = ({ style, placeholderTextKey, ...otherProps }: Props) => (
  <TextInput
    style={[
      Platform.OS === 'ios' ? s.h2 : s.h3,
      s.f3,
      ...style,
    ]}
    placeholder={i18next.t(placeholderTextKey)}
    underlineColorAndroid="transparent"
    {...otherProps}
  />
);
