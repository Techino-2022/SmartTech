import React, {useContext} from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme} from '../hooks';

import ThemeContext from '../config/context';

const Article = ({data, user, onPress}) => {
  const {gradients, icons, sizes} = useTheme();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;
  const date = new Date(data.published_at);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Block card padding={sizes.sm} marginTop={sizes.sm} color={colors.item}>
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
            gradient={gradients[gradient.gr1]}>
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
            color={colors.title}>
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
              style={{backgroundColor: colors.subTitle}}
            />
            <Block justify="center" marginLeft={sizes.s}>
              <Text p semibold color={colors.subTitle}>
                {user?.name}
              </Text>
              <Text p gray></Text>
            </Block>
          </Block>
        )}

        {/* user and  */}

        <Block row align="center">
          <Image
            source={icons.location}
            marginRight={sizes.s}
            color={colors.primary}
          />
          <Text p size={12} semibold color={colors.subTitle}>
            {data.author.username}
          </Text>
          <Text p bold marginHorizontal={sizes.s} color={colors.subTitle}>
            •
          </Text>
          <Image
            source={icons.star}
            marginRight={sizes.s}
            color={colors.primary}
          />
          <Text p size={12} semibold color={colors.subTitle}>
            {date.toDateString()}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default Article;
