import React from 'react';
import { View, Switch } from 'react-native';
import {
  CircleView,
  OrangeGradient,
  LocalizedText,
  WhiteKnockoutPillButton,
} from 'components';
import { s } from 'styles';

type Props = {
  isButtonActive: boolean,
  counter: number,
  handleIsButtonActive: () => void,
  handleCounterIncrement: () => void,
  handleCounterDecrement: () => void,
};

export const ExampleComponent = ({
  isButtonActive,
  counter,
  handleIsButtonActive,
  handleCounterIncrement,
  handleCounterDecrement,
}: Props) => ( // eslint-disable-line
  <OrangeGradient
    style={[s.flx_i, s.aic, s.ph4, s.pv3]}
  >
    <View
      style={[s.flx_i, s.jcc, s.aic]}
    >
      <CircleView
        style={[s.bw5, s.b__white, s.w_90, s.jcc, s.aic]}
      >
        <LocalizedText
          style={[s.white, s.f_headline, s.b]}
          textKey="example:counter"
          values={{ counter }}
        />
      </CircleView>
    </View>
    <View
      style={[s.w_100, s.pv4, s.jcc, s.aic]}
    >
      <View style={[s.flx_row]}>
        <View style={[s.w_50, s.ph1]}>
          <WhiteKnockoutPillButton
            disabled={!isButtonActive}
            onPress={handleCounterDecrement}
          >
            <LocalizedText
              style={[
                isButtonActive ? s.white : s.white_50,
                s.f4,
                s.b,
              ]}
              textKey="example:buttonDecrement"
            />
          </WhiteKnockoutPillButton>
        </View>
        <View style={[s.w_50, s.ph1]}>
          <WhiteKnockoutPillButton
            disabled={!isButtonActive}
            onPress={handleCounterIncrement}
          >
            <LocalizedText
              style={[
                isButtonActive ? s.white : s.white_50,
                s.f4,
                s.b,
              ]}
              textKey="example:buttonIncrement"
            />
          </WhiteKnockoutPillButton>
        </View>
      </View>
      <View style={[s.mt4, s.flx_row, s.jcsb, s.aic, s.w_100]}>
        <LocalizedText
          style={[s.white, s.f4]}
          textKey="example:toggleText"
        />
        <Switch
          value={isButtonActive}
          onValueChange={handleIsButtonActive}
        />
      </View>
    </View>
  </OrangeGradient>
);
