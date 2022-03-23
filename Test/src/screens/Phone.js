import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks';
import {Block, Button, Input, Switch, Modal, Text} from '../components';

import colors from '../config/colors'

// buttons example
const Phone = () => {
  const [showModal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('01');
  const {assets, gradients, sizes} = useTheme();

  return (
    <Block paddingHorizontal={sizes.padding} style={{flexDirection:'column'}}>
      <Text h4 bold marginBottom={sizes.s} color={colors.darkwhite} style={{alignSelf:'center', marginRight:20}}>
        Samsung Galaxy Note 20
      </Text>

      <Image source={require('../images/Samsung_Note20_1.jpg')}
      style={{resizeMode:'contain',
      width:250,
      height:250,
      alignSelf:'center',
      borderRadius:20,
      marginBottom:30
      }}
      >
      </Image>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Pros
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          good quality of speakers, fast memory, good screen, dust/water resistant, Samsung Wireless DeX, ANT+, Bixby natural language commands and dictation, Samsung Pay
        </Text>
      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Cons
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          price, no 3.5mm jack
        </Text>
      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Launch
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          5 August 2020
        </Text>
      </Block>

      <Block style={{flexDirection:'column'}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Body
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Weight
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            192 grams
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Build
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
            Glass front (Gorilla Glass 5), plastic back
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            SIM
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
          (1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Protection
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
            IP68 dust/water resistant
          </Text>
        </Block>

      </Block>

    </Block>
    
  );
};


const Components = () => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
    });
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Phone />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
