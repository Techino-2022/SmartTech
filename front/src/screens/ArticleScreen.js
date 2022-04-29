import React, {useCallback, useContext} from 'react';
import {Platform, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {FontAwesome5, MaterialIcons, FontAwesome} from '@expo/vector-icons';

import {Block, Button, Image, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

import ThemeContext from '../config/context';

const isAndroid = Platform.OS === 'android';

const ArticleScreen = ({route}) => {
  const {user} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, sizes, gradients} = useTheme();

  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

  const data = route.params;
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;
  const date = new Date(data.published_at);

  return (
    <Block safe marginTop={sizes.md}>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          <Image
            background
            resizeMode="cover"
            height={250}
            padding={sizes.sm}
            paddingBottom={sizes.l}
            source={{uri: data.images[0].image}}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p white marginLeft={sizes.s}>
                Back
              </Text>
            </Button>
          </Image>

          {/* profile: stats */}
          <Block
            flex={0}
            radius={sizes.sm}
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            marginTop={-sizes.l}
            marginBottom={15}
            marginHorizontal="8%"
            color={colors.item}>
            <Block paddingHorizontal={sizes.sm} paddingVertical={10}>
              <Text
                h5
                semibold
                marginBottom={sizes.s}
                align="center"
                marginTop={sizes.sm}
                size={18}
                color={colors.primary}>
                {data.title}
              </Text>
            </Block>
            <Block align="center" justify="center">
              <Image
                source={require('../assets/images/divider1x.png')}
                tintColor={colors.primary}
                align="center"
                width={250}
                resizeMode="contain"
              />
            </Block>

            <Block
              row
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
              <Block align="center">
                <FontAwesome5
                  name="user-alt"
                  size={16}
                  color={colors.primary}
                />
                <Text color={colors.subTitle}>{data.author.username}</Text>
              </Block>
              <Block align="center">
                <MaterialIcons
                  name="date-range"
                  size={20}
                  color={colors.primary}
                />
                <Text color={colors.subTitle} size={13}>
                  {date.toDateString()}
                </Text>
              </Block>
              <Block align="center">
                <FontAwesome name="star" size={18} color={colors.primary} />
                <Text color={colors.subTitle}>{data.rating}</Text>
              </Block>
            </Block>
          </Block>

          {/* profile: about me */}
          <Block paddingHorizontal={sizes.sm}>
            {data.descriptions.map((item) => (
              <Block key={item.id}>
                <Text
                  p
                  lineHeight={26}
                  color={colors.subTitle}
                  size={16}
                  paddingVertical={10}>
                  {item.context}
                </Text>
                <Image
                  source={require('../assets/images/divider2x.png')}
                  tintColor={colors.primary}
                  width="100%"
                  resizeMode="contain"
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ArticleScreen;
