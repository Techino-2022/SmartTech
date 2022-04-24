import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';
import {loadPhones} from './src/store/phones';
import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';
import {dark} from './src/config/colors';
import ThemeContext from './src/config/context';
import {LogBox} from 'react-native';

const store = configureStore();

LogBox.ignoreLogs(['SerializableStateInvariantMiddleware']);

export default function App() {
  const [theme, setTheme] = useState(dark);
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <DataProvider>
          <AppNavigation />
        </DataProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
