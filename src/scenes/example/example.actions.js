import type { ReduxAction } from 'common';
import { EXAMPLE_ACTIONS } from './example.constants';

export const setIsButtonActive = (bool: boolean): ReduxAction => ({
  type: EXAMPLE_ACTIONS.SET_IS_BUTTON_ACTIVE,
  payload: bool,
});

export const setCounter = (num: number): ReduxAction => ({
  type: EXAMPLE_ACTIONS.SET_COUNTER,
  payload: num,
});
