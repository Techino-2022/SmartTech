import React, {useContext, useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Menu from './Menu';
import {useData, ThemeProvider, TranslationProvider} from '../hooks';

import ThemeContext from '../config/context';

export default () => {
  const {theme, setTheme} = useData();
  const them = useContext(ThemeContext);
  const {colors} = them.theme;

  /* set the status bar light for dark theme */
  StatusBar.setBackgroundColor('#000000');
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
      border: colors.text,
      text: colors.text,
      card: colors.card,
      primary: colors.primary,
      notification: colors.primary,
      background: colors.background,
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
