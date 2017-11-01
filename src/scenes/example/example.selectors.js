import R from 'ramda';
import { createStructuredSelector } from 'reselect';

export const exampleConnector = createStructuredSelector({
  isButtonActive: R.path(['example', 'isButtonActive']),
  counter: R.path(['example', 'counter']),
});
