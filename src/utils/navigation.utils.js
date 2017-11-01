import R from 'ramda';
import { Navigation } from 'react-native-navigation';
import { compose, hoistStatics, setStatic, withContext } from 'recompose';

import i18next from 'i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';
import { locales } from 'locale';

import type { Provider } from 'react-redux';
import type { Store } from 'redux';
import type { Scene } from 'common';

export const registerSceneHelper = (
  store: Store<*, *>,
  provider: Provider<*, *>,
  scene: Scene,
) => {
  const component = hoistStatics(
    compose(
      setStatic('navigatorStyle', { ...scene.navigatorStyle }),
      bindNavigationToContext,
    ),
  )(scene.component);
  Navigation.registerComponent(scene.screen, () => component, store, provider);
};

export const bindNavigationToContext = withContext(
  { navigator: () => R.isObject },
  (props: any) => ({
    navigator: props.navigator,
  }),
);

export const initializeNavigation = (
  scenes: Scene[],
  store: Store<*, *>,
  provider: Provider<*, *>,
  options: {},
) => {
  const registerScene = R.partial(registerSceneHelper, [store, provider]);

  initializeLocalization(() => {
    scenes.forEach((scene: Scene): void => registerScene(scene));
  });

  Navigation.startSingleScreenApp(options);
};

const initializeLocalization = (registerScenes) => {
  const i18nextOptions = {
    fallbackLng: 'en',
    ns: 'translation',
    debug: false,
    preload: true,
    resources: locales,
    initImmediate: false,
  };

  i18next
    .use(i18nextReactNative)
    .init(i18nextOptions, registerScenes);
};
