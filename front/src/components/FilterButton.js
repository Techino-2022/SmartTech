import {StyleSheet, View} from 'react-native';
import {Block, Button, Image, Text} from '.';
import ThemeContext from '../config/context';
import React, {useContext} from 'react';
import {useTheme} from '../hooks';

export default function FilterButton({title, onPress, choice, selected}) {
  const {assets, gradients, sizes} = useTheme();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;

  return (
    <Button onPress={() => onPress(choice)}>
      <Block row align="center">
        <Block
          flex={0}
          radius={6}
          align="center"
          justify="center"
          marginRight={sizes.s}
          width={sizes.socialIconSize}
          height={sizes.socialIconSize}
          gradient={
            selected === choice
              ? gradients[gradient.gr1]
              : gradients[gradient.gr2]
          }>
          <Text
            color={selected === choice ? colors.background : colors.text}
            bold>
            {title}
          </Text>
        </Block>
      </Block>
    </Button>
  );
}

const styles = StyleSheet.create({});
