import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

function ActivityIndicator({visible = false}) {
  if (!visible) return null;
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require('../assets/animation/loading.json')}
      style={{zIndex: 999}}
    />
  );
}

export default ActivityIndicator;
