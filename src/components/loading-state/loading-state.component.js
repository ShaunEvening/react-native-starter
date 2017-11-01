import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LocalizedText } from 'components';
import { s } from 'styles';

type Props = {
  color: string,
  messageTextKey: string,
};

export const LoadingState = ({ color, messageTextKey }: Props) => (
  <View style={[s.flx_i, s.aic, s.jcc, s.bg_transparent]}>
    <ActivityIndicator
      color={color}
      size="large"
    />
    <LocalizedText
      style={[{ color }]}
      textKey={messageTextKey}
    />
  </View>
);
