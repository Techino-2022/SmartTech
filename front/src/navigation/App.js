import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Menu from './Menu';
import {useData, ThemeProvider, TranslationProvider} from '../hooks';

import colors from '../config/colors'

export default () => {
  const {theme, setTheme} = useData();

  /* set the status bar light for dark theme */
  StatusBar.setBackgroundColor('#000000')
  StatusBar.setBarStyle('light-content');

  // load custom fonts
  const [fontsLoaded] = useFonts({
    'OpenSans-Light': theme.assets.OpenSansLight,
    'OpenSans-Regular': theme.assets.OpenSansRegular,
    'OpenSans-SemiBold': theme.assets.OpenSansSemiBold,
    'OpenSans-ExtraBold': theme.assets.OpenSansExtraBold,
    'OpenSans-Bold': theme.assets.OpenSansBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigationTheme = {
    colors: {
      border: colors.gold,
      text: colors.gold,
      card: colors.darkgrey,
      primary: colors.gold,
      notification: colors.gold,
      background: colors.lightblack,
    },
  };

  return (
    <TranslationProvider>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <NavigationContainer theme={navigationTheme}>
          <Menu />
        </NavigationContainer>
      </ThemeProvider>
    </TranslationProvider>
  );
};
