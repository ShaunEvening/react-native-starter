import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

import { rootReducer } from './reducer';

export const configureStore = () => {
  const store = compose(
    ...getEnhancers(),
    getMiddleware(),
  )(createStore)(rootReducer);

  persistStore(
    store,
    {
      storage: AsyncStorage,
      whitelist: [],
    },
  );

  return store;
};

const getMiddleware = () => {
  const logger = createLogger({ collapsed: true });
  const middleware = [
    logger,
    thunk,
  ];

  return applyMiddleware(...middleware);
};

const getEnhancers = () => ([
  autoRehydrate(),
  devToolsEnhancer(),
]);
