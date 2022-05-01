import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import Block from './Block';

function FloatButton({onPress, gradient, name, color, marginRight}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{marginRight: marginRight}}>
      <Block
        radius={50}
        gradient={gradient}
        height={50}
        weight={45}
        padding={15}
        justify="center"
        align="center">
        <FontAwesome name={name} color={color} size={22} />
      </Block>
    </TouchableOpacity>
  );
}

export default FloatButton;
