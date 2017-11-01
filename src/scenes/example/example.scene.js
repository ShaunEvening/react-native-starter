import { palette } from 'styles';
import { ExampleContainer } from './example.container';

export const ExampleScene = {
  screen: 'view.example-view',
  title: 'Example scene',
  component: ExampleContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: palette.white,
    statusBarTextColorScheme: 'dark',
  },
};
