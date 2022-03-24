import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme} from '../hooks';
import {IArticle} from '../constants/types';

import colors from '../config/colors'

const Article = ({
  title,
  description,
  image,
  category,
  rating,
  location,
  user,
  onPress,
}) => {
  const {gradients, icons, sizes} = useTheme();

  // render card for Newest & Fashion
  if (category?.id !== 1) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Block card padding={sizes.sm} marginTop={sizes.sm} color={colors.lightgrey}>
          <Image height={170} resizeMode="cover" source={{uri: image}} />
          {/* article category */}
          {category?.name && (
            <Text
              h5
              bold
              size={13}
              marginTop={sizes.s}
              transform="uppercase"
              marginLeft={sizes.xs}
              gradient={gradients.warning}>
              {category?.name}
            </Text>
          )}

          {/* article description */}
          {description && (
            <Text
              p
              marginTop={sizes.s}
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}
              color={colors.lightwhite}
              >
              {description}
            </Text>
          )}

          {/* user details */}
          {user?.name && (
            <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{uri: user?.avatar}}
                style={{backgroundColor: colors.darkwhite}}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text p semibold color={colors.darkwhite}>
                  {user?.name}
                </Text>
                <Text p gray></Text>
              </Block>
            </Block>
          )}

          {/* location & rating */}
          {(Boolean(location) || Boolean(rating)) && (
            <Block row align="center">
              <Image source={icons.location} marginRight={sizes.s} color={colors.gold} />
              <Text p size={12} semibold color={colors.darkwhite}>
                {location?.city}, {location?.country}
              </Text>
              <Text p bold marginHorizontal={sizes.s} color={colors.darkwhite}>
                •
              </Text>
              <Image source={icons.star} marginRight={sizes.s} color={colors.gold} />
              <Text p size={12} semibold color={colors.darkwhite}>
                {rating}/5
              </Text>
            </Block>
          )}
        </Block>
      </TouchableWithoutFeedback>
    );
  }

  // render card for Popular
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Block card white padding={0} marginTop={sizes.sm}>
        <Image
          background
          resizeMode="cover"
          radius={sizes.cardRadius}
          source={{uri: image}}>
          <Block color={colors.overlay} padding={sizes.padding}>
            <Text h4 white marginBottom={sizes.sm}>
              {title}
            </Text>
            <Text p white>
              {description}
            </Text>
            {/* user details */}
            <Block row marginTop={sizes.xxl}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{uri: user?.avatar}}
                style={{backgroundColor: colors.white}}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text p white semibold>
                  {user?.name}
                </Text>
                <Text p white>
                  {user?.department}
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default Article;