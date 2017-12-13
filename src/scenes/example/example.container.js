import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { mapDispatchers } from 'utils';

import { ExampleComponent } from './example.component';
import { exampleConnector } from './example.selectors';
import { setIsButtonActive, setCounter } from './example.actions';

const dispatchers = mapDispatchers({
  setIsButtonActive,
  setCounter,
});

export const ExampleContainer = compose(
  connect(exampleConnector, dispatchers),
  withHandlers({
    handleIsButtonActive: props => () => props.setIsButtonActive(!props.isButtonActive),
    handleCounterIncrement: props => () => props.setCounter(props.counter + 1),
    handleCounterDecrement: props => () => props.setCounter(props.counter - 1),
  }),
)(ExampleComponent);
