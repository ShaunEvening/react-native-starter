import LinearGradient from 'react-native-linear-gradient';
import { withProps } from 'utils';
import { GRADIENTS } from 'styles';

const startAndEnd = {
  start: { x: 0.3, y: 0 },
  end: { x: 0.8, y: 1 },
};

export const RedGradient = withProps({
  colors: GRADIENTS.red,
  start: { x: 0.2, y: 0.3 },
  end: { x: 0.8, y: 1 },
})(LinearGradient);

export const OrangeGradient = withProps({
  colors: GRADIENTS.orange,
  start: { x: 0.3, y: 0 },
  end: { x: 0.8, y: 1 },
})(LinearGradient);

export const GreenGradient = withProps({
  colors: GRADIENTS.green,
  start: { x: 0.3, y: 0.3 },
  end: { x: 0.8, y: 1 },
})(LinearGradient);

export const BlueGradient = withProps({
  colors: GRADIENTS.blue,
  ...startAndEnd,
})(LinearGradient);

export const PurpleGradient = withProps({
  colors: GRADIENTS.purple,
  start: { x: 0.3, y: 0.3 },
  end: { x: 0.8, y: 1 },
})(LinearGradient);
