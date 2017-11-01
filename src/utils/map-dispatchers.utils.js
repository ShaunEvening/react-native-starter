import { bindActionCreators } from 'redux';

export const mapDispatchers = dispatchers =>
  (dispatch: Function): { [string]: Function } => ({
    ...bindActionCreators(dispatchers, dispatch),
    dispatch,
  });
