import { combineReducers } from 'redux';

import { exampleReducer } from 'scenes/example';

export const rootReducer = combineReducers({
  example: exampleReducer,
});
