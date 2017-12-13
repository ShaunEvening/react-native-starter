import { palette } from 'styles';
import { ExampleContainer } from './example.container';

export const ExampleScene = {
  screen: 'view.example-view',
  title: 'Example scene',
  component: ExampleContainer,
  navigatorStyle: {
    navBarHidden: true,
    navigationBarColor: palette.primary_accent,
    statusBarColor: palette.primary,
    statusBarTextColorScheme: 'light',
  },
};
