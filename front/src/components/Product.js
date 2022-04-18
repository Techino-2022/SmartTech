import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme, useTranslation} from '../hooks';

import ThemeContext from '../config/context';

const Product = ({image, title, type, linkLabel, data}) => {
  const {t} = useTranslation();
  const {assets, sizes} = useTheme();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      color={colors.item}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      style={
        context.theme.name === 'dark' && {
          borderWidth: 1,
          borderColor: colors.text,
        }
      }>
      <Image
        resizeMode="cover"
        source={{uri: 'https://picsum.photos/600'}}
        style={{
          height: isHorizontal ? 114 : 110,
          width: !isHorizontal ? '100%' : sizes.width / 2.435,
        }}
      />
      <Block
        paddingTop={sizes.s}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>
        <Text p marginBottom={sizes.s} color={colors.link}>
          {data.name}
        </Text>

        <Block row>
          <Text
            p
            color={colors.subTitle}
            semibold
            size={10}
            marginRight={sizes.s}>
            CPU:
          </Text>

          <Text p color={colors.subTitle} semibold size={10} marginRight={20}>
            {/* {data.platform[0].cpu_chipset} */}
            qqqqqq
          </Text>
        </Block>

        <Block row>
          <Text
            p
            color={colors.subTitle}
            semibold
            size={10}
            marginRight={sizes.s}>
            Display:
          </Text>

          <Text p color={colors.subTitle} semibold size={10} marginRight={20}>
            {/* {data.body.display} */}
            wwwwww
          </Text>
        </Block>

        <Block row>
          <Text
            p
            color={colors.subTitle}
            semibold
            size={10}
            marginRight={sizes.s}>
            Internal:
          </Text>

          <Text p color={colors.subTitle} semibold size={10} marginRight={20}>
            {/* {data.ram}GB RAM + {data.storage[0].size}GB Storage */}
            Hello
          </Text>
        </Block>

        <Block row>
          <Text
            p
            color={colors.subTitle}
            semibold
            size={10}
            marginRight={sizes.s}>
            Battery:
          </Text>

          <Text p color={colors.subTitle} semibold size={10} marginRight={20}>
            {/* {data.battery[0].capacity}mAh Litium-{data.battery[0].type_select} */}
            None
          </Text>
        </Block>

        <TouchableOpacity>
          <Block row flex={0} align="center" marginTop={5}>
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              More Details
            </Text>
            <Image source={assets.arrow} color={colors.link} />
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Product;
