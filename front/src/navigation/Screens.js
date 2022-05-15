import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register} from '../screens';
import {useTranslation} from '../hooks';
import ArticleScreen from '../screens/ArticleScreen';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PhoneArea"
        component={Home}
        options={{title: 'Phone Area'}}
      />

      <Stack.Screen name="Phone" component={Components} />

      <Stack.Screen
        name="ArticleNavigator"
        component={ArticleNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ArticleNavigator = () => (
  <Stack.Navigator initialRouteName="Articles">
    <Stack.Screen
      name="Articles"
      component={Articles}
      options={{title: 'Artciles'}}
    />
    <Stack.Screen
      name="ArticleScreen"
      component={ArticleScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
