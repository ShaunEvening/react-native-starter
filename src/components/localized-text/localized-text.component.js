import React from 'react';
import { Text } from 'react-native';
import { s } from 'styles';
import i18next from 'i18next';

type Props = {
  style: [],
  textKey: string,
  values: {},
};

export const LocalizedText = ({ style = [], textKey = '', values = {} }: Props) => (
  <Text style={[s.bg_transparent, ...style]}>
    {i18next.t(textKey, values)}
  </Text>
);
