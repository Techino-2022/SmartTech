import React from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme, useTranslation} from '../hooks';

import colors from '../config/colors';

const Product = ({image, title, type, linkLabel, data}) => {
  const {t} = useTranslation();
  const {assets, sizes} = useTheme();

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      color={colors.lightgrey}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      style={{borderWidth: 1, borderColor: colors.gold}}>
      <Image
        resizeMode="contain"
        source={{uri: data.image_url[0].image}}
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
        <Text p marginBottom={sizes.s} color={colors.gold}>
          {data.brand[0].name} {data.name}
        </Text>
        
          <Block row>

          <Text
              p
              color={colors.darkwhite}
              semibold
              size={10}
              marginRight={sizes.s}>
              CPU:
            </Text>

            <Text
              p
              color={colors.darkwhite}
              semibold
              size={10}
              marginRight={20}>
              {data.platform[0].cpu_chipset}
            </Text>

          </Block>

          <Block row>

            <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={sizes.s}>
                Display:
              </Text>

              <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={20}>
                {data.body.display}
              </Text>

            </Block>

            <Block row>

            <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={sizes.s}>
                Internal:
              </Text>

              <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={20}>
                {data.ram}GB RAM + {data.storage[0].size}GB Storage
              </Text>

            </Block>

            <Block row>

            <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={sizes.s}>
                Battery:
              </Text>

              <Text
                p
                color={colors.darkwhite}
                semibold
                size={10}
                marginRight={20}>
                {data.battery[0].capacity}mAh  Litium-{data.battery[0].type_select}
                
              </Text>

            </Block>
            
        <TouchableOpacity>
          <Block row flex={0} align="center" marginTop={5}>
            <Text
              p
              color={colors.darkwhite}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              More Details
            </Text>
            <Image source={assets.arrow} color={colors.darkwhite} />
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Product;
