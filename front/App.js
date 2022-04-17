import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import configureStore from './src/store/configureStore';
import {loadPhones} from './src/store/phones';
import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';
import {Provider} from 'react-redux';

const store = configureStore();

export default function App() {
  useEffect(() => {
    store.dispatch(loadPhones());
  }, [store]);
  return (
    <Provider store={store}>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
    </Provider>
  );
}
