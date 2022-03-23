import React from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {IProduct} from '../constants/types';
import {useTheme, useTranslation} from '../hooks/';

const Product = ({image, title, type, linkLabel}: IProduct) => {
  const {t} = useTranslation();
  const {assets, colors, sizes} = useTheme();

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      color={'#737373'}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      style={{borderWidth:2,borderColor:'gold'}}>
      <Image
        resizeMode="cover"
        source={{uri: image}}
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
        <Text p marginBottom={sizes.s} color={'white'}>
          {title}
        </Text>
        <TouchableOpacity>
          <Block row flex={0} align="center">
            <Text
              p
              color={'gold'}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              {linkLabel || t('common.readArticle')}
            </Text>
            <Image source={assets.arrow} color={'gold'} />
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Product;
