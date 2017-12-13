import { EXAMPLE_ACTIONS } from './example.constants';

export const INITIAL_EXAMPLE_STATE = {
  isButtonActive: false,
  counter: 0,
};

export const exampleReducer = (state = INITIAL_EXAMPLE_STATE, action = {}) => {
  switch (action.type) {
    case EXAMPLE_ACTIONS.SET_IS_BUTTON_ACTIVE: {
      return {
        ...state,
        isButtonActive: action.payload,
      };
    }
    case EXAMPLE_ACTIONS.SET_COUNTER: {
      return {
        ...state,
        counter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
