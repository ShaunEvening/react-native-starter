import { exampleReducer, INITIAL_EXAMPLE_STATE } from './example.reducer';
import * as exampleActions from './example.actions';

describe('exampleReducer:', () => {
  it('INITIAL STATE: It should have an Initial State:', () => {
    const state = exampleReducer();
    expect(state).toEqual(INITIAL_EXAMPLE_STATE);
  });

  describe('ACTIONS:', () => {
    it('SET "isButtonActive": it should set isButtonActive to given value', () => {
      const state = exampleReducer(INITIAL_EXAMPLE_STATE, exampleActions.setIsButtonActive(true));
      expect(state.isButtonActive).toEqual(true);
    });

    it('SET "counter": it should set counter to given value', () => {
      const state = exampleReducer(INITIAL_EXAMPLE_STATE, exampleActions.setCounter(10));
      expect(state.counter).toEqual(10);
    });
  });
});
