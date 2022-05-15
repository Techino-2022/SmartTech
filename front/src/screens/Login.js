import React, {useContext, useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useTheme, useTranslation} from '../hooks';
import {Block, Button, Input, Image, Text} from '../components';

import {getUserData, login} from '../store/user';
import {useDispatch} from 'react-redux';
import ActivityIndicator from '../components/ActivityIndicator';
import ThemeContext from '../config/context';

const isAndroid = Platform.OS === 'android';

const Login = () => {
  const context = useContext(ThemeContext);
  const {colors, gradient} = context.theme;
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {assets, gradients, sizes} = useTheme();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Username'),
    password: Yup.string().required().min(8).label('Password'),
  });

  const handleSubmit = async ({username, password}) => {
    setLoading(true);
    await dispatch(
      login({
        username: username,
        password: password,
      }),
    );
    await dispatch(getUserData());
    setLoading(false);
    navigation.dispatch(StackActions.replace('Profile'));
  };

  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>
        <Block flex={0} style={{zIndex: 0}}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            marginTop={6}
            radius={sizes.cardRadius}
            source={
              context.theme.name === 'dark'
                ? require('../assets/images/background.png')
                : require('../assets/images/background1.png')
            }
            height={sizes.height * 0.2}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p white marginLeft={sizes.s}>
                {t('common.goBack')}
              </Text>
            </Button>

            <Text h3 center color={colors.card}>
              Login
            </Text>
          </Image>
        </Block>
        {/* login form */}
        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, errors, values}) => (
            <>
              {loading && <ActivityIndicator visible={true} />}
              <Block
                keyboard
                behavior={!isAndroid ? 'padding' : 'height'}
                marginTop={-(sizes.height * 0.01 - sizes.l)}>
                <Block
                  flex={0}
                  radius={sizes.sm}
                  marginHorizontal="8%"
                  shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
                >
                  <Block
                    blur
                    flex={0}
                    intensity={90}
                    radius={sizes.sm}
                    overflow="hidden"
                    justify="space-evenly"
                    paddingVertical={sizes.sm}>
                    <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginBottom={sizes.sm}
                      paddingHorizontal={sizes.xxl}></Block>
                    {/* form inputs */}

                    <Block paddingHorizontal={sizes.sm}>
                      <Input
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        color={colors.subTitle}
                        label="Username"
                        placeholder="Enter your username"
                        success={Boolean(values.username && !errors.username)}
                        danger={Boolean(values.username && errors.username)}
                        onChangeText={handleChange('username')}
                      />
                      {errors.username && (
                        <Text color="red">{errors.username}</Text>
                      )}
                      <Input
                        secureTextEntry
                        autoCapitalize="none"
                        color={colors.subTitle}
                        marginBottom={sizes.m}
                        label={t('common.password')}
                        placeholder={t('common.passwordPlaceholder')}
                        onChangeText={handleChange('password')}
                        success={Boolean(values.password && !errors.password)}
                        danger={Boolean(values.password && errors.password)}
                      />
                      {errors.password && (
                        <Text color="red">{errors.password}</Text>
                      )}
                    </Block>
                    <Button
                      onPress={handleSubmit}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      gradient={gradients[gradient.gr1]}>
                      <Text bold white transform="uppercase">
                        SIGN IN
                      </Text>
                    </Button>
                    <Button
                      secondary
                      outlined
                      shadow={!isAndroid}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      onPress={() => navigation.navigate('Register')}>
                      <Text bold color={colors.primary} transform="uppercase">
                        SIGN UP
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
            </>
          )}
        </Formik>
      </Block>
    </Block>
  );
};

export default Login;
