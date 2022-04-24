import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme} from '../hooks';
import {IArticle} from '../constants/types';

import colors from '../config/colors';

const Article = ({
  data,
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

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Block
        card
        padding={sizes.sm}
        marginTop={sizes.sm}
        color={colors.lightgrey}>
        <Image
          height={170}
          resizeMode="cover"
          source={{uri: data.images[0].image}}
        />
        {/* article category */}
        {data?.title && (
          <Text
            h5
            bold
            size={13}
            marginTop={sizes.s}
            transform="uppercase"
            marginLeft={sizes.xs}
            gradient={gradients.warning}>
            {data?.title}
          </Text>
        )}

        {/* article description */}
        {data.temp_context && (
          <Text
            p
            marginTop={sizes.s}
            marginLeft={sizes.xs}
            marginBottom={sizes.sm}
            color={colors.lightwhite}>
            {data.temp_context}
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

        <Block row align="center">
          <Image
            source={icons.location}
            marginRight={sizes.s}
            color={colors.gold}
          />
          <Text p size={12} semibold color={colors.darkwhite}>
            {data.category[0].name}
          </Text>
          <Text p bold marginHorizontal={sizes.s} color={colors.darkwhite}>
            •
          </Text>
          <Image
            source={icons.star}
            marginRight={sizes.s}
            color={colors.gold}
          />
          <Text p size={12} semibold color={colors.darkwhite}>
            {data.category[1].name}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default Article;
