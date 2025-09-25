import { useWindowDimensions } from 'react-native';

export default function useResponsiveDimensions() {
  const { width, height } = useWindowDimensions();
  const wp = (percent) => (width * percent) / 100;
  const hp = (percent) => (height * percent) / 100;
  return { width, height, wp, hp };
}
