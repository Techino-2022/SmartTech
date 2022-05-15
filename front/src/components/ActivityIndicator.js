import React, {useContext} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import ThemeContext from '../config/context';

function ActivityIndicator({visible = false}) {
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  if (!visible) return null;
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require('../assets/animation/loading.json')}
      style={{zIndex: 999, backgroundColor: colors.background, opacity: 0.8}}
    />
  );
}

export default ActivityIndicator;
