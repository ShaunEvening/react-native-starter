import { partializeComponent } from 'utils';
import { s } from 'styles';
import { PillButton } from './pill-button.component';

export const WhitePillButton = partializeComponent({
  activeStyles: [s.bg_white],
  disabledStyles: [s.bg_white_50],
})(PillButton);

export const WhiteKnockoutPillButton = partializeComponent({
  activeStyles: [s.b_white, s.b2],
  disabledStyles: [s.b_white_50, s.b2],
})(PillButton);

export const PrimaryPillButton = partializeComponent({
  activeStyles: [s.bg_primary],
  disabledStyles: [s.bg_primary_50],
})(PillButton);

export const PrimaryKnockoutPillButton = partializeComponent({
  activeStyles: [s.b_primary, s.b2],
  disabledStyles: [s.b_primary_50, s.b2],
})(PillButton);

export const SecondaryPillButton = partializeComponent({
  activeStyles: [s.bg_secondary],
  disabledStyles: [s.bg_secondary_50],
})(PillButton);

export const SecondaryKnockoutPillButton = partializeComponent({
  activeStyles: [s.b_secondary, s.b2],
  disabledStyles: [s.b_secondary_50, s.b2],
})(PillButton);
