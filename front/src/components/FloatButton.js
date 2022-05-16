import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import Block from './Block';

function FloatButton({
  text,
  onPress,
  gradient,
  name,
  color,
  marginRight,
  size = 22,
  borderRadius = 50,
  textColor = 'black',
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{marginRight: marginRight}}>
      <Block
        row
        radius={borderRadius}
        gradient={gradient}
        height={50}
        padding={15}
        justify="center"
        align="center">
        <FontAwesome name={name} color={color} size={size} />
        {text && (
          <Text style={{color: textColor, marginLeft: 10, fontSize: 17}}>
            {text}
          </Text>
        )}
      </Block>
    </TouchableOpacity>
  );
}

export default FloatButton;
