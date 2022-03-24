import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Button, Image} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

import colors from '../config/colors'

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.gold,
          borderWidth: isDrawerOpen ? 3 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (props) => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {isDark, handleIsDark} = useData();
  const [active, setActive] = useState('PhoneArea');
  const {assets, gradients, sizes} = useTheme();
  const labelColor = colors.gold;

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );


  // screen list for Drawer menu
  const screens = [
    {name: 'Phone Area', to: 'PhoneArea', icon: assets.home},
    {name: 'Phone', to: 'Phone', icon: assets.components},
    {name: t('screens.articles'), to: 'Articles', icon: assets.document},
    {name: t('screens.profile'), to: 'Profile', icon: assets.profile},
    {name: t('screens.register'), to: 'Register', icon: assets.register},
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: sizes.padding}}>
      <Block paddingHorizontal={sizes.padding}>
        <Block flex={0} row align="center" marginBottom={sizes.l}>
          <Image source = {require('../images/SmartTechLogo.png')}
            radius={0}
            width={33}
            height={33}
            color={colors.gold}
            marginRight={sizes.sm}
          />
          <Block>
            <Text size={12} semibold color={colors.gold}>
            Smart Tech
            </Text>
            <Text size={12} semibold color={colors.darkwhite}>
            Best Review of Technoly
            </Text>
          </Block>
        </Block>

        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}>
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                gradient={gradients[isActive ? 'white' : 'secondary']}>
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={screen.icon}
                  color={colors[isActive ? 'black' : 'black']}
                />
              </Block>
              <Text p semibold={isActive} color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          marginRight={sizes.md}
          marginVertical={sizes.sm}
          gradient={gradients.menu}
        />

      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const {gradients} = useTheme();

  return (
    <Block gradient={gradients.black}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '60%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}>
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
