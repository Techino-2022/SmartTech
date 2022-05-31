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
import FilterButton from '../components/FilterButton';
import {RefreshControl} from 'react-native';

const Home = ({navigation}) => {
  const {t} = useTranslation();
  const [tab, setTab] = useState('vertical');
  const [selected, setSelected] = useState('all');
  const {following, trending} = useData();
  const [phones, setPhones] = useState([]);
  const {assets, gradients, sizes} = useTheme();
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;
  const {list, loading, lastfetch} = useSelector(
    (state) => state.entities.phones,
  );

  const handleProducts = (num) => {
    num === 0 ? setTab('vertical') : setTab('horizontal');
  };

  useEffect(() => {
    dispatch(loadPhones());
  }, [dispatch]);

  useEffect(() => {
    setPhones(list);
  }, [list]);

  const handleSearch = (name) => {
    if (name) {
      const filtered = list.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase()),
      );
      setPhones(filtered);
    } else {
      setPhones(list);
    }
  };

  const handleModel = (model) => {
    setSelected(model);
    if (model === 'all') {
      return setPhones(list);
    }
    const data = list.filter((d) => d.model === model);
    setPhones(data);
  };

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input
          search
          placeholder={t('common.search')}
          color={colors.text}
          onChangeText={handleSearch}
        />
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
              gradient={
                tab === 'vertical'
                  ? gradients[gradient.gr1]
                  : gradients[gradient.gr2]
              }>
              <Text
                color={tab === 'vertical' ? colors.background : colors.text}
                bold>
                V
              </Text>
            </Block>
          </Block>
        </Button>
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
              gradient={
                tab !== 'vertical'
                  ? gradients[gradient.gr1]
                  : gradients[gradient.gr2]
              }>
              <Text
                color={tab !== 'vertical' ? colors.background : colors.text}
                bold>
                H
              </Text>
            </Block>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <FilterButton
          title="All"
          choice="all"
          onPress={handleModel}
          selected={selected}
          isSeleted
        />

        <FilterButton
          title="A"
          choice="A"
          onPress={handleModel}
          selected={selected}
        />

        <FilterButton
          title="B"
          choice="B"
          onPress={handleModel}
          selected={selected}
        />

        <FilterButton
          title="C"
          choice="C"
          onPress={handleModel}
          selected={selected}
        />

        <FilterButton
          title="D"
          choice="D"
          onPress={handleModel}
          selected={selected}
        />
      </Block>
      {loading && <ActivityIndicator visible={true} />}
      <Block
        scroll
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => dispatch(loadPhones())}
          />
        }
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {!loading &&
            phones.map((product) => (
              <Product
                type={tab}
                data={product}
                key={`card-${product?.id}`}
                navigation={navigation}
              />
            ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
