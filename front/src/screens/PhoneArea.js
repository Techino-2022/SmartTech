import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useData, useTheme, useTranslation} from '../hooks';
import useApi from '../hooks/useApi';
import {Block, Button, Image, Input, Product, Text} from '../components';
import getPhones from '../api/phone';
import {getPhonesByModel} from '../store/phones';
import {loadPhones} from '../store/phones';

import ActivityIndicator from '../components/ActivityIndicator';
import ThemeContext from '../config/context';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState('vertical');
  const {following, trending} = useData();
  const [products, setProducts] = useState([]);
  const {assets, gradients, sizes} = useTheme();
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {list, loading, lastfetch} = useSelector(
    (state) => state.entities.phones,
  );

  const handleProducts = (num) => {
    num === 0 ? setTab('vertical') : setTab('horizontal');
  };

  useEffect(() => {
    dispatch(loadPhones());
  }, [dispatch]);

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} color={colors.text} />
      </Block>

      {/* toggle products list */}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
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
              color={colors.background}>
              <Image source={assets.extras} color={colors.text} radius={0} />
            </Block>
            <Text color={colors.subTitle}>Vertical</Text>
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
            <Text color={colors.subTitle} marginRight={sizes.s}>
              Horizontal
            </Text>
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              color={colors.background}>
              <Image
                radius={0}
                color={colors.text}
                source={assets.documentation}
              />
            </Block>
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
          {!loading &&
            list.map((product) => (
              <Product type={tab} data={product} key={`card-${product?.id}`} />
            ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
