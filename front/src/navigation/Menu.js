import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Animated, StyleSheet} from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Button, Image, Switch} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

import color from '../config/colors';
import ThemeContext from '../config/context';
import {light, dark} from '../config/colors';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;
  const context = useContext(ThemeContext);
  const {colors} = context.theme;

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
          // using gold color for dark mode
          // and black color for brightness mode
          borderColor: colors.text,
          borderWidth: isDrawerOpen ? 2 : 0,
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
  const context = useContext(ThemeContext);
  const {colors} = context.theme;
  const {gradient} = context.theme;
  const labelColor = colors.text;

  const handleChangeTheme = () => {
    context.theme.name === 'light'
      ? context.setTheme(dark)
      : context.setTheme(light);
  };

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
    {name: 'Articles', to: 'ArticleNavigator', icon: assets.document},
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
          <Image
            source={require('../images/SmartTechLogo.png')}
            radius={0}
            width={33}
            height={33}
            color={colors.text}
            marginRight={sizes.sm}
          />
          <Block>
            <Text size={14} semibold color={colors.text}>
              Smart Tech
            </Text>
            <Text size={12} semibold color={colors.subTitle}>
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
                gradient={
                  isActive ? gradients[gradient.gr1] : gradients[gradient.gr2]
                }
                // color={isActive ? gradients[gradient.gr2] : colors.background}>
              >
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={screen.icon}
                  color={isActive ? colors.background : colors.text}
                />
              </Block>
              <Text p semibold={isActive} color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={labelColor}>{t('darkMode')}</Text>
          <Switch
            checked={context.theme.name === 'light' ? false : true}
            onPress={handleChangeTheme}
          />
        </Block>

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
  const context = useContext(ThemeContext);
  const {colors} = context.theme;

  return (
    <Block gradient={colors.gradient}>
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
