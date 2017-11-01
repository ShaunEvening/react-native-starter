import React from 'react';
import { View, Switch } from 'react-native';
import { LocalizedText, PrimaryPillButton } from 'components';
import { s, palette } from 'styles';

type Props = {
  isButtonActive: boolean,
  counter: number,
  handleIsButtonActive: () => void,
  handleCounterIncrement: () => void,
};

export const ExampleComponent = ({
  isButtonActive,
  counter,
  handleIsButtonActive,
  handleCounterIncrement,
}: Props) => ( // eslint-disable-line
  <View
    style={[s.flx_i, s.jcc, s.aic, s.ph4, s.bg_white]}
  >
    <LocalizedText
      style={[s.primary, s.f2, s.b, s.mb4]}
      textKey="example:welcome"
    />
    <PrimaryPillButton
      disabled={!isButtonActive}
      onPress={handleCounterIncrement}
    >
      <LocalizedText
        style={[s.white, s.f3]}
        textKey="example:buttonText"
        values={{ counter }}
      />
    </PrimaryPillButton>
    <View style={[s.mt4, s.flx_row, s.jcsb, s.aic, s.w_100]}>
      <LocalizedText
        style={[s.nearBlack, s.f4]}
        textKey="example:toggleText"
      />
      <Switch
        value={isButtonActive}
        onValueChange={handleIsButtonActive}
      />
    </View>
  </View>
);
