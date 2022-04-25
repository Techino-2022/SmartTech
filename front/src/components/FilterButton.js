import {StyleSheet, View} from 'react-native';
import {Block, Button, Image, Text} from '.';
import ThemeContext from '../config/context';
import React, {useContext} from 'react';
import {useTheme} from '../hooks';

export default function FilterButton({title, onPress, choice}) {
  const {assets, gradients, sizes} = useTheme();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;

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
          color={colors.background}>
          <Text color={colors.text} bold>
            {title}
          </Text>
        </Block>
      </Block>
    </Button>
  );
}

const styles = StyleSheet.create({});
