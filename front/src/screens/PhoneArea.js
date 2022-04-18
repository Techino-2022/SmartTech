import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useData, useTheme, useTranslation} from '../hooks';
import useApi from '../hooks/useApi';
import {Block, Button, Image, Input, Product, Text} from '../components';
import getPhones from '../api/phone';
import {getPhonesByModel} from '../store/phones';
import {loadPhones} from '../store/phones';

import colors from '../config/colors';
import ActivityIndicator from '../components/ActivityIndicator';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState([]);
  const {assets, gradients, sizes} = useTheme();
  const dispatch = useDispatch();
  const {list, loading, lastfetch} = useSelector(
    (state) => state.entities.phones,
  );

  const handleProducts = useCallback(
    (tab) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  useEffect(() => {
    dispatch(loadPhones());
  }, [dispatch]);

  return (
    <Block>
      {/* search input */}
      <Block color={colors.darkgrey} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} color={colors.gold} />
      </Block>

      {/* toggle products list */}
      <Block
        row
        flex={0}
        align="center"
        justify="flex-end"
        color={colors.darkgrey}
        paddingBottom={sizes.sm}>
        <Button onPress={() => handleProducts(0)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 0 ? 'black' : 'grey']}>
              <Image source={assets.extras} color={colors.gold} radius={0} />
            </Block>
            <Text color={colors.darkwhite}>Most Viewed</Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button onPress={() => handleProducts(1)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 1 ? 'black' : 'grey']}>
              <Image
                radius={0}
                color={colors.gold}
                source={assets.documentation}
              />
            </Block>
            <Text color={colors.darkwhite} marginRight={20}>
              Filter
            </Text>
          </Block>
        </Button>
      </Block>
      {loading && <ActivityIndicator visible={true} />}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {list &&
            list.map((product) => (
              <Product
                type="vertical"
                data={product}
                key={`card-${product?.id}`}
              />
            ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
