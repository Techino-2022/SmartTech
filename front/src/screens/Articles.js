import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {useData, useTheme} from '../hooks';
import {Block, Button, Article, Text} from '../components';
import {loadPosts} from '../store/posts';
import {categories} from '../constants/categories';
import ActivityIndicator from '../components/ActivityIndicator';
import ThemeContext from '../config/context';

const Articles = () => {
  const data = useData();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const [articles, setArticles] = useState([]);
  const {gradients, sizes} = useTheme();
  const [posts, setPosts] = useState([]);
  const {list, loading} = useSelector((state) => state.entities.posts);
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;

  // update articles on category change

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  useEffect(() => {
    setPosts(list);
    setSelected(categories[0]);
  }, [list]);

  const filterByCategory = (category) => {
    setSelected(category);
    if (category.name === 'All') return setPosts(list);
    const newData = [];
    list.map((x) => {
      x.category.map((c) => {
        if (c.name === category.name) {
          newData.push(x);
        }
      });
    });
    setPosts(newData);
  };

  return (
    <Block>
      {/* categories list */}
      <Block
        color={colors.background}
        row
        flex={0}
        paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
          {categories?.map((category) => {
            const isSelected = category.name === selected?.name;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.name}}`}
                onPress={() => filterByCategory(category)}
                gradient={
                  gradients?.[isSelected ? gradient.gr1 : gradient.gr2]
                }>
                <Text
                  p
                  bold={isSelected}
                  color={
                    !isSelected && context.theme.name === 'light'
                      ? 'black'
                      : 'white'
                  }
                  transform="capitalize"
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>
      {loading && <ActivityIndicator visible={true} />}
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <Article data={item} />}
        refreshing={loading}
        onRefresh={() => dispatch(loadPosts())}
      />
    </Block>
  );
};

export default Articles;
